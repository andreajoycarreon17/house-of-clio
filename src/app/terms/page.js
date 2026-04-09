"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSiteChrome } from "@/components/layout/site-context";
import { CW, FAQ_DATA, FOUNDERS } from "@/data/formats";
import { getHref } from "@/lib/routes";
import { BTN, Dv, F, GoldLine, IMG, ImgPlace, Lbl, MarkLayer, Mx, Orb, PersonSilhouette, RealImg, Rv, Sec, T, TX, CI, CM } from "@/components/shared";

export default function TermsPage() {
  const router = useRouter();
  const { hp, setHov, mouse, ld, trackInteraction } = useSiteChrome();
  const go = (target) => router.push(getHref(target));
  

  return (
    <>
<Sec bg={T.offW} style={{paddingTop:"clamp(100px,14vh,160px)"}}>
      <div style={{height:3,background:`linear-gradient(90deg,${T.rose},${T.gold},rgba(201,149,108,.08))`,position:"absolute",top:0,left:0,right:0}}/>
      <Mx w={680}><Rv>
        <div style={{textAlign:"center",marginBottom:48}}>
          <Lbl color="rgba(46,18,64,.35)">Legal</Lbl>
          <h1 style={{fontFamily:F.display,fontSize:"clamp(32px,4.5vw,48px)",fontWeight:400,lineHeight:.92,color:T.bg,marginBottom:12}}>Terms of<br/><em style={{color:T.rose}}>Participation.</em></h1>
          <p style={{fontFamily:F.display,fontSize:"clamp(14px,3.2vw,16px)",fontWeight:400,fontStyle:"italic",color:TX.onLightMuted,marginBottom:8}}>The Ɔuse ɔf Clio. Written in plain English because clarity is a form of respect.</p>
          <p style={{fontFamily:F.body,fontSize:11,fontWeight:300,color:TX.onLightMuted,letterSpacing:".1em"}}>Last updated: June MMXXVI</p>
        </div>

        {/* The Short Version. elevated card */}
        <div style={{padding:"36px 40px",background:T.white,border:`1px solid ${T.rose}12`,marginBottom:56,position:"relative",overflow:"hidden",boxShadow:"0 8px 40px rgba(26,8,32,.04)"}}>
          <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${T.copper},${T.gold}60,transparent)`}}/>
          <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".4em",textTransform:"uppercase",color:T.copper,marginBottom:16}}>The Short Version</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px 32px"}} className="g1">
            {[
              {icon:"·",text:"No membership fee. No subscription. No joining charge. You pay only for what you attend."},
              {icon:"·",text:"Gatherings: cancel 14 days before for a full refund. Non-attendance incurs the full charge."},
              {icon:"·",text:"Journeys: cancel 30 days before. Hotels, transport, and venues are booked on your behalf. Many are non-refundable once confirmed."},
              {icon:"·",text:"If we cancel, you receive a full refund within 14 days."},
              {icon:"·",text:"No photography or recording at gatherings. Portraits are confidential."},
              {icon:"·",text:"Travel insurance is your responsibility for all journeys."},
              {icon:"·",text:"Your data is protected under UK GDPR and shared only with confirmed attendees."},
              {icon:"·",text:"You may leave the ?use at any time. No contract. No penalty."},
            ].map((s,i)=><div key={i} style={{display:"flex",gap:10,alignItems:"flex-start"}}>
              <div style={{fontFamily:F.display,fontSize:14,color:T.copper,marginTop:2,flexShrink:0}}>.</div>
              <p style={{fontFamily:F.body,fontSize:12.5,fontWeight:400,lineHeight:1.75,color:TX.onLight}}>{s.text}</p>
            </div>)}
          </div>
        </div>

        {/* Section groups */}
        {[
          {group:"The Foundation",items:[
            {n:"01",t:"These terms",p:"By participating in any Ɔuse ɔf Clio gathering, journey, or programme, you accept these terms. They form a binding agreement between you and House of Clio Ltd, a company registered in England and Wales (company number pending registration). Registered address: London, United Kingdom. If anything here is unclear, write to hello@thehouseofclio.com. We will explain it in conversation."},
            {n:"02",t:"What the ?use provides",p:"The Ɔuse ɔf Clio offers composed gatherings, supper lectures, city escapes, multi-day journeys, recurring tables, guided walks, and member-led societies. Before each gathering, you receive a written portrait of every confirmed attendee. A host is present at every occasion. For journeys and travel experiences, the ?use acts as organiser and books accommodation, transport, venues, cultural access, and dining on your behalf."},
            {n:"03",t:"No membership fee",p:"The ?use has no subscription, no annual fee, and no joining charge. You pay only for the gatherings and journeys you choose to attend. Participation is voluntary. You may step away at any time without contract, obligation, or penalty."},
            {n:"04",t:"Eligibility",p:"Participation in the Ɔuse ɔf Clio is open to individuals aged 18 and over. By participating, you confirm that you are at least 18 years of age. The ?use is a space of inclusion. We welcome people of all backgrounds, gender identities, ethnicities, nationalities, and orientations. Discrimination, harassment, or hostility of any kind is grounds for immediate removal from the circle."},
          ]},
          {group:"Booking and Payment",items:[
            {n:"05",t:"Pricing",p:"Each gathering, journey, or experience is priced individually and confirmed at the point of booking. Prices reflect the quality of the venue, the hosting, and the composition. Once a price is confirmed to you in writing, it will not change for that booking. We reserve the right to adjust pricing for future occasions. All prices are inclusive of VAT where applicable. While every effort is made to ensure pricing accuracy, should an obvious error occur, we reserve the right to correct it and will notify you before processing payment."},
            {n:"06",t:"Payment",p:"Full payment is required at the time of booking unless otherwise agreed in writing. Payments are processed securely through our payment provider. You will receive written confirmation of every booking. A booking is confirmed only when payment has been received and confirmation has been issued by the ?use."},
            {n:"07",t:"Third-party arrangements",p:"For journeys and travel experiences, the ?use books hotels, private venues, group transport, cultural access, restaurant reservations, and other services on your behalf. These bookings are made with independent third-party providers and are subject to their own terms and conditions. Once a third-party booking has been confirmed on your behalf, you are responsible for the charges incurred. Many third-party services are non-refundable once confirmed. We will always make clear at the point of booking which elements are subject to third-party terms so you can make an informed decision before you commit."},
            {n:"08",t:"Transferability",p:"Bookings are personal to you and may not be transferred, resold, or reassigned to another person without our prior written consent. If you are unable to attend a confirmed gathering or journey, contact us as soon as possible. We may, at our discretion, offer your place to another person from the circle, in which case a refund or credit will be issued to you."},
          ]},
          {group:"Cancellation",items:[
            {n:"09",t:"Cancellation: gatherings and lectures",p:"You may cancel any gathering, supper lecture, or recurring table up to 14 days before the date for a full refund. Between 14 and 7 days before, a credit is issued toward a future occasion. Within 7 days, refunds are at our discretion depending on costs already committed. Non-attendance of a confirmed seat without notice incurs the full charge."},
            {n:"10",t:"Cancellation: journeys and travel",p:"Journeys, city escapes, and any experience involving accommodation, flights, or group transport require a minimum of 30 days notice for cancellation. Between 30 and 14 days, a 50% credit toward a future journey is offered. Within 14 days, refunds are not available unless we can fill your place or recover costs from the provider. This policy reflects the commitments we make to hotels, venues, and transport providers on your behalf, many of which are non-refundable to us once confirmed."},
            {n:"11",t:"Cancellation by the ?use",p:"If we cancel any gathering or journey for any reason, you receive a full refund within 14 days. That is our responsibility, not yours. If we reschedule, you are notified at least 14 days in advance and may opt out for a full refund."},
          ]},
          {group:"Your Responsibilities",items:[
            {n:"12",t:"Confirmation and disclosure",p:"When you book a gathering or journey, you confirm your attendance and accept these terms. You are responsible for disclosing any relevant information in advance, including dietary requirements, allergies, mobility considerations, and any other needs that may affect your participation or the composition of the room. Failure to disclose relevant information may limit our ability to provide the standard of hosting we intend."},
            {n:"13",t:"Guests",p:"Gatherings at the ?use are composed for the people who are confirmed. You may not bring additional guests to any gathering without prior written consent from the host. If we invite you to bring a guest, you are responsible for their behaviour. Your guest must also comply with The Standard and these terms. Any breach by your guest may be attributed to you."},
            {n:"14",t:"Photography and recording",p:"The ?use is a private space. No photography, video, audio recording, or live-streaming is permitted during gatherings, unless explicitly invited by the host. This protects the privacy of every person in the room. Portraits shared before each gathering are confidential and may not be shared, forwarded, screenshot, or published outside the circle. Breach of this clause is grounds for removal from the circle."},
            {n:"15",t:"Conduct",p:"The Standard is our behavioural code. By participating, you agree to uphold it. The ?use is a social and cultural space. It is not a venue for commercial activity, professional solicitation, recruitment, or co-working. If you hand someone a business card at the ?use, you have misunderstood what this is. We reserve the right to ask anyone to step away from the circle if The Standard is breached. This is handled privately, directly, and with dignity. Refunds for pre-paid occasions are provided in full."},
            {n:"16",t:"Travel responsibilities",p:"For international journeys and city escapes, you are responsible for ensuring you hold a valid passport, any required visas, and any necessary vaccinations or health documentation. The ?use is not liable for your inability to travel due to inadequate documentation. We strongly recommend that you obtain comprehensive travel insurance covering cancellation, medical expenses, repatriation, and personal belongings for all journeys and travel experiences. The ?use does not provide travel insurance on your behalf."},
          ]},
          {group:"Liability and Risk",items:[
            {n:"17",t:"Our liability",p:"We take reasonable care to ensure every occasion is safe, well hosted, and of the standard you expect. For journeys and travel, we act as organiser and not as the direct provider of accommodation, transport, or venue services. These are delivered by third-party providers whose own terms apply. The ?use is not liable for the acts or omissions of third-party providers, for the actions or behaviour of other participants, for weather, natural events, or government restrictions, or for any loss arising from circumstances beyond our reasonable control. Our total liability to you is limited to the amount you have paid for the specific occasion in question. We maintain appropriate insurance for all events we host directly. Nothing in these terms excludes or limits our liability for death or personal injury caused by our negligence, or for fraud."},
            {n:"18",t:"Assumption of risk",p:"Certain activities within the programme, including but not limited to cycling, walking, and outdoor excursions, carry inherent physical risks. By participating, you acknowledge and accept these risks. You confirm that you are in adequate health to participate in the activities you have booked. If you have any medical condition that may affect your participation, you must disclose this in advance. The ?use reserves the right to decline participation if we reasonably believe it would pose a risk to your safety or that of others."},
            {n:"19",t:"Force majeure",p:"Neither party is liable for failure to perform obligations caused by events beyond reasonable control, including but not limited to natural disasters, pandemics, government restrictions, strikes, civil unrest, or acts of terrorism. In such circumstances, we will offer a full credit or refund at your choice."},
          ]},
          {group:"Privacy and Data",items:[
            {n:"20",t:"Your data",p:"We collect only the personal data we need to compose the room and to operate the ?use. Your profile information is shared only with confirmed attendees of gatherings you are attending and only for the purpose of composition. We do not sell, trade, or share your data with third parties for marketing purposes. We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Full details are in our Privacy Policy. You may request access to, correction of, or deletion of your personal data at any time by writing to privacy@thehouseofclio.com."},
          ]},
          {group:"General",items:[
            {n:"21",t:"Intellectual property",p:"The Ɔuse ɔf Clio name, the Muse Mark, the ? character, and all original content on this website are the intellectual property of House of Clio Ltd. You may not reproduce, distribute, or create derivative works from our brand assets without written permission."},
            {n:"22",t:"Changes to these terms",p:"We may update these terms from time to time. Changes take effect when published on this page. We will notify participants of material changes by email. Continued participation after changes are published constitutes acceptance."},
            {n:"23",t:"Complaints and disputes",p:"If you are dissatisfied with any aspect of your experience, please contact hello@thehouseofclio.com or write to the founder directly at gigi@thehouseofclio.com. We will acknowledge your complaint within 48 hours and aim to resolve it within 14 days. We believe most disagreements can be resolved through honest conversation. If a matter cannot be resolved informally, mediation through a mutually agreed mediator will be pursued before any legal proceedings."},
            {n:"24",t:"Governing law",p:"These terms are governed by the laws of England and Wales. Disputes are subject to the exclusive jurisdiction of the courts of England and Wales. If there is a problem, we would rather resolve it in conversation than through a legal process."},
          ]},
        ].map((group,gi)=><Rv key={gi} delay={gi*60}>
          <div style={{marginBottom:44}}>
            <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:24}}>
              <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".4em",textTransform:"uppercase",color:T.copper,opacity:.7}}>{group.group}</div>
              <div style={{flex:1,height:1,background:`linear-gradient(90deg,${T.copper}20,transparent)`}}/>
            </div>
            {group.items.map((s,i)=><div key={i} style={{display:"grid",gridTemplateColumns:"36px 1fr",gap:14,marginBottom:24,paddingBottom:24,borderBottom:i<group.items.length-1?`1px solid ${T.rose}06`:"none",alignItems:"start"}}>
              <div style={{fontFamily:F.display,fontSize:"clamp(17px,3.2vw,20px)",fontWeight:300,color:T.rose,opacity:.45,paddingTop:1}}>{s.n}</div>
              <div>
                <h2 style={{fontFamily:F.display,fontSize:19,fontWeight:400,color:T.bg,marginBottom:8}}>{s.t}</h2>
                <p style={{fontFamily:F.body,fontSize:"clamp(12px,2.8vw,13px)",fontWeight:400,lineHeight:1.9,color:TX.onLightSub}}>{s.p}</p>
              </div>
            </div>)}
          </div>
        </Rv>)}

        {/* Warming links */}
        <Rv>
          <div style={{display:"flex",justifyContent:"center",gap:"clamp(20px,4vw,40px)",marginBottom:28,flexWrap:"wrap"}}>
            <Link href={getHref("programme")} {...hp} style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".22em",textTransform:"uppercase",color:T.cream,opacity:.5,cursor:"none",borderBottom:`1px solid ${T.rose}30`,paddingBottom:3,transition:"color .3s,opacity .3s,border-color .3s",textDecoration:"none"}}
            onMouseEnter={e=>{setHov(true);e.target.style.opacity="1";e.target.style.color=T.rose;e.target.style.borderBottomColor=T.rose;}}
            onMouseLeave={e=>{setHov(false);e.target.style.opacity=".5";e.target.style.color=T.cream;e.target.style.borderBottomColor=`${T.rose}30`;}}
            >See the programme</Link>
            <Link href={getHref("circle")} {...hp} style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".22em",textTransform:"uppercase",color:T.cream,opacity:.5,cursor:"none",borderBottom:`1px solid ${T.rose}30`,paddingBottom:3,transition:"color .3s,opacity .3s,border-color .3s",textDecoration:"none"}}
            onMouseEnter={e=>{setHov(true);e.target.style.opacity="1";e.target.style.color=T.rose;e.target.style.borderBottomColor=T.rose;}}
            onMouseLeave={e=>{setHov(false);e.target.style.opacity=".5";e.target.style.color=T.cream;e.target.style.borderBottomColor=`${T.rose}30`;}}
            >Meet the people</Link>
            <Link href={getHref("founder")} {...hp} style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".22em",textTransform:"uppercase",color:T.cream,opacity:.5,cursor:"none",borderBottom:`1px solid ${T.rose}30`,paddingBottom:3,transition:"color .3s,opacity .3s,border-color .3s",textDecoration:"none"}}
            onMouseEnter={e=>{setHov(true);e.target.style.opacity="1";e.target.style.color=T.rose;e.target.style.borderBottomColor=T.rose;}}
            onMouseLeave={e=>{setHov(false);e.target.style.opacity=".5";e.target.style.color=T.cream;e.target.style.borderBottomColor=`${T.rose}30`;}}
            >Meet the host</Link>
          </div>
        </Rv>

        {/* Personal closing. Gigi's voice */}
        <Rv>
          <div style={{padding:"32px 36px",background:T.white,border:`1px solid ${T.rose}10`,position:"relative",overflow:"hidden",boxShadow:"0 4px 24px rgba(26,8,32,.03)"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${T.copper},${T.gold}40,transparent)`}}/>
            <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".3em",textTransform:"uppercase",color:T.copper,marginBottom:14}}>A Personal Note</div>
            <p style={{fontFamily:F.display,fontSize:"clamp(14px,3.2vw,16px)",fontWeight:400,fontStyle:"italic",lineHeight:1.7,color:TX.onLight,marginBottom:8}}>These terms exist to protect you, not to protect us from you. I wrote them the way I would explain them if you were sitting across from me. If anything here feels unclear, or if you ever feel the ?use has not held up its end of this agreement, write to me directly. I would rather hear it from you than from a lawyer.</p>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:16,paddingTop:14,borderTop:`1px solid ${T.rose}08`}}>
              <div style={{fontFamily:F.body,fontSize:"clamp(11px,2.5vw,12px)",fontWeight:400,color:T.rose}}>Gigi</div>
              <div style={{fontFamily:F.body,fontSize:10,fontWeight:300,color:TX.onLightMuted}}>gigi@thehouseofclio.com</div>
            </div>
          </div>
        </Rv>
      </Rv></Mx>
    </Sec>
    <section style={{background:T.bg2,padding:"clamp(28px,3.5vh,40px) clamp(40px,6vw,80px)",textAlign:"center"}}><Rv>
      <p style={{fontFamily:F.display,fontSize:17,fontWeight:400,fontStyle:"italic",color:TX.onDarkMuted}}>If these terms feel fair, the room will feel right. <Link href={getHref("programme")} style={{color:T.rose,cursor:"pointer",borderBottom:`1px solid ${T.rose}30`,textDecoration:"none"}}>View the programme</Link> or <Link href={getHref("apply")} style={{color:T.rose,cursor:"pointer",borderBottom:`1px solid ${T.rose}30`,textDecoration:"none"}}>introduce yourself</Link>.</p>
    </Rv></section>
    </>
  );
}
