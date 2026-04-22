import { NextResponse } from "next/server";

async function createRecord(table, fields) {
  const token  = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;

  if (!token || !baseId) {
    throw new Error("Airtable not configured: missing AIRTABLE_TOKEN or AIRTABLE_BASE_ID");
  }

  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`;

  console.log(`[enquiry] POST ${url}`);
  console.log(`[enquiry] fields:`, JSON.stringify(fields));

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    // Airtable single-record create: { fields: { ... } }
    body: JSON.stringify({ fields }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error(`[enquiry] Airtable error (${table}) HTTP ${res.status}:`, JSON.stringify(data));
    throw new Error(data?.error?.message || `Airtable HTTP ${res.status}`);
  }

  console.log(`[enquiry] Record created in "${table}":`, data.id);
  return data;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { type } = body;

    console.log(`[enquiry] Received type="${type}"`);

    // ── Apply / introduce-yourself form ──────────────────────────────────────
    if (type === "apply") {
      await createRecord("The Circle", {
        Name:      body.name,
        Email:     body.email,
        City:      body.city      || "",
        Curiosity: body.curiosity || "",
        Source:    "Website",
        Status:    "Introduced",
      });
      return NextResponse.json({ success: true });
    }

    // ── Booking enquiry (variable-price formats: Paris, Dublin, Puglia) ──────
    if (type === "enquiry") {
      const person = await createRecord("The Circle", {
        Name:   body.name,
        Email:  body.email,
        Source: "Website",
        Status: "Introduced",
      });

      await createRecord("Gatherings", {
        Format:           body.formatName,
        "Format ID":      body.formatId,
        Person:           [person.id],
        Attending:        body.attending   || "Alone",
        "Payment Status": "Enquiry",
        ...(body.phone ? { Phone: String(body.phone) } : {}),
        ...(body.dietary && body.dietary.length > 0 ? { Dietary: body.dietary } : {}),
        ...(body.dietaryNotes ? { "Dietary Notes": body.dietaryNotes } : {}),
      });

      return NextResponse.json({ success: true });
    }

    // ── Contact form ─────────────────────────────────────────────────────────
    if (type === "contact") {
      await createRecord("The Circle", {
        Name:      body.name,
        Email:     body.email,
        Curiosity: body.message || "",
        Source:    "Contact form",
        Status:    "Introduced",
      });
      return NextResponse.json({ success: true });
    }

    console.warn(`[enquiry] Unknown type: "${type}"`);
    return NextResponse.json({ error: "Unknown type." }, { status: 400 });

  } catch (err) {
    console.error("[enquiry] Error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
