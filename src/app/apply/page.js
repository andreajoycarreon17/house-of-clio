"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { useSiteChrome } from "@/components/layout/site-context";
import { CW, FAQ_DATA, FOUNDERS } from "@/data/formats";
import { getHref } from "@/lib/routes";
import { BTN, Dv, F, GoldLine, IMG, ImgPlace, Lbl, MarkLayer, Mx, Orb, PersonSilhouette, RealImg, Rv, Sec, T, TX, CI, CM } from "@/components/shared";
import EditorialImage from "@/components/EditorialImage";
import { BRAND_AKAN } from "@/lib/brand";
import { getUTMData } from "@/lib/intelligence";

// Slug → readable event label
const EVENT_LABELS = {
  "the-first-house-2-june":          "The First House, 2 June",
  "the-evening-14-june":             "The Evening, 14 June",
  "the-supper-lecture-12-july":      "The Supper Lecture, 12 July",
  "city-escape-paris-september":     "City Escape to Paris, September",
  "city-escape-dublin-october":      "City Escape to Dublin, October",
  "grand-journey-puglia-october":    "The Crossing in Puglia, October",
  "the-annual-house-6-december":     "The Annual House, 6 December",
  "the-returning-table":             "The Returning Table",
  "the-walk":                        "The Walk",
  "the-distance-day":                "The Distance Day",
  "the-culture-evening":             "The Culture Evening",
  "the-ride":                        "The Ride",
  "the-private-house":               "The Private House",
  // legacy slugs from book/page.js
  "the-first-house":                 "The First House",
  "the-evening":                     "The Evening",
  "the-supper-lecture":              "The Supper Lecture",
  "city-escapes":                    "City Escape",
  "grand-journeys":                  "Grand Journey",
  "the-annual-house":                "The Annual House",
  "recurring":                       "a recurring format",
};

function ApplyForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const eventSlug = searchParams.get("event") || "";
  const isReferral = searchParams.get("referral") === "true";
  const eventLabel = EVENT_LABELS[eventSlug] || (eventSlug ? eventSlug.replace(/-/g, " ") : null);

  const { hp, setHov, mouse, ld, trackInteraction } = useSiteChrome();
  const go = (target) => router.push(getHref(target));
  const [submitted, setSubmitted] = useState(false);

  // Draft save — restore from localStorage on mount
  const DRAFT_KEY = "clio_apply_draft";
  const [formData, setFormData] = useState(() => {
    if (typeof window === "undefined") return { name: "", email: "", city: "", curiosity: "", referral: "" };
    try {
      const saved = JSON.parse(localStorage.getItem(DRAFT_KEY) || "null");
      return saved || { name: "", email: "", city: "", curiosity: "", referral: "" };
    } catch { return { name: "", email: "", city: "", curiosity: "", referral: "" }; }
  });
  const [formErrors, setFormErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formMode, setFormMode] = useState("short");
  const [checks, setChecks] = useState([false, false, false, false, false]);
  const toggleCheck = (i) => setChecks((prev) => { const next = [...prev]; next[i] = !next[i]; return next; });

  // Confidence message — derived from formData, re-computes on every render
  const filledCount = [formData.name, formData.email, formData.city, formData.curiosity]
    .filter((v) => v && v.trim().length > 0).length;
  const confidenceMessage =
    filledCount === 4 ? "Strong introduction. A person will read every word." :
    filledCount === 3 ? "Almost there. Add one more detail." :
    filledCount >= 1 ? "Keep going. The more you share, the better the room." :
    "A person reads every word.";

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Please enter your name";
    if (!formData.email.trim()) errors.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Please enter a valid email";
    if (!formData.city.trim()) errors.city = "Please enter your city";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const updateField = (field, value) => {
    setFormData((prev) => {
      const next = { ...prev, [field]: value };
      // Auto-save draft (exclude honeypot)
      try {
        const { _hp, ...saveable } = next;
        localStorage.setItem("clio_apply_draft", JSON.stringify(saveable));
      } catch { }
      return next;
    });
    if (formErrors[field]) {
      setFormErrors((prev) => { const next = { ...prev }; delete next[field]; return next; });
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    // Honeypot — if filled, silently discard (bot)
    if (formData._hp) {
      router.push("/apply/received");
      return;
    }

    trackInteraction("form_submit", formMode);
    setSending(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/introduce", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          event: eventSlug || null,
          referral: isReferral,
          formMode,
          utm: getUTMData(),
        }),
      });

      if (res.ok) {
        // Clear draft on successful submission
        try { localStorage.removeItem("clio_apply_draft"); } catch { }
        router.push("/apply/received");
        return;
      }

      const data = await res.json().catch(() => ({}));

      if (res.status === 429) {
        setSubmitError("Please wait a moment before trying again.");
        return;
      }

      setSubmitError(data.message || "Something went wrong. Write to gigi@thehouseofclio.com directly.");
    } catch {
      setSubmitError("Something went wrong. Write to gigi@thehouseofclio.com directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Event/referral context banner */}
      {(eventLabel || isReferral) && (
        <div style={{ background: `linear-gradient(90deg,${T.copper}15,${T.rose}08,transparent)`, borderBottom: `1px solid ${T.rose}20`, padding: "14px clamp(24px,5vw,72px)" }}>
          <p style={{ fontFamily: F.body, fontSize: 12, fontWeight: 400, letterSpacing: ".06em", color: T.rose, textAlign: "center" }}>
            {isReferral && !eventLabel
              ? "Introducing someone to the House"
              : `Enquiry about ${eventLabel}`}
          </p>
        </div>
      )}
      {submitted ?
        <Sec bg={T.offW}>
          <div style={{ height: 3, background: `linear-gradient(90deg,${T.rose},${T.gold},rgba(201,149,108,.08))`, position: "absolute", top: 0, left: 0, right: 0 }} />
          <Mx w={560}><Rv>
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <CI size={80} variant="light" />
              <div style={{ margin: "28px 0" }}><Lbl color="rgba(46,18,64,.35)">Received</Lbl></div>
              <h2 style={{ fontFamily: F.display, fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 400, lineHeight: .96, color: TX.onLight, marginBottom: 24 }}>The House has<br /><em style={{ color: T.rose, fontStyle: "italic" }}>received you.</em></h2>
              <Dv w="48px" m="0 auto 28px" />
              <p style={{ fontFamily: F.body, fontSize: 16, fontWeight: 400, lineHeight: 2.2, color: TX.onLight, maxWidth: "60ch", margin: "0 auto 40px" }}>A person will read what you have written. We reply within seventy two hours. If there is alignment, we arrange a conversation. If there is not, we say so directly.</p>
              <div style={{ maxWidth: 400, margin: "0 auto", textAlign: "left" }}>
                {[
                  { day: "First", what: "A person reads your words." },
                  { day: "If there is alignment", what: "We reply with a genuine conversation." },
                  { day: "If the fit is mutual", what: "We invite you to the House." },
                ].map((s, i) => <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: i < 2 ? 20 : 0 }}>
                  <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".2em", color: T.rose, minWidth: 120, paddingTop: 2 }}>{s.day}</div>
                  <div style={{ fontFamily: F.body, fontSize: 14, fontWeight: 400, color: TX.onLightSub, lineHeight: 1.7 }}>{s.what}</div>
                </div>)}
              </div>
            </div>
          </Rv></Mx>
        </Sec>
        :
        <Sec bg={T.offW}>
          <div style={{ height: 3, background: `linear-gradient(90deg,${T.rose},${T.gold},rgba(201,149,108,.08))`, position: "absolute", top: 0, left: 0, right: 0 }} />
          <Mx w={formMode === "short" ? 600 : 820}>

            {/* Header */}
            <Rv><div style={{ textAlign: "center", marginBottom: formMode === "short" ? 48 : 36 }}>
              <CI size={72} variant="light" />
              <div style={{ margin: "20px 0" }}><Lbl color="rgba(46,18,64,.35)">{formMode === "short" ? "Introduce Yourself" : "The Full Portrait"}</Lbl></div>
              <h1 style={{ fontFamily: F.display, fontSize: "clamp(30px,4vw,46px)", fontWeight: 400, lineHeight: .96, color: TX.onLight, marginBottom: 20 }}>Tell us who you are.<br /><em style={{ color: T.rose, fontStyle: "italic" }}>The room will find you.</em></h1>
              <Dv w="48px" m="0 auto 20px" />
              <p style={{ fontFamily: F.body, fontSize: "clamp(13px,3vw,14px)", fontWeight: 400, lineHeight: 2, color: TX.onLightSub, maxWidth: "52ch", margin: "0 auto" }}>{formMode === "short" ? "A person reads every word. If there is alignment between who you are and the room we are composing, we will be in touch." : "The deeper portrait. Take your time. There is no rush and no word limit."}</p>
              <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 300, fontStyle: "italic", color: TX.onLightMuted, maxWidth: "48ch", margin: "12px auto 0" }}>These questions help us compose the right room around the right people.</p>
              <div style={{ maxWidth: 400, margin: "20px auto 0", padding: "16px 20px", background: "rgba(160,80,37,.03)", border: `1px solid rgba(160,80,37,.08)`, textAlign: "left" }}>
                {[
                  "We reply within seventy two hours.",
                  "Not everyone is accepted. That is what protects the room.",
                  "There is no membership fee. You pay only for the gatherings you attend.",
                  "Prices are shared after your introduction is accepted.",
                ].map((t, i) => <p key={i} style={{ fontFamily: F.body, fontSize: 11, fontWeight: 300, lineHeight: 1.9, color: TX.onLightMuted, marginBottom: i < 3 ? 4 : 0 }}>· {t}</p>)}
              </div>
            </div></Rv>

            <Rv delay={50}><div style={{ marginBottom: 32 }}>
              <EditorialImage
                src="/images/apply/a-place-at-the-table.jpg"
                alt={`A place held at ${BRAND_AKAN}. One chair. Candlelight.`}
                ratio="21/9"
              />
            </div></Rv>

            {(() => {
              const ls = { display: "block", fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".35em", textTransform: "uppercase", color: T.copper, marginBottom: 8, opacity: .8 };
              const is = { width: "100%", background: "none", border: "none", borderBottom: `1.5px solid rgba(160,80,37,.12)`, padding: "14px 0 12px", fontFamily: F.body, fontSize: 15, fontWeight: 400, color: T.bg, outline: "none", transition: "border-color .4s ease", position: "relative", zIndex: 10, pointerEvents: "auto" };
              const ts = { ...is, resize: "none", lineHeight: 1.8 };
              const fc = e => e.target.style.borderBottomColor = T.copper;
              const bl = e => e.target.style.borderBottomColor = "rgba(160,80,37,.12)";
              const errS = { fontFamily: F.body, fontSize: 11, fontWeight: 400, color: T.err, marginTop: 4 };

              const Card = ({ children, dark }) => <div style={{ background: dark ? T.bg : T.white, border: dark ? `1px solid rgba(201,149,108,.06)` : `1px solid rgba(160,80,37,.06)`, padding: "clamp(36px,4vw,48px)", marginBottom: 2, position: "relative", overflow: "hidden" }}>{!dark && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${T.copper}15,${T.gold}08,transparent)` }} />}{children}</div>;

              const SH = ({ n, title, sub }) => <div style={{ marginBottom: sub ? 32 : 28 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: sub ? 10 : 0 }}>
                  <div style={{ fontFamily: F.display, fontSize: "clamp(26px,4.5vw,32px)", fontWeight: 300, color: T.gold, opacity: .4, lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: F.display, fontSize: "clamp(17px,3.2vw,20px)", fontWeight: 400, fontStyle: "italic", color: T.bg }}>{title}</div>
                </div>
                {sub && <div style={{ paddingLeft: 46, fontFamily: F.body, fontSize: "clamp(11px,2.5vw,12px)", fontWeight: 400, color: TX.onLightSub, lineHeight: 1.7, fontStyle: "italic" }}>{sub}</div>}
                <div style={{ marginTop: 14, marginLeft: 46, width: 32, height: 1.5, background: `linear-gradient(90deg,${T.copper}30,transparent)` }} />
              </div>;

              return (<div>

                {formMode === "short" && <>
                  <div style={{backgroundColor:"#fff",border: `1px solid rgba(160,80,37,.06)`, padding: "clamp(36px,4vw,48px)", marginBottom: 2,}}>
                    {/* Honeypot — hidden from real users, catches bots */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      value={formData._hp || ""}
                      onChange={e => updateField("_hp", e.target.value)}
                      style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
                    />
                    <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 36px" }}>
                      <div style={{ marginBottom: 32 }}><label style={ls}>Name</label><input aria-label="Your name" value={formData.name} onChange={e => updateField("name", e.target.value)} placeholder="As you would introduce yourself" autoComplete="name" aria-required="true" id="clio-name" style={{ ...is, borderBottomColor: formErrors.name ? T.err : "rgba(160,80,37,.12)" }} className="input-glow" onFocus={fc} onBlur={bl} />{formErrors.name && <div style={errS}>{formErrors.name}</div>}</div>
                      <div style={{ marginBottom: 32 }}><label style={ls}>Email</label><input aria-label="Email address" type="email" autoComplete="email" value={formData.email} onChange={e => updateField("email", e.target.value)} placeholder="For our reply only" style={{ ...is, borderBottomColor: formErrors.email ? T.err : "rgba(160,80,37,.12)" }} className="input-glow" onFocus={fc} onBlur={bl} />{formErrors.email && <div style={errS}>{formErrors.email}</div>}</div>
                    </div>
                    <div style={{ marginBottom: 32 }}><label style={ls}>City</label><input aria-label="City" value={formData.city} onChange={e => updateField("city", e.target.value)} placeholder="Where you spend most of your time" autoComplete="address-level2" id="clio-city" style={{ ...is, borderBottomColor: formErrors.city ? T.err : "rgba(160,80,37,.12)" }} className="input-glow" onFocus={fc} onBlur={bl} />{formErrors.city && <div style={errS}>{formErrors.city}</div>}</div>
                    <div style={{ marginBottom: 32 }}><label style={ls}>What are you curious about right now</label><textarea aria-label="What you are curious about" value={formData.curiosity} onChange={e => updateField("curiosity", e.target.value)} placeholder="Whatever holds your attention" rows={2} style={ts} className="input-glow" onFocus={fc} onBlur={bl} /></div>
                    <div><label style={ls}>How did you find us</label><input aria-label="How you found us" value={formData.referral} onChange={e => updateField("referral", e.target.value)} placeholder="Optional" style={is} className="input-glow" onFocus={fc} onBlur={bl} /></div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: T.bg, border: `1px solid rgba(201,149,108,.06)`, padding: "28px clamp(36px,4vw,48px)" }}>
                    <div>
                      <p style={{ fontFamily: F.display, fontSize: 15, fontWeight: 400, fontStyle: "italic", color: "rgba(250,244,238,.6)", maxWidth: 340 }}>{sending ? "Composing your introduction..." : confidenceMessage}</p>
                      {submitError && <p style={{ fontFamily: F.body, fontSize: 12, fontWeight: 400, color: T.err, marginTop: 8, maxWidth: 340 }}>{submitError}</p>}
                    </div>
                    <button type="button" aria-label="Submit" {...hp} className="hl" style={{ background: "none", cursor: "none", border: `1px solid rgba(201,149,108,.25)`, padding: "16px 44px", fontFamily: F.body, fontSize: "clamp(10px,2.2vw,11px)", fontWeight: 500, letterSpacing: ".32em", textTransform: "uppercase", color: T.rose, transition: "border-color .4s,background .4s,color .4s,opacity .4s", flexShrink: 0, opacity: sending ? .5 : 1 }} onClick={() => { if (window.clioData) window.clioData.interactions.push({ type: 'form_submit', page: 'apply', ts: Date.now() }); handleSubmit(); }} disabled={sending} onMouseEnter={e => { if (!sending) { setHov(true); e.target.style.background = "rgba(201,149,108,.06)"; } }} onMouseLeave={e => { setHov(false); e.target.style.background = "none"; }}>{sending ? "Composing..." : "Send"}</button>
                  </div>

                  <div style={{ textAlign: "center", marginTop: 36 }}>
                    <p style={{ fontFamily: F.display, fontSize: 15, fontWeight: 400, fontStyle: "italic", color: TX.onLightSub, marginBottom: 14 }}>If you already know this is for you:</p>
                    <button type="button" {...hp} onClick={() => setFormMode("full")} aria-label="Complete the full portrait" style={{ background: "none", cursor: "none", border: "none", padding: "0 0 2px", fontFamily: F.body, fontSize: "clamp(10px,2.2vw,11px)", fontWeight: 500, letterSpacing: ".25em", textTransform: "uppercase", color: T.copper, transition: "color .3s,opacity .3s,border-color .3s", borderBottom: `1px solid ${T.copper}35` }}
                      onMouseEnter={e => { setHov(true); e.target.style.borderBottomColor = T.copper; }}
                      onMouseLeave={e => { setHov(false); e.target.style.borderBottomColor = `${T.copper}35`; }}
                    >Complete the Full Portrait</button>
                  </div>
                </>}

                {formMode === "full" && <>
                  <div style={{ marginBottom: 28 }}>
                    <button type="button" {...hp} onClick={() => setFormMode("short")} aria-label="Return to short form" style={{ background: "none", cursor: "none", border: "none", padding: 0, fontFamily: F.body, fontSize: "clamp(10px,2.2vw,11px)", fontWeight: 400, letterSpacing: ".12em", color: TX.onLightMuted, transition: "color .3s", display: "flex", alignItems: "center", gap: 8 }}
                      onMouseEnter={e => { setHov(true); e.target.style.color = T.copper; }}
                      onMouseLeave={e => { setHov(false); e.target.style.color = TX.onLightMuted; }}
                    ><span style={{ fontSize: 14 }}>?</span> Short form</button>
                  </div>

                  {/* I */}
                  <div style={{backgroundColor:"#fff",border: `1px solid rgba(160,80,37,.06)`, padding: "clamp(36px,4vw,48px)", marginBottom: 2,}}><SH n="I" title="About You" sub="The essentials. How we reach you and how you present yourself." />
                    <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 36px", paddingLeft: 46 }}>
                      {[["Full Name", "As you would introduce yourself", "name"], ["Preferred Name", "What those close to you call you", "preferredName"], ["City", "Where you spend most of your time", "city"], ["Email", "For our eyes only", "email"]].map(([l, p, k], i) => <div key={i} style={{ marginBottom: 28 }}><label style={ls}>{l}</label><input value={formData[k] || ""} onChange={e => updateField(k, e.target.value)} placeholder={p} style={is} className="input-glow" onFocus={fc} onBlur={bl} /></div>)}
                      <div style={{ marginBottom: 28 }}><label style={ls}>LinkedIn or Website</label><input value={formData.linkedin || ""} onChange={e => updateField("linkedin", e.target.value)} placeholder="Optional" style={is} className="input-glow" onFocus={fc} onBlur={bl} /></div>
                      <div><label style={ls}>Instagram</label><input value={formData.instagram || ""} onChange={e => updateField("instagram", e.target.value)} placeholder="Optional" style={is} className="input-glow" onFocus={fc} onBlur={bl} /></div>
                    </div>
                  </div>

                  {/* II */}
                  <div style={{backgroundColor:"#fff",border: `1px solid rgba(160,80,37,.06)`, padding: "clamp(36px,4vw,48px)", marginBottom: 2,}}><SH n="II" title="Your Curiosities" sub="What holds your attention. This shapes who we place beside you." />
                    <div style={{ paddingLeft: 46 }}>
                      {[["What subjects fascinate you right now", "What you find yourself reading, watching, thinking about", "subjects"], ["A topic you could speak about for hours", "The thing that lights you up", "topic"], ["The kind of people who bring out the best in you", "Not their titles. Their qualities.", "bestPeople"], ["A recent conversation that stayed with you", "What made it linger", "recentConversation"]].map(([l, p, k], i) => <div key={i} style={{ marginBottom: i < 3 ? 28 : 0 }}><label style={ls}>{l}</label><textarea value={formData[k] || ""} onChange={e => updateField(k, e.target.value)} placeholder={p} rows={2} style={ts} className="input-glow" onFocus={fc} onBlur={bl} /></div>)}
                    </div>
                  </div>

                  {/* III */}
                  <div style={{backgroundColor:"#fff",border: `1px solid rgba(160,80,37,.06)`, padding: "clamp(36px,4vw,48px)", marginBottom: 2,}}><SH n="III" title="Life and Perspective" sub="The experiences that made you who you are today." />
                    <div style={{ paddingLeft: 46 }}>
                      {[["One experience that shaped how you see the world", "A moment, a place, a turning point", "shapingExperience"], ["A place that changed your perspective", "Where and why", "perspectivePlace"], ["Something most people would not expect about you", "The detail that usually surprises", "unexpectedFact"]].map(([l, p, k], i) => <div key={i} style={{ marginBottom: i < 2 ? 28 : 0 }}><label style={ls}>{l}</label><textarea value={formData[k] || ""} onChange={e => updateField(k, e.target.value)} placeholder={p} rows={2} style={ts} className="input-glow" onFocus={fc} onBlur={bl} /></div>)}
                    </div>
                  </div>

                  {/* IV */}
                  <div style={{backgroundColor:"#fff",border: `1px solid rgba(160,80,37,.06)`, padding: "clamp(36px,4vw,48px)", marginBottom: 2,}}><SH n="IV" title="Your Interest in the House" sub="Why here. Why now. What you hope to find." />
                    <div style={{ paddingLeft: 46 }}>
                      {[["What drew you to the House", "In your own words", "drewYouHere"], ["If you sat with brilliant strangers, what would you hope to discover", "About them, about yourself, about the world", "brilliantStrangers"], ["What perspectives do you bring to a room", "What makes your company worth keeping", "yourPerspectives"], ["Three people, living or departed, you would invite to dinner and why", "This tells us more than any biography", "dinnerInvites"]].map(([l, p, k], i) => <div key={i} style={{ marginBottom: i < 3 ? 28 : 0 }}><label style={ls}>{l}</label><textarea value={formData[k] || ""} onChange={e => updateField(k, e.target.value)} placeholder={p} rows={i === 3 ? 3 : 2} style={ts} className="input-glow" onFocus={fc} onBlur={bl} /></div>)}
                    </div>
                  </div>

                  {/* V */}
                  <div style={{backgroundColor:"#fff",border: `1px solid rgba(160,80,37,.06)`, padding: "clamp(36px,4vw,48px)", marginBottom: 2,}}><SH n="V" title="Your Profile Preview" sub="This is how others will know you before you meet." />
                    <div style={{ paddingLeft: 46 }}>
                      <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 36px" }}>
                        <div style={{ marginBottom: 28 }}><label style={ls}>Three subjects you are curious about</label><input value={formData.threeSubjects || ""} onChange={e => updateField("threeSubjects", e.target.value)} placeholder="Whatever is on your mind right now" style={is} className="input-glow" onFocus={fc} onBlur={bl} /></div>
                        <div style={{ marginBottom: 28 }}><label style={ls}>Three conversation themes you enjoy</label><input value={formData.threeThemes || ""} onChange={e => updateField("threeThemes", e.target.value)} placeholder="e.g. Architecture, philosophy, food culture" style={is} className="input-glow" onFocus={fc} onBlur={bl} /></div>
                      </div>
                      <div style={{ marginBottom: 28 }}><label style={ls}>One unusual fact about you</label><input value={formData.unusualFact || ""} onChange={e => updateField("unusualFact", e.target.value)} placeholder="The kind of thing that makes someone lean in" style={is} className="input-glow" onFocus={fc} onBlur={bl} /></div>
                      <div><label style={ls}>What question do you wish people asked you more often</label><textarea value={formData.wishQuestion || ""} onChange={e => updateField("wishQuestion", e.target.value)} placeholder="The answers to this are often the most revealing" rows={2} style={ts} className="input-glow" onFocus={fc} onBlur={bl} /></div>
                    </div>
                  </div>

                  {/* VI. Culture Agreement (dark) */}
                  <div style={{backgroundColor:"#1A0820",border: `1px solid rgba(160,80,37,.06)`, padding: "clamp(36px,4vw,48px)", marginBottom: 2,}}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 12 }}>
                      <div style={{ fontFamily: F.display, fontSize: "clamp(26px,4.5vw,32px)", fontWeight: 300, color: T.gold, opacity: .4, lineHeight: 1 }}>VI</div>
                      <div style={{ fontFamily: F.display, fontSize: "clamp(17px,3.2vw,20px)", fontWeight: 400, fontStyle: "italic", color: T.cream }}>Culture Agreement</div>
                    </div>
                    <div style={{ paddingLeft: 46 }}>
                      <p style={{ fontFamily: F.display, fontSize: 15, fontWeight: 400, fontStyle: "italic", color: "rgba(250,244,238,.55)", marginBottom: 28, lineHeight: 1.6 }}>The integrity of the House rests on the people within it.</p>
                      {["I understand this is a cultural space, not a professional or commercial one.", "I will not use the House to promote, pitch, recruit, or pursue business advantage.", "I enjoy meeting people beyond my usual circles.", "I value curiosity, deep listening, and generous conversation.", "I understand that continued participation depends on upholding this culture."].map((t, i) => <div key={i} onClick={() => toggleCheck(i)} role="checkbox" aria-checked={checks[i]} tabIndex={0} onKeyDown={e => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggleCheck(i); } }} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: i < 4 ? 18 : 0, cursor: "none" }}><div style={{ width: 24, height: 24, flexShrink: 0, marginTop: 3, border: `1.5px solid ${checks[i] ? T.gold : "rgba(201,149,108,.2)"}`, background: checks[i] ? "rgba(201,166,76,.08)" : "none", display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color .4s,background .4s,color .4s,opacity .4s", borderRadius: 2 }}>{checks[i] && <svg aria-hidden="true" width="11" height="11" viewBox="0 0 12 12"><path d="M2.5 6L5 8.5L9.5 3.5" stroke={T.gold} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>}</div><div style={{ fontFamily: F.body, fontSize: 14, fontWeight: 400, color: "rgba(250,244,238,.8)", lineHeight: 1.7 }}>{t}</div></div>)}
                    </div>
                  </div>

                  {/* VII. Referral */}
                  <div style={{backgroundColor:"#fff",border: `1px solid rgba(160,80,37,.06)`, padding: "clamp(36px,4vw,48px)", marginBottom: 2,}}><SH n="VII" title="Referral" sub="How you found your way here." />
                    <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 36px", paddingLeft: 46 }}>
                      <div><label style={ls}>How did you hear about the House</label><input value={formData.hearAboutUs || ""} onChange={e => updateField("hearAboutUs", e.target.value)} placeholder="A friend, a conversation, an instinct" style={is} className="input-glow" onFocus={fc} onBlur={bl} /></div>
                      <div><label style={ls}>If referred, the name of the person</label><input value={formData.referredBy || ""} onChange={e => updateField("referredBy", e.target.value)} placeholder="Optional" style={is} className="input-glow" onFocus={fc} onBlur={bl} /></div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: `linear-gradient(135deg,${T.bg},${T.bg2})`, border: `1px solid rgba(201,149,108,.06)`, padding: "36px clamp(36px,4vw,48px)" }}>
                    <div style={{ maxWidth: 400 }}>
                      <p style={{ fontFamily: F.display, fontSize: 17, fontWeight: 400, fontStyle: "italic", color: "rgba(250,244,238,.6)", lineHeight: 1.5, marginBottom: 6 }}>{sending ? "Composing your portrait..." : "Your words will be read by a person."}</p>
                      <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 400, color: "rgba(250,244,238,.35)" }}>Your words will be read by a person, not a system.</p>
                      {submitError && <p style={{ fontFamily: F.body, fontSize: 12, fontWeight: 400, color: T.err, marginTop: 10 }}>{submitError}</p>}
                    </div>
                    <button type="button" aria-label="Submit full portrait" {...hp} className="hl" style={{ background: "none", cursor: "none", border: `1px solid rgba(201,149,108,.25)`, padding: "18px 48px", fontFamily: F.body, fontSize: "clamp(10px,2.2vw,11px)", fontWeight: 500, letterSpacing: ".32em", textTransform: "uppercase", color: T.rose, transition: "border-color .4s,background .4s,color .4s,opacity .4s", flexShrink: 0, opacity: sending ? .5 : 1 }} onClick={handleSubmit} disabled={sending} onMouseEnter={e => { if (!sending) { setHov(true); e.target.style.background = "rgba(201,149,108,.06)"; } }} onMouseLeave={e => { setHov(false); e.target.style.background = "none"; }}>{sending ? "Composing..." : "Submit Portrait"}</button>
                  </div>
                </>}

              </div>);
            })()}
          </Mx>
        </Sec>}
    </>
  );
}

export default function ApplyPage() {
  return (
    <Suspense>
      <ApplyForm />
    </Suspense>
  );
}
