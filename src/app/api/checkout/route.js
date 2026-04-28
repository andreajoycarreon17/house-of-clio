// src/app/api/checkout/route.js
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-04-10",
  });
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thehouseofclio.com";

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
      guestDietaryNotes,
    } = body;

    const quantity = attending === "With a guest" ? 2 : 1;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: `The House of Clio: ${formatName}`,
            },
            unit_amount: priceInPence,
          },
          quantity,
        },
      ],
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
    console.error("[checkout] Stripe error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
