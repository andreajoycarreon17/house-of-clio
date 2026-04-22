import { NextResponse } from "next/server";
import Stripe from "stripe";
import nodemailer from "nodemailer";

// Stripe client — lazy so env var is read at request time
function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-04-10",
  });
}

async function airtablePost(table, fields) {
  // Read env vars inside the function — not at module load time
  const token  = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;

  if (!token || !baseId) throw new Error("Airtable not configured");

  const res = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields }),
    }
  );
  const data = await res.json();
  if (!res.ok) {
    console.error(`[webhook] Airtable error (${table}):`, JSON.stringify(data));
    throw new Error(data?.error?.message || "Airtable error");
  }
  console.log(`[webhook] Airtable record created in ${table}:`, data.id);
  return data;
}

async function sendEmails({ name, email, formatName, attending, phone, dietary, amount }) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn("[webhook] SMTP not configured — skipping confirmation emails");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 465,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  // Guest confirmation
  await transporter.sendMail({
    from: `"The House of Clio" <gigi@thehouseofclio.com>`,
    to: email,
    subject: `Your place at ${formatName}`,
    text: [
      `${name},`,
      ``,
      `Your place is confirmed.`,
      ``,
      `${formatName}`,
      ``,
      `You will receive a portrait of the room before you arrive.`,
      ``,
      `The House of Clio`,
      `London`,
    ].join("\n"),
  });

  // Host notification
  await transporter.sendMail({
    from: `"System" <system@thehouseofclio.com>`,
    to: "gigi@thehouseofclio.com",
    subject: `New booking: ${formatName} from ${name}`,
    text: [
      `Name:      ${name}`,
      `Email:     ${email}`,
      `Phone:     ${phone || "—"}`,
      `Format:    ${formatName}`,
      `Attending: ${attending || "Alone"}`,
      `Dietary:   ${Array.isArray(dietary) ? dietary.join(", ") || "None" : dietary || "None"}`,
      `Amount:    £${(amount / 100).toFixed(2)}`,
    ].join("\n"),
  });
}

export async function POST(req) {
  const stripe = getStripe();
  const body = await req.text();
  const sig  = req.headers.get("stripe-signature");

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("[webhook] Signature verification failed:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const meta    = session.metadata || {};

    try {
      // 1. Create person record in The Circle (identity only — no booking details)
      const person = await airtablePost("The Circle", {
        Name:   meta.name,
        Email:  meta.email,
        Source: "Website",
        Status: "Active",
      });

      // 2. Create gathering record (booking details including dietary/phone)
      await airtablePost("Gatherings", {
        Format:           meta.formatName,
        "Format ID":      meta.formatId,
        Person:           [person.id],
        Attending:        meta.attending       || "Alone",
        "Payment Status": "Paid",
        Amount:           (session.amount_total || 0) / 100,
        "Stripe Session": session.id,
        ...(meta.phone ? { Phone: String(meta.phone) } : {}),
        ...(meta.dietary && JSON.parse(meta.dietary).length > 0 ? { Dietary: JSON.parse(meta.dietary) } : {}),
        ...(meta.dietaryNotes ? { "Dietary Notes": meta.dietaryNotes } : {}),
      });

      // 3. Send confirmation emails
      await sendEmails({
        name:       meta.name,
        email:      meta.email,
        formatName: meta.formatName,
        attending:  meta.attending,
        phone:      meta.phone,
        dietary:    meta.dietary ? JSON.parse(meta.dietary) : [],
        amount:     session.amount_total || 0,
      });

      console.log(`[webhook] Processed: ${meta.formatName} for ${meta.name}`);
    } catch (err) {
      console.error("[webhook] Processing error:", err.message);
      // Return 200 so Stripe does not retry — log the error for manual review
      return NextResponse.json({ received: true, warning: err.message });
    }
  }

  return NextResponse.json({ received: true });
}
