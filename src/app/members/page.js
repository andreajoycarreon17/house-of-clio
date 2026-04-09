"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSiteChrome } from "@/components/layout/site-context";
import { CW, FAQ_DATA, FOUNDERS } from "@/data/formats";
import { getHref } from "@/lib/routes";
import { BTN, Dv, F, GoldLine, IMG, ImgPlace, Lbl, MarkLayer, Mx, Orb, PersonSilhouette, RealImg, Rv, Sec, T, TX, CI, CM } from "@/components/shared";

export default function MembersPage() {
  const router = useRouter();
  const { hp, setHov, mouse, ld, trackInteraction } = useSiteChrome();
  const go = (target) => router.push(getHref(target));
  const [memberSearch, setMemberSearch] = useState("");

  return (
    <>
<div data-nosnippet="true">
    <Sec bg={T.offW} style={{paddingTop:"clamp(100px,14vh,160px)"}}>
      <div style={{height:3,background:`linear-gradient(90deg,${T.rose},${T.gold},rgba(201,149,108,.08))`,position:"absolute",top:0,left:0,right:0}}/>
      <Mx w={1100}>
        <Rv>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:20,marginBottom:48}}>
            <div>
              <Lbl color="rgba(46,18,64,.35)">The ?use � Members Directory</Lbl>
              <h1 style={{fontFamily:F.display,fontSize:"clamp(28px,3.5vw,44px)",fontWeight:400,lineHeight:.96,color:T.bg}}>Every person in the House.</h1>
            </div>
            <div style={{display:"flex",gap:12,alignItems:"center"}}>
              <input value={memberSearch} onChange={e=>setMemberSearch(e.target.value)} placeholder="Search by name, city, or interest" aria-label="Search members" style={{width:"clamp(200px,50vw,320px)",padding:"10px 16px",border:`1px solid rgba(46,18,64,.12)`,background:T.white,fontFamily:F.body,fontSize:13,fontWeight:400,color:TX.onLight,outline:"none",transition:"border-color .3s"}} onFocus={e=>e.target.style.borderColor=T.rose} onBlur={e=>e.target.style.borderColor="rgba(46,18,64,.12)"}/>
              <div style={{fontFamily:F.body,fontSize:11,fontWeight:400,color:TX.onLightMuted}}>{FOUNDERS.filter(f=>!memberSearch||f.name.toLowerCase().includes(memberSearch.toLowerCase())||f.city.toLowerCase().includes(memberSearch.toLowerCase())||f.interests.toLowerCase().includes(memberSearch.toLowerCase())).length} members</div>
            </div>
          </div>
        </Rv>

        {/* Summary stats */}
        <Rv delay={50}>
          <div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"clamp(10px,1.5vw,18px)",marginBottom:36}}>
            {[
              {label:"Total Members",value:FOUNDERS.length},
              {label:"Cities",value:[...new Set(FOUNDERS.flatMap(f=>f.city.split(" � ")))].length},
              {label:"London",value:FOUNDERS.filter(f=>f.city.includes("London")).length},
              {label:"Dublin",value:FOUNDERS.filter(f=>f.city.includes("Dublin")).length},
              {label:"International",value:FOUNDERS.filter(f=>!f.city.includes("London")&&!f.city.includes("Dublin")).length},
            ].map((s,i)=><div key={i} style={{background:T.white,border:`1px solid rgba(46,18,64,.08)`,padding:"20px 16px",textAlign:"center"}}>
              <div style={{fontFamily:F.display,fontSize:"clamp(26px,4.5vw,32px)",fontWeight:300,color:T.rose}}>{s.value}</div>
              <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".25em",textTransform:"uppercase",color:TX.onLightMuted,marginTop:4}}>{s.label}</div>
            </div>)}
          </div>
        </Rv>

        {/* Member cards */}
        <div className="g2" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"clamp(10px,1.5vw,18px)"}}>
          {FOUNDERS.filter(f=>!memberSearch||f.name.toLowerCase().includes(memberSearch.toLowerCase())||f.city.toLowerCase().includes(memberSearch.toLowerCase())||f.interests.toLowerCase().includes(memberSearch.toLowerCase())).map((f,i)=>{
            const cw=CW[f.cw%CW.length];
            return <Rv key={i} delay={i*60}>
              <div style={{background:T.white,border:`1px solid rgba(46,18,64,.06)`,display:"flex",overflow:"hidden"}}>
                {/* Left accent strip */}
                <div style={{width:4,background:cw.acc,flexShrink:0}}/>
                <div style={{padding:"28px 28px",flex:1}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16}}>
                    <div>
                      <div style={{fontFamily:F.display,fontSize:"clamp(18px,3.5vw,22px)",fontWeight:400,color:T.bg,marginBottom:4}}>{f.name}</div>

                    </div>
                    <div style={{textAlign:"right"}}>
                      <div style={{fontFamily:F.body,fontSize:11,fontWeight:400,color:TX.onLightSub}}>{f.city}</div>
                      <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".2em",textTransform:"uppercase",color:cw.acc,marginTop:4}}>Eight at the Table</div>
                    </div>
                  </div>
                  <div style={{height:1,background:`linear-gradient(90deg,${cw.acc}25,transparent)`,marginBottom:14}}/>
                  <p style={{fontFamily:F.display,fontSize:15,fontWeight:400,fontStyle:"italic",color:TX.onLightSub,lineHeight:1.55,marginBottom:14}}>"{f.quote}"</p>
                  <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".3em",textTransform:"uppercase",color:TX.onLightMuted,marginBottom:6}}>Interests</div>
                  <p style={{fontFamily:F.body,fontSize:12,fontWeight:400,lineHeight:1.7,color:TX.onLightSub}}>{f.interests}</p>
                </div>
              </div>
            </Rv>;
          })}
        </div>

        <Rv delay={300}>
          <div style={{marginTop:36,padding:"24px 28px",background:T.white,border:`1px solid rgba(46,18,64,.08)`,textAlign:"center"}}>
            <p style={{fontFamily:F.body,fontSize:"clamp(11px,2.5vw,12px)",fontWeight:400,color:TX.onLightMuted,lineHeight:1.7}}>This directory is visible only to you as founder. Member profiles shown here are composites used during the build phase. In production, this page will connect to your member database and display real profiles with consent status, attendance history, and preferences.</p>
          </div>
        </Rv>
      </Mx>
    </Sec>
  </div>
    </>
  );
}
