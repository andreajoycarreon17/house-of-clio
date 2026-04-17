import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const email = (body?.email || "").trim();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ message: "Valid email required." }, { status: 400 });
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const SERVER  = process.env.MAILCHIMP_SERVER_PREFIX;

    if (!API_KEY || !LIST_ID || !SERVER) {
      console.error("[newsletter] Missing env vars:", { API_KEY: !!API_KEY, LIST_ID: !!LIST_ID, SERVER: !!SERVER });
      return NextResponse.json({ message: "Newsletter service not configured." }, { status: 500 });
    }

    const url = `https://${SERVER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

    const mc = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        tags: ["newsletter_signup"],
      }),
    });

    const data = await mc.json();

    if (mc.ok) {
      return NextResponse.json({ message: "You are on the list." }, { status: 200 });
    }

    if (data.title === "Member Exists") {
      return NextResponse.json({ message: "Already subscribed." }, { status: 400 });
    }

    return NextResponse.json(
      { message: data.detail || "Something went wrong." },
      { status: mc.status }
    );

  } catch (err) {
    console.error("[newsletter] Error:", err);
    return NextResponse.json({ message: "Server error. Please try again." }, { status: 500 });
  }
}
