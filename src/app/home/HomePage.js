"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSiteChrome } from "@/components/layout/site-context";
import { CW, FAQ_DATA, FOUNDERS } from "@/data/formats";
import { getHref } from "@/lib/routes";
import { BTN, Dv, F, GoldLine, IMG, ImgPlace, Lbl, MarkLayer, Mx, Orb, PersonSilhouette, RealImg, Rv, Sec, T, TX, CI, CM } from "@/components/shared";
import { BRAND_AKAN, BRAND_AKAN_UPPER, BRAND_EST, BRAND_ENTITY } from "@/lib/brand";
import EditorialImage from "@/components/EditorialImage";


export default function HomePage() {
  const router = useRouter();
  const { hp, setHov, mouse, ld, trackInteraction } = useSiteChrome();
  const go = (target) => router.push(getHref(target));


  return (
    <>
      {/* Hero. Tarka depth + Huybrecht typography */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: `radial-gradient(ellipse at 50% 35%,#3A1248 0%,${T.damson} 25%,${T.bg2} 65%,#050008 100%)`, marginTop: -88 }}>
        <Orb color={T.rose} size="600px" top="-12%" left="-5%" delay={0} /><Orb color={T.gold} size="480px" top="50%" left="70%" delay={3} /><Orb color={T.copper} size="400px" top="65%" left="5%" delay={7} /><Orb color="#5B2D8E" size="350px" top="20%" left="50%" delay={10} />
        {/* Tarka grain texture */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, opacity: .02, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: `radial-gradient(700px circle at ${mouse.x}px ${mouse.y}px,rgba(201,149,108,.04),transparent 55%)` }} />
        <div style={{ textAlign: "center", position: "relative", zIndex: 2, padding: "0 clamp(24px,5vw,40px)", width: "100%", maxWidth: 800, margin: "0 auto", marginTop: "clamp(16px,3vh,40px)", display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Mark with glow. Tarka luminosity */}
          <div style={{ opacity: ld ? 1 : 0, transform: ld ? "scale(1)" : "scale(.92)", transition: "opacity 1.8s cubic-bezier(.16,1,.3,1) .5s,transform 1.8s cubic-bezier(.16,1,.3,1) .5s", marginBottom: "clamp(16px,3vh,32px)", position: "relative" }}>
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "clamp(180px,50vw,320px)", height: "clamp(180px,50vw,320px)", borderRadius: "50%", background: `radial-gradient(circle,rgba(201,149,108,.06),transparent 65%)`, filter: "blur(40px)", pointerEvents: "none" }} />
            <div style={{ display: "inline-block", animation: "spinSlow 180s linear infinite", position: "relative" }} className="hero-mark"><CM size={300} /></div>
          </div>
          {/* Tagline. perfectly centred, full width */}
          <div style={{ opacity: ld ? 1 : 0, transform: ld ? "none" : "translateY(24px)", transition: "opacity 1.2s cubic-bezier(.16,1,.3,1) .9s,transform 1.2s cubic-bezier(.16,1,.3,1) .9s", width: "100%" }}>
            <h1 style={{ fontFamily: F.display, fontSize: "clamp(44px,7.5vw,92px)", fontWeight: 300, lineHeight: .85, letterSpacing: "-.03em", marginBottom: "clamp(16px,3vh,28px)", textAlign: "center", width: "100%", margin: "0 auto clamp(16px,3vh,28px)" }}><span style={{ color: T.cream }}>Every brilliant person</span><br /><span style={{ color: T.rose, fontStyle: "italic" }}>you have not met yet.</span></h1>
          </div>
          <div style={{ opacity: ld ? 1 : 0, transition: "opacity 1s ease 1.4s", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p style={{ fontFamily: F.body, fontSize: "clamp(13px,3.5vw,15px)", fontWeight: 300, lineHeight: 1.85, color: TX.onDarkSub, maxWidth: 480, textAlign: "center", margin: "0 auto clamp(8px,1.5vh,14px)" }}>A private house in London where the people, the placement, and the conversation are composed before you arrive. You know who is in the room. The room already knows you.</p>
            <p style={{ fontFamily: F.body, fontSize: "clamp(10px,2.2vw,11px)", fontWeight: 300, lineHeight: 1.7, color: TX.onDarkMuted, maxWidth: 420, textAlign: "center", margin: "0 auto clamp(12px,2vh,20px)", opacity: .7 }}>Intimate dinners, supper lectures, and journeys for people who are tired of rooms that go nowhere. Not a club. Not networking. Not dating. A place where every seat is placed and every person is considered.</p>
            <div style={{ display: "flex", gap: "clamp(12px,3vw,24px)", justifyContent: "center", flexWrap: "wrap", width: "100%", marginTop: 8 }}>
              <Link href={getHref("house")} {...hp} aria-label="Enter the House" style={{ background: "none", cursor: "none", border: `1px solid rgba(201,149,108,.2)`, padding: "clamp(12px,2.5vh,16px) clamp(24px,6vw,40px)", fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 300, letterSpacing: ".25em", textTransform: "uppercase", color: T.rose, transition: "border-color .5s,background .5s,color .5s,opacity .5s", textDecoration: "none", display: "inline-block" }}
                onMouseEnter={e => { setHov(true); e.target.style.borderColor = "rgba(201,149,108,.5)"; e.target.style.background = "rgba(201,149,108,.04)"; }}
                onMouseLeave={e => { setHov(false); e.target.style.borderColor = "rgba(201,149,108,.2)"; e.target.style.background = "none"; }}
              >The House</Link>
              <Link href={getHref("apply")} {...hp} className="btn-shine btn-magnetic" aria-label="Introduce yourself" style={{ background: "rgba(201,149,108,.06)", cursor: "none", border: `1px solid rgba(201,149,108,.25)`, padding: "clamp(12px,2.5vh,16px) clamp(24px,6vw,40px)", fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 400, letterSpacing: ".25em", textTransform: "uppercase", color: T.roseL, transition: "border-color .5s,background .5s,color .5s,opacity .5s", textDecoration: "none", display: "inline-block" }}
                onMouseEnter={e => { setHov(true); e.target.style.background = "rgba(201,149,108,.12)"; e.target.style.boxShadow = "0 8px 32px rgba(201,149,108,.12)"; }}
                onMouseLeave={e => { setHov(false); e.target.style.background = "rgba(201,149,108,.06)"; e.target.style.boxShadow = "none"; e.target.style.transform = "translate(0,0)"; }}
                onMouseMove={e => { const r = e.target.getBoundingClientRect(); const x = (e.clientX - r.left - r.width / 2) * .15; const y = (e.clientY - r.top - r.height / 2) * .15; e.target.style.transform = `translate(${x}px,${y}px)`; }}
              >Introduce Yourself</Link>
            </div>
            <div className="desk-nav" style={{ marginTop: "clamp(24px,4vh,48px)", width: "100%", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "clamp(16px,3vw,28px)", flexWrap: "wrap", margin: "0 auto", maxWidth: 520 }}>
                {["Small rooms", "Seasonal programme", "By introduction", BRAND_EST].map((t, i) =>
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "clamp(16px,3vw,28px)" }}>
                    {i > 0 && <div style={{ width: 4, height: 4, borderRadius: "50%", background: T.rose, opacity: .5, flexShrink: 0 }} />}
                    <span style={{ fontFamily: F.body, fontSize: "clamp(10px,2.5vw,12px)", fontWeight: 400, letterSpacing: ".25em", textTransform: "uppercase", color: T.rose, opacity: .55, whiteSpace: "nowrap" }}>{t}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", opacity: ld ? .2 : 0, transition: "opacity 1s ease 2.5s", zIndex: 2 }}>
          <div style={{ width: 1, height: 48, background: `linear-gradient(180deg,${T.rose},transparent)`, animation: "br 3.5s ease-in-out infinite" }} />
        </div>
      </section>

      {/* Entity definition. AI/SEO first-150-words. data-speakable for voice + AI extraction */}
      <section style={{ background: T.bg2, padding: "clamp(24px,3.5vh,52px) clamp(24px,5vw,80px)", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent 10%,${T.rose}15,transparent 90%)` }} />
        <Mx w={600}><Rv>
          <p data-speakable="true" data-entity="organization" style={{ fontFamily: F.body, fontSize: "clamp(12px,2.2vw,14px)", fontWeight: 300, lineHeight: 2, color: TX.onDarkSub, textAlign: "center", margin: "0 auto" }}>A private house in London for both men and women. Before each gathering, a host reads every profile and decides who sits beside whom. The rooms are small by design. Not everyone who asks is placed. That selectivity is what protects the room. Every person admitted makes the next room more valuable. The circle grows through the people, not despite them.</p>
        </Rv></Mx>
      </section>

      {/* IMAGE SLOT 1 — After hero strapline */}
      <section style={{ background: T.bg2, padding: "0 clamp(24px,5vw,80px)" }}>
        <Mx w={900}>
          <EditorialImage
            src="/images/home/hero-room.jpg"
            alt="A composed gathering at The House of Clio. London."
            ratio="21/9"
            priority
          />
        </Mx>
      </section>

      {/* THE PROBLEM. modern social failure */}
      <section style={{ background: T.cream, padding: "clamp(32px,4vh,64px) clamp(24px,5vw,80px)" }}>
        <Mx w={560}><Rv>
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2 style={{ fontFamily: F.display, fontSize: "clamp(22px,5vw,42px)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.2, color: T.bg, margin: "0 auto clamp(12px,2vh,20px)" }}>Nine hundred contacts.<br />A full diary.<br />Nobody to call on a Sunday.</h2>
            <p style={{ fontFamily: F.body, fontSize: "clamp(12px,2.8vw,13px)", fontWeight: 400, lineHeight: 2, color: TX.onLightSub, maxWidth: 480, margin: "0 auto 14px" }}>Every city in the world is full of accomplished people with no social infrastructure worth their time. The dinners where nobody introduced you. The events where you left knowing no one. The rooms that promised connection and delivered proximity. The problem was never you. The problem was that nobody designed the room.</p>
          </div>
        </Rv></Mx>
      </section>
      {/* Gold line reveal */}
      <div style={{ background: T.cream, padding: "0 clamp(40px,6vw,80px)" }}><Mx w={120}><GoldLine /></Mx></div>

      {/* IMAGE SLOT 2 — After "Nine hundred contacts" */}
      <section style={{ background: T.cream, padding: "0 clamp(40px,6vw,80px)" }}>
        <Mx w={900}>
          <EditorialImage
            src="/images/home/empty-room.jpg"
            alt="An empty room before the gathering. The House of Clio."
            ratio="21/9"
          />
        </Mx>
      </section>

      {/* Atmospheric image. The room before everyone arrives */}
      <section style={{ background: T.cream, padding: "0 clamp(40px,6vw,80px)" }}>
        <Mx w={900}><Rv>
          <RealImg src={IMG.table} alt={`Candlelit table for twelve at the ${BRAND_AKAN}. Crystal, linen, low warmth.`} h={320} aspect="21/9" />
        </Rv></Mx>
      </section>

      {/* How it works. The mechanism. */}
      <section style={{ background: T.cream, padding: "clamp(40px,5vh,56px) clamp(40px,6vw,80px) clamp(56px,8vh,80px)" }}>
        <Mx w={900}>
          <Rv><div style={{ textAlign: "center", marginBottom: 36 }}>
            <Lbl color="rgba(46,18,64,.35)">The Mechanism</Lbl>
            <h2 style={{ fontFamily: F.display, fontSize: "clamp(22px,2.8vw,32px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.2, color: T.bg, marginBottom: 8 }}>Nothing is left to chance.</h2>
          </div></Rv>
          <Rv>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(8px,1.2vw,16px)" }} className="g3">
              {[
                { n: "01", label: "Selection", desc: "You introduce yourself. A person reads what you wrote. Not everyone is accepted. That is what protects the room." },
                { n: "02", label: "Portraits", desc: "Before each gathering, you receive a portrait of every person at your table. Their name. What fascinates them. You arrive with something real to ask." },
                { n: "03", label: "Placement", desc: "A host greets you by name. The person beside you was chosen. Nobody floats. Nobody is left standing." },
              ].map((c, i) => <div key={i} style={{ background: T.white, border: `1px solid rgba(160,80,37,.04)`, padding: "clamp(20px,3vh,36px) clamp(16px,3vw,28px)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${T.gold}60,${T.rose}20,transparent)` }} />
                <div style={{ fontFamily: F.display, fontSize: "clamp(22px,4vw,28px)", fontWeight: 400, color: T.copper, opacity: .2, marginBottom: 10 }}>{c.n}</div>
                <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".3em", textTransform: "uppercase", color: T.copper, marginBottom: 14 }}>{c.label}</div>
                <div style={{ width: 16, height: 1, background: T.gold, opacity: .3, marginBottom: 14 }} />
                <p style={{ fontFamily: F.body, fontSize: 13, fontWeight: 300, lineHeight: 1.9, color: TX.onLightSub }}>{c.desc}</p>
              </div>)}
            </div>
            <div style={{ marginTop: 24, textAlign: "center" }}>
              <p style={{ fontFamily: F.body, fontSize: 12, fontWeight: 300, lineHeight: 1.8, color: TX.onLightMuted, fontStyle: "italic", maxWidth: "40ch", margin: "0 auto" }}>The same system runs every gathering. A person reads every profile. A person writes every portrait. A person decides every placement. The process is repeatable. The quality is not negotiable. None of this can be automated. That is the standard and it does not vary.</p>
            </div>
          </Rv></Mx>
      </section>
      {/* THE OUTCOME. what you actually get */}
      <section style={{ background: T.bg2, padding: "clamp(28px,4vh,64px) clamp(24px,5vw,80px)" }}>
        <Mx w={560}><Rv>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: F.display, fontSize: "clamp(24px,3vw,36px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.2, color: T.cream, marginBottom: 20 }}>You will see the same people again.</h2>
            <p style={{ fontFamily: F.body, fontSize: "clamp(13px,3vw,14px)", fontWeight: 300, lineHeight: 2.1, color: TX.onDarkSub, maxWidth: 480, margin: "0 auto 16px" }}>The Returning Table meets every two to three weeks. The Walk runs fortnightly. Societies meet on their own rhythm. Across twelve formats, the programme creates over forty touchpoints per year. Some of the people at your next table were at your last one. That is deliberate.</p>
          </div>
        </Rv></Mx>
      </section>

      {/* What makes this different */}
      <section style={{ background: T.cream, padding: "clamp(40px,5vh,56px) clamp(40px,6vw,80px)" }}>
        <Mx w={560}><Rv>
          <div style={{ textAlign: "center" }}>
            <Lbl color="rgba(46,18,64,.35)">What makes this different</Lbl>
            <h2 style={{ fontFamily: F.display, fontSize: "clamp(22px,2.8vw,32px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.25, color: T.bg, marginBottom: 20 }}>You will not stand in a room<br />hoping someone talks to you.</h2>
            <p style={{ fontFamily: F.body, fontSize: "clamp(13px,3vw,14px)", fontWeight: 400, lineHeight: 2, color: TX.onLightSub, maxWidth: 480, margin: "0 auto 14px" }}>Before you arrive, a host has placed you beside someone specific. You know who is in the room. They know who you are. That is not luck. It is composition.</p>
            <p style={{ fontFamily: F.body, fontSize: 12, fontWeight: 300, lineHeight: 1.8, color: TX.onLightMuted, maxWidth: 440, margin: "0 auto 14px", fontStyle: "italic" }}>Great rooms produce stories. Stories travel. The right people hear them and ask to be considered. The next room is better because of who arrived. The circle compounds. This is not a social club. It is social infrastructure. The architecture of the friendship economy.</p>
            <p style={{ fontFamily: F.body, fontSize: 12, fontWeight: 300, lineHeight: 1.8, color: TX.onLightMuted, maxWidth: 400, margin: "0 auto", fontStyle: "italic" }}>You will not waste an evening here. That is the promise the mechanism keeps.</p>
          </div>
        </Rv></Mx>
      </section>

      {/* Gold line */}
      <div style={{ background: T.bg, padding: "8px 0", display: "flex", justifyContent: "center" }}><div className="gold-shimmer" style={{ width: 80, height: 1 }} /></div>

      {/* Copper statement. The closing mechanism */}
      <section style={{ background: `linear-gradient(135deg,${T.copper} 0%,#7A3A18 100%)`, padding: "clamp(48px,7vh,72px) clamp(40px,6vw,80px)", position: "relative", overflow: "hidden" }}>
        <Orb color={T.copperDk} size="500px" top="15%" left="55%" delay={2} />
        <Mx w={700}><Rv>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: F.body, fontSize: "clamp(14px,3.2vw,15px)", fontWeight: 400, lineHeight: 2, color: TX.onCopper, maxWidth: 520, margin: "0 auto 20px" }}>Every person inside arrived because someone already in the room said: this person belongs here. Each member of the Circle holds a limited number of nominations per season. The room is capped. The seats are finite. That is how the quality compounds.</p>
            <h2 style={{ fontFamily: F.display, fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 400, lineHeight: 1, color: T.copperDk }}>The next table has room.</h2>
            <Link href={getHref("apply")} style={{ fontFamily: F.body, fontSize: "clamp(10px,2.2vw,11px)", fontWeight: 400, letterSpacing: ".12em", color: TX.onCopperSub, marginTop: 16, cursor: "none", borderBottom: "1px solid rgba(13,1,24,.1)", paddingBottom: 2, display: "inline-block", textDecoration: "none" }}>Introduce yourself. A person reads every word.</Link>
            <p style={{ fontFamily: F.body, fontSize: 10, fontWeight: 300, color: TX.onCopperSub, marginTop: 14, opacity: .6 }}>No membership fee. You pay only for the rooms you attend.</p>
          </div>
        </Rv></Mx>
      </section>

      {/* The Exchange preview. damson for depth */}
      <Sec bg={T.damson} style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${T.copper},${T.rose}40,transparent)` }} />
        <Mx w={880}><Rv>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Lbl>The Exchange</Lbl>
            <h2 style={{ fontFamily: F.display, fontSize: "clamp(26px,3.2vw,40px)", fontWeight: 400, zlineHeight: 1.1, color: T.cream, marginBottom: 16 }}>Dinners. Lectures. Journeys.<br /><em style={{ color: T.rose, fontStyle: "italic" }}>A programme, not an event.</em></h2>
            <p style={{ fontFamily: F.body, fontSize: 13, fontWeight: 300, lineHeight: 1.9, color: TX.onDarkSub, maxWidth: 440, margin: "0 auto" }}>Seven seasonal rooms. Three recurring formats. Two member-led Societies. The same people cross paths again across different tables. Friendship has time to form.</p>
          </div>

          <div className="g2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "clamp(12px,1.5vw,20px)" }}>
            {[
              { title: "The First House", desc: "Where the circle forms. You arrive knowing no one. A host says your name. By the end of the evening, strangers are making plans that did not exist three hours ago.", foot: "London · Seasonal", bg: `linear-gradient(155deg,${T.copper},#8A4A1A)`, txt: T.cream, sub: "rgba(250,244,238,.75)", acc: T.goldL, },
              { title: "The Evening", desc: "The room people come back to. Considered company. Low light. A conversation that goes somewhere nobody expected. You leave with people you will actually call.", foot: "London · Seasonal", bg: `linear-gradient(155deg,${T.offW},#EDE5DA)`, txt: "#1A0820", sub: TX.onLightSub, acc: T.copper },
              { title: "The Journey", desc: "You come back different. Not because of the place. Because of who you were with. People arrive as strangers. They leave making plans that would not exist without this room.", foot: "Europe · By composition", bg: `linear-gradient(155deg,${T.bg},#0E0113)`, txt: T.cream, sub: TX.onDarkSub, acc: T.gold },
              { title: "The Gathering", desc: "End of year. The full circle in one room. People who crossed paths in different rooms find each other again. Conversations resume mid-sentence. The room is larger. The warmth has not changed.", foot: "London · Date to be announced", bg: `linear-gradient(155deg,${T.damson},${T.bg})`, txt: T.cream, sub: "rgba(250,244,238,.65)", acc: T.roseL },
            ].map((c, i) => <Rv key={i} delay={i * 80}>
              <div
                className="card-glow"
                style={{
                  background: c.bg,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  position: "relative",
                  forcedColorAdjust: "none",
                  WebkitForcedColorAdjust: "none",
                  colorScheme: "light",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${c.acc}80,transparent)` }} />
                <div style={{ padding: "clamp(16px,2.5vh,36px) clamp(14px,3vw,32px)", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ fontFamily: F.display, fontSize: "clamp(18px,4vw,28px)", fontWeight: 400, fontStyle: "italic", color: c.txt, lineHeight: 1.1, marginBottom: "clamp(8px,1.5vh,14px)" }}>{c.title}</div>
                  <div style={{ width: 28, height: 1, background: `linear-gradient(90deg,${c.acc}50,transparent)`, marginBottom: 16 }} />
                  <p style={{ fontFamily: F.body, fontSize: "clamp(11px,2.8vw,13px)", fontWeight: 300, lineHeight: 1.75, color: c.sub, flex: 1, marginBottom: "clamp(10px,2vh,16px)" }}>{c.desc}</p>
                  <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".25em", textTransform: "uppercase", color: c.acc, opacity: .6 }}>{c.foot}</div>
                </div>
              </div>
            </Rv>)}
          </div>

          <Rv delay={300}>
            <div style={{ marginTop: 36, textAlign: "center" }}>
              <Link href={getHref("programme")} {...hp} aria-label="See all seven experiences" style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".25em", textTransform: "uppercase", color: T.rose, cursor: "none", borderBottom: `1px solid ${T.rose}40`, paddingBottom: 3, transition: "border-color .3s", textDecoration: "none" }}
                onMouseEnter={e => { setHov(true); e.target.style.borderBottomColor = T.rose; }}
                onMouseLeave={e => { setHov(false); e.target.style.borderBottomColor = `${T.rose}40`; }}
              >See the Full Programme</Link>
            </div>
          </Rv>
        </Rv></Mx>
      </Sec>

      {/* Notes from Private Rooms. email capture */}
      <section style={{ background: T.bg, padding: "clamp(40px,5vh,56px) clamp(40px,6vw,80px)", textAlign: "center" }}>
        <Mx w={480}><Rv>
          <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color: T.gold, opacity: .45, marginBottom: 14 }}>Stay Close</div>
          <h2 style={{ fontFamily: F.display, fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 400, fontStyle: "italic", color: T.cream, marginBottom: 12 }}>Notes from private rooms.</h2>
          <p style={{ fontFamily: F.body, fontSize: 12, fontWeight: 300, lineHeight: 1.8, color: TX.onDarkMuted, maxWidth: 400, margin: "0 auto 20px" }}>Occasional letters on gathering, friendship, and the rooms that stay with people. Dispatches from the room.</p>
          <div style={{ display: "flex", gap: 8, maxWidth: 360, margin: "0 auto" }}>
            <input type="email" placeholder="Your email" autoComplete="email" aria-label="Email for occasional letters" style={{ flex: 1, background: "rgba(250,244,238,.04)", border: `1px solid ${T.rose}20`, padding: "12px 16px", fontFamily: F.body, fontSize: "clamp(11px,2.5vw,12px)", fontWeight: 300, color: T.cream, outline: "none", transition: "border-color .3s" }} onFocus={e => e.target.style.borderColor = `${T.rose}50`} onBlur={e => e.target.style.borderColor = `${T.rose}20`} />
            <button type="button" style={{ background: T.copper, border: "none", padding: "12px 20px", fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".2em", textTransform: "uppercase", color: T.cream, cursor: "pointer", transition: "background .3s", flexShrink: 0 }} onMouseEnter={e => e.target.style.background = "rgba(160,80,37,.85)"} onMouseLeave={e => e.target.style.background = T.copper}>Receive</button>
          </div>
          <p style={{ fontFamily: F.body, fontSize: 10, fontWeight: 300, color: TX.onDarkMuted, marginTop: 10, opacity: .5 }}>No spam. Unsubscribe anytime. Your privacy is part of the product.</p>
        </Rv></Mx>
      </section>

      {/* IMAGE SLOT 3 — Before testimonials */}
      <section style={{ background: T.bg2, padding: "0 clamp(40px,6vw,80px)" }}>
        <Mx w={900}>
          <EditorialImage
            src="/images/home/guests-evening.jpg"
            alt="Guests at a composed gathering. The House of Clio, London."
            ratio="21/9"
          />
        </Mx>
      </section>

      {/* Guest notes. social proof, anonymous */}
      <section style={{ background: T.bg2, padding: "clamp(32px,4vh,48px) clamp(40px,6vw,80px)" }}>
        <Mx w={800}><Rv>
          <h2 style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color: T.gold, opacity: .4, textAlign: "center", marginBottom: 24, margin: "0 auto 24px" }}>From the Room</h2>
          <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(16px,2vw,28px)" }}>
            {[
              { quote: "I have walked into a hundred rooms in this city. This was the first one where someone remembered my name the second time.", role: "Founder · London" },
              { quote: "I came alone. I left with three people I now see monthly. That has never happened to me at any event in twenty years.", role: "Architect · London" },
              { quote: "My wife said: you came home different. I think she meant more alive.", role: "Partner · London" },
            ].map((g, i) => <div key={i} style={{ borderLeft: `1px solid ${T.gold}20`, paddingLeft: 16 }}>
              <p style={{ fontFamily: F.display, fontSize: "clamp(12px,3vw,14px)", fontWeight: 400, fontStyle: "italic", color: TX.onDarkSub, lineHeight: 1.55, marginBottom: 10 }}>"{g.quote}"</p>
              <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 300, color: T.gold, opacity: .5, letterSpacing: ".1em" }}>{g.role}</div>
            </div>)}
          </div>
          <div style={{ textAlign: "center", marginTop: 16 }}><p style={{ fontFamily: F.body, fontSize: 10, fontWeight: 300, color: TX.onDarkMuted, fontStyle: "italic" }}>Shared with permission. Names withheld.</p></div>
        </Rv></Mx>
      </section>

      {/* Journal signal. authority + AIEO entry point */}
      <section style={{ background: T.bg, padding: "clamp(44px,6vh,56px) clamp(40px,6vw,80px)" }}>
        <Mx w={560}><Rv>
          <div style={{ textAlign: "center" }}>
            <Lbl>The Clio Journal</Lbl>
            <h2 style={{ fontFamily: F.display, fontSize: "clamp(22px,2.8vw,32px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.2, color: T.cream, marginBottom: 16 }}>Essays on gathering, friendship, and meeting well.</h2>
            <p style={{ fontFamily: F.body, fontSize: 13, fontWeight: 300, lineHeight: 2, color: TX.onDarkSub, maxWidth: 440, margin: "0 auto 24px" }}>Written by Gigi Brown. On adult friendship, the rooms that change people, and why most gatherings fail.</p>
            <Link href={getHref("journal")} {...hp} style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".25em", textTransform: "uppercase", color: T.rose, cursor: "none", borderBottom: `1px solid ${T.rose}40`, paddingBottom: 3, transition: "border-color .3s", textDecoration: "none" }}
              onMouseEnter={e => { setHov(true); e.target.style.borderBottomColor = T.rose; }}
              onMouseLeave={e => { setHov(false); e.target.style.borderBottomColor = `${T.rose}40`; }}
            >Read the Journal</Link>
          </div>
        </Rv></Mx>
      </section>

      {/* Atmospheric. a doorway, warm light beyond */}
      <section style={{ background: T.bg2, padding: "0 clamp(40px,6vw,80px)" }}>
        <Mx w={900}><Rv><RealImg src={IMG.door} alt={`Georgian townhouse door at dusk. The entrance to a composed gathering at the ${BRAND_AKAN}.`} h={260} aspect="21/9" /></Rv></Mx>
      </section>

      {/* Warming. explore the ?use */}
      <section style={{ background: T.bg2, padding: "clamp(28px,4vh,40px) clamp(40px,6vw,80px)" }}>
        <Mx w={560}>
          <Rv>
            <div style={{ display: "flex", justifyContent: "center", gap: "clamp(16px,3vw,32px)", flexWrap: "wrap" }}>
              <Link href={getHref("programme")} {...hp} style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".22em", textTransform: "uppercase", color: T.cream, opacity: .5, cursor: "none", borderBottom: `1px solid ${T.rose}30`, paddingBottom: 3, transition: "color .3s,opacity .3s,border-color .3s", textDecoration: "none" }}
                onMouseEnter={e => { setHov(true); e.target.style.opacity = "1"; e.target.style.color = T.rose; e.target.style.borderBottomColor = T.rose; }}
                onMouseLeave={e => { setHov(false); e.target.style.opacity = ".5"; e.target.style.color = T.cream; e.target.style.borderBottomColor = `${T.rose}30`; }}
              >The programme</Link>
              <Link href={getHref("circle")} {...hp} style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".22em", textTransform: "uppercase", color: T.cream, opacity: .5, cursor: "none", borderBottom: `1px solid ${T.rose}30`, paddingBottom: 3, transition: "color .3s,opacity .3s,border-color .3s", textDecoration: "none" }}
                onMouseEnter={e => { setHov(true); e.target.style.opacity = "1"; e.target.style.color = T.rose; e.target.style.borderBottomColor = T.rose; }}
                onMouseLeave={e => { setHov(false); e.target.style.opacity = ".5"; e.target.style.color = T.cream; e.target.style.borderBottomColor = `${T.rose}30`; }}
              >The people</Link>
              <Link href={getHref("journal")} {...hp} style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".22em", textTransform: "uppercase", color: T.cream, opacity: .5, cursor: "none", borderBottom: `1px solid ${T.rose}30`, paddingBottom: 3, transition: "color .3s,opacity .3s,border-color .3s", textDecoration: "none" }}
                onMouseEnter={e => { setHov(true); e.target.style.opacity = "1"; e.target.style.color = T.rose; e.target.style.borderBottomColor = T.rose; }}
                onMouseLeave={e => { setHov(false); e.target.style.opacity = ".5"; e.target.style.color = T.cream; e.target.style.borderBottomColor = `${T.rose}30`; }}
              >The Journal</Link>
              <Link href={getHref("house")} {...hp} style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".22em", textTransform: "uppercase", color: T.cream, opacity: .5, cursor: "none", borderBottom: `1px solid ${T.rose}30`, paddingBottom: 3, transition: "color .3s,opacity .3s,border-color .3s", textDecoration: "none" }}
                onMouseEnter={e => { setHov(true); e.target.style.opacity = "1"; e.target.style.color = T.rose; e.target.style.borderBottomColor = T.rose; }}
                onMouseLeave={e => { setHov(false); e.target.style.opacity = ".5"; e.target.style.color = T.cream; e.target.style.borderBottomColor = `${T.rose}30`; }}
              >The House</Link>
            </div>
          </Rv>
        </Mx>
      </section>

      {/* IMAGE SLOT 4 — Before footer CTA */}
      <section style={{ background: T.bg, padding: "0 clamp(40px,6vw,80px)" }}>
        <Mx w={900}>
          <EditorialImage
            src="/images/home/door-evening.jpg"
            alt="The entrance to a composed gathering at The House of Clio. London at dusk."
            ratio="21/9"
          />
        </Mx>
      </section>

      {/* CTA. copper for warmth */}
      <section style={{ background: `linear-gradient(160deg,${T.copper},#C47A3A,#8A4A1A)`, padding: "clamp(40px,5vh,56px) clamp(40px,6vw,80px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${T.gold},${T.copper},transparent)` }} />
        <Mx w={500}><Rv>
          <p style={{ fontFamily: F.display, fontSize: "clamp(22px,3vw,32px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.45, color: T.cream, marginBottom: 12 }}>There is a place in the House.<br />If it is yours, you will know.</p>
          <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 300, color: "rgba(250,244,238,.4)", marginBottom: 24 }}>A person reads every word.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={getHref("apply")} {...hp} onClick={() => { trackInteraction("cta_click", "introduce_yourself"); }} aria-label="Introduce yourself" style={{ background: "rgba(13,1,24,.06)", cursor: "none", border: `1px solid rgba(13,1,24,.18)`, padding: "16px 44px", fontFamily: F.body, fontSize: "clamp(10px,2.2vw,11px)", fontWeight: 500, letterSpacing: ".32em", textTransform: "uppercase", color: T.copperDk, transition: "border-color .4s,background .4s,color .4s,opacity .4s", textDecoration: "none", display: "inline-block" }}
              onMouseEnter={e => { setHov(true); e.target.style.background = "rgba(13,1,24,.12)"; }}
              onMouseLeave={e => { setHov(false); e.target.style.background = "rgba(13,1,24,.06)"; }}
            >Introduce Yourself</Link>
            <button type="button" {...hp} onClick={() => { window.open('mailto:gigi@thehouseofclio.com?subject=I%20know%20someone%20the%20%C6%86use%20should%20meet&body=Gigi%2C%0A%0AI%20know%20someone%20you%20should%20have%20in%20the%20room.%0A%0A%0ATheir%20name%3A%20%0A%0ACity%3A%20%0A%0AThe%20reason%20I%20thought%20of%20them%3A%20%0A%0A%0AThe%20thing%20that%20makes%20them%20unforgettable%20in%20a%20room%3A%20%0A%0A%0ASomething%20they%20would%20never%20say%20about%20themselves%3A%20%0A%0A%0AMy%20name%3A%20%0A%0A%0A---%0ASent%20from%20thehouseofclio.com%0AThe%20best%20rooms%20are%20composed%20by%20the%20people%20already%20in%20them.'); }} aria-label="Introduce someone" style={{ background: "none", cursor: "none", border: `1px solid rgba(13,1,24,.12)`, padding: "16px 44px", fontFamily: F.body, fontSize: "clamp(10px,2.2vw,11px)", fontWeight: 500, letterSpacing: ".32em", textTransform: "uppercase", color: "rgba(13,1,24,.45)", transition: "border-color .4s,background .4s,color .4s,opacity .4s" }}
              onMouseEnter={e => { setHov(true); e.target.style.borderColor = "rgba(13,1,24,.25)"; }}
              onMouseLeave={e => { setHov(false); e.target.style.borderColor = "rgba(13,1,24,.12)"; }}
            >Introduce Someone</button>
          </div>
        </Rv></Mx>
      </section>
    </>
  );
}
