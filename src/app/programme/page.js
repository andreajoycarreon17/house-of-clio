"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSiteChrome } from "@/components/layout/site-context";
import { CW, FAQ_DATA, FOUNDERS } from "@/data/formats";
import { getHref } from "@/lib/routes";
import { BTN, Dv, F, GoldLine, IMG, ImgPlace, Lbl, MarkLayer, Mx, Orb, PersonSilhouette, RealImg, Rv, Sec, T, TX, CI, CM } from "@/components/shared";
import { BRAND_AKAN, AKAN_O } from "@/lib/brand";

export default function ProgrammePage() {
  const router = useRouter();
  const { hp, setHov, mouse, ld, trackInteraction } = useSiteChrome();
  const go = (target) => router.push(getHref(target));


  return (
    <>
      {/* === INTRO === */}
      <Sec bg={T.bg}>
        <Mx w={560}><Rv>
          <div style={{ textAlign: "center" }}>
            <Lbl>The Programme</Lbl>
            <h1 style={{ fontFamily: F.display, fontSize: "clamp(36px,5vw,58px)", fontWeight: 400, lineHeight: .92, color: T.cream, marginBottom: 28 }}>Twelve formats.<br /><em style={{ color: T.rose }}>One standard.</em></h1>
            <Dv w="48px" m="0 auto 28px" />
            <p style={{ fontFamily: F.body, fontSize: "clamp(14px,3.2vw,15px)", fontWeight: 300, lineHeight: 2, color: TX.onDarkSub, maxWidth: "42ch", margin: "0 auto" }}>Most rooms are designed for volume. These are designed for depth. Seven seasonal rooms composed by hand and never repeated. Three recurring formats that bring people back. Two Societies led by the Circle. A system designed so the longer you stay, the richer it becomes.</p>
            <p style={{ fontFamily: F.body, fontSize: 12, fontWeight: 300, lineHeight: 1.9, color: TX.onDarkMuted, maxWidth: "44ch", margin: "16px auto 0", fontStyle: "italic" }}>You begin with a single evening. You return for The Returning Table. You recognise faces. You travel together. The value compounds with every room you enter. That is the architecture.</p>
            <p data-speakable="true" style={{ fontFamily: F.body, fontSize: 11, fontWeight: 300, lineHeight: 1.9, color: TX.onDarkMuted, maxWidth: "48ch", margin: "14px auto 0", letterSpacing: ".02em" }}>The seasonal programme of {BRAND_AKAN} in London. Twelve formats including composed private dinners for eighteen, supper lectures for twenty-eight, cycling journeys, city escapes to Paris and Dublin, Grand Journeys through Puglia and Marrakech, and The Returning Table which meets every two to three weeks so the same people see each other again.</p>
          </div>
        </Rv></Mx>
      </Sec>

      {/* Atmospheric. a composed evening */}
      <section style={{ background: T.bg2, padding: "0 clamp(40px,6vw,80px)" }}>
        <Mx w={900}><Rv><RealImg src={IMG.wine} alt={`Wine being poured at a composed gathering. ${BRAND_AKAN}, London.`} h={240} aspect="21/9" /></Rv></Mx>
      </section>

      {/* === THE SEVEN ROOMS === */}

      {/* I. THE FIRST HOUSE. hero */}
      <section style={{ background: T.bg2, padding: "2px clamp(40px,6vw,80px) 0" }}>
        <Mx w={900}><Rv>
          <div style={{ position: "relative", overflow: "hidden", background: `linear-gradient(145deg,${T.copper} 0%,#C47A3A 40%,#8A4A1A 100%)`, display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center" }} className="g1">
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${T.gold},${T.copper},transparent)` }} />
            <div style={{ position: "relative", zIndex: 2, padding: "clamp(44px,6vh,64px) clamp(36px,5vw,52px)" }}>
              <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".6em", textTransform: "uppercase", color: "rgba(13,1,24,.2)", marginBottom: 16 }}>I</div>
              <h2 style={{ fontFamily: F.display, fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 400, fontStyle: "italic", color: T.copperDk, lineHeight: 1.05, marginBottom: 6 }}>
                <Link href="/programme/the-first-house" style={{ color: "inherit", textDecoration: "none" }}>The First House</Link>
              </h2>
              <div style={{ width: 40, height: 2, background: `linear-gradient(90deg,${T.copperDk}40,transparent)`, marginBottom: 20 }} />
              <p style={{ fontFamily: F.body, fontSize: "clamp(13px,3vw,14px)", fontWeight: 400, lineHeight: 2, color: "rgba(13,1,24,.5)", maxWidth: "42ch" }}>Twenty-four people. The opening of each season. Not an evening. A morning. An activity designed so people work side by side before they sit down together. By the time lunch arrives, nobody is introducing themselves. The room has already formed. The First House does in half a day what most events fail to do in an entire weekend: it turns a room of strangers into people who will see each other again. This is where the Circle begins.</p>
              <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 300, color: "rgba(13,1,24,.3)", marginTop: 14, fontStyle: "italic" }}>Everyone remembers their First House. Most say it felt like arriving somewhere they had always been.</p>
              <div style={{ marginTop: 20, fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".3em", color: "rgba(13,1,24,.2)" }}>24 places · London · Seasonal</div>
            </div>
            <div style={{ paddingRight: "clamp(20px,3vw,48px)", opacity: .1, display: "flex", alignItems: "center" }}><CI size={140} variant="copper" /></div>
          </div>
        </Rv></Mx>
      </section>

      {/* II + III */}
      <section style={{ background: T.bg2, padding: "2px clamp(40px,6vw,80px)" }}>
        <Mx w={900}>
          <div className="g2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "clamp(10px,1.5vw,18px)" }}>
            <Rv>
              <div className="card-glow" style={{ background: `linear-gradient(160deg,${T.cream},${T.offW})`, padding: "clamp(36px,4vh,48px) clamp(28px,4vw,40px)", height: "100%", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${T.rose},${T.gold}30,transparent)` }} />
                <MarkLayer layer={2} size={140} color="rgba(201,168,76,.3)" style={{ top: "8%", right: "6%" }} />
                <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color: T.rose, opacity: .55, marginBottom: 18, position: "relative", zIndex: 1 }}>II</div>
                <h2 style={{ fontFamily: F.display, fontSize: "clamp(24px,3vw,32px)", fontWeight: 400, fontStyle: "italic", color: T.bg, lineHeight: 1.1, marginBottom: 8, position: "relative", zIndex: 1 }}>
                  <Link href="/programme/the-evening" style={{ color: "inherit", textDecoration: "none" }}>The Evening</Link>
                </h2>
                <div style={{ fontFamily: F.body, fontSize: "clamp(11px,2.5vw,12px)", fontWeight: 400, color: T.rose, fontStyle: "italic", opacity: .8, marginBottom: 18 }}>Eighteen strangers. One room. One evening. Never this configuration again.</div>
                <div style={{ width: 36, height: 1.5, background: `linear-gradient(90deg,${T.rose},transparent)`, marginBottom: 18 }} />
                <p style={{ fontFamily: F.body, fontSize: 14, fontWeight: 400, lineHeight: 2.1, color: TX.onLight, marginBottom: 8 }}>The flagship room. Every person is new to you and to each other. The seating is composed so the most unexpected conversations happen between people who would never otherwise meet. Low light. Three courses. By dessert, nobody wants to leave. This room is composed once and never repeated. The next Evening will hold entirely different people. That is the point. You come for the electricity of the unknown.</p>
                <p style={{ fontFamily: F.body, fontSize: "clamp(11px,2.5vw,12px)", fontWeight: 300, color: T.rose, fontStyle: "italic", opacity: .75, marginTop: 14 }}>Not everyone who asks is placed.</p>
              </div>
            </Rv>

            <Rv delay={80}>
              <div className="card-glow" style={{ background: `linear-gradient(160deg,#0F051A,${T.bg})`, padding: "clamp(36px,4vh,48px) clamp(28px,4vw,40px)", height: "100%", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${T.gold},${T.rose}25,transparent)` }} />
                <MarkLayer layer={3} size={140} color="rgba(201,168,76,.3)" style={{ top: "8%", right: "6%" }} />
                <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color: T.gold, opacity: .55, marginBottom: 18, lineHeight: 1.2, position: "relative", zIndex: 1 }}>III</div>
                <h2 style={{ fontFamily: F.display, fontSize: "clamp(24px,3vw,32px)", fontWeight: 400, fontStyle: "italic", color: T.cream, lineHeight: 1.1, marginBottom: 8, position: "relative", zIndex: 1 }}>
                  <Link href="/programme/the-supper-lecture" style={{ color: "inherit", textDecoration: "none" }}>The Supper Lecture</Link>
                </h2>
                <div style={{ fontFamily: F.body, fontSize: "clamp(11px,2.5vw,12px)", fontWeight: 400, color: T.gold, fontStyle: "italic", opacity: .7, marginBottom: 18 }}>A formidable mind speaks for thirty minutes. Then stays for dinner with twenty-eight guests.</div>
                <div style={{ width: 36, height: 1.5, background: `linear-gradient(90deg,${T.gold}50,transparent)`, marginBottom: 18 }} />
                <p style={{ fontFamily: F.body, fontSize: 14, fontWeight: 400, lineHeight: 2.1, color: TX.onDarkSub }}>Thirty minutes. One person. Something they have never said on a stage. Then the room opens and the speaker sits down at the table with everyone else. The talk gives the room a shared reference. The dinner is where the real conversation happens. The most interesting exchanges happen in the third hour, when the speaker has loosened their tie and the person beside them has asked the question nobody else would.</p>
                <p style={{ fontFamily: F.body, fontSize: "clamp(11px,2.5vw,12px)", fontWeight: 300, color: T.gold, fontStyle: "italic", opacity: .65, marginTop: 14 }}>The speaker is announced. The guest list is not.</p>
              </div>
            </Rv>
          </div>
        </Mx>
      </section>

      {/* Atmospheric */}
      <section style={{ background: T.bg2, padding: "2px clamp(40px,6vw,80px)" }}>
        <Mx w={900}><Rv><RealImg src={IMG.courtyard} alt={`A courtyard setting for a composed gathering. ${BRAND_AKAN}.`} h={140} aspect="21/9" /></Rv></Mx>
      </section>

      {/* IV + V */}
      <section style={{ background: T.bg2, padding: "2px clamp(40px,6vw,80px)" }}>
        <Mx w={900}>
          <div className="g2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "clamp(10px,1.5vw,18px)" }}>
            <Rv>
              <div className="card-glow" style={{ background: `linear-gradient(160deg,${T.damson},#1E0628,${T.bg})`, padding: "clamp(36px,4vh,48px) clamp(28px,4vw,40px)", height: "100%", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${T.roseL},${T.rose},transparent)` }} />
                <MarkLayer layer={4} size={140} color="rgba(201,168,76,.3)" style={{ top: "8%", right: "6%" }} />
                <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color: T.roseL, opacity: .55, marginBottom: 18, position: "relative", zIndex: 1 }}>IV</div>
                <h2 style={{ fontFamily: F.display, fontSize: "clamp(24px,3vw,32px)", fontWeight: 400, fontStyle: "italic", color: T.cream, lineHeight: 1.1, marginBottom: 8, position: "relative", zIndex: 1 }}>
                  <Link href="/programme/city-escapes" style={{ color: "inherit", textDecoration: "none" }}>City Escapes</Link>
                </h2>
                <div style={{ fontFamily: F.body, fontSize: "clamp(11px,2.5vw,12px)", fontWeight: 400, color: TX.onDarkSub, fontStyle: "italic", marginBottom: 18 }}>Two to three nights. Eighteen people. A city you know, seen through people you did not.</div>
                <div style={{ width: 36, height: 1.5, background: `linear-gradient(90deg,${T.rose}30,transparent)`, marginBottom: 18 }} />
                <p style={{ fontFamily: F.body, fontSize: 14, fontWeight: 400, lineHeight: 2.1, color: "rgba(250,244,238,.6)" }}>Paris. Dublin. Milan. Manchester. The {AKAN_O}use handles everything: the hotel, the restaurant reservations, the transfers, the access. A private gallery opening before the public arrives. A table at a restaurant held because the host knows the chef. A morning walking a neighbourhood with someone who grew up there. Doors that do not open for a booking engine. Every detail arranged by someone who has been before, so you arrive and simply live. Flights are arranged independently. Everything else is handled.</p>
                <p style={{ fontFamily: F.body, fontSize: "clamp(11px,2.5vw,12px)", fontWeight: 300, color: TX.onDarkMuted, fontStyle: "italic", marginTop: 14 }}>Each city once per season. Never repeated.</p>
              </div>
            </Rv>

            <Rv delay={80}>
              <div className="card-glow" style={{ background: `linear-gradient(160deg,${T.damson},#1E0628,#140420)`, padding: "clamp(36px,4vh,48px) clamp(28px,4vw,40px)", height: "100%", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${T.roseL},${T.rose}35,transparent)` }} />
                <MarkLayer layer={5} size={150} color="rgba(201,168,76,.35)" style={{ top: "6%", right: "4%" }} />
                <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color: T.roseL, opacity: .55, marginBottom: 18, position: "relative", zIndex: 1 }}>V</div>
                <h2 style={{ fontFamily: F.display, fontSize: "clamp(24px,3vw,32px)", fontWeight: 400, fontStyle: "italic", color: T.cream, lineHeight: 1.1, marginBottom: 8, position: "relative", zIndex: 1 }}>
                  <Link href="/programme/grand-journeys" style={{ color: "inherit", textDecoration: "none" }}>Grand Journeys</Link>
                </h2>
                <div style={{ fontFamily: F.body, fontSize: "clamp(11px,2.5vw,12px)", fontWeight: 400, color: TX.onDarkSub, fontStyle: "italic", marginBottom: 18 }}>Four to five days. Ten people. Destinations that change how you see the world.</div>
                <div style={{ width: 36, height: 1.5, background: `linear-gradient(90deg,${T.roseL}35,transparent)`, marginBottom: 18 }} />
                <p style={{ fontFamily: F.body, fontSize: 14, fontWeight: 400, lineHeight: 2.1, color: TX.onDarkSub }}>Puglia. The Peloponnese. Marrakech. The coast of Accra. Tuscany by road with a professional cyclist who knows every climb and every village kitchen. Not capital cities. Not the obvious route. Every itinerary is designed by the host from routes walked, driven, and tested in person. The local connections are real. The restaurants are held because someone has eaten there before and knows the owner. Accommodation, local transport, cultural access, private dining, and local guides are arranged by the {AKAN_O}use. Flights are arranged independently. The company is composed with the same precision as the destination. Some journeys are walked. Some are driven. Some are ridden. All end at a table.</p>
                <p style={{ fontFamily: F.body, fontSize: "clamp(11px,2.5vw,12px)", fontWeight: 300, color: T.roseL, fontStyle: "italic", opacity: .65, marginTop: 14 }}>Limited places. Once composed, never repeated.</p>
              </div>
            </Rv>
          </div>
        </Mx>
      </section>

      {/* Atmospheric */}
      <section style={{ background: T.bg2, padding: "2px clamp(40px,6vw,80px)" }}>
        <Mx w={900}><Rv><RealImg src={IMG.vineyard} alt={`A Grand Journey destination. Vineyard at golden hour. ${BRAND_AKAN}.`} h={140} aspect="21/9" /></Rv></Mx>
      </section>

      {/* VI + VII */}
      <section style={{ background: T.bg2, padding: "2px clamp(40px,6vw,80px) clamp(60px,8vh,100px)" }}>
        <Mx w={900}>
          <div className="g2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "clamp(10px,1.5vw,18px)" }}>
            <Rv>
              <div className="card-glow" style={{ background: `linear-gradient(160deg,#0E0113,${T.bg2})`, padding: "clamp(36px,4vh,48px) clamp(28px,4vw,40px)", height: "100%", position: "relative", overflow: "hidden", border: "1px solid rgba(201,149,108,.05)" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${T.rose}50,transparent)` }} />
                <MarkLayer layer={6} size={150} color="rgba(201,168,76,.35)" style={{ top: "6%", right: "4%" }} />
                <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color: T.rose, opacity: .5, marginBottom: 18, lineHeight: 1.2, position: "relative", zIndex: 1 }}>VI</div>
                <h2 style={{ fontFamily: F.display, fontSize: "clamp(24px,3vw,32px)", fontWeight: 400, fontStyle: "italic", color: T.cream, lineHeight: 1.1, marginBottom: 8, position: "relative", zIndex: 1 }}>
                  <Link href="/programme/the-private-house" style={{ color: "inherit", textDecoration: "none" }}>The Private House</Link>
                </h2>
                <div style={{ fontFamily: F.body, fontSize: "clamp(11px,2.5vw,12px)", fontWeight: 400, color: TX.onDarkSub, fontStyle: "italic", marginBottom: 18 }}>Twelve to forty guests. A room composed entirely around your world.</div>
                <div style={{ width: 36, height: 1.5, background: `linear-gradient(90deg,${T.rose}25,transparent)`, marginBottom: 18 }} />
                <p style={{ fontFamily: F.body, fontSize: 14, fontWeight: 400, lineHeight: 2.1, color: TX.onDarkSub }}>You have people who should be in the same room but never have been. Collaborators from different cities. Friends from different decades. People from separate corners of your life who would change something in each other if they ever sat down together. The {AKAN_O}use composes that room for you. The venue. The guest portraits. The seating. The sequence of the evening. Every detail handled so you arrive as a guest in your own room. For celebrations, milestones, or gatherings with no occasion at all except that the people deserve to meet.</p>
                <p style={{ fontFamily: F.body, fontSize: "clamp(11px,2.5vw,12px)", fontWeight: 300, color: T.rose, fontStyle: "italic", opacity: .6, marginTop: 14 }}>By arrangement only. Begin with a conversation.</p>
              </div>
            </Rv>

            <Rv delay={80}>
              <div className="card-glow" style={{ background: `linear-gradient(160deg,${T.cream},#F0E8DD)`, padding: "clamp(36px,4vh,48px) clamp(28px,4vw,40px)", height: "100%", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${T.copper},${T.gold}40,transparent)` }} />
                <MarkLayer layer={7} size={140} color="rgba(201,168,76,.3)" style={{ top: "8%", right: "6%" }} />
                <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color: T.copper, opacity: .55, marginBottom: 18, position: "relative", zIndex: 1 }}>VII</div>
                <h2 style={{ fontFamily: F.display, fontSize: "clamp(24px,3vw,32px)", fontWeight: 400, fontStyle: "italic", color: T.bg, lineHeight: 1.1, marginBottom: 8, position: "relative", zIndex: 1 }}>
                  <Link href="/programme/the-annual-house" style={{ color: "inherit", textDecoration: "none" }}>The Annual House</Link>
                </h2>
                <div style={{ fontFamily: F.body, fontSize: "clamp(11px,2.5vw,12px)", fontWeight: 400, color: T.copper, fontStyle: "italic", opacity: .75, marginBottom: 18 }}>One hundred and twenty people. One evening. The year made visible.</div>
                <div style={{ width: 36, height: 1.5, background: `linear-gradient(90deg,${T.copper}40,${T.gold}15,transparent)`, marginBottom: 18 }} />
                <p style={{ fontFamily: F.body, fontSize: 14, fontWeight: 400, lineHeight: 2.1, color: TX.onLight, marginBottom: 8 }}>Once a year. End of season. The full Circle in one extraordinary room. The intimate tables of the year come together in a single, larger gathering. People who crossed paths at different dinners find each other again. Conversations resume mid-sentence. Someone introduces the person they brought from another city. The room is larger than anything else in the programme. The warmth has not changed. This is the evening that proves the system works.</p>
                <p style={{ fontFamily: F.display, fontSize: 13, fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: T.copper, opacity: .5, marginTop: 14 }}>The largest room in the programme. The one people prepare for all year.</p>
              </div>
            </Rv>
          </div>
        </Mx>
      </section>

      {/* === THE RECURRING ENGINE === */}
      <section style={{ background: T.damson, padding: "clamp(80px,10vh,120px) clamp(40px,6vw,80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${T.rose},${T.gold}30,transparent)` }} />
        <Mx w={900}><Rv>
          <div style={{ textAlign: "center", marginBottom: "clamp(36px,5vh,52px)" }}>
            <Lbl>Between the Seasons</Lbl>
            <h2 style={{ fontFamily: F.display, fontSize: "clamp(24px,3.5vw,38px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.15, color: T.cream, marginBottom: 16 }}>The engine that<br />turns strangers into people.</h2>
            <p style={{ fontFamily: F.body, fontSize: "clamp(13px,3vw,14px)", fontWeight: 300, lineHeight: 2, color: TX.onDarkSub, maxWidth: "46ch", margin: "0 auto" }}>The seasonal rooms open the door. These three formats hold it open. They run year-round, on their own rhythm, and they are how acquaintance becomes recognition becomes friendship. Some faces are new. Some you saw last time. That is the architecture.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(10px,1.5vw,18px)" }} className="g3">
            {[
              { name: "The Returning Table", freq: "Every two to three weeks · Ten seats", desc: "The Evening is strangers. The Returning Table is not. Ten people, and some of them you sat beside last time. The host deliberately invites people back so each table builds on the one before. The same name appears across three, four, five tables, and somewhere around the fourth, you stop introducing yourself. That is when friendship begins. The Evening gives you electricity. The Returning Table gives you people.", acc: T.rose },
              { name: "The Walk", freq: "Fortnightly · Twelve people", desc: "No preparation. No performance. Just arrive. A walk at conversational pace through Hampstead Heath, along the canal at Regents Park, or across the South Downs to a village pub. Paired rotations mean you speak to most of the room before lunch. Walking beside someone unlocks something that sitting opposite them does not. The walk ends at a table. Always a table someone has chosen for the warmth of the room and the quality of what is served.", acc: T.gold },
              { name: "The Distance Day", freq: "Quarterly · Eight people, two cars", desc: "No flights. No passports. Two cars of four heading to the Cotswolds, the Kent coast, or a harbour town nobody suggested before. Ninety minutes in a car with one other person is a conversation format nothing else replicates. You arrive at a harbour restaurant or a farmhouse kitchen as people who already know each other. The destination is chosen for the quality of the table at the end.", acc: T.copper },
            ].map((f, i) => <Rv key={i} delay={i * 120}>
              <div className="hl" style={{ background: T.bg, border: `1px solid ${f.acc}12`, padding: "clamp(32px,4vh,40px) clamp(24px,3vw,32px)", height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ height: 2, background: `linear-gradient(90deg,${f.acc},transparent)`, marginBottom: 22, borderRadius: 1 }} />
                <h3 style={{ fontFamily: F.display, fontSize: "clamp(19px,2.5vw,23px)", fontWeight: 400, color: T.cream, margin: "0 0 8px" }}>{f.name}</h3>
                <div style={{ fontFamily: F.body, fontSize: 9, fontWeight: 500, letterSpacing: ".25em", textTransform: "uppercase", color: f.acc, opacity: .55, marginBottom: 16 }}>{f.freq}</div>
                <p style={{ fontFamily: F.body, fontSize: 13, fontWeight: 400, lineHeight: 1.95, color: TX.onDarkSub, flex: 1, margin: 0 }}>{f.desc}</p>
              </div>
            </Rv>)}
          </div>
          <Rv delay={200}><div style={{ marginTop: "clamp(32px,4vh,44px)", textAlign: "center" }}>
            <p style={{ fontFamily: F.body, fontSize: 12, fontWeight: 300, color: TX.onDarkMuted, fontStyle: "italic", maxWidth: "42ch", margin: "0 auto" }}>Once in a while, you also receive a name. One person from within the Circle. One reason this meeting should happen.</p>
          </div></Rv>
        </Rv></Mx>
      </section>

      {/* === THE SOCIETIES === */}
      <section style={{ background: T.bg2, padding: "clamp(72px,9vh,100px) clamp(40px,6vw,80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${T.gold},${T.rose}25,transparent)` }} />
        <Mx w={900}><Rv>
          <div style={{ textAlign: "center", marginBottom: "clamp(32px,4vh,44px)" }}>
            <Lbl>The Societies</Lbl>
            <h2 style={{ fontFamily: F.display, fontSize: "clamp(22px,3vw,32px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.15, color: T.cream, marginBottom: 14 }}>Member-held. Self-governing.<br /><em style={{ color: T.rose }}>Open to the Circle.</em></h2>
            <p style={{ fontFamily: F.body, fontSize: "clamp(12px,2.8vw,13px)", fontWeight: 300, lineHeight: 2, color: TX.onDarkSub, maxWidth: "44ch", margin: "0 auto" }}>Standing groups that meet on their own rhythm. Kept by a member. Held to The Standard. The {AKAN_O}use provides the framework. The people provide the reason.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "clamp(10px,1.5vw,18px)", maxWidth: 720, margin: "0 auto" }} className="g2">
            {[
              { name: "The Culture Evening", desc: "A production at the Almeida or a private view at the Royal Academy. The ticket is included. Dinner follows at a table composed for the conversation the performance will produce. The shared reference gives you something real to talk about. The dinner is where the talking happens. Eighteen people. Monthly.", acc: T.gold },
              { name: "The Ride", desc: "A road ride with the Circle. Not a race. A proper ride at a pace that allows conversation, because the conversation is the point. Richmond Park at dawn. The Surrey Hills on a Saturday. Kent lanes in autumn when the hedgerows turn. Led by a cyclist who knows every climb and every kitchen worth stopping at. The ride finishes with a long lunch at a considered pub or country kitchen. Ten riders. Fortnightly.", acc: T.rose },
            ].map((s, i) => <Rv key={i} delay={i * 100}>
              <div className="hl" style={{ background: `linear-gradient(160deg,#0E0113,${T.bg2})`, border: "1px solid rgba(201,149,108,.06)", padding: "clamp(28px,3.5vh,36px) clamp(24px,3vw,30px)", height: "100%", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${s.acc},transparent)` }} />
                <h3 style={{ fontFamily: F.display, fontSize: "clamp(18px,2.3vw,21px)", fontWeight: 400, color: T.cream, margin: "0 0 12px" }}>{s.name}</h3>
                <div style={{ width: 28, height: 1.5, background: `linear-gradient(90deg,${s.acc}40,transparent)`, marginBottom: 14 }} />
                <p style={{ fontFamily: F.body, fontSize: 13, fontWeight: 400, lineHeight: 1.95, color: TX.onDarkSub, flex: 1, margin: 0 }}>{s.desc}</p>
                <p style={{ fontFamily: F.body, fontSize: 10, fontWeight: 300, color: TX.onDarkMuted, fontStyle: "italic", margin: "16px 0 0" }}>Led by a Keeper. The standard never varies.</p>
              </div>
            </Rv>)}
          </div>
          <Rv delay={200}><div style={{ marginTop: "clamp(24px,3vh,36px)", textAlign: "center" }}>
            <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 400, letterSpacing: ".06em", color: "rgba(250,244,238,.35)" }}>One guest, once. After that, the Circle is protected.</p>
          </div></Rv>
        </Rv></Mx>
      </section>

      {/* === CLOSING === */}
      <section style={{ background: `linear-gradient(145deg,${T.copper},#C47A3A,#8A4A1A)`, padding: "clamp(48px,7vh,72px) clamp(40px,6vw,80px)", position: "relative", overflow: "hidden", textAlign: "center" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${T.gold},${T.copper},transparent)` }} />
        <Mx w={400}><Rv>
          <div style={{ opacity: .08, marginBottom: 20 }}><CI size={48} variant="copper" /></div>
          <div style={{ display: "flex", justifyContent: "center", gap: "clamp(20px,4vw,40px)", marginBottom: 28, flexWrap: "wrap" }}>
            <Link href={getHref("circle")} {...hp} style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".22em", textTransform: "uppercase", color: T.cream, opacity: .5, cursor: "none", borderBottom: `1px solid ${T.rose}30`, paddingBottom: 3, transition: "color .3s,opacity .3s,border-color .3s", textDecoration: "none" }}
              onMouseEnter={e => { setHov(true); e.target.style.opacity = "1"; e.target.style.color = T.rose; e.target.style.borderBottomColor = T.rose; }}
              onMouseLeave={e => { setHov(false); e.target.style.opacity = ".5"; e.target.style.color = T.cream; e.target.style.borderBottomColor = `${T.rose}30`; }}
            >Meet the people</Link>
            <Link href={getHref("founder")} {...hp} style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".22em", textTransform: "uppercase", color: T.cream, opacity: .5, cursor: "none", borderBottom: `1px solid ${T.rose}30`, paddingBottom: 3, transition: "color .3s,opacity .3s,border-color .3s", textDecoration: "none" }}
              onMouseEnter={e => { setHov(true); e.target.style.opacity = "1"; e.target.style.color = T.rose; e.target.style.borderBottomColor = T.rose; }}
              onMouseLeave={e => { setHov(false); e.target.style.opacity = ".5"; e.target.style.color = T.cream; e.target.style.borderBottomColor = `${T.rose}30`; }}
            >Composed by Gigi Brown</Link>
          </div>
          <p style={{ fontFamily: F.display, fontSize: "clamp(18px,2.5vw,24px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.45, color: T.copperDk, marginBottom: 12 }}>Twelve formats. One city for now.<br />The next room is being composed.</p>
          <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 300, color: "rgba(13,1,24,.25)", fontStyle: "italic", marginBottom: 28, maxWidth: "38ch", margin: "0 auto 28px" }}>Social architecture for people who have outgrown the rooms that go nowhere. Every room you enter makes the next one richer.</p>
          <Link href={getHref("apply")} {...hp} className="btn-shine" aria-label="Introduce yourself" style={{ background: "rgba(13,1,24,.05)", cursor: "none", border: `1px solid rgba(13,1,24,.12)`, padding: "14px 40px", fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".3em", textTransform: "uppercase", color: T.copperDk, transition: "border-color .4s,background .4s,color .4s,opacity .4s", textDecoration: "none", display: "inline-block" }}
            onMouseEnter={e => { setHov(true); e.target.style.background = "rgba(13,1,24,.1)"; }}
            onMouseLeave={e => { setHov(false); e.target.style.background = "rgba(13,1,24,.05)"; }}
          >Introduce Yourself</Link>
          <p style={{ fontFamily: F.body, fontSize: 10, fontWeight: 300, color: TX.onCopperSub, marginTop: 16, opacity: .5 }}>No membership fee. The full season is open. See the season.
            <Link href={getHref("book")} style={{ cursor: "pointer", borderBottom: "1px solid rgba(13,1,24,.08)", textDecoration: "none", color: "inherit" }}>View the programme and prices</Link>.</p>
        </Rv></Mx>
      </section>
    </>
  );
}
