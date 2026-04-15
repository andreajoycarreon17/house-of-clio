"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSiteChrome } from "@/components/layout/site-context";
import { CW, FAQ_DATA, FOUNDERS } from "@/data/formats";
import { getHref } from "@/lib/routes";
import { BTN, Dv, F, GoldLine, IMG, ImgPlace, Lbl, MarkLayer, Mx, Orb, PersonSilhouette, RealImg, Rv, Sec, T, TX, CI, CM } from "@/components/shared";
import { BRAND_AKAN, AKAN_O } from "@/lib/brand";

export default function TheStandardPage() {
  const router = useRouter();
  const { hp, setHov, mouse, ld, trackInteraction } = useSiteChrome();
  const go = (target) => router.push(getHref(target));

  return (
    <>
      {/* Header */}
      <Sec bg={T.bg}>
        <Mx w={640}><Rv>
          <Lbl>The Standard</Lbl>
          <h1 style={{ fontFamily: F.display, fontSize: "clamp(32px,4.5vw,52px)", fontWeight: 400, lineHeight: .92, color: T.cream, marginBottom: 36 }}>The Standard.<br /><em style={{ color: T.rose }}>How the {AKAN_O}use holds together.</em></h1>
          <Dv w="48px" m="0 0 28px" />
          <p style={{ fontFamily: F.body, fontSize: 16, fontWeight: 400, lineHeight: 2.2, color: TX.onDarkSub, maxWidth: "58ch" }}>We did not write these to tell anyone how to behave. We wrote them because the people who already live this way are the ones who make every room at the {AKAN_O}use worth being in.</p>
        </Rv></Mx>
      </Sec>

      {/* Atmospheric */}
      <section style={{ background: T.bg2, padding: "0 clamp(40px,6vw,80px)" }}>
        <Mx w={680}><Rv><RealImg src={IMG.hallway} h={180} alt={`The Standard at the ${BRAND_AKAN}. Hands breaking bread.`} aspect="21/9" overlay={.2} /></Rv></Mx>
      </section>

      {/* The Seven Standards. on cream paper */}
      <Sec bg={T.bg2} style={{ paddingTop: "clamp(20px,3vh,40px)" }}>
        <Mx w={680}><Rv>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", inset: -6, border: `2px solid ${T.copper}`, zIndex: 0 }} />
            <div style={{ position: "absolute", inset: -2, border: `1px solid ${T.gold}30`, zIndex: 0 }} />

            <div style={{ position: "relative", zIndex: 1, background: T.cream, boxShadow: "0 16px 64px rgba(0,0,0,.3)" }}>
              <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(0deg,transparent,transparent 33px,rgba(160,80,37,.03) 33px,rgba(160,80,37,.03) 34px)", pointerEvents: "none" }} />

              <div style={{ position: "relative", zIndex: 2, padding: "clamp(36px,5vh,56px) clamp(32px,5vw,56px)" }}>

                <div style={{ textAlign: "center", marginBottom: 44 }}>
                  <h2 style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color: T.copper, opacity: .75, marginBottom: 12, margin: "0 0 12px" }}>The Seven Standards</h2>
                  <div style={{ fontFamily: F.display, fontSize: "clamp(22px,3vw,30px)", fontWeight: 400, fontStyle: "italic", color: T.bg }}>Seven principles. One House.</div>
                  <div style={{ width: 40, height: 2, background: `linear-gradient(90deg,${T.copper},${T.gold})`, margin: "16px auto 0" }} />
                </div>

                {[
                  { n: "I", title: "Presence", body: "The most unforgettable people in any room are not the most accomplished or the most articulate. They are the ones who made you feel, for a few minutes, like you were the only person there. That quality cannot be performed. People feel the difference between someone who is present and someone who is waiting. The greatest compliment you can pay another person is your undivided attention. It costs nothing. It changes everything.", act: <>The people who leave the deepest impression at the {AKAN_O}use are never the loudest. They are the ones who listened so carefully that someone said something they had not planned to say.</> },
                  { n: "II", title: "Curiosity", body: "Most conversations follow a script. Name. Occupation. Where do you live. The script is efficient. It is also the reason most conversations are forgettable. The people who change a room are the ones who refuse the script. They ask the second question. Not what do you do, but what changed the way you think about it. Not where are you from, but what do you carry from that place. The second question is where every real conversation begins. Everything before it is preamble.", act: "Ask someone what they have been paying attention to lately. Then ask why. You will learn more in two minutes than a biography could tell you." },
                  { n: "III", title: "Generosity", body: "There is a kind of person who walks into a room and makes it lighter. Not through charm or performance, but through the quiet act of making someone else feel seen. They remember a name. They ask about something mentioned an hour ago. They celebrate someone else without needing to tell their own story first. The most generous thing you can do in any room is not what you give. It is what you notice about the person beside you and reflect back to them.", act: "Make the person next to you feel more interesting than they felt when they sat down. That is the only hospitality that matters." },
                  { n: "IV", title: "Discretion", body: "People reveal themselves in rooms where they feel held. Not managed. Not impressed. Held. The depth of any conversation is determined by one thing: whether both people trust that what is said will be treated with care. Discretion is not silence. It is the quiet discipline of deserving someone's honesty. The rooms that produce the deepest conversations are the ones where nothing needs to be guarded because everything is safe.", act: <>When someone trusts you with something real, carry it the way you would want yours carried. That is the foundation the {AKAN_O}use is built on.</> },
                  { n: "V", title: "Courage", body: "In every conversation there is a moment where two paths appear. One leads to the thing that sounds good. The thing that makes you seem composed, well-read, appropriately impressive. The other leads to the thing that is true. The true thing is harder to say. It might make you vulnerable. It might reveal something unfinished. It might be the most interesting thing anyone says all evening. The rooms you remember years later are the rooms where someone chose the second path.", act: "Go first. Say the thing you actually think. The room is waiting for someone to stop performing, and when you do, everyone else exhales." },
                  { n: "VI", title: "Warmth", body: "You know the feeling. You arrive somewhere unfamiliar, scanning for cues, holding your glass a little too tightly. And then someone catches your eye, walks toward you, and says something so natural it dissolves every layer of armour in about four seconds. That is warmth. Not friendliness. Not charm. The human act of making someone feel they belong here before they have had to earn it. The people who do this best do not think of it as hospitality. They think of it as the obvious thing to do when someone has been brave enough to walk through the door.", act: <>Walk toward the person standing alone. Not because it is kind, although it is. Because every lasting friendship at the {AKAN_O}use began exactly this way.</> },
                  { n: "VII", title: "Integrity", body: "Trust is not built in grand gestures. It is built in the small things. Arriving when you said you would. Following up on the introduction you offered. Remembering a detail someone shared three months ago. Treating the person who just arrived with the same attention as the person who has been here three seasons. Every small act of reliability is a deposit. Every broken word is a withdrawal. The people who belong here are the ones whose word carries the same weight in every room they enter.", act: <>Be the same person at the {AKAN_O}use that you are everywhere else. That consistency is the rarest thing in any room, and the one people trust the most.</> },
                ].map((c, i) => <div key={i} style={{ marginBottom: i < 6 ? 36 : 0, paddingBottom: i < 6 ? 36 : 0, borderBottom: i < 6 ? `1px solid rgba(160,80,37,.06)` : "none" }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "baseline", marginBottom: 12 }}>
                    <div style={{ fontFamily: F.display, fontSize: "clamp(20px,3.5vw,24px)", fontWeight: 400, color: T.copper, opacity: .6, lineHeight: 1 }}>{c.n}</div>
                    <h3 style={{ fontFamily: F.display, fontSize: "clamp(18px,3.5vw,22px)", fontWeight: 400, fontStyle: "italic", color: T.bg, lineHeight: 1.3, margin: 0 }}>{c.title}</h3>
                  </div>
                  <div style={{ paddingLeft: 38 }}>
                    <p style={{ fontFamily: F.body, fontSize: "clamp(13px,3vw,14px)", fontWeight: 400, lineHeight: 2.2, color: TX.onLight }}>{c.body}</p>
                    <p style={{ fontFamily: F.body, fontSize: 12, fontWeight: 500, lineHeight: 1.7, color: T.copper, marginTop: 10, fontStyle: "italic" }}>{c.act}</p>
                  </div>
                </div>)}

                <div style={{ marginTop: 44, paddingTop: 24, borderTop: `1px solid ${T.copper}15`, textAlign: "center" }}>
                  <p style={{ fontFamily: F.display, fontSize: 18, fontWeight: 400, fontStyle: "italic", color: T.copper, lineHeight: 1.5 }}>These are not instructions. They are observations about the kind of person everyone in the room is glad sat down beside them.</p>
                </div>

                <div style={{ marginTop: 28, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 300, color: TX.onLightMuted, letterSpacing: ".08em" }}>{BRAND_AKAN} · The Standard</div>
                  <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 300, color: T.copper, letterSpacing: ".08em" }}>Est MMXXVI</div>
                </div>
              </div>
            </div>
          </div>
        </Rv></Mx>
      </Sec>

      <Sec bg={T.bg} style={{ textAlign: "center", paddingTop: "clamp(48px,6vh,72px)", paddingBottom: "clamp(48px,6vh,72px)" }}>
        <Mx w={500}><Rv>
          <div style={{ display: "flex", justifyContent: "center", gap: "clamp(20px,4vw,40px)", marginBottom: 24, flexWrap: "wrap" }}>
            <Link href={getHref("programme")} {...hp} style={{ fontFamily: F.display, fontSize: "clamp(14px,3.2vw,16px)", fontWeight: 400, fontStyle: "italic", color: T.rose, cursor: "none", borderBottom: `1px solid ${T.rose}40`, paddingBottom: 3, transition: "border-color .3s", textDecoration: "none" }}
              onMouseEnter={e => { setHov(true); e.target.style.borderBottomColor = T.rose; }}
              onMouseLeave={e => { setHov(false); e.target.style.borderBottomColor = `${T.rose}40`; }}
            >See the programme</Link>
          </div>
          <p style={{ fontFamily: F.display, fontSize: 17, fontWeight: 400, fontStyle: "italic", color: TX.onDarkMuted, marginBottom: 24 }}>If you read these and thought, that is already how I try to move through the world, then there is a room being composed with you in mind.</p>
          <Link href={getHref("apply")} {...hp} className="btn-shine" aria-label="Introduce yourself to the House" style={{ background: "rgba(201,149,108,.06)", cursor: "none", border: `1px solid rgba(201,149,108,.25)`, padding: "16px 44px", fontFamily: F.body, fontSize: "clamp(10px,2.2vw,11px)", fontWeight: 500, letterSpacing: ".32em", textTransform: "uppercase", color: T.rose, transition: "border-color .4s,background .4s,color .4s,opacity .4s", textDecoration: "none", display: "inline-block" }}
            onMouseEnter={e => { setHov(true); e.target.style.borderColor = "rgba(201,149,108,.5)"; }}
            onMouseLeave={e => { setHov(false); e.target.style.borderColor = "rgba(201,149,108,.25)"; }}
            >Introduce Yourself</Link>
        </Rv></Mx>
      </Sec>
    </>
  );
}
