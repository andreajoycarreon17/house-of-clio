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

async function findExistingGathering(stripeSessionId) {
  const token  = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;

  if (!token || !baseId) return null;

  try {
    const formula = encodeURIComponent(`{Stripe Session} = "${stripeSessionId}"`);
    const res = await fetch(
      `https://api.airtable.com/v0/${baseId}/${encodeURIComponent("Gatherings")}?filterByFormula=${formula}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await res.json();
    if (res.ok && data.records && data.records.length > 0) {
      return data.records[0];
    }
  } catch (err) {
    console.error("[webhook] Error finding existing gathering:", err.message);
  }
  return null;
}

async function updateAirtableRecord(recordId, table, fields) {
  const token  = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;

  if (!token || !baseId) throw new Error("Airtable not configured");

  const res = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}/${recordId}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields }),
    }
  );
  const data = await res.json();
  if (!res.ok) {
    console.error(`[webhook] Airtable update error (${table}):`, JSON.stringify(data));
    throw new Error(data?.error?.message || "Airtable update error");
  }
  console.log(`[webhook] Airtable record updated in ${table}:`, data.id);
  return data;
}

export async function POST(req) {
  console.log("[webhook] ===== WEBHOOK RECEIVED =====");
  
  const stripe = getStripe();
  const body = await req.text();
  const sig  = req.headers.get("stripe-signature");

  console.log("[webhook] Signature present:", !!sig);
  console.log("[webhook] Webhook secret configured:", !!process.env.STRIPE_WEBHOOK_SECRET);

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    console.log("[webhook] ✅ Signature verified successfully");
  } catch (err) {
    console.error("[webhook] ❌ Signature verification failed:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  console.log("[webhook] Event type:", event.type);
  console.log("[webhook] Event ID:", event.id);

  // Handle payment state events
  const handledEvents = [
    "checkout.session.completed",
    "checkout.session.async_payment_failed",
    "checkout.session.expired",
    "payment_intent.payment_failed"
  ];

  if (handledEvents.includes(event.type)) {
    const session = event.data.object;
    const meta    = session.metadata || {};

    console.log("[webhook] 📦 Session ID:", session.id);
    console.log("[webhook] 📦 Metadata:", JSON.stringify(meta, null, 2));
    console.log("[webhook] 💰 Amount:", session.amount_total);

    // Determine payment status based on event type
    let paymentStatus = "";
    if (event.type === "checkout.session.completed") {
      paymentStatus = "Paid";
    } else if (event.type === "checkout.session.async_payment_failed" || 
               event.type === "payment_intent.payment_failed") {
      paymentStatus = "Failed";
    } else if (event.type === "checkout.session.expired") {
      paymentStatus = "Expired";
    }

    console.log(`[webhook] Processing ${event.type} → ${paymentStatus} for session ${session.id}`);

    try {
      // Check if gathering already exists (upsert logic)
      const existingGathering = await findExistingGathering(session.id);

      if (existingGathering) {
        // Update existing record with new payment status
        console.log(`[webhook] Updating existing gathering ${existingGathering.id}`);
        await updateAirtableRecord(existingGathering.id, "Gatherings", {
          "Payment Status": paymentStatus,
          Amount:           (session.amount_total || 0) / 100,
        });
      } else {
        // Create new records (person + gathering)
        console.log(`[webhook] Creating new records for ${meta.name}`);

        // 1. Create person record in The Circle (identity only — no booking details)
        const person = await airtablePost("The Circle", {
          Name:   meta.name,
          Email:  meta.email,
          Source: "Website",
          Status: "Active",
        });

        // 2. Create gathering record (booking details including dietary/phone)
        const gatheringFields = {
          Format:           meta.formatName,
          "Format ID":      meta.formatId,
          Person:           [person.id],
          Attending:        meta.attending       || "Alone",
          "Payment Status": paymentStatus,
          Amount:           (session.amount_total || 0) / 100,
          "Stripe Session": session.id,
          ...(meta.phone ? { Phone: String(meta.phone) } : {}),
          ...(meta.dietary && JSON.parse(meta.dietary).length > 0 ? { Dietary: JSON.parse(meta.dietary) } : {}),
          ...(meta.dietaryNotes ? { "Dietary Notes": meta.dietaryNotes } : {}),
        };

        await airtablePost("Gatherings", gatheringFields);
      }

      // 3. Send confirmation emails ONLY for successful payments
      if (paymentStatus === "Paid") {
        await sendEmails({
          name:       meta.name,
          email:      meta.email,
          formatName: meta.formatName,
          attending:  meta.attending,
          phone:      meta.phone,
          dietary:    meta.dietary ? JSON.parse(meta.dietary) : [],
          amount:     session.amount_total || 0,
        });
      }

      console.log(`[webhook] Successfully processed: ${meta.formatName} for ${meta.name} (${paymentStatus})`);
    } catch (err) {
      console.error("[webhook] ❌ Processing error:", err.message);
      console.error("[webhook] Error stack:", err.stack);
      // Return 200 so Stripe does not retry — log the error for manual review
      return NextResponse.json({ received: true, warning: err.message });
    }
  } else {
    console.log("[webhook] ℹ️ Unhandled event type:", event.type);
  }

  console.log("[webhook] ===== WEBHOOK COMPLETE =====");
  return NextResponse.json({ received: true });
}
