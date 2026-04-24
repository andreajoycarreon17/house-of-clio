"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSiteChrome } from "@/components/layout/site-context";
import { CW, FAQ_DATA, FOUNDERS } from "@/data/formats";
import { getHref } from "@/lib/routes";
import { BTN, Dv, F, GoldLine, IMG, ImgPlace, Lbl, MarkLayer, Mx, Orb, PersonSilhouette, RealImg, Rv, Sec, T, TX, CI, CM } from "@/components/shared";
import EditorialImage from "@/components/EditorialImage";
import { BRAND_AKAN, AKAN_O, BRAND_AKAN_UPPER } from "@/lib/brand";
import { Testimonials } from "@/components/Testimonials";

export default function FounderPage() {
  const router = useRouter();
  const { hp, setHov, mouse, ld, trackInteraction } = useSiteChrome();
  const go = (target) => router.push(getHref(target));
  const [slide, setSlide] = useState(0);
  useEffect(() => { const timer = setInterval(() => setSlide((value) => (value + 1) % FOUNDERS.length), 6000); return () => clearInterval(timer); }, []);

  return (
    <>
      {/* Deep aubergine surround */}
      <Sec bg={T.bg} style={{ paddingTop: "clamp(80px,10vh,120px)", paddingBottom: "clamp(60px,8vh,100px)" }}>
        <Mx w={920}>

          {/* Title above the journal */}
          <Rv>
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color: T.cream, marginBottom: 10 }}>An Open Letter</div>
              <h1 style={{ fontFamily: F.display, fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 400, color: T.rose, lineHeight: 1 }}>Gigi Brown</h1>
              <div style={{ width: 40, height: 1, background: `linear-gradient(90deg,transparent,${T.copper},transparent)`, margin: "16px auto 0" }} />
              <p data-speakable="true" style={{ fontFamily: F.body, fontSize: 11, fontWeight: 300, lineHeight: 1.9, color: TX.onDarkMuted, maxWidth: 480, margin: "14px auto 0", textAlign: "center", letterSpacing: ".02em" }}>Gigi Brown is the host of {BRAND_AKAN}, a private cultural house in London. Born in Ghana, she has twenty years of experience composing rooms across three continents in tourism, conference production, and cultural hospitality. She built the {AKAN_O}use because she lived the problem: a full diary, a wide network, and no room worth her evening. She reads every application, writes every guest portrait, and decides who sits beside whom. The model is designed to operate in any city with the right density of considered people.</p>
            </div>

            {/* THE OPEN JOURNAL */}
            <div style={{ position: "relative" }}>

              {/* Copper binder outline */}
              <div style={{ position: "absolute", inset: -6, border: `2px solid ${T.copper}`, zIndex: 0 }} />
              <div style={{ position: "absolute", inset: -2, border: `1px solid ${T.rose}40`, zIndex: 0 }} />

              {/* The book */}
              <div className="g2" style={{
                position: "relative", zIndex: 1,
                display: "grid", gridTemplateColumns: "1fr 1fr",
                background: T.cream,
                boxShadow: "0 30px 100px rgba(0,0,0,.4), 0 4px 12px rgba(0,0,0,.2), inset 0 0 120px rgba(201,149,108,.03)",
                minHeight: 600,
              }}>

                {/* LEFT PAGE */}
                <div className="book-border" style={{ position: "relative", overflow: "hidden", borderRight: "1px solid rgba(201,149,108,.08)" }}>
                  {/* Ruled lines */}
                  <div className="book-line" style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(0deg,transparent,transparent 31px,rgba(201,149,108,.05) 31px,rgba(201,149,108,.05) 32px)", pointerEvents: "none" }} />
                  {/* Red margin */}
                  <div className="book-line" style={{ position: "absolute", left: "clamp(24px,4vw,52px)", top: 0, bottom: 0, width: 1, background: "rgba(192,80,77,.04)", pointerEvents: "none" }} />

                  <div style={{ position: "relative", zIndex: 2, padding: "clamp(28px,4vh,48px) clamp(24px,4vw,40px) clamp(28px,4vh,48px) clamp(28px,6vw,72px)" }}>
                    {/* Page header */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 36, paddingBottom: 12, borderBottom: `1px solid rgba(201,149,108,.08)` }}>
                      <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color: TX.onLightMuted, opacity: .5 }}>Your Host</div>
                      <div style={{ fontFamily: F.display, fontSize: 11, fontWeight: 400, fontStyle: "italic", color: TX.onLightMuted, opacity: .4 }}>i</div>
                    </div>

                    {/* Gigi header */}
                    <div style={{ marginBottom: 32 }}>
                      <div style={{ fontFamily: F.display, fontSize: "clamp(28px,5vw,36px)", fontWeight: 400, color: T.rose, lineHeight: 1, marginBottom: 6 }}>Gigi Brown</div>
                      <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 400, letterSpacing: ".25em", color: T.copper }}>Host · {BRAND_AKAN}</div>
                    </div>

                    {/* Left page entries */}
                    {[
                      { t: "I know what a good room smells like. Sounds like. Tastes like. Feels like.", s: "b" },
                      { t: "I know the precise second when a room of strangers tilts into a room of friends. There is a warmth that arrives. A shift in the shoulders. The laughter changes register. Someone forgets themselves long enough to say something true.", s: "b" },
                      { t: null },
                      { t: "I spent twenty years learning to produce that second.", s: "e" },
                      { t: null },
                      { t: "And I could not produce it for myself.", s: "e" },
                      { t: null },
                      { t: "A full diary. Handsome invitations. But no one I could telephone on a Sunday simply to ask how are you, without it bending towards business within five minutes. I wanted to celebrate someone without them needing to purchase from me. I wanted to be held in regard without being useful. I wanted a friendship that did not arrive with an invoice.", s: "b" },
                      { t: null },
                      { t: "I have composed rooms in Marrakech, Dublin, Piedmont, and Lisbon. I once placed a retired general beside a twenty three year old poet and watched them talk for three hours about patience. I have seen a hedge fund manager weep quietly in a room in Puglia because someone asked him, quite gently, what he actually cared about.", s: "b" },
                      { t: null },
                      { t: "And in Liguria, on a terrace above the sea where the jasmine grows thick and the air is warm enough to eat outside until midnight, I learned the thing that changed everything I do. That the length of a meal is a measure of how much you value the people in it. That la bella figura is not vanity. It is the discipline of considering every detail so that the people around you feel considered. That you feed someone before you ask their name. I carry that heat, that patience, that refusal to rush into every room I compose.", s: "b" },
                      { t: null },
                      { t: "I know how to build a room that stays with people long after the candles have burned down.", s: "e" },
                      { t: null },
                      { t: "I looked at what existed. Nothing was designed around the thing people actually long for.", s: "b" },
                      { t: null },
                      { t: "Someone good to spend time with.", s: "e" },
                      { t: null },
                      { t: "I have spent twenty years reading rooms in Dubai, Accra, Marrakech, and London. I speak three languages. I cook from two continents. I carry Ga warmth and Akan precision and the Italian conviction that nothing worth composing should ever feel rushed. That is not a skill you learn in a course. It is a life spent paying attention to what happens when the right people are in the same room.", s: "b" },
                      { t: null },
                      { t: <>The {AKAN_O}use is not my first room. It is the room I have been composing my entire life.</>, s: "e" },
                    ].map((ln, i) => {
                      if (!ln || !ln.t) return <div key={i} style={{ height: 24 }} />;
                      return <p key={i} style={{
                        fontFamily: ln.s === "e" ? F.display : F.body,
                        fontSize: ln.s === "e" ? 19 : 14,
                        fontWeight: ln.s === "e" ? 400 : 400,
                        fontStyle: ln.s === "e" ? "italic" : "normal",
                        lineHeight: ln.s === "e" ? 1.5 : 2.3,
                        color: ln.s === "e" ? "#A05025" : "#2E1240",
                        marginBottom: ln.s === "e" ? 6 : 2,
                      }}>{ln.t}</p>;
                    })}

                    <div style={{ position: "absolute", bottom: 24, left: 72, fontFamily: F.display, fontSize: 11, fontWeight: 400, color: TX.onLightMuted, opacity: .3 }}>1</div>
                  </div>
                </div>

                {/* CENTRE SPINE */}
                <div className="book-spine" style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 0, zIndex: 10, transform: "translateX(-50%)" }}>
                  <div style={{ position: "absolute", left: 0, top: 24, bottom: 24, width: 1, background: `linear-gradient(180deg,transparent,${T.copper}40,${T.copper}30,${T.copper}40,transparent)`, transform: "translateX(-50%)" }} />
                </div>

                {/* RIGHT PAGE */}
                <div style={{ position: "relative", overflow: "hidden" }}>
                  {/* Ruled lines */}
                  <div className="book-line" style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(0deg,transparent,transparent 31px,rgba(201,149,108,.05) 31px,rgba(201,149,108,.05) 32px)", pointerEvents: "none" }} />

                  <div style={{ position: "relative", zIndex: 2, padding: "clamp(28px,4vh,48px) clamp(24px,5vw,48px) clamp(28px,4vh,48px) clamp(24px,4vw,40px)" }}>
                    {/* Page header */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 36, paddingBottom: 12, borderBottom: `1px solid rgba(201,149,108,.08)` }}>
                      <div style={{ fontFamily: F.display, fontSize: 11, fontWeight: 400, fontStyle: "italic", color: TX.onLightMuted, opacity: .4 }}>ii</div>
                      <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", color: TX.onLightMuted, opacity: .5 }}>{BRAND_AKAN_UPPER}</div>
                    </div>

                    {/* Right page entries */}
                    {[
                      { t: "So I composed a room. A small group of people who had never shared a room, let alone a conversation. Good linen. Good wine. No business cards. No agenda. Just the quiet gamble that strangers, seated well, become something more than strangers.", s: "b" },
                      { t: null },
                      { t: "Before anyone arrived, I sent each of them a note about who else would be in the room. Not their profession. What fascinates them. Where they have lived. What they carry into a room when they think nobody is watching.", s: "b" },
                      { t: null },
                      { t: "By half past ten, two people who had met three hours earlier were making plans to visit each other in different countries. Someone was crying with laughter. Nobody had glanced at their phone. Nobody had asked what anyone did for a living.", s: "b" },
                      { t: null },
                      { t: "That single supper taught me what twenty years of professional hosting never quite had.", s: "e" },
                      { t: null },
                      { t: "Everybody designs the venue. Everybody fusses over the menu. Nobody thinks carefully enough about the people. The people are the room.", s: "b" },
                      { t: null },
                      { t: "I wanted a room that felt like everything.", s: "e" },
                      { t: null },
                      { t: <>The {AKAN_O}use is what followed. A private cultural house where the guests are composed with the same deliberation as the destination. Private dining in London. Supper lectures where someone says the thing the room was thinking. Journeys to places you would not find alone with people who make you braver than you are at home.</>, s: "b" },
                      { t: null },
                      { t: "The name comes from my heritage. The Ɔ is Akan. Ghanaian. It carries the sound of the English H. I liked that a European cultural form could be rooted in an African letter. That felt exactly right.", s: "b" },
                      { t: null },
                      { t: "I am not building a club. I am building the room that should have existed ten years ago. If it had, I would not have had to build it myself.", s: "e" },
                      { t: null },
                      { t: "A standard for how thoughtful people ought to meet. For how a room deserves to be composed. For what becomes possible when someone takes the trouble to consider who should sit beside whom, and why.", s: "b" },
                      { t: null },
                      { t: "This is not a House for people who wish to be seen. It is a House for people who wish to be known.", s: "e" },
                      { t: null },
                      { t: "If that is you, I should very much like to meet you.", s: "b" },
                      { t: null },
                      { t: "If not now, when?", s: "e" },
                    ].map((ln, i) => {
                      if (!ln || !ln.t) return <div key={i} style={{ height: 24 }} />;
                      return <p key={i} style={{
                        fontFamily: ln.s === "e" ? F.display : F.body,
                        fontSize: ln.s === "e" ? 19 : 14,
                        fontWeight: 400,
                        fontStyle: ln.s === "e" ? "italic" : "normal",
                        lineHeight: ln.s === "e" ? 1.5 : 2.3,
                        color: ln.s === "e" ? "#A05025" : "#2E1240",
                        marginBottom: ln.s === "e" ? 6 : 2,
                      }}>{ln.t}</p>;
                    })}

                    {/* Signature */}
                    <div style={{ marginTop: 32, paddingTop: 16, borderTop: `1px solid ${T.copper}30` }}>
                      <div style={{ fontFamily: F.display, fontSize: "clamp(22px,4vw,28px)", fontWeight: 400, fontStyle: "italic", color: T.rose, marginBottom: 4 }}>Gigi</div>
                      <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 300, color: TX.onLightMuted, letterSpacing: ".12em" }}>London · MMXXVI</div>
                    </div>

                    <div style={{ position: "absolute", bottom: 24, right: 48, fontFamily: F.display, fontSize: 11, fontWeight: 400, color: TX.onLightMuted, opacity: .3 }}>2</div>
                  </div>
                </div>
              </div>
            </div>
          </Rv>

          {/* === ABOUT GIGI. below the journal === */}
          <Rv delay={150}>
            <div style={{ maxWidth: 700, margin: "56px auto 0" }}>

              {/* Portrait — Gigi Brown */}
              <div style={{ marginBottom: 2 }}>
                <EditorialImage
                  src="/images/founder/gigi-brown-portrait.jpg"
                  alt="Portrait of Gigi Brown, founder of The House of Clio. Natural light."
                  ratio="3/4"
                  priority
                />
              </div>

              {/* === BIO. on copper card === */}
              <div style={{ position: "relative", overflow: "hidden" }}>
                <div style={{ height: 3, background: `linear-gradient(90deg,${T.copper},${T.gold}40,transparent)` }} />
                <div style={{ background: `linear-gradient(155deg,${T.copper} 0%,#C47A3A 35%,#8A4A1A 100%)`, padding: "clamp(40px,5vh,56px) clamp(36px,5vw,48px)", position: "relative" }}>
                  <div style={{ position: "absolute", top: "-20%", right: "-5%", width: "40%", height: "140%", background: "radial-gradient(ellipse,rgba(250,244,238,.06),transparent 70%)", pointerEvents: "none" }} />
                  <div style={{ position: "relative", zIndex: 2 }}>
                    {/* Name + avatar row */}
                    <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 28 }}>
                      <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(13,1,24,.12)", border: `1.5px solid rgba(13,1,24,.15)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <div style={{ fontFamily: F.display, fontSize: "clamp(22px,4vw,26px)", fontWeight: 400, color: T.copperDk, opacity: .5 }}>G</div>
                      </div>
                      <div>
                        <div style={{ fontFamily: F.display, fontSize: "clamp(24px,3vw,32px)", fontWeight: 400, color: T.copperDk, lineHeight: 1 }}>Gigi Brown</div>
                        <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 400, letterSpacing: ".2em", color: "rgba(13,1,24,.45)", marginTop: 6 }}>Host · {BRAND_AKAN} · London</div>
                      </div>
                    </div>
                    <div style={{ width: 40, height: 1.5, background: `linear-gradient(90deg,rgba(13,1,24,.2),transparent)`, marginBottom: 24 }} />

                    {/* Bio paragraphs */}
                    {[
                      "Born in Ghana. Made in West London. Ealing, to be specific. The kind of neighbourhood where your next door neighbour is from Killarney, the family across the road is from Kraków, and the woman at the corner shop remembers your name and your order. I grew up curious about everyone. I still am.",
                      "Twenty years in tourism, conference production, and incentive travel across three continents. I founded Inska Hub. Co-founded Accra Konnect. Moved to Ghana during Covid and spent three years composing rooms from nothing. Every summer I spend six weeks on the Ligurian coast, where someone once taught me that the length of a meal is a measure of how much you value the people in it. Every city taught me the same thing: the value of any room is decided by who is in it.",
                      <>In 2026, I came home to London and opened the {AKAN_O}use. It carries the warmth of Accra, the precision of Turin, and the conviction that nothing worth composing should ever be rushed.</>,
                    ].map((p, i) => <p key={i} style={{ fontFamily: F.body, fontSize: "clamp(13px,3vw,14px)", fontWeight: 400, lineHeight: 2.1, color: "rgba(13,1,24,.7)", marginBottom: i < 2 ? 14 : 0 }}>{p}</p>)}
                  </div>
                </div>
                <div style={{ height: 1.5, background: `linear-gradient(90deg,${T.copper}40,${T.gold}15,transparent)` }} />
              </div>

              {/* === BEYOND THE ROOM. on cream paper === */}
              <div style={{ marginTop: 2, position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, background: T.cream, zIndex: 0 }} />
                <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(0deg,transparent,transparent 33px,rgba(160,80,37,.03) 33px,rgba(160,80,37,.03) 34px)", pointerEvents: "none", zIndex: 1 }} />
                <div style={{ position: "relative", zIndex: 2, padding: "clamp(36px,4vh,48px) clamp(36px,5vw,48px)" }}>
                  <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".45em", textTransform: "uppercase", color: T.copper, marginBottom: 28 }}>Beyond the Room</div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px 32px" }} className="g1">
                    {[
                      { label: "Duality", text: "Ga and Akan. Two tribes. Two ways of reading a room. Accra taught me warmth. London taught me restraint. Italy taught me that both can exist in the same breath." },
                      { label: "Kitchen", text: "Jollof is not negotiable. I also cook from a kitchen in Liguria. Fewer ingredients. More patience. Never rush the sauce." },
                      { label: "Soil", text: "Certified horticulturalist. I treat soil the way I treat a guest list. Some things bloom together. Some things do not." },
                      { label: "Hands", text: "I crochet blankets for every baby born to someone I love. Some people meditate. I count stitches." },
                      { label: "Restless", text: "No television in fifteen years. Crochet hook. Trowel. Wooden spoon. Racing bike. I was built to move." },
                      { label: "Morning", text: "Up before anyone. Garden first. Hands in the soil. Kettle on. The day does not begin until something has been watered." },
                    ].map((item, i) => <div key={i}>
                      <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".2em", textTransform: "uppercase", color: T.copper, marginBottom: 6 }}>{item.label}</div>
                      <p style={{ fontFamily: F.body, fontSize: 12, fontWeight: 400, lineHeight: 1.8, color: TX.onLight }}>{item.text}</p>
                    </div>)}
                  </div>

                  {/* Liguria. one breath */}
                  <div style={{ marginTop: 28, paddingTop: 24, borderTop: `1px solid rgba(160,80,37,.08)` }}>
                    <p style={{ fontFamily: F.display, fontSize: "clamp(14px,3.2vw,16px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.75, color: T.bg, maxWidth: 540 }}>Every summer for twenty years. Six weeks on the Italian Riviera. A fuchsia pink racing bike on the cliff roads above the sea. Jasmine and salt and warm stone. Espresso in a village where nobody is in a hurry. Late suppers on the terrace while the sky turns copper. Everything I compose at the {AKAN_O}use begins on that coastline.</p>
                  </div>

                  {/* Why Her. The qualification */}
                  <div style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid rgba(160,80,37,.08)` }}>
                    <p style={{ fontFamily: F.display, fontSize: 15, fontWeight: 400, fontStyle: "italic", lineHeight: 1.7, color: T.bg, opacity: .7 }}>Ga and Akan. Three languages. Four cities. Twenty years of composing rooms across three continents. She reads a room the way a conductor reads an orchestra. She has been doing this her entire life. She simply gave it a name.</p>
                  </div>
                </div>
              </div>

              {/* === EXPERTISE. full authority panel === */}
              <div style={{ marginTop: 44, position: "relative", overflow: "hidden" }}>

                {/* Copper top bar */}
                <div style={{ height: 3, background: `linear-gradient(90deg,${T.copper},${T.gold}40,transparent)`, marginBottom: 0 }} />

                <div style={{ background: `linear-gradient(160deg,${T.damson} 0%,#1E0628 40%,${T.bg} 100%)`, padding: "clamp(40px,5vh,56px) clamp(36px,5vw,48px)", position: "relative", overflow: "hidden" }}>

                  {/* Subtle mark watermark */}
                  <div style={{ position: "absolute", top: "10%", right: "5%", opacity: .03, pointerEvents: "none" }}><CI size={200} variant="deep" /></div>

                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ marginBottom: 36 }}>
                      <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color: T.roseL, opacity: .7, marginBottom: 10 }}>Professional Authority</div>
                      <div style={{ fontFamily: F.display, fontSize: "clamp(20px,2.5vw,26px)", fontWeight: 300, fontStyle: "italic", color: T.cream, lineHeight: 1.3 }}>Twenty years. Three continents. One obsession.</div>
                    </div>

                    {/* Three columns. refined grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(20px,3vw,36px)" }} className="g1">
                      {[
                        { t: "Travel and Destinations", items: ["Destination planning", "Incentive travel design", "Sports travel and hospitality", "Experiential travel composition", "European cultural itineraries", "West African hospitality"] },
                        { t: "Events and Production", items: ["Conference production", "Cultural experience design", "Awards and gala production", "Celebration design by arrangement", "Guest composition and seating"] },
                        { t: "Circle and Brand", items: ["Circle architecture", "Cultural circle development", "Diaspora engagement", "Hospitality consultancy"] },
                      ].map((col, ci) => <div key={ci}>
                        <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".35em", textTransform: "uppercase", color: T.roseL, opacity: .8, marginBottom: 16, paddingBottom: 10, borderBottom: `1px solid rgba(201,149,108,.15)` }}>{col.t}</div>
                        {col.items.map((k, i) => <div key={i} style={{ fontFamily: F.body, fontSize: "clamp(11px,2.5vw,12px)", fontWeight: 300, color: "rgba(250,244,238,.85)", padding: "10px 0", borderBottom: i < col.items.length - 1 ? `1px solid rgba(201,149,108,.12)` : "none", letterSpacing: ".02em" }}>{k}</div>)}
                      </div>)}
                    </div>

                    {/* Cities */}
                    <div style={{ marginTop: 36, paddingTop: 24, borderTop: `1px solid rgba(201,149,108,.12)` }}>
                      <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".35em", textTransform: "uppercase", color: T.roseL, opacity: .6, marginBottom: 12 }}>Cities Composed</div>
                      <p style={{ fontFamily: F.display, fontSize: 16, fontWeight: 300, fontStyle: "italic", color: "rgba(250,244,238,.6)", lineHeight: 1.7 }}>Gigi Brown · Host, {BRAND_AKAN} · Accra · Dublin · Marrakech · Edinburgh · Turin · Liguria · Piedmont · Lisbon · Puglia · Dubai · London</p>
                    </div>
                  </div>
                </div>

                {/* Copper bottom bar */}
                <div style={{ height: 1.5, background: `linear-gradient(90deg,${T.copper}40,${T.gold}15,transparent)` }} />
              </div>

              {/* Atmospheric. Gigi at work */}
              <Rv><div style={{ marginTop: 32 }}>
                <EditorialImage
                  src="/images/founder/ligurian-coast.jpg"
                  alt="The Ligurian coast. Where Gigi Brown first learned to compose a room."
                  ratio="21/9"
                />
              </div></Rv>

              {/* Obsession / Origin / Belief / Craft. rose gold */}
              <div style={{ marginTop: 44, padding: "36px 0" }}>
                {[
                  { label: "Obsession", text: "The composition of a room. Not the food, not the venue, not the view. The people. I have served a long dinner in London to the wrong twelve people and watched the evening die by the main course. And I have sat on a plastic chair in Accra with a bowl of rice and the right six people and talked until the power cut and nobody moved. Who belongs beside whom is everything. Most people leave that to chance. I have spent my entire life refusing to." },
                  { label: "Origin", text: <>Three places taught me what a room should feel like. In Accra, you do not eat alone. A stranger at your door is fed before they are asked their name. In London, you can live beside someone for ten years and never learn their first name. And on the Ligurian coast, where I have kept a life for twenty years, I learned something else entirely. That beauty is discipline. That the smell of jasmine through an open window is not an accident but a decision someone made. That the best evenings are the ones nobody planned to end. The {AKAN_O}use carries all three: the warmth of Ghana, the sophistication of London, and the Italian refusal to rush anything worth savouring.</> },
                  { label: "Belief", text: "Adult friendship should not be left to chance. The best rooms in the world are not found. They are composed. By someone who has eaten in enough kitchens and slept in enough cities and listened in enough languages to know what happens when the right people are placed beside each other. Not as a transaction. As a devotion. That is what I do. I have always done it. I simply stopped doing it for other people and started doing it for the room I wanted to be in." },
                  { label: "Craft", text: <>Every room I compose is built by hand. I read every application myself. I write every guest profile myself. I consider who belongs beside whom myself. It is a practice that takes years to learn. The {AKAN_O}use does not scale through buildings. It deepens through hosts. And in each new city, a host trained in this practice opens a room of their own. The training is an apprenticeship. You learn by sitting beside someone who has done it a thousand times.</> },
                ].map((item, i) => (
                  <div key={i} style={{ marginBottom: i < 3 ? "clamp(32px,4vh,44px)" : 0, paddingBottom: i < 3 ? "clamp(32px,4vh,44px)" : 0, borderBottom: i < 3 ? `1px solid ${T.rose}10` : "none" }}>
                    <h2 style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".35em", textTransform: "uppercase", color: T.rose, marginBottom: "clamp(14px,2vh,20px)", margin: "0 0 clamp(14px,2vh,20px)" }}>{item.label}</h2>
                    <p style={{ fontFamily: F.body, fontSize: "clamp(13px,3vw,14px)", fontWeight: 400, lineHeight: 2.15, color: TX.onDarkSub }}>{item.text}</p>
                    {/* IMAGE SLOT — Inside Origin section */}
                    {item.label === "Origin" && (
                      <div style={{ marginTop: 24 }}>
                        <EditorialImage
                          src="/images/founder/origin-accra.jpg"
                          alt="Accra, Ghana. The origin of Gigi Brown's approach to hospitality."
                          ratio="16/9"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div style={{ marginTop: 36, paddingTop: 24, borderTop: `1px solid rgba(201,149,108,.06)` }}>
                {/* <p style={{ fontFamily: F.body, fontSize: "clamp(11px,2.5vw,12px)", fontWeight: 400, color: TX.onDarkMuted, lineHeight: 1.9 }}>
                  gigi@thehouseofclio.com<br />
                  thehouseofclio.com
                </p> */}
                <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 300, color: TX.onDarkMuted, opacity: .6, marginTop: 8, fontStyle: "italic" }}>
                  A personal note reaches her through the{" "}
                  <Link href="/contact" style={{ color: T.rose, textDecoration: "none", borderBottom: `1px solid ${T.rose}30` }}>contact form</Link>.
                  {" "}Every message is read.
                </p>
              </div>
            </div>
          </Rv>

          {/* Cross-links */}
          <Rv delay={200}>
            <div style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: "clamp(24px,4vw,48px)", flexWrap: "wrap" }}>
              <Link href={getHref("programme")} {...hp} style={{ fontFamily: F.display, fontSize: "clamp(14px,3.2vw,16px)", fontWeight: 400, fontStyle: "italic", color: T.rose, cursor: "none", borderBottom: `1px solid ${T.rose}40`, paddingBottom: 3, transition: "border-color .3s", textDecoration: "none" }}
                onMouseEnter={e => { setHov(true); e.target.style.borderBottomColor = T.rose; }}
                onMouseLeave={e => { setHov(false); e.target.style.borderBottomColor = `${T.rose}40`; }}
              >See what she composes</Link>
              <Link href={getHref("journal")} {...hp} style={{ fontFamily: F.display, fontSize: "clamp(14px,3.2vw,16px)", fontWeight: 400, fontStyle: "italic", color: T.rose, cursor: "none", borderBottom: `1px solid ${T.rose}40`, paddingBottom: 3, transition: "border-color .3s", textDecoration: "none" }}
                onMouseEnter={e => { setHov(true); e.target.style.borderBottomColor = T.rose; }}
                onMouseLeave={e => { setHov(false); e.target.style.borderBottomColor = `${T.rose}40`; }}
              >Read her thinking</Link>
            </div>
          </Rv>

          {/* Testimonials — before CTA */}
          <Rv delay={200}>
            <section style={{ marginTop: 48 }}>
              <p style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color: T.gold, opacity: 0.45, textAlign: "center", marginBottom: 0 }}>What people say</p>
              <Testimonials category="founding_member" limit={3} />
            </section>
          </Rv>

          {/* CTA */}
          <Rv delay={250}>
            <div style={{ marginTop: 48, textAlign: "center" }}>
              <p style={{ fontFamily: F.display, fontSize: "clamp(14px,3.2vw,16px)", fontWeight: 400, fontStyle: "italic", color: TX.onDarkMuted, marginBottom: 20 }}>You have read this far. That tells me something. Introduce yourself.</p>
              <Link href={getHref("apply")} {...hp} className="btn-shine" aria-label="Introduce yourself to the House" style={{ background: "rgba(201,149,108,.06)", cursor: "none", border: `1px solid rgba(201,149,108,.25)`, padding: "16px 44px", fontFamily: F.body, fontSize: "clamp(10px,2.2vw,11px)", fontWeight: 500, letterSpacing: ".32em", textTransform: "uppercase", color: T.rose, transition: "border-color .4s,background .4s,color .4s,opacity .4s", textDecoration: "none", display: "inline-block" }}
                onMouseEnter={e => { setHov(true); e.target.style.borderColor = T.rose; e.target.style.background = "rgba(201,149,108,.12)"; }}
                onMouseLeave={e => { setHov(false); e.target.style.borderColor = "rgba(201,149,108,.25)"; e.target.style.background = "rgba(201,149,108,.06)"; }}
              >Introduce Yourself</Link>
            </div>
          </Rv>
        </Mx>
      </Sec>
    </>
  );
}
