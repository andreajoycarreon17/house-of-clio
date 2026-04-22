// src/app/api/checkout/route.js
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import nodemailer from "nodemailer";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-04-10",
  });
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thehouseofclio.com";

async function writeToAirtable({ formatId, formatName, name, email, phone, dietary, dietaryNotes, attending }) {
  const token  = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;

  console.log("[checkout] writeToAirtable called with:", { formatId, formatName, name, email, phone, dietary, attending });
  console.log("[checkout] Env check: token exists?", !!token, "baseId exists?", !!baseId);

  if (!token || !baseId) {
    console.warn("[checkout] Airtable not configured — skipping CRM write");
    return;
  }

  try {
    const circleUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent("The Circle")}`;
    const circleFields = {
      Name:   name,
      Email:  email,
      Source: "Website",
      Status: "Active",
    };

    console.log("[checkout] POST", circleUrl);
    console.log("[checkout] Circle fields:", JSON.stringify(circleFields));

    // 1. Create person in The Circle
    const personRes = await fetch(circleUrl, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ fields: circleFields }),
    });

    const person = await personRes.json();
    console.log("[checkout] Circle response HTTP", personRes.status);

    if (!personRes.ok) {
      console.error("[checkout] Airtable Circle error:", JSON.stringify(person));
      return;
    }
    console.log("[checkout] Airtable Circle record created:", person.id);

    const gatherUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent("Gatherings")}`;
    const gatherFields = {
      Format:           formatName,
      "Format ID":      formatId,
      Person:           [person.id],
      Attending:        attending  || "Alone",
      "Payment Status": "Paid",
      // Booking-specific personal details live here, not in The Circle
      ...(phone ? { Phone: String(phone) } : {}),
      ...(dietary && dietary.length > 0 ? { Dietary: dietary } : {}),
      ...(dietaryNotes ? { "Dietary Notes": dietaryNotes } : {}),
    };

    console.log("[checkout] POST", gatherUrl);
    console.log("[checkout] Gatherings fields:", JSON.stringify(gatherFields));

    // 2. Create gathering record
    const gatherRes = await fetch(gatherUrl, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ fields: gatherFields }),
    });

    const gather = await gatherRes.json();
    console.log("[checkout] Gatherings response HTTP", gatherRes.status);

    if (!gatherRes.ok) {
      console.error("[checkout] Airtable Gatherings error:", JSON.stringify(gather));
    } else {
      console.log("[checkout] Airtable Gatherings record created:", gather.id);
    }
  } catch (err) {
    console.error("[checkout] Airtable write failed:", err.message);
  }
}

async function sendConfirmationEmail({ name, email, formatName, attending, phone, dietary }) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn("[checkout] SMTP not configured — skipping confirmation email");
    return;
  }
  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 465,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    // Guest confirmation
    await transporter.sendMail({
      from:    `"The House of Clio" <gigi@thehouseofclio.com>`,
      to:      email,
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
      from:    `"System" <system@thehouseofclio.com>`,
      to:      "gigi@thehouseofclio.com",
      subject: `New booking: ${formatName} from ${name}`,
      text: [
        `Name:      ${name}`,
        `Email:     ${email}`,
        `Phone:     ${phone || "—"}`,
        `Format:    ${formatName}`,
        `Attending: ${attending || "Alone"}`,
        `Dietary:   ${Array.isArray(dietary) ? dietary.join(", ") || "None" : "None"}`,
      ].join("\n"),
    });

    console.log("[checkout] Confirmation emails sent to", email);
  } catch (err) {
    console.error("[checkout] Email send failed:", err.message);
  }
}

export async function POST(req) {
  try {
    const stripe = getStripe();
    const body = await req.json();
    const {
      formatId,
      formatName,
      formatSlug,
      priceInPence,
      name,
      email,
      phone,
      dietary,
      dietaryNotes,
      attending,
      guestName,
      guestEmail,
      guestPhone,
      guestDietary,
      guestDietaryNotes
    } = body;

    const quantity = attending === "With a guest" ? 2 : 1;

    // Write to Airtable and send email BEFORE returning the Stripe URL.
    // If we do it after, the serverless function can be killed the moment
    // the browser receives the URL and navigates away to Stripe.
    await writeToAirtable({ formatId, formatName, name, email, phone, dietary, dietaryNotes, attending });
    await sendConfirmationEmail({ name, email, formatName, attending, phone, dietary });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [{
        price_data: {
          currency: "gbp",
          product_data: {
            name: `The House of Clio: ${formatName}`,
          },
          unit_amount: priceInPence,
        },
        quantity,
      }],
      mode: "payment",
      success_url: `${SITE_URL}/book?confirmed=true&format=${formatSlug}`,
      cancel_url: `${SITE_URL}/book?format=${formatSlug}`,
      metadata: {
        formatId,
        formatName,
        name,
        email,
        phone,
        dietary: JSON.stringify(dietary),
        dietaryNotes: dietaryNotes || "",
        attending,
        guestName: guestName || "",
        guestEmail: guestEmail || "",
        guestPhone: guestPhone || "",
        guestDietary: guestDietary ? JSON.stringify(guestDietary) : "",
        guestDietaryNotes: guestDietaryNotes || "",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
