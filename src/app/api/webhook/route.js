import { NextResponse } from "next/server";
import Stripe from "stripe";
import nodemailer from "nodemailer";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-04-10",
  });
}

async function airtablePost(table, fields) {
  const token  = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;

  console.log(`[webhook] airtablePost → table: "${table}"`);
  console.log(`[webhook] AIRTABLE_TOKEN set: ${!!token} | AIRTABLE_BASE_ID set: ${!!baseId}`);
  console.log(`[webhook] fields: ${JSON.stringify(fields)}`);

  if (!token || !baseId) throw new Error("Airtable not configured — missing TOKEN or BASE_ID");

  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`;
  console.log(`[webhook] POST ${url}`);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields }),
  });

  const data = await res.json();
  console.log(`[webhook] Airtable HTTP ${res.status} for "${table}": ${JSON.stringify(data)}`);

  if (!res.ok) {
    throw new Error(
      `Airtable "${table}" failed (${res.status}): ${data?.error?.type} — ${data?.error?.message}`
    );
  }

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
  console.log("[webhook] POST received");

  const stripe = getStripe();
  const body = await req.text();
  const sig  = req.headers.get("stripe-signature");

  console.log(`[webhook] stripe-signature present: ${!!sig}`);
  console.log(`[webhook] STRIPE_WEBHOOK_SECRET set: ${!!process.env.STRIPE_WEBHOOK_SECRET}`);

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    console.log(`[webhook] Event verified: ${event.type} | id: ${event.id}`);
  } catch (err) {
    console.error("[webhook] Signature verification failed:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const meta    = session.metadata || {};

    console.log(`[webhook] session.id: ${session.id}`);
    console.log(`[webhook] session.amount_total: ${session.amount_total}`);
    console.log(`[webhook] session.payment_status: ${session.payment_status}`);
    console.log(`[webhook] metadata: ${JSON.stringify(meta)}`);

    try {
      // 1. Create person in The Circle
      const person = await airtablePost("The Circle", {
        Name:   meta.name,
        Email:  meta.email,
        Source: "Website",
        Status: "Active",
      });
      console.log(`[webhook] Circle record created: ${person.id}`);

      // 2. Create gathering record
      await airtablePost("Gatherings", {
        Format:           meta.formatName,
        "Format ID":      meta.formatId,
        Person:           [person.id],
        Attending:        meta.attending || "Alone",
        "Payment Status": "Paid",
        Amount:           (session.amount_total || 0) / 100,
        "Stripe Session": session.id,
        ...(meta.phone ? { Phone: String(meta.phone) } : {}),
        ...(meta.dietary && JSON.parse(meta.dietary).length > 0
          ? { Dietary: JSON.parse(meta.dietary) }
          : {}),
        ...(meta.dietaryNotes ? { "Dietary Notes": meta.dietaryNotes } : {}),
      });
      console.log(`[webhook] Gatherings record created`);

      // 3. Send emails
      await sendEmails({
        name:       meta.name,
        email:      meta.email,
        formatName: meta.formatName,
        attending:  meta.attending,
        phone:      meta.phone,
        dietary:    meta.dietary ? JSON.parse(meta.dietary) : [],
        amount:     session.amount_total || 0,
      });

      console.log(`[webhook] ✓ Fully processed: ${meta.formatName} for ${meta.name}`);
    } catch (err) {
      console.error("[webhook] Processing error:", err.message);
      return NextResponse.json({ received: true, warning: err.message });
    }
  } else {
    console.log(`[webhook] Ignoring event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
