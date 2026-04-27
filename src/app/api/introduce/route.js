import { NextResponse } from "next/server";
import { headers } from "next/headers";
import nodemailer from "nodemailer";
import { rateLimit } from "@/lib/rate-limit";

const limiter = rateLimit({ interval: 60_000, uniqueTokenPerInterval: 100 });

/** Strip HTML tags and truncate */
const clean = (s, max = 2000) =>
  (s || "").replace(/<[^>]*>/g, "").trim().substring(0, max);

export async function POST(request) {
  // ── Rate limiting ──────────────────────────────────────────────────────────
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  try {
    await limiter.check(5, ip);
  } catch {
    return NextResponse.json({ message: "Too many requests" }, { status: 429 });
  }

  // ── Parse body ─────────────────────────────────────────────────────────────
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
  }

  const {
    // Short form
    name,
    email,
    city,
    curiosity,
    referral,
    event,
    formMode,
    utm,         // UTM attribution data from client localStorage

    // Full form extras
    preferredName,
    linkedin,
    instagram,
    subjects,
    topic,
    bestPeople,
    recentConversation,
    shapingExperience,
    perspectivePlace,
    unexpectedFact,
    drewYouHere,
    brilliantStrangers,
    yourPerspectives,
    dinnerInvites,
    threeSubjects,
    threeThemes,
    unusualFact,
    wishQuestion,
    hearAboutUs,
    referredBy,
  } = body;

  // ── Validation ─────────────────────────────────────────────────────────────
  if (!name || !email) {
    return NextResponse.json(
      { message: "Name and email are required." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const ua = headersList.get("user-agent") ?? "";

  // ── Airtable ───────────────────────────────────────────────────────────────
  const token  = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;

  if (token && baseId) {
    // Core fields always written
    const fields = {
      Name:     clean(name),
      Email:    clean(email),
      City:     clean(city),
      Source:   "Website",
      Status:   "Introduced",

      // Map apply-page field names to Airtable column names
      "What Fascinates":  clean(curiosity),
      "How Found Us":     clean(typeof referral === "string" ? referral : hearAboutUs),
      "Referred By":      clean(referredBy),
      "Event Enquiry":    clean(event),
      "Form Mode":        formMode === "full" ? "Full Portrait" : "Short Introduction",

      // UTM attribution
      ...(utm?.utm_source   ? { "UTM Source":   String(utm.utm_source).substring(0, 200) }   : {}),
      ...(utm?.utm_medium   ? { "UTM Medium":   String(utm.utm_medium).substring(0, 200) }   : {}),
      ...(utm?.utm_campaign ? { "UTM Campaign": String(utm.utm_campaign).substring(0, 200) } : {}),
      ...(utm?.referrer     ? { "Referrer":     String(utm.referrer).substring(0, 500) }     : {}),

      // Metadata
      "IP Address":   ip,
      "User Agent":   ua.substring(0, 200),
      "Submitted At": new Date().toISOString(),
    };

    // Full-form extras — only include when present
    if (formMode === "full") {
      Object.assign(fields, {
        "Preferred Name":        clean(preferredName),
        "LinkedIn":              clean(linkedin),
        "Instagram":             clean(instagram),
        "Subjects":              clean(subjects),
        "Topic":                 clean(topic),
        "Best People":           clean(bestPeople),
        "Recent Conversation":   clean(recentConversation),
        "Shaping Experience":    clean(shapingExperience),
        "Perspective Place":     clean(perspectivePlace),
        "Unexpected Fact":       clean(unexpectedFact),
        "Drew You Here":         clean(drewYouHere),
        "Brilliant Strangers":   clean(brilliantStrangers),
        "Your Perspectives":     clean(yourPerspectives),
        "Dinner Invites":        clean(dinnerInvites),
        "Three Subjects":        clean(threeSubjects),
        "Three Themes":          clean(threeThemes),
        "Unusual Fact":          clean(unusualFact),
        "Wish Question":         clean(wishQuestion),
      });
    }

    // Remove empty strings so Airtable doesn't complain about blank fields
    for (const key of Object.keys(fields)) {
      if (fields[key] === "") delete fields[key];
    }

    try {
      const aRes = await fetch(
        `https://api.airtable.com/v0/${baseId}/${encodeURIComponent("The Circle")}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fields }),
        }
      );
      const aData = await aRes.json();
      if (!aRes.ok) {
        console.error("[introduce] Airtable error:", JSON.stringify(aData));
      } else {
        console.log("[introduce] Airtable record created:", aData.id);
      }
    } catch (err) {
      console.error("[introduce] Airtable write failed:", err.message);
      // Non-fatal — continue to send emails
    }
  } else {
    console.warn("[introduce] Airtable not configured — skipping CRM write");
  }

  // ── Slack notification (fire-and-forget) ──────────────────────────────────
  if (process.env.SLACK_WEBHOOK_URL) {
    const slackText = [
      `*New introduction*`,
      `${clean(name)} (${clean(email)})`,
      city     ? `City: ${clean(city)}`                              : null,
      curiosity ? `Curious: ${clean(curiosity, 300)}`               : null,
      event    ? `Event: ${clean(event)}`                           : null,
      formMode === "full" ? `Form: Full Portrait`                   : null,
    ]
      .filter(Boolean)
      .join("\n");

    fetch(process.env.SLACK_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: slackText }),
    }).catch(() => {});
  }

  // ── Emails ─────────────────────────────────────────────────────────────────
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("[introduce] Missing SMTP config");
    // Still return 200 — Airtable write succeeded
    return NextResponse.json({ message: "Received." }, { status: 200 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const subject = event
      ? `Introduction — ${clean(name)} · Enquiry about ${clean(event)}`
      : referral === true
        ? `Introduction — ${clean(name)} · Referral`
        : `Introduction — ${clean(name)}`;

    const hostText = [
      `Name:    ${clean(name)}`,
      `Email:   ${clean(email)}`,
      `City:    ${clean(city)}`,
      curiosity  ? `\nCuriosity: ${clean(curiosity)}`              : "",
      event      ? `\nEvent enquiry: ${clean(event)}`              : "",
      referral   ? `\nReferral: ${typeof referral === "string" ? clean(referral) : "yes"}` : "",
      formMode === "full" ? `\nForm: Full Portrait`                : `\nForm: Short Introduction`,
      `\n---\nSent from thehouseofclio.com`,
      `IP: ${ip}`,
    ]
      .filter(Boolean)
      .join("\n");

    // Host notification
    await transporter.sendMail({
      from:    `"System" <system@thehouseofclio.com>`,
      to:      "gigi@thehouseofclio.com",
      replyTo: `"${clean(name)}" <${clean(email)}>`,
      subject,
      text:    hostText,
    });

    // Submitter confirmation
    await transporter.sendMail({
      from:    `"The House of Clio" <gigi@thehouseofclio.com>`,
      to:      clean(email),
      subject: `We have received your introduction`,
      text: [
        `${clean(name)},`,
        ``,
        `Thank you for introducing yourself to The House of Clio.`,
        ``,
        `We read every introduction carefully. If your curiosity aligns with the room, we will be in touch.`,
        ``,
        `The House of Clio`,
        `London`,
      ].join("\n"),
    });
  } catch (err) {
    console.error("[introduce] Email error:", err.message);
    // Airtable already saved — return 200 so the user isn't shown an error
  }

  return NextResponse.json({ message: "Received." }, { status: 200 });
}
