import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

async function saveToAirtable(fields) {
  const token  = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;

  console.log("[introduce] saveToAirtable called");
  console.log("[introduce] Env check: token exists?", !!token, "baseId exists?", !!baseId);

  if (!token || !baseId) {
    console.warn("[introduce] Airtable not configured — skipping CRM write");
    return;
  }

  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent("The Circle")}`;
  console.log("[introduce] POST", url);
  console.log("[introduce] fields:", JSON.stringify(fields));

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields }),
    });
    const data = await res.json();
    console.log("[introduce] Airtable response HTTP", res.status, JSON.stringify(data));
    if (!res.ok) {
      console.error("[introduce] Airtable error:", JSON.stringify(data));
    } else {
      console.log("[introduce] Airtable record created:", data.id);
    }
  } catch (err) {
    console.error("[introduce] Airtable write failed:", err.message);
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, city, curiosity, event, referral, formMode } = body;

    if (!name || !email || !city) {
      return NextResponse.json({ message: "Name, email, and city are required." }, { status: 400 });
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.error("[introduce] Missing SMTP config");
      return NextResponse.json({ message: "Email service not configured." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    // Build subject line
    const subject = event
      ? `Introduction — ${name} · Enquiry about ${event}`
      : referral
        ? `Introduction — ${name} · Referral`
        : `Introduction — ${name}`;

    // Build email body
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `City: ${city}`,
      curiosity ? `\nCuriosity: ${curiosity}` : "",
      event ? `\nEvent enquiry: ${event}` : "",
      referral ? `\nReferral: yes` : "",
      formMode === "full" ? `\nForm: Full portrait` : `\nForm: Short introduction`,
      `\n---\nSent from thehouseofclio.com`,
    ].filter(Boolean).join("\n");

    // Save to Airtable (non-blocking — email still sends even if this fails)
    await saveToAirtable({
      Name:     name,
      Email:    email,
      City:     city      || "",
      Curiosity: curiosity || "",
      Source:   "Website",
      Status:   "Introduced",
    });

    // Host notification
    await transporter.sendMail({
      from: `"System" <system@thehouseofclio.com>`,
      to: "gigi@thehouseofclio.com",
      replyTo: `"${name}" <${email}>`,
      subject,
      text,
    });

    // Submitter confirmation
    await transporter.sendMail({
      from: `"The House of Clio" <gigi@thehouseofclio.com>`,
      to: email,
      subject: `We have received your introduction`,
      text: [
        `${name},`,
        ``,
        `Thank you for introducing yourself to The House of Clio.`,
        ``,
        `We read every introduction carefully. If your curiosity aligns with the room, we will be in touch.`,
        ``,
        `The House of Clio`,
        `London`,
      ].join("\n"),
    });

    return NextResponse.json({ message: "Received." }, { status: 200 });

  } catch (err) {
    console.error("[introduce] Error:", err);
    return NextResponse.json({ message: "Server error. Please try again." }, { status: 500 });
  }
}
