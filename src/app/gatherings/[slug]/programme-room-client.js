"use client";

import Link from "next/link";

import { useSiteChrome } from "@/components/layout/site-context";
import { CI, F, Lbl, MarkLayer, Mx, Rv, Sec, T, TX } from "@/components/shared";

function RoomCard({ room }) {
  if (room.slug === "the-first-house") {
    return (
      <div style={{ position: "relative", overflow: "hidden", background: `linear-gradient(145deg,${T.copper} 0%,#C47A3A 40%,#8A4A1A 100%)`, display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center" }} className="g1">
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${T.gold},${T.copper},transparent)` }} />
        <div style={{ position: "relative", zIndex: 2, padding: "clamp(44px,6vh,64px) clamp(36px,5vw,52px)" }}>
          <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".6em", textTransform: "uppercase", color: "rgba(13,1,24,.2)", marginBottom: 16 }}>{room.index}</div>
          <h2 style={{ fontFamily: F.display, fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 400, fontStyle: "italic", color: T.copperDk, lineHeight: 1.05, marginBottom: 6 }}>{room.title}</h2>
          <div style={{ width: 40, height: 2, background: `linear-gradient(90deg,${T.copperDk}40,transparent)`, marginBottom: 20 }} />
          <p style={{ fontFamily: F.body, fontSize: "clamp(13px,3vw,14px)", fontWeight: 400, lineHeight: 2, color: "rgba(13,1,24,.5)", maxWidth: "42ch" }}>{room.description}</p>
          <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 300, color: "rgba(13,1,24,.3)", marginTop: 14, fontStyle: "italic" }}>{room.aside}</p>
          <div style={{ marginTop: 20, fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".3em", color: "rgba(13,1,24,.2)" }}>{room.kicker}</div>
        </div>
        <div style={{ paddingRight: "clamp(20px,3vw,48px)", opacity: 0.1, display: "flex", alignItems: "center" }}><CI size={140} variant="copper" /></div>
      </div>
    );
  }

  if (room.slug === "the-annual-house") {
    return (
      <div className="card-glow" style={{ background: `linear-gradient(160deg,${T.cream},#F0E8DD)`, padding: "clamp(36px,4vh,48px) clamp(28px,4vw,40px)", height: "100%", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${T.copper},${T.gold}40,transparent)` }} />
        <MarkLayer layer={7} size={140} color="rgba(201,168,76,.3)" style={{ top: "8%", right: "6%" }} />
        <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color: T.copper, opacity: 0.55, marginBottom: 18, position: "relative", zIndex: 1 }}>{room.index}</div>
        <h2 style={{ fontFamily: F.display, fontSize: "clamp(24px,3vw,32px)", fontWeight: 400, fontStyle: "italic", color: T.bg, lineHeight: 1.1, marginBottom: 8, position: "relative", zIndex: 1 }}>{room.title}</h2>
        <div style={{ fontFamily: F.body, fontSize: "clamp(11px,2.5vw,12px)", fontWeight: 400, color: T.copper, fontStyle: "italic", opacity: 0.75, marginBottom: 18 }}>{room.strap}</div>
        <div style={{ width: 36, height: 1.5, background: `linear-gradient(90deg,${T.copper}40,${T.gold}15,transparent)`, marginBottom: 18 }} />
        <p style={{ fontFamily: F.body, fontSize: 14, fontWeight: 400, lineHeight: 2.1, color: TX.onLight, marginBottom: 8 }}>{room.description}</p>
        <p style={{ fontFamily: F.display, fontSize: 13, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: T.copper, opacity: 0.5, marginTop: 14 }}>{room.aside}</p>
      </div>
    );
  }

  const variants = {
    "inaugural-table": { bg: `linear-gradient(145deg,${T.bg} 0%,${T.damson} 60%,#1E0628 100%)`, top: `linear-gradient(90deg,${T.gold},${T.rose}30,transparent)`, layer: 7, layerSize: 150, layerColor: "rgba(201,168,76,.35)", layerStyle: { top: "6%", right: "4%" }, idxColor: T.gold, titleColor: T.cream, strapColor: T.gold, strapOpacity: 0.75, rule: `linear-gradient(90deg,${T.gold}60,transparent)`, bodyColor: TX.onDarkSub, asideColor: T.gold, asideOpacity: 0.6, border: `1px solid rgba(201,168,76,.08)` },
    "the-evening": { bg: `linear-gradient(160deg,${T.cream},${T.offW})`, top: `linear-gradient(90deg,${T.rose},${T.gold}30,transparent)`, layer: 2, layerSize: 140, layerColor: "rgba(201,168,76,.3)", layerStyle: { top: "8%", right: "6%" }, idxColor: T.rose, titleColor: T.bg, strapColor: T.rose, strapOpacity: 0.8, rule: `linear-gradient(90deg,${T.rose},transparent)`, bodyColor: TX.onLight, asideColor: T.rose, asideOpacity: 0.75 },
    "the-supper-lecture": { bg: `linear-gradient(160deg,#0F051A,${T.bg})`, top: `linear-gradient(90deg,${T.gold},${T.rose}25,transparent)`, layer: 3, layerSize: 140, layerColor: "rgba(201,168,76,.3)", layerStyle: { top: "8%", right: "6%" }, idxColor: T.gold, titleColor: T.cream, strapColor: T.gold, strapOpacity: 0.7, rule: `linear-gradient(90deg,${T.gold}50,transparent)`, bodyColor: TX.onDarkSub, asideColor: T.gold, asideOpacity: 0.65 },
    "city-escapes": { bg: `linear-gradient(160deg,${T.damson},#1E0628,${T.bg})`, top: `linear-gradient(90deg,${T.roseL},${T.rose},transparent)`, layer: 4, layerSize: 140, layerColor: "rgba(201,168,76,.3)", layerStyle: { top: "8%", right: "6%" }, idxColor: T.roseL, titleColor: T.cream, strapColor: TX.onDarkSub, strapOpacity: 1, rule: `linear-gradient(90deg,${T.rose}30,transparent)`, bodyColor: "rgba(250,244,238,.6)", asideColor: TX.onDarkMuted, asideOpacity: 1 },
    "grand-journeys": { bg: `linear-gradient(160deg,${T.damson},#1E0628,#140420)`, top: `linear-gradient(90deg,${T.roseL},${T.rose}35,transparent)`, layer: 5, layerSize: 150, layerColor: "rgba(201,168,76,.35)", layerStyle: { top: "6%", right: "4%" }, idxColor: T.roseL, titleColor: T.cream, strapColor: TX.onDarkSub, strapOpacity: 1, rule: `linear-gradient(90deg,${T.roseL}35,transparent)`, bodyColor: TX.onDarkSub, asideColor: T.roseL, asideOpacity: 0.65 },
    "the-private-house": { bg: `linear-gradient(160deg,#0E0113,${T.bg2})`, top: `linear-gradient(90deg,${T.rose}50,transparent)`, layer: 6, layerSize: 150, layerColor: "rgba(201,168,76,.35)", layerStyle: { top: "6%", right: "4%" }, idxColor: T.rose, titleColor: T.cream, strapColor: TX.onDarkSub, strapOpacity: 1, rule: `linear-gradient(90deg,${T.rose}25,transparent)`, bodyColor: TX.onDarkSub, asideColor: T.rose, asideOpacity: 0.6, border: "1px solid rgba(201,149,108,.05)" },
  }[room.slug];

  return (
    <div className="card-glow" style={{ background: variants.bg, padding: "clamp(36px,4vh,48px) clamp(28px,4vw,40px)", height: "100%", position: "relative", overflow: "hidden", border: variants.border }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: variants.top }} />
      <MarkLayer layer={variants.layer} size={variants.layerSize} color={variants.layerColor} style={variants.layerStyle} />
      <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color: variants.idxColor, opacity: 0.55, marginBottom: 18, position: "relative", zIndex: 1 }}>{room.index}</div>
      <h2 style={{ fontFamily: F.display, fontSize: "clamp(24px,3vw,32px)", fontWeight: 400, fontStyle: "italic", color: variants.titleColor, lineHeight: 1.1, marginBottom: 8, position: "relative", zIndex: 1 }}>{room.title}</h2>
      <div style={{ fontFamily: F.body, fontSize: "clamp(11px,2.5vw,12px)", fontWeight: 400, color: variants.strapColor, fontStyle: "italic", opacity: variants.strapOpacity, marginBottom: 18 }}>{room.strap}</div>
      <div style={{ width: 36, height: 1.5, background: variants.rule, marginBottom: 18 }} />
      <p style={{ fontFamily: F.body, fontSize: 14, fontWeight: 400, lineHeight: 2.1, color: variants.bodyColor }}>{room.description}</p>
      <p style={{ fontFamily: F.body, fontSize: "clamp(11px,2.5vw,12px)", fontWeight: 300, color: variants.asideColor, fontStyle: "italic", opacity: variants.asideOpacity, marginTop: 14 }}>{room.aside}</p>
    </div>
  );
}

export default function ProgrammeRoomClient({ room }) {
  const { hp } = useSiteChrome();

  return (
    <>
      <Sec bg={T.bg}>
        <Mx w={560}>
          <Rv>
            <div style={{ textAlign: "center" }}>
              <Lbl>Programme</Lbl>
              <h1 style={{ fontFamily: F.display, fontSize: "clamp(36px,5vw,58px)", fontWeight: 400, lineHeight: 0.92, color: T.cream, marginBottom: 16 }}>{room.title}</h1>
              {room.when && (
                <p style={{ fontFamily: F.body, fontSize: 13, fontWeight: 400, letterSpacing: ".08em", color: TX.onDarkMuted, marginBottom: 20 }}>
                  {room.when} · London
                </p>
              )}
              <div style={{ width: 48, height: 1, background: `linear-gradient(90deg,transparent,${T.gold}40,transparent)`, margin: "0 auto 28px" }} />
              <div style={{ marginTop: 32 }}>
                <Link
                  href={`/apply?event=${room.slug}`}
                  style={{ background: "rgba(201,149,108,.06)", border: "1px solid rgba(201,149,108,.25)", padding: "14px 36px", fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".28em", textTransform: "uppercase", color: T.rose, textDecoration: "none", display: "inline-block", transition: "border-color .4s,background .4s" }}
                >
                  Reserve a place on {room.title}
                </Link>
              </div>
            </div>
          </Rv>
        </Mx>
      </Sec>

      <section style={{ background: T.bg2, padding: "0 clamp(40px,6vw,80px) clamp(60px,8vh,100px)" }}>
        <Mx w={900}>
          <Rv>
            <RoomCard room={room} />
          </Rv>
        </Mx>
      </section>

      <section style={{ background: `linear-gradient(145deg,${T.copper},#C47A3A,#8A4A1A)`, padding: "clamp(48px,7vh,72px) clamp(40px,6vw,80px)", position: "relative", overflow: "hidden", textAlign: "center" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${T.gold},${T.copper},transparent)` }} />
        <Mx w={400}>
          <Rv>
            <div style={{ opacity: 0.08, marginBottom: 20 }}><CI size={48} variant="copper" /></div>
            <div style={{ display: "flex", justifyContent: "center", gap: "clamp(20px,4vw,40px)", marginBottom: 28, flexWrap: "wrap" }}>
              <Link href="/the-circle" {...hp} style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".22em", textTransform: "uppercase", color: T.cream, opacity: 0.5, cursor: "none", borderBottom: `1px solid ${T.rose}30`, paddingBottom: 3, transition: "color .3s,opacity .3s,border-color .3s", textDecoration: "none" }}>Meet the people</Link>
              <Link href="/founder" {...hp} style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".22em", textTransform: "uppercase", color: T.cream, opacity: 0.5, cursor: "none", borderBottom: `1px solid ${T.rose}30`, paddingBottom: 3, transition: "color .3s,opacity .3s,border-color .3s", textDecoration: "none" }}>Composed by Gigi Brown</Link>
            </div>
            <p style={{ fontFamily: F.display, fontSize: "clamp(18px,2.5vw,24px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.45, color: T.copperDk, marginBottom: 12 }}>Twelve formats. One city for now.<br />The next room is being composed.</p>
            <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 300, color: "rgba(13,1,24,.25)", fontStyle: "italic", maxWidth: "38ch", margin: "0 auto 28px" }}>Every room you enter makes the next one richer.</p>
            <Link href="/apply" {...hp} className="btn-shine" aria-label="Introduce yourself" style={{ background: "rgba(13,1,24,.05)", cursor: "none", border: "1px solid rgba(13,1,24,.12)", padding: "14px 40px", fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".3em", textTransform: "uppercase", color: T.copperDk, transition: "border-color .4s,background .4s,color .4s,opacity .4s", textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>Introduce Yourself</Link>
            <p style={{ fontFamily: F.body, fontSize: 10, fontWeight: 300, color: TX.onCopperSub, marginTop: 16, opacity: 0.5 }}>No membership fee. The full season is open. <Link href="/book" {...hp} style={{ color: "inherit", borderBottom: "1px solid rgba(13,1,24,.08)", textDecoration: "none" }}>See the season</Link>.</p>
          </Rv>
        </Mx>
      </section>
    </>
  );
}
