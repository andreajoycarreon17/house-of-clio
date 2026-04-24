import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { rateLimit } from "@/lib/rate-limit";

const limiter = rateLimit({ interval: 60_000, uniqueTokenPerInterval: 100 });

export async function POST(req) {
  // ── Rate limiting ──────────────────────────────────────────────────────────
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  try {
    await limiter.check(3, ip);
  } catch {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  // ── Parse + validate ───────────────────────────────────────────────────────
  let email;
  try {
    const body = await req.json();
    email = (body?.email || "").trim();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  // ── Env check ─────────────────────────────────────────────────────────────
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;
  const SERVER  = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!API_KEY || !LIST_ID || !SERVER) {
    console.error("[newsletter] Missing env vars:", {
      API_KEY: !!API_KEY,
      LIST_ID: !!LIST_ID,
      SERVER:  !!SERVER,
    });
    return NextResponse.json(
      { error: "Newsletter service not configured" },
      { status: 500 }
    );
  }

  // ── Mailchimp request ──────────────────────────────────────────────────────
  try {
    const url = `https://${SERVER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

    const mc = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Mailchimp REST API requires Basic auth: base64("anystring:apikey")
        Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        tags: ["newsletter", "website", "newsletter_signup"],
      }),
    });

    const data = await mc.json();

    if (mc.ok) {
      console.log("[newsletter] Subscribed:", email);
      return NextResponse.json({ ok: true });
    }

    // Already subscribed — treat as success so the UI can confirm
    if (data.title === "Member Exists") {
      console.log("[newsletter] Already subscribed:", email);
      return NextResponse.json({ ok: true, already: true });
    }

    console.error("[newsletter] Mailchimp error:", data.title, data.detail);
    return NextResponse.json(
      { error: data.detail || "Subscription failed" },
      { status: 400 }
    );
  } catch (err) {
    console.error("[newsletter] Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
