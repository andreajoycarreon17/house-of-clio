"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSiteChrome } from "@/components/layout/site-context";
import { CW, FAQ_DATA, FOUNDERS } from "@/data/formats";
import { getHref } from "@/lib/routes";
import { BTN, Dv, F, GoldLine, IMG, ImgPlace, Lbl, MarkLayer, Mx, Orb, PersonSilhouette, RealImg, Rv, Sec, T, TX, CI, CM } from "@/components/shared";

export default function TheHousePage() {
  const router = useRouter();
  const { hp, setHov, mouse, ld, trackInteraction } = useSiteChrome();
  const go = (target) => router.push(getHref(target));


  return (
    <>
      <Sec bg={T.bg}><Mx w={640}><Rv>
        <Lbl>The House</Lbl>
        <h1 style={{ fontFamily: F.display, fontSize: "clamp(36px,5vw,64px)", fontWeight: 400, lineHeight: .9, color: T.cream, marginBottom: 28 }}>The feeling of being<br /><em style={{ color: T.rose }}>in exactly the right room.</em></h1>
        <Dv w="56px" m="0 0 36px" />
        <p data-speakable="true" style={{ fontFamily: F.body, fontSize: 12, fontWeight: 300, lineHeight: 2, color: TX.onDarkMuted, maxWidth: "52ch", marginBottom: 32, letterSpacing: ".02em" }}>The Ɔuse ɔf Clio is a private cultural house in London with a seasonal programme of twelve formats: composed private dinners, supper lectures, cycling journeys, city escapes, and Grand Journeys. Every guest is selected. Every seat is placed by hand. Every person receives a written portrait of the room before they arrive. No membership fee. You pay only for the rooms you attend. Each person admitted strengthens the room for everyone who follows. Composed by Gigi Brown.</p>
        <p style={{ fontFamily: F.body, fontSize: 17, fontWeight: 400, lineHeight: 2.2, color: TX.onDark, marginBottom: 24, maxWidth: "62ch" }}>You know the feeling. You are at a dinner and within twenty minutes you are leaning forward. Within an hour, you have forgotten your phone exists. Within three, you are walking home with an idea you did not have when you arrived. The food was secondary. The venue was forgettable. What you remember is what was said and who said it.</p>
        <p style={{ fontFamily: F.body, fontSize: 17, fontWeight: 400, lineHeight: 2.2, color: TX.onDark, marginBottom: 24, maxWidth: "62ch" }}>Most people assume that evening was an accident. It was not. It was composition. Someone chose who was in the room. Someone considered who should be placed beside whom. The Ɔuse exists to produce that feeling reliably, through a seasonal programme of composed gatherings, supper lectures, and journeys. There is no building. The rooms change. The standard does not. The format travels to extraordinary spaces across the city and, in time, beyond it. You arrive curious. You leave changed. That is the mechanism.</p>
        <p style={{ fontFamily: F.display, fontSize: "clamp(18px,3.5vw,22px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: T.cream }}>London is the first city. Dublin is the second. Each new city opens only when the host, the room, and the circle are right. The programme is underway.</p>
      </Rv></Mx></Sec>

      {/* Atmospheric. The room before anyone arrives */}
      <section style={{ background: T.bg, padding: "0 clamp(40px,6vw,80px)" }}>
        <Mx w={900}><Rv>
          <RealImg src={IMG.dinner} alt="A composed room at the ?use ?f Clio. Long table set. Candles lit. The room is ready." h={300} aspect="21/9" />
        </Rv></Mx>
      </section>

      <section style={{ background: `linear-gradient(135deg,${T.copper} 0%,#7A3A18 100%)`, padding: "clamp(48px,6vh,72px) clamp(40px,6vw,72px)", position: "relative", overflow: "hidden" }}>
        <Mx w={600}><Rv>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: F.display, fontSize: "clamp(26px,3.2vw,40px)", fontWeight: 400, lineHeight: 1.15, color: T.cream, marginBottom: 16 }}>The Ɔ is not a decoration.<br /><em style={{ fontStyle: "italic", color: T.goldL, opacity: .8 }}>It is an inheritance.</em></h2>
            <Dv w="40px" m="0 auto 16px" />
            <p style={{ fontFamily: F.display, fontSize: "clamp(14px,3.2vw,16px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.7, color: "rgba(250,244,238,.7)", maxWidth: 440, margin: "0 auto" }}>Akan. Ghanaian. It carries the sound of the English H. Spoken exactly as it reads: House of Clio.</p>
          </div>
        </Rv></Mx>
      </section>
      {/* Culture code */}
      <section style={{ background: `linear-gradient(135deg,${T.damson} 0%,${T.bg} 100%)`, padding: "clamp(56px,8vh,88px) clamp(40px,6vw,72px)", position: "relative", overflow: "hidden" }}>
        <Mx w={800}><Rv>
          <div style={{ textAlign: "center" }}>
            <Lbl color={T.rose}>The Culture</Lbl>
            <h2 style={{ fontFamily: F.display, fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 400, lineHeight: 1, color: T.cream, marginBottom: 24 }}>You feel it the moment you walk in.</h2>
            <p style={{ fontFamily: F.body, fontSize: 16, fontWeight: 400, lineHeight: 2, color: TX.onDark, maxWidth: 520, margin: "0 auto 20px" }}>Nobody asks what anyone does for a living. The person beside you might run a country or run a hair salon. In the room, it does not matter. What matters is whether they are curious, whether they listen, and whether they make the person next to them feel like the most interesting person in the room. People arrive with one set of assumptions. They leave with different ones. That is not an accident. It is the design.</p>
            <p style={{ fontFamily: F.display, fontSize: 18, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: T.roseL, maxWidth: 480, margin: "0 auto" }}>The ?use belongs to everyone in the room equally. Not as a rule. As a feeling you notice the moment you arrive.</p>
          </div>
        </Rv></Mx>
      </section>

      {/* Scarcity + Privacy + Craft. three pillars */}
      <section style={{ background: `linear-gradient(180deg,${T.bg},${T.damson}40,${T.bg})`, padding: "clamp(56px,7vh,80px) clamp(40px,6vw,80px)" }}>
        <Mx w={920}><Rv>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color: T.gold, opacity: .6, marginBottom: 12 }}>How the House is Built</div>
            <div style={{ width: 40, height: 1, background: `linear-gradient(90deg,transparent,${T.gold}50,transparent)`, margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "clamp(12px,2vw,24px)", textAlign: "center" }} className="g1">
            {[
              { title: "Composition", body: "Every gathering is composed by one person. A host who reads every application, writes every guest profile, and considers who belongs beside whom. Before you arrive, you receive a written portrait of every person in the room. Not their title. What holds their attention. The placement is the product. The format is repeatable. The composition never is." },
              { title: "Conversation", body: "The rooms are designed for depth. A supper lecture where someone says something they have never said on a stage and then stays for dinner. A room where nobody performs. A journey where the company matters more than the destination. Every gathering is composed so the conditions for connection are already in place before anyone arrives." },
              { title: "Return", body: "Connection requires repeated encounters with the same people over time. The programme runs seasonally. The same faces reappear across different rooms until belonging is not a word but a feeling you notice when you walk in. The third time someone greets you by name, something shifts. That shift is the product." },
            ].map((c, i) => <div key={i} style={{ background: "rgba(250,244,238,.02)", border: `1px solid ${T.gold}12`, padding: "clamp(28px,3vw,40px) clamp(20px,2.5vw,32px)", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 40, height: 2, background: `linear-gradient(90deg,transparent,${T.gold}60,transparent)` }} />
              <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color: T.gold, opacity: .75, marginBottom: 14 }}>{c.title}</div>
              <div style={{ width: 20, height: 1, background: `linear-gradient(90deg,transparent,${T.rose}40,transparent)`, margin: "0 auto 14px" }} />
              <p style={{ fontFamily: F.body, fontSize: 13, fontWeight: 300, lineHeight: 1.85, color: TX.onDarkSub }}>{c.body}</p>
            </div>)}
          </div>
        </Rv></Mx>
      </section>

      {/* Atmospheric image */}
      <section style={{ padding: 0, background: T.bg2 }}>
        <RealImg src={IMG.hands} alt="Guests at an intimate gathering at the ?use ?f Clio. Warm light." h={280} aspect="21/9" />
      </section>

      {/* Answer blocks: query-capture layer. Each paragraph answers a real search query. */}
      <section style={{ background: T.bg2, padding: "clamp(36px,5vh,52px) clamp(40px,6vw,80px)" }}>
        <Mx w={560}><Rv>
          <div style={{ textAlign: "center" }}>
            <div data-speakable="true" style={{ fontFamily: F.body, fontSize: 12, fontWeight: 300, lineHeight: 2.1, color: TX.onDarkMuted, maxWidth: "50ch", margin: "0 auto" }}>
              <p style={{ marginBottom: 20 }}>Many people find it difficult to meet interesting people in London because most social events rely on chance. The Ɔuse Ɔf Clio solves this by composing every room in advance. A host selects who enters, writes a portrait of every guest, and decides who sits beside whom. The result is that meaningful conversation happens from the first word, not after thirty minutes of small talk.</p>
              <p style={{ marginBottom: 20 }}>Adult friendship is harder than it should be. Research from the University of Kansas shows it takes roughly 50 hours of shared time to form a genuine friendship. Most social events offer two hours with strangers you never see again. The Ɔuse Ɔf Clio is designed differently. The Returning Table meets every two to three weeks. The same faces reappear. That repetition is the mechanism.</p>
              <p>Unlike a traditional private members club, the Ɔuse has no building, no lounge, and no open bar. Every room is composed once and never repeated. There is no membership fee. You pay only for the rooms you attend. The composition is what makes it work. That is what cannot be replicated.</p>
            </div>
          </div>
        </Rv></Mx>
      </section>

      {/* What you get. cream for contrast */}
      <section style={{ background: T.cream, padding: "clamp(40px,5vh,56px) clamp(40px,6vw,80px)" }}>
        <Mx w={800}><Rv>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(10px,1.5vw,18px)" }} className="g3">
            {[
              { label: "Before you arrive", text: "A written portrait of every person in the room. Not their job title. What fascinates them. What they carry into a conversation. The host has already considered who you should meet. You arrive with something real to ask." },
              { label: "While you are there", text: "A host who knows your name. Intentional placement. The room is ready before you arrive. By the second course, you are in a conversation you have not had in years. By midnight, nobody wants to leave." },
              { label: "After you leave", text: "Introductions to the people you connected with. A place in the next room. And a rhythm that brings the same faces back across seasons until recognition becomes belonging. The circle deepens every time." },
            ].map((c, i) => <div key={i} style={{ padding: "24px 20px" }}>
              <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".3em", textTransform: "uppercase", color: T.copper, marginBottom: 12 }}>{c.label}</div>
              <div style={{ width: 20, height: 1, background: T.copper, opacity: .35, marginBottom: 12 }} />
              <p style={{ fontFamily: F.body, fontSize: "clamp(12px,2.8vw,13px)", fontWeight: 400, lineHeight: 1.85, color: TX.onLightSub }}>{c.text}</p>
            </div>)}
          </div>
        </Rv></Mx>
      </section>

      {/* Philosophy of craft. Morgan principle */}
      <section style={{ background: T.bg, padding: "clamp(32px,4vh,44px) clamp(40px,6vw,80px)", textAlign: "center" }}>
        <Mx w={500}><Rv>
          <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color: T.gold, opacity: .4, marginBottom: 16 }}>A Note on Scale</div>
          <p style={{ fontFamily: F.display, fontSize: "clamp(16px,2vw,20px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.6, color: TX.onDarkSub }}>Every room is sized for its purpose. Some hold a handful. Some hold over a hundred. The number is never random. The price of each experience reflects the craft behind it. Each new city begins with a host, not a building. A person trained in the practice of composition who opens a room of their own. The ?use scales through people, not property.</p>
        </Rv></Mx>
      </section>

      {/* Warming. explore more */}
      <section style={{ background: T.bg2, padding: "clamp(28px,4vh,40px) clamp(40px,6vw,80px)" }}>
        <Mx w={520}>

          <Rv delay={200}>
            <div style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: "clamp(24px,4vw,48px)", flexWrap: "wrap" }}>
              <Link href={getHref("programme")} {...hp} style={{ fontFamily: F.display, fontSize: "clamp(14px,3.2vw,16px)", fontWeight: 400, fontStyle: "italic", color: T.rose, cursor: "none", borderBottom: `1px solid ${T.rose}40`, paddingBottom: 3, transition: "border-color .3s", textDecoration: "none" }}
                onMouseEnter={e => { setHov(true); e.target.style.borderBottomColor = T.rose; }}
                onMouseLeave={e => { setHov(false); e.target.style.borderBottomColor = `${T.rose}40`; }}
              >See the programme</Link>
              <Link href={getHref("founder")} {...hp} style={{ fontFamily: F.display, fontSize: "clamp(14px,3.2vw,16px)", fontWeight: 400, fontStyle: "italic", color: T.rose, cursor: "none", borderBottom: `1px solid ${T.rose}40`, paddingBottom: 3, transition: "border-color .3s", textDecoration: "none" }}
                onMouseEnter={e => { setHov(true); e.target.style.borderBottomColor = T.rose; }}
                onMouseLeave={e => { setHov(false); e.target.style.borderBottomColor = `${T.rose}40`; }}
              >Meet the host</Link>
            </div>
          </Rv>

        </Mx>
      </section>

      {/* CTA. copper */}
      <section style={{ background: `linear-gradient(145deg,${T.copper},#C47A3A,#8A4A1A)`, padding: "clamp(40px,5vh,56px) clamp(40px,6vw,80px)", textAlign: "center" }}>
        <Mx w={500}><Rv>
          <p style={{ fontFamily: F.display, fontSize: "clamp(18px,2.5vw,24px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.45, color: T.copperDk, marginBottom: 8 }}>The next room is being composed. It will not be composed this way again.</p>
          <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 400, color: "rgba(13,1,24,.4)", marginBottom: 24, letterSpacing: ".05em" }}>Introductions are reviewed weekly. If there is alignment, the conversation continues.</p>
          <Link href={getHref("apply")} {...hp} aria-label="Introduce yourself to the House" style={{ background: "rgba(13,1,24,.06)", cursor: "none", border: `1px solid rgba(13,1,24,.18)`, padding: "16px 44px", fontFamily: F.body, fontSize: "clamp(10px,2.2vw,11px)", fontWeight: 500, letterSpacing: ".32em", textTransform: "uppercase", color: T.copperDk, transition: "border-color .4s,background .4s,color .4s,opacity .4s", textDecoration: "none", display: "inline-block" }}
            onMouseEnter={e => { setHov(true); e.target.style.background = "rgba(13,1,24,.12)"; }}
            onMouseLeave={e => { setHov(false); e.target.style.background = "rgba(13,1,24,.06)"; }}
            aria-label="Introduce yourself to the House">Introduce Yourself</Link>
        </Rv></Mx>
      </section>
    </>
  );
}
