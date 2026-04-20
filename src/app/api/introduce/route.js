import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, city, curiosity, event, referral, formMode } = body;

    if (!name || !email || !city) {
      return NextResponse.json({ message: "Name, email, and city are required." }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      console.error("[introduce] Missing RESEND_API_KEY");
      return NextResponse.json({ message: "Email service not configured." }, { status: 500 });
    }

    // Build subject line
    const subject = event
      ? `Introduction — ${name} · Enquiry about ${event}`
      : referral
        ? `Introduction — ${name} · Referral`
        : `Introduction — ${name}`;

    // Build email body
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `City: ${city}`,
      curiosity ? `\nCuriosity: ${curiosity}` : "",
      event ? `\nEvent enquiry: ${event}` : "",
      referral ? `\nReferral: yes` : "",
      formMode === "full" ? `\nForm: Full portrait` : `\nForm: Short introduction`,
      `\n---\nSent from thehouseofclio.com`,
    ].filter(Boolean).join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "The House of Clio <noreply@thehouseofclio.com>",
        to: ["hello@thehouseofclio.com"],
        reply_to: email,
        subject,
        text: lines,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("[introduce] Resend error:", err);
      return NextResponse.json({ message: "Failed to send. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ message: "Received." }, { status: 200 });

  } catch (err) {
    console.error("[introduce] Error:", err);
    return NextResponse.json({ message: "Server error. Please try again." }, { status: 500 });
  }
}
