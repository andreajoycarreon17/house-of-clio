"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSiteChrome } from "@/components/layout/site-context";
import { CW, FAQ_DATA, FOUNDERS } from "@/data/formats";
import { getHref } from "@/lib/routes";
import { BTN, Dv, F, GoldLine, IMG, ImgPlace, Lbl, MarkLayer, Mx, Orb, PersonSilhouette, RealImg, Rv, Sec, T, TX, CI, CM } from "@/components/shared";

export default function BookPage() {
  const router = useRouter();
  const { hp, setHov, mouse, ld, trackInteraction } = useSiteChrome();
  const go = (target) => router.push(getHref(target));
  

  return (
    <>
<Sec bg={T.offW} style={{paddingTop:"clamp(100px,14vh,160px)"}}>
      <div style={{height:3,background:`linear-gradient(90deg,${T.rose},${T.gold},rgba(201,149,108,.08))`,position:"absolute",top:0,left:0,right:0}}/>
      <Mx w={800}><Rv>
        <div style={{textAlign:"center",marginBottom:56}}>
          <Lbl color="rgba(46,18,64,.35)">The Programme</Lbl>
          <h1 style={{fontFamily:F.display,fontSize:"clamp(32px,4.5vw,48px)",fontWeight:400,lineHeight:.92,color:T.bg,marginBottom:14}}>Reserve<br/><em style={{color:T.rose}}>your place.</em></h1>
          <p style={{fontFamily:F.body,fontSize:"clamp(13px,3vw,14px)",fontWeight:400,lineHeight:1.9,color:TX.onLightSub,maxWidth:"42ch",margin:"0 auto 16px"}}>Each gathering has a limited number of places. Prices include the venue, the hosting, the composition, and everything that arrives at your table.</p>
          <p style={{fontFamily:F.body,fontSize:11,fontWeight:300,color:TX.onLightMuted,fontStyle:"italic"}}>Booking is open to the Circle. Not yet in the Circle? <Link href={getHref("apply")} style={{color:T.rose,cursor:"pointer",borderBottom:`1px solid ${T.rose}30`,textDecoration:"none"}}>Introduce yourself</Link>.</p>
        </div>

        {/* SEASONAL � fixed + variable pricing */}
        <div style={{marginBottom:48}}>
          <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:24}}>
            <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".4em",textTransform:"uppercase",color:T.copper,opacity:.7}}>This Season</div>
            <div style={{flex:1,height:1,background:`linear-gradient(90deg,${T.copper}20,transparent)`}}/>
          </div>
          {[
            {format:"The First House",date:"June 2026",cap:"24 places",price:"�500",fixed:true,desc:"The opening of the season. A morning activity, lunch, and the room that forms the Circle."},
            {format:"The Evening",date:"June 2026",cap:"18 places",price:"�250",fixed:true,desc:"The flagship room. One long table. Composed seating. Three courses."},
            {format:"The Supper Lecture",date:"July 2026",cap:"28 places",price:"�300",fixed:true,desc:"A formidable mind speaks for thirty minutes. Then stays for dinner."},
            {format:"City Escape: Paris",date:"September 2026",cap:"18 places",price:"From �2,400",fixed:false,desc:"Two nights. Hotel, dining, cultural access, and transfers arranged. Flights not included."},
            {format:"City Escape: Dublin",date:"October 2026",cap:"16 places",price:"From �2,000",fixed:false,desc:"Two nights. The second city. Hotel, dining, and access arranged. Flights not included."},
            {format:"Grand Journey: Puglia",date:"October 2026",cap:"10 places",price:"From �4,800",fixed:false,desc:"Four nights. Accommodation, local transport, private dining, and local guides. Flights not included."},
            {format:"The Annual House",date:"December 2026",cap:"100 places",price:"�275",fixed:true,desc:"End of season. The full Circle in one room. The largest gathering of the year."},
          ].map((g,i)=><div key={i} style={{display:"grid",gridTemplateColumns:"1fr auto",gap:20,alignItems:"center",padding:"20px 0",borderBottom:`1px solid ${T.rose}08`}}>
            <div>
              <h3 style={{fontFamily:F.display,fontSize:"clamp(17px,2.5vw,20px)",fontWeight:400,color:T.bg,margin:"0 0 4px"}}>{g.format}</h3>
              <p style={{fontFamily:F.body,fontSize:12,fontWeight:400,lineHeight:1.7,color:TX.onLightSub,margin:"0 0 6px"}}>{g.desc}</p>
              <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
                <span style={{fontFamily:F.body,fontSize:10,fontWeight:500,letterSpacing:".15em",color:T.copper}}>{g.date}</span>
                <span style={{fontFamily:F.body,fontSize:10,fontWeight:400,color:TX.onLightMuted}}>{g.cap}</span>
                <span style={{fontFamily:F.body,fontSize:10,fontWeight:500,color:g.fixed?T.bg:TX.onLightSub,fontStyle:g.fixed?"normal":"italic"}}>{g.price}</span>
              </div>
            </div>
            {g.fixed?
              <button type="button" onClick={()=>{}} aria-label={`Reserve ${g.format}`} style={{background:T.bg,color:T.cream,border:"none",padding:"10px 24px",fontFamily:F.body,fontSize:"clamp(8px,1.8vw,9px)",fontWeight:500,letterSpacing:".25em",textTransform:"uppercase",cursor:"pointer",whiteSpace:"nowrap",transition:"background .3s"}} onMouseEnter={e=>e.target.style.background=T.copper} onMouseLeave={e=>e.target.style.background=T.bg}>Reserve</button>
            :
              <Link href={getHref("contact")} aria-label={`Begin booking ${g.format}`} style={{background:"transparent",color:T.copper,border:`1px solid ${T.copper}30`,padding:"10px 24px",fontFamily:F.body,fontSize:"clamp(8px,1.8vw,9px)",fontWeight:500,letterSpacing:".22em",textTransform:"uppercase",cursor:"pointer",whiteSpace:"nowrap",transition:"all .3s",textDecoration:"none",display:"inline-block"}} onMouseEnter={e=>{e.target.style.borderColor=T.copper;e.target.style.background=`${T.copper}06`}} onMouseLeave={e=>{e.target.style.borderColor=`${T.copper}30`;e.target.style.background="transparent"}}>Begin booking</Link>
            }
          </div>)}
        </div>

        {/* RECURRING */}
        <div style={{marginBottom:48}}>
          <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:24}}>
            <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".4em",textTransform:"uppercase",color:T.copper,opacity:.7}}>Recurring</div>
            <div style={{flex:1,height:1,background:`linear-gradient(90deg,${T.copper}20,transparent)`}}/>
          </div>
          {[
            {format:"The Returning Table",freq:"Every two to three weeks",cap:"10 places",price:"�150",desc:"The table that builds. Some faces are new. Some you sat beside last time."},
            {format:"The Walk",freq:"Fortnightly",cap:"12 places",price:"�45",desc:"A walk at conversational pace. Six pairs rotating. Ends at a table chosen for the warmth of the room."},
            {format:"The Distance Day",freq:"Quarterly",cap:"8 places",price:"�195",desc:"Two cars of four. Leave London. A destination chosen for the table at the end. The lunch is the point."},
          ].map((g,i)=><div key={i} style={{display:"grid",gridTemplateColumns:"1fr auto",gap:20,alignItems:"center",padding:"20px 0",borderBottom:`1px solid ${T.rose}08`}}>
            <div>
              <h3 style={{fontFamily:F.display,fontSize:"clamp(17px,2.5vw,20px)",fontWeight:400,color:T.bg,margin:"0 0 4px"}}>{g.format}</h3>
              <p style={{fontFamily:F.body,fontSize:12,fontWeight:400,lineHeight:1.7,color:TX.onLightSub,margin:"0 0 6px"}}>{g.desc}</p>
              <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
                <span style={{fontFamily:F.body,fontSize:10,fontWeight:500,letterSpacing:".15em",color:T.copper}}>{g.freq}</span>
                <span style={{fontFamily:F.body,fontSize:10,fontWeight:400,color:TX.onLightMuted}}>{g.cap}</span>
                <span style={{fontFamily:F.body,fontSize:10,fontWeight:500,color:T.bg}}>{g.price}</span>
              </div>
            </div>
            <button type="button" onClick={()=>{}} aria-label={`Reserve ${g.format}`} style={{background:T.bg,color:T.cream,border:"none",padding:"10px 24px",fontFamily:F.body,fontSize:"clamp(8px,1.8vw,9px)",fontWeight:500,letterSpacing:".25em",textTransform:"uppercase",cursor:"pointer",whiteSpace:"nowrap",transition:"background .3s"}} onMouseEnter={e=>e.target.style.background=T.copper} onMouseLeave={e=>e.target.style.background=T.bg}>Reserve</button>
          </div>)}
        </div>

        {/* SOCIETIES */}
        <div style={{marginBottom:48}}>
          <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:24}}>
            <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".4em",textTransform:"uppercase",color:T.copper,opacity:.7}}>Societies</div>
            <div style={{flex:1,height:1,background:`linear-gradient(90deg,${T.copper}20,transparent)`}}/>
          </div>
          {[
            {format:"The Culture Evening",freq:"Monthly",cap:"18 places",price:"�220",desc:"A production at the Almeida or a private view at the Royal Academy. Theatre ticket included. Dinner follows."},
            {format:"The Ride",freq:"Fortnightly",cap:"10 riders",price:"�65",desc:"A proper road ride at conversational pace. Five pairs on the road. The ride finishes with a long lunch."},
          ].map((g,i)=><div key={i} style={{display:"grid",gridTemplateColumns:"1fr auto",gap:20,alignItems:"center",padding:"20px 0",borderBottom:`1px solid ${T.rose}08`}}>
            <div>
              <h3 style={{fontFamily:F.display,fontSize:"clamp(17px,2.5vw,20px)",fontWeight:400,color:T.bg,margin:"0 0 4px"}}>{g.format}</h3>
              <p style={{fontFamily:F.body,fontSize:12,fontWeight:400,lineHeight:1.7,color:TX.onLightSub,margin:"0 0 6px"}}>{g.desc}</p>
              <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
                <span style={{fontFamily:F.body,fontSize:10,fontWeight:500,letterSpacing:".15em",color:T.copper}}>{g.freq}</span>
                <span style={{fontFamily:F.body,fontSize:10,fontWeight:400,color:TX.onLightMuted}}>{g.cap}</span>
                <span style={{fontFamily:F.body,fontSize:10,fontWeight:500,color:T.bg}}>{g.price}</span>
              </div>
            </div>
            <button type="button" onClick={()=>{}} aria-label={`Reserve ${g.format}`} style={{background:T.bg,color:T.cream,border:"none",padding:"10px 24px",fontFamily:F.body,fontSize:"clamp(8px,1.8vw,9px)",fontWeight:500,letterSpacing:".25em",textTransform:"uppercase",cursor:"pointer",whiteSpace:"nowrap",transition:"background .3s"}} onMouseEnter={e=>e.target.style.background=T.copper} onMouseLeave={e=>e.target.style.background=T.bg}>Reserve</button>
          </div>)}
        </div>

        {/* BY ARRANGEMENT */}
        <div style={{marginBottom:48}}>
          <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:24}}>
            <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".4em",textTransform:"uppercase",color:T.copper,opacity:.7}}>By Arrangement</div>
            <div style={{flex:1,height:1,background:`linear-gradient(90deg,${T.copper}20,transparent)`}}/>
          </div>
          <div style={{padding:"28px 32px",background:T.white,border:`1px solid ${T.rose}08`,position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${T.copper},${T.gold}40,transparent)`}}/>
            <h3 style={{fontFamily:F.display,fontSize:"clamp(19px,2.5vw,24px)",fontWeight:400,color:T.bg,margin:"0 0 8px"}}>The Private House</h3>
            <p style={{fontFamily:F.body,fontSize:13,fontWeight:400,lineHeight:1.9,color:TX.onLightSub,margin:"0 0 6px",maxWidth:"52ch"}}>Twelve to forty guests. A room composed entirely around your world. Venue, portraits, seating, sequence, and every detail handled.</p>
            <p style={{fontFamily:F.body,fontSize:11,fontWeight:300,color:TX.onLightMuted,fontStyle:"italic",margin:"0 0 16px"}}>Pricing reflects the scope and is confirmed in conversation.</p>
            <Link href={getHref("contact")} style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".22em",textTransform:"uppercase",color:T.copper,cursor:"pointer",borderBottom:`1px solid ${T.copper}30`,paddingBottom:3,textDecoration:"none"}}>Begin a conversation</Link>
          </div>
        </div>

        {/* WHAT YOUR PLACE INCLUDES */}
        <Rv><div style={{padding:"28px 32px",background:T.white,border:`1px solid ${T.rose}06`,marginBottom:24}}>
          <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".3em",textTransform:"uppercase",color:T.copper,marginBottom:14}}>What your place includes</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px 28px"}} className="g1">
            {["A written portrait of every person in the room","Composed seating decided by the host","A greeting by name on arrival","The venue, the table, and everything served","Post-gathering introductions where appropriate","Priority access to the next gathering"].map((s,i)=><p key={i} style={{fontFamily:F.body,fontSize:12,fontWeight:400,lineHeight:1.7,color:TX.onLightSub,margin:0,display:"flex",gap:8,alignItems:"flex-start"}}><span style={{color:T.copper,fontSize:10,marginTop:2,flexShrink:0}}>�</span>{s}</p>)}
          </div>
        </div></Rv>

        {/* WHAT HAPPENS AFTER BOOKING */}
        <Rv><div style={{padding:"28px 32px",background:T.white,border:`1px solid ${T.rose}06`,marginBottom:24}}>
          <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".3em",textTransform:"uppercase",color:T.copper,marginBottom:14}}>What happens after booking</div>
          {["Written confirmation and payment receipt sent within the hour.","A portrait of every person in the room, sent before the gathering.","Practical details, including venue, timing, and dress, shared at the right moment.","On the evening, a host greets you by name. The person beside you was chosen."].map((s,i)=><p key={i} style={{fontFamily:F.body,fontSize:12,fontWeight:400,lineHeight:1.8,color:TX.onLightSub,margin:"0 0 6px"}}>{s}</p>)}
        </div></Rv>

        {/* PAYMENT AND CANCELLATION */}
        <Rv><div style={{padding:"28px 32px",background:T.white,border:`1px solid ${T.rose}06`,marginBottom:24}}>
          <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".3em",textTransform:"uppercase",color:T.copper,marginBottom:14}}>Payment and cancellation</div>
          <p style={{fontFamily:F.body,fontSize:12,fontWeight:400,lineHeight:1.8,color:TX.onLightSub,margin:"0 0 6px"}}>Full payment is collected at the time of booking for all programme gatherings.</p>
          <p style={{fontFamily:F.body,fontSize:12,fontWeight:400,lineHeight:1.8,color:TX.onLightSub,margin:"0 0 6px"}}>Gatherings and recurring formats: cancel 14 days before for a full refund.</p>
          <p style={{fontFamily:F.body,fontSize:12,fontWeight:400,lineHeight:1.8,color:TX.onLightSub,margin:"0 0 6px"}}>Journeys and city escapes: cancel 30 days before for a full refund.</p>
          <p style={{fontFamily:F.body,fontSize:12,fontWeight:400,lineHeight:1.8,color:TX.onLightSub,margin:"0 0 6px"}}>If the ?use cancels for any reason, you receive a full refund within 14 days.</p>
          <p style={{fontFamily:F.body,fontSize:11,fontWeight:300,color:TX.onLightMuted,fontStyle:"italic",marginTop:12}}><Link href={getHref("terms")} style={{color:T.rose,cursor:"pointer",borderBottom:`1px solid ${T.rose}20`,textDecoration:"none"}}>Full terms of participation</Link></p>
        </div></Rv>

        {/* TRUST SIGNALS */}
        <Rv><div style={{textAlign:"center",marginBottom:40,padding:"16px 0"}}>
          <div style={{display:"flex",justifyContent:"center",gap:"clamp(16px,3vw,28px)",flexWrap:"wrap",fontFamily:F.body,fontSize:11,fontWeight:400,color:TX.onLightMuted}}>
            <span style={{display:"flex",alignItems:"center",gap:6}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>Secured by Stripe</span>
            <span>No membership fee</span>
            <span>Pay only for what you attend</span>
          </div>
        </div></Rv>

      </Rv></Mx>
    </Sec>
    <section style={{background:T.bg2,padding:"clamp(28px,3.5vh,40px) clamp(40px,6vw,80px)",textAlign:"center"}}><Rv>
      <p style={{fontFamily:F.display,fontSize:17,fontWeight:400,fontStyle:"italic",color:TX.onDarkMuted}}>Every place is limited. Every room is composed once. <Link href={getHref("programme")} style={{color:T.rose,cursor:"pointer",borderBottom:`1px solid ${T.rose}30`,textDecoration:"none"}}>See the full Exchange</Link> or <Link href={getHref("apply")} style={{color:T.rose,cursor:"pointer",borderBottom:`1px solid ${T.rose}30`,textDecoration:"none"}}>introduce yourself</Link>.</p>
    </Rv></section>
    </>
  );
}
