"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSiteChrome } from "@/components/layout/site-context";
import { CW, FAQ_DATA, FOUNDERS } from "@/data/formats";
import { getHref } from "@/lib/routes";
import { BTN, Dv, F, GoldLine, IMG, ImgPlace, Lbl, MarkLayer, Mx, Orb, PersonSilhouette, RealImg, Rv, Sec, T, TX, CI, CM } from "@/components/shared";

export default function PrivacyPage() {
  const router = useRouter();
  const { hp, setHov, mouse, ld, trackInteraction } = useSiteChrome();
  const go = (target) => router.push(getHref(target));
  

  return (
    <>
<Sec bg={T.offW} style={{paddingTop:"clamp(100px,14vh,160px)"}}>
      <div style={{height:3,background:`linear-gradient(90deg,${T.rose},${T.gold},rgba(201,149,108,.08))`,position:"absolute",top:0,left:0,right:0}}/>
      <Mx w={720}><Rv>
        <Lbl color="rgba(46,18,64,.35)">Legal</Lbl>
        <h1 style={{fontFamily:F.display,fontSize:"clamp(32px,4.5vw,48px)",fontWeight:400,lineHeight:.92,color:T.bg,marginBottom:8}}>Your privacy<br/><em style={{color:T.rose}}>is not a footnote.</em></h1>
        <p style={{fontFamily:F.body,fontSize:13,fontWeight:400,color:TX.onLightMuted,marginBottom:16}}>Last updated: June MMXXVI</p>
        <p style={{fontFamily:F.body,fontSize:"clamp(13px,3vw,14px)",fontWeight:400,lineHeight:1.9,color:TX.onLightSub,marginBottom:36,maxWidth:560}}>People share things at the ?use that they do not share elsewhere. Their curiosities. Their stories. Their desire for richer friendship. We hold all of it with the same care we bring to composing a room. This is how we do it, written the way I would explain it to you in person.</p>

        {/* The Short Version. first, not last */}
        <div style={{padding:"28px 32px",background:`linear-gradient(135deg,${T.copper}08,${T.rose}04)`,border:`1px solid ${T.rose}15`,marginBottom:48,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${T.rose},transparent)`}}/>
          <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".35em",textTransform:"uppercase",color:T.copper,marginBottom:12}}>The Short Version</div>
          <p style={{fontFamily:F.body,fontSize:"clamp(13px,3vw,14px)",fontWeight:400,lineHeight:1.9,color:TX.onLight}}>Your data belongs to you. We collect only what we need. We never sell it. We delete it when you ask. A person reads your application, not an algorithm. Your profile is visible only to confirmed attendees, never to the public. No advertising cookies. No retargeting. If anything is unclear, write to privacy@thehouseofclio.com.</p>
        </div>

        {/* Section index */}
        <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:40}}>
          {["Who we are","What we collect","Profiles and consent","Data storage","Cookies","Your rights","Photography","Third parties","Policy changes"].map((t,i)=><div key={i} style={{fontFamily:F.body,fontSize:10,fontWeight:400,color:T.copper,padding:"8px 14px",border:`1px solid ${T.rose}18`,background:`${T.rose}04`}}>{t}</div>)}
        </div>

         {[
          {n:"01",t:"Who we are",p:"Ɔuse ɔf Clio is operated by House of Clio Ltd, registered in England and Wales. London, United Kingdom. For data protection purposes, we are the data controller. Contact our data team at privacy@thehouseofclio.com."},
          {n:"02",t:"What we collect and why",p:"When you register interest or apply, we collect your name, email address, city, and any personal information you choose to share. A real person reads it to determine whether the Ɔuse is a good fit. We collect basic analytics (pages visited, time spent) to improve the site. We never sell, rent, or share your personal data with third parties for marketing purposes. We never will."},
          {n:"03",t:"Profiles and consent",p:"Members create a short curiosity profile shared with other confirmed members before each gathering. It contains only what you choose to include. You can update or remove it at any time. It is never visible to the public, to prospective members, or to anyone outside the confirmed attendee list."},
          {n:"04",t:"Data storage",p:"Your data is stored on encrypted, UK-based servers compliant with UK GDPR and PECR. We retain data only while you are a member or have an active expression of interest. Request deletion and we act within 48 hours, confirmed by email."},
          {n:"05",t:"Cookies",p:"Essential cookies keep the site functional. We may use privacy-respecting analytics to understand how visitors navigate the site. We do not use advertising cookies, tracking pixels, or retargeting. You can withdraw consent at any time through your browser settings."},
          {n:"06",t:"Your rights",p:"Under UK GDPR: access, correction, deletion, restriction, objection, and portability. Email privacy@thehouseofclio.com. We respond within 48 hours. If unsatisfied, contact the Information Commissioner at ico.org.uk."},
          {n:"07",t:"Photography and image policy",p:"No photographs of members are taken at any gathering without the explicit written consent of every person in the image. Atmospheric photography of venues and settings may be taken with prior agreement. No member image is ever used for promotional purposes without individual written consent. This is non-negotiable."},
          {n:"08",t:"Third parties",p:"We share limited data with trusted service providers (email delivery, payment processing, venue booking), each contractually bound to process data only on our instructions. We do not share data with social media platforms, advertisers, or data brokers."},
          {n:"09",t:"Changes to this policy",p:"Updates are communicated by email and published here with a revised date. Material changes take effect no sooner than 14 days after notification."},
        ].map((s,i)=><Rv key={i} delay={i*30}>
          <div style={{display:"grid",gridTemplateColumns:"40px 1fr",gap:16,marginBottom:28,paddingBottom:28,borderBottom:`1px solid ${T.rose}08`,alignItems:"start"}}>
            <div style={{fontFamily:F.display,fontSize:"clamp(18px,3.5vw,22px)",fontWeight:400,color:T.rose,opacity:.4,paddingTop:2}}>{s.n}</div>
            <div>
              <h2 style={{fontFamily:F.display,fontSize:"clamp(17px,3.2vw,20px)",fontWeight:400,color:T.bg,marginBottom:8}}>{s.t}</h2>
              <p style={{fontFamily:F.body,fontSize:14,fontWeight:400,lineHeight:1.9,color:TX.onLightSub}}>{s.p}</p>
            </div>
          </div>
        </Rv>)}

        {/* Personal closing */}
        <Rv>
          <div style={{marginTop:20,padding:"28px 32px",background:`linear-gradient(135deg,${T.copper}08,${T.rose}04)`,border:`1px solid ${T.rose}15`,position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${T.rose},transparent)`}}/>
            <p style={{fontFamily:F.display,fontSize:"clamp(14px,3.2vw,16px)",fontWeight:400,fontStyle:"italic",lineHeight:1.7,color:TX.onLight}}>I built the ?use because people deserve a space where they can be honest without worrying about where that honesty ends up. Your data is part of that promise. If you ever feel it has been broken, I want to hear about it personally.</p>
            <div style={{fontFamily:F.body,fontSize:"clamp(11px,2.5vw,12px)",fontWeight:400,color:T.rose,marginTop:12}}>Gigi · gigi@thehouseofclio.com</div>
          </div>
        </Rv>

        {/* Contact */}
        <Rv>
          <div style={{marginTop:20,padding:"20px 0",borderTop:`1px solid ${T.rose}08`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{fontFamily:F.body,fontSize:"clamp(11px,2.5vw,12px)",fontWeight:400,color:TX.onLightMuted}}>privacy@thehouseofclio.com</div>
            <div style={{fontFamily:F.body,fontSize:10,fontWeight:400,color:T.rose,opacity:.5}}>Always a person, never a form letter.</div>
          </div>
        </Rv>
      </Rv></Mx>
    </Sec>
    <section style={{background:T.bg2,padding:"clamp(24px,3vh,36px) clamp(40px,6vw,80px)",textAlign:"center"}}><Rv>
      <p style={{fontFamily:F.display,fontSize:"clamp(14px,3.2vw,16px)",fontWeight:400,fontStyle:"italic",color:TX.onDarkMuted}}>Your privacy matters to us. So does your company. <Link href={getHref("programme")} style={{color:T.rose,cursor:"pointer",borderBottom:`1px solid ${T.rose}30`,textDecoration:"none"}}>Explore the seasonal rooms</Link> or <Link href={getHref("apply")} style={{color:T.rose,cursor:"pointer",borderBottom:`1px solid ${T.rose}30`,textDecoration:"none"}}>introduce yourself</Link>.</p>
    </Rv></section>
    </>
  );
}
