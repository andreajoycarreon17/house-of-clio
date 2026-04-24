"use client";

import Link from "next/link";
import { useSiteChrome } from "@/components/layout/site-context";
import { BTN, CI, Dv, F, Lbl, Mx, Rv, Sec, T, TX } from "@/components/shared";

export default function ApplyReceivedPage() {
  const { hp } = useSiteChrome();

  return (
    <Sec bg={T.offW}>
      <div style={{ height: 3, background: `linear-gradient(90deg,${T.rose},${T.gold},rgba(201,149,108,.08))`, position: "absolute", top: 0, left: 0, right: 0 }} />
      <Mx w={560}>
        <Rv>
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <CI size={80} variant="light" />
            <div style={{ margin: "28px 0" }}>
              <Lbl color="rgba(46,18,64,.35)">Received</Lbl>
            </div>
            <h1 style={{ fontFamily: F.display, fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 400, lineHeight: .96, color: TX.onLight, marginBottom: 24 }}>
              The House has<br />
              <em style={{ color: T.rose, fontStyle: "italic" }}>received you.</em>
            </h1>
            <Dv w="48px" m="0 auto 28px" />
            <p style={{ fontFamily: F.body, fontSize: 16, fontWeight: 400, lineHeight: 2.2, color: TX.onLight, maxWidth: "60ch", margin: "0 auto 40px" }}>
              A person will read what you have written. We reply within seventy two hours. If there is alignment, we arrange a conversation. If there is not, we say so directly.
            </p>
            <div style={{ maxWidth: 400, margin: "0 auto 48px", textAlign: "left" }}>
              {[
                { day: "First",                  what: "A person reads your words." },
                { day: "If there is alignment",  what: "We reply with a genuine conversation." },
                { day: "If the fit is mutual",   what: "We invite you to the House." },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: i < 2 ? 20 : 0 }}>
                  <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".2em", color: T.rose, minWidth: 120, paddingTop: 2 }}>{s.day}</div>
                  <div style={{ fontFamily: F.body, fontSize: 14, fontWeight: 400, color: TX.onLightSub, lineHeight: 1.7 }}>{s.what}</div>
                </div>
              ))}
            </div>
            <Link
              href="/journal"
              {...hp}
              style={{
                ...BTN.copper,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              Read the Journal
            </Link>
          </div>
        </Rv>
      </Mx>
    </Sec>
  );
}
