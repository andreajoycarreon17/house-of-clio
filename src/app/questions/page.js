"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSiteChrome } from "@/components/layout/site-context";
import { CW, FAQ_DATA, FOUNDERS } from "@/data/formats";
import { getHref } from "@/lib/routes";
import { BTN, Dv, F, GoldLine, IMG, ImgPlace, Lbl, MarkLayer, Mx, Orb, PersonSilhouette, RealImg, Rv, Sec, T, TX, CI, CM } from "@/components/shared";

export default function QuestionsPage() {
  const router = useRouter();
  const { hp, setHov, mouse, ld, trackInteraction } = useSiteChrome();
  const go = (target) => router.push(getHref(target));
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
<Sec bg={T.bg}><Mx w={800}>
      <Rv>
        <Lbl>Questions</Lbl>
        <h1 style={{fontFamily:F.display,fontSize:"clamp(36px,5vw,60px)",fontWeight:400,lineHeight:.9,color:T.cream,marginBottom:16}}>What people<br/><em style={{color:T.rose}}>ask before they arrive.</em></h1>
        <p style={{fontFamily:F.body,fontSize:16,fontWeight:400,lineHeight:2,color:TX.onDarkSub,maxWidth:520,marginBottom:14}}>Most of what you need to know is already on this site. These are the questions people tend to ask before they write to us. The answers are direct. If something is not covered here, the contact page is open.</p>
        <p data-speakable="true" style={{fontFamily:F.body,fontSize:11,fontWeight:300,lineHeight:1.9,color:TX.onDarkMuted,maxWidth:480,marginBottom:32,letterSpacing:".02em"}}>Frequently asked questions about the Ɔuse ɔf Clio, a private cultural house in London offering composed private dinners, supper lectures, and journeys. Learn how to join, what to expect when you arrive, how people are selected, and what makes composed gatherings different from private members clubs and networking events.</p>
      </Rv>

      {/* Atmospheric */}
      <Rv delay={50}>
        <RealImg src={IMG.hallway} alt="The entrance to a private cultural house. Warm stone. London." h={200} aspect="21/9"/>
      </Rv>
      {/* Three quick answers. tight beneath the intro */}
      <Rv delay={100}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"clamp(10px,1.5vw,18px)",marginBottom:48}} className="g3">
          {[
            {q:"Is there a fee to join?",a:"No. The circle is free to join. You pay only for the rooms you choose. A gathering. A journey. A weekend. Each one is composed once and never repeated. The room will not exist this way again."},
            {q:"Do I need to know someone?",a:"No. You can introduce yourself directly. Most people who are inside the ?use today arrived the same way you are arriving now: curious, slightly nervous, and reading this page."},
            {q:"Will I know anyone there?",a:"Before every gathering, you receive a written portrait of every person in the room. Not their job title. What fascinates them. What they carry. By the time you arrive, you already have something real to ask. You are not walking into a lounge and hoping to meet someone interesting. The room has already been composed around you."},
          ].map((item,i)=><div key={i} style={{background:`linear-gradient(155deg,${T.copper},#C47A3A,#8A4A1A)`,padding:"28px 24px",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${T.gold},${T.copper}40,transparent)`}}/>
            <h3 style={{fontFamily:F.display,fontSize:18,fontWeight:400,color:T.copperDk,marginBottom:12,lineHeight:1.3,margin:"0 0 12px"}}>{item.q}</h3>
            <div style={{width:20,height:1,background:T.copperDk,opacity:.2,marginBottom:12}}/>
            <p style={{fontFamily:F.body,fontSize:"clamp(12px,2.8vw,13px)",fontWeight:400,lineHeight:1.85,color:TX.onCopper}}>{item.a}</p>
          </div>)}
        </div>
      </Rv>

      {/* Full FAQ */}
      <Rv delay={150}>
        <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".4em",textTransform:"uppercase",color:T.copper,marginBottom:24}}>Everything Else</div>
      </Rv>
      <h2 style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".4em",textTransform:"uppercase",color:T.rose,opacity:.4,marginBottom:24,margin:"0 0 24px",textAlign:"center"}}>About the Ɔuse ɔf Clio</h2>
          {FAQ_DATA.map((f,i)=><Rv key={i} delay={i*40}>
        <div style={{borderBottom:`1px solid rgba(201,149,108,.06)`,background:openFaq===i?"rgba(201,149,108,.02)":"transparent",transition:"background .3s"}}>
          <div {...hp} className="faq-item" role="button" tabIndex={0} id={`faq-q-${i}`} aria-expanded={openFaq===i} aria-controls={`faq-a-${i}`} onClick={()=>setOpenFaq(openFaq===i?null:i)} onKeyDown={e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();setOpenFaq(openFaq===i?null:i);}}} style={{padding:"28px 12px",cursor:"pointer",display:"flex",transition:"opacity .3s",justifyContent:"space-between",alignItems:"center",gap:24}}>
            <h3 style={{fontFamily:F.display,fontSize:"clamp(17px,3.5vw,21px)",fontWeight:400,color:T.cream,lineHeight:1.3,margin:0}}>{f.q}</h3>
            <div style={{width:36,height:36,flexShrink:0,border:`1px solid ${openFaq===i?T.rose:"rgba(201,149,108,.18)"}`,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:openFaq===i?T.rose:"rgba(201,149,108,.25)",fontSize:"clamp(18px,4vw,22px)",transform:openFaq===i?"rotate(45deg)":"none",transition:"transform .25s,border-color .25s,color .25s"}}>+</div>
          </div>
          {openFaq===i&&<div role="region" id={`faq-a-${i}`} aria-labelledby={`faq-q-${i}`} style={{paddingBottom:32,paddingRight:60}}>
            <p style={{fontFamily:F.body,fontSize:"clamp(14px,3.2vw,15px)",fontWeight:400,lineHeight:1.9,color:TX.onDarkSub}}>{f.a}</p>
          </div>}
        </div>
      </Rv>)}

      {/* How it works. cream cards, stand out */}
      <Rv>
        <div style={{marginTop:56,paddingTop:40,borderTop:`1px solid rgba(201,149,108,.04)`}}>
          <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".4em",textTransform:"uppercase",color:T.copper,marginBottom:32}}>How You Join</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"clamp(10px,1.5vw,18px)"}} className="g2">
            {[
              {n:"01",t:"You introduce yourself",body:"Tell us who you are and what holds your attention. A person reads what you wrote. Not everyone is accepted. That is what protects the quality of the room."},
              {n:"02",t:"We speak",body:"If there is alignment, we have a conversation. Warm. Direct. We are assessing fit in both directions. The room only works when every person strengthens it."},
              {n:"03",t:"You know the room before you arrive",body:"You receive a portrait of every person at your table. Their name. What fascinates them. A host greets you by name. The person beside you was placed there. The room does the rest."},
              {n:"04",t:"You see the same people again",body:"The Returning Table meets every two to three weeks. The Walk runs fortnightly. The same faces reappear. That repetition is how the Circle forms. The House grows around you, not ahead of you."},
            ].map((s,i)=><div key={i} style={{background:T.white,border:`1px solid rgba(160,80,37,.06)`,padding:"32px 28px",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:`linear-gradient(90deg,${T.copper},${T.rose}40,transparent)`}}/>
              <div style={{fontFamily:F.display,fontSize:"clamp(22px,4vw,28px)",fontWeight:400,color:T.copper,opacity:.3,marginBottom:12}}>{s.n}</div>
              <div style={{fontFamily:F.display,fontSize:"clamp(16px,3.2vw,20px)",fontWeight:400,color:T.bg,marginBottom:12}}>{s.t}</div>
              <div style={{width:24,height:1,background:T.copper,opacity:.35,marginBottom:12}}/>
              <p style={{fontFamily:F.body,fontSize:"clamp(12px,2.8vw,13px)",fontWeight:400,lineHeight:1.85,color:TX.onLightSub}}>{s.body}</p>
            </div>)}
          </div>
        </div>
      </Rv>
    </Mx></Sec>

    {/* Closing. demand + tension + institutional */}
    <section style={{background:`linear-gradient(145deg,${T.copper},#C47A3A,#8A4A1A)`,padding:"clamp(48px,6vh,64px) clamp(40px,6vw,80px)",textAlign:"center"}}>
      <Mx w={520}><Rv>
        <p style={{fontFamily:F.display,fontSize:18,fontWeight:400,fontStyle:"italic",color:T.copperDk,marginBottom:10,lineHeight:1.5}}>The next room is being composed. Those who find it tend to stay.</p>
        <p style={{fontFamily:F.body,fontSize:11,fontWeight:400,color:"rgba(13,1,24,.4)",marginBottom:28,letterSpacing:".05em"}}>A person reads every introduction. If there is alignment, we reply.</p>
        <Link href={getHref("apply")} {...hp} aria-label="Introduce yourself to the House" style={{background:"rgba(13,1,24,.06)",cursor:"none",border:`1px solid rgba(13,1,24,.18)`,padding:"16px 44px",fontFamily:F.body,fontSize:"clamp(10px,2.2vw,11px)",fontWeight:500,letterSpacing:".32em",textTransform:"uppercase",color:T.copperDk,transition:"border-color .4s,background .4s,color .4s,opacity .4s",textDecoration:"none",display:"inline-block"}}
        onMouseEnter={e=>{setHov(true);e.target.style.background="rgba(13,1,24,.12)";}}
        onMouseLeave={e=>{setHov(false);e.target.style.background="rgba(13,1,24,.06)";}}
        >Introduce Yourself</Link>
      </Rv></Mx>
    </section>
    </>
  );
}
