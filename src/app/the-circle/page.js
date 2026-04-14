"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSiteChrome } from "@/components/layout/site-context";
import { CW, FAQ_DATA, FOUNDERS } from "@/data/formats";
import { getHref } from "@/lib/routes";
import { BTN, Dv, F, GoldLine, IMG, ImgPlace, Lbl, MarkLayer, Mx, Orb, PersonSilhouette, RealImg, Rv, Sec, T, TX, CI, CM } from "@/components/shared";
import { BRAND_AKAN } from "@/lib/brand";

export default function TheCirclePage() {
  const router = useRouter();
  const { hp, setHov, mouse, ld, trackInteraction } = useSiteChrome();
  const go = (target) => router.push(getHref(target));
  const [slide, setSlide] = useState(0);
  useEffect(() => { const timer = setInterval(() => setSlide((value) => (value + 1) % CW.length), 6000); return () => clearInterval(timer); }, []);

  return (
    <>
{/* === HERO === */}
    <Sec bg={T.bg} style={{paddingBottom:"clamp(28px,3vh,40px)"}}>
      <Mx w={960}>
        <Rv>
          <div style={{display:"grid",gridTemplateColumns:"1fr auto",gap:"clamp(32px,5vw,64px)",alignItems:"center"}} className="g1">
            <div>
              <Lbl>The Circle</Lbl>
              <h1 style={{fontFamily:F.display,fontSize:"clamp(34px,4.5vw,54px)",fontWeight:400,lineHeight:.9,color:T.cream,marginBottom:20}}>Inside the House.<br/><em style={{color:T.rose,fontStyle:"italic"}}>This is how interesting people meet.</em></h1>
              <Dv w="44px" m="0 0 24px"/>
              <p style={{fontFamily:F.body,fontSize:"clamp(13px,3vw,14px)",fontWeight:400,lineHeight:2,color:TX.onDarkSub,maxWidth:440}}>Before every gathering, you receive a written portrait of every person in the room. Not their job title. What fascinates them. What they carry into a conversation. Every person is placed beside the right person. That placement is the product. The circle grows through introduction, not application. Each person inside holds a limited number of nominations per season. The people recruit the people.</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:10}}>
              <CI size={88}/>
              <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".3em",textTransform:"uppercase",color:T.gold,opacity:.5}}>Eight at the Table</div>
            </div>
          </div>
        </Rv>
      </Mx>
    </Sec>

    {/* Atmospheric. The room, mid-evening */}
    <section style={{background:T.bg2,padding:"0 clamp(40px,6vw,80px)"}}>
      <Mx w={960}><Rv><RealImg src={IMG.candles} alt={`Candles reflected in dark glass. The Circle at the ${BRAND_AKAN}.`} h={220} aspect="21/9"/></Rv></Mx>
    </section>

    {/* === INTERLUDE. cream for zen break === */}
    <section style={{background:T.cream,padding:"clamp(28px,4vh,44px) clamp(40px,6vw,80px)",textAlign:"center"}}>
      <Rv>
        <p style={{fontFamily:F.display,fontSize:"clamp(16px,3.2vw,20px)",fontWeight:400,fontStyle:"italic",color:T.bg,opacity:.85,maxWidth:560,margin:"0 auto"}}>You will not see job titles below. You will see what people carry into a room. That is what we compose around.</p>
      </Rv>
    </section>

    {/* Atmospheric. The room before the evening */}
    <section style={{background:T.bg2,padding:"2px clamp(40px,6vw,80px)"}}>
      <Mx w={960}><Rv>
        <RealImg src={IMG.dinner} h={240} alt={`A composed room at the ${BRAND_AKAN} before the guests arrive.`} aspect="3/1"/>
      </Rv></Mx>
    </section>

    {/* === FOUNDING CIRCLE LABEL === */}
    <section style={{background:T.bg2,padding:"clamp(28px,3vh,40px) clamp(40px,6vw,80px) clamp(16px,2vh,24px)"}}>
      <Mx w={960}><Rv>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}>
          <div>
            <h2 style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".4em",textTransform:"uppercase",color:T.gold,opacity:.5,marginBottom:6,margin:"0 0 6px"}}>Eight at the Table</h2>
            <div style={{fontFamily:F.display,fontSize:"clamp(18px,2.2vw,24px)",fontWeight:400,color:T.cream,lineHeight:1.15}}>The first people who said yes.</div>
          </div>
          <div style={{fontFamily:F.body,fontSize:10,fontWeight:400,color:TX.onDarkMuted,letterSpacing:".06em"}}>Eight at the Table · MMXXVI</div>
        </div>
        <div style={{height:1,background:`linear-gradient(90deg,${T.gold}25,transparent)`,marginTop:12}}/>
        <p style={{fontFamily:F.body,fontSize:11,fontWeight:300,color:TX.onDarkMuted,marginTop:14,fontStyle:"italic"}}>Portraits composed from real conversations. Full profiles are shared before the first gathering.</p>
      </Rv></Mx>
    </section>

    {/* === DENSITY GRID. all founders at a glance === */}
    <section style={{background:T.bg2,padding:"clamp(12px,2vh,20px) clamp(40px,6vw,80px) 0"}}>
      <Mx w={960}><Rv>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:"2px"}}>
          {FOUNDERS.map((f,i)=><div key={i} role="button" tabIndex={0} onKeyDown={e=>{if(e.key==="Enter")setSlide(i);}} onClick={()=>setSlide(i)} style={{background:`rgba(201,149,108,${slide===i?.06:.02})`,padding:"16px 14px",cursor:"pointer",transition:"color .3s,opacity .3s,border-color .3s",borderTop:`2px solid ${slide===i?T.rose:"transparent"}`}}>
            <div style={{fontFamily:F.display,fontSize:15,fontWeight:400,fontStyle:"italic",color:slide===i?T.cream:TX.onDarkSub,lineHeight:1.2,marginBottom:4}}>{f.name}</div>
            <div style={{fontFamily:F.body,fontSize:10,fontWeight:300,color:TX.onDarkMuted,letterSpacing:".08em"}}>{f.city}</div>
          </div>)}
        </div>
      </Rv></Mx>
    </section>

    {/* === PORTRAITS. Carousel, one at a time === */}
    <section style={{background:T.bg2,padding:"clamp(20px,3vh,36px) clamp(40px,6vw,80px) clamp(40px,5vh,56px)"}}>
      <Mx w={720}>
        {(()=>{const p=FOUNDERS[slide];const c=CW[p.cw];const isHost=slide===0;return(
          <div style={{position:"relative"}}>
            {/* Counter */}
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
              <div style={{fontFamily:F.body,fontSize:10,fontWeight:300,letterSpacing:".15em",color:TX.onDarkMuted}}>{String(slide+1).padStart(2,"0")} / {String(FOUNDERS.length).padStart(2,"0")}</div>
              <div style={{display:"flex",gap:12}}>
                <button type="button" onClick={()=>setSlide(s=>s>0?s-1:FOUNDERS.length-1)} onKeyDown={e=>{if(e.key==="Enter")setSlide(s=>s>0?s-1:FOUNDERS.length-1);}} tabIndex={0} aria-label="Previous profile" style={{width:44,height:44,borderRadius:"50%",border:`1px solid ${T.rose}25`,background:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"color .3s,opacity .3s,border-color .3s"}} onMouseEnter={e=>{setHov(true);e.currentTarget.style.borderColor=`${T.rose}55`;}} onMouseLeave={e=>{setHov(false);e.currentTarget.style.borderColor=`${T.rose}25`;}}><svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke={T.rose} strokeWidth="1.2" strokeLinecap="round"/></svg></button>
                <button type="button" onClick={()=>setSlide(s=>s<FOUNDERS.length-1?s+1:0)} onKeyDown={e=>{if(e.key==="Enter")setSlide(s=>s<FOUNDERS.length-1?s+1:0);}} tabIndex={0} aria-label="Next profile" style={{width:44,height:44,borderRadius:"50%",border:`1px solid ${T.rose}25`,background:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"color .3s,opacity .3s,border-color .3s"}} onMouseEnter={e=>{setHov(true);e.currentTarget.style.borderColor=`${T.rose}55`;}} onMouseLeave={e=>{setHov(false);e.currentTarget.style.borderColor=`${T.rose}25`;}}><svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke={T.rose} strokeWidth="1.2" strokeLinecap="round"/></svg></button>
              </div>
            </div>

            {/* Profile card */}
            <div key={slide} aria-live="polite" style={{background:c.lBg,position:"relative",overflow:"hidden",animation:"fadeUp .6s ease both"}}>
              <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${c.acc}80,${T.gold}15,transparent)`}}/>
              <div style={{padding:"clamp(32px,4vw,48px)"}}>
                {isHost&&<div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".4em",textTransform:"uppercase",color:T.gold,opacity:.6,marginBottom:12}}>Your Host</div>}

                {/* Name + city */}
                <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:24}}>
                  <PersonSilhouette size={56} accent={c.acc}/>
                  <div>
                    <div style={{fontFamily:F.display,fontSize:"clamp(24px,3vw,32px)",fontWeight:400,color:c.txt}}>{p.name}</div>
                    <div style={{fontFamily:F.body,fontSize:10,fontWeight:300,color:c.sub,letterSpacing:".08em",opacity:.7,marginTop:2}}>{p.city}</div>
                  </div>
                </div>

                {/* Quote. large, editorial */}
                <div style={{borderLeft:`2px solid ${c.acc}30`,paddingLeft:20,marginBottom:24}}>
                  <blockquote style={{fontFamily:F.display,fontSize:"clamp(16px,1.8vw,20px)",fontWeight:400,fontStyle:"italic",color:c.txt,lineHeight:1.6,opacity:.85}}>{p.quote}</blockquote>
                </div>

                {/* Drawn to */}
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                  <div style={{width:20,height:1,background:`linear-gradient(90deg,${c.acc}40,transparent)`}}/>
                  <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".3em",textTransform:"uppercase",color:c.lbl}}>Drawn to</div>
                </div>
                <p style={{fontFamily:F.body,fontSize:12,fontWeight:300,lineHeight:1.8,color:c.sub,opacity:.6}}>{p.interests}</p>
              </div>
            </div>

            {/* Dot indicators */}
            <div style={{display:"flex",justifyContent:"center",gap:8,marginTop:20}}>
              {FOUNDERS.map((_,i)=><div key={i} role="button" tabIndex={0} aria-label={`View profile ${i+1}`} onClick={()=>setSlide(i)} onKeyDown={e=>{if(e.key==="Enter")setSlide(i);}} style={{width:i===slide?20:6,height:6,borderRadius:"50%",background:i===slide?T.rose:`${T.rose}30`,transition:"border-color .4s,background .4s,color .4s,opacity .4s",cursor:"pointer"}}/>)}
            </div>
          </div>
        );})()}
      </Mx>
    </section>

    {/* === CLOSING. copper === */}
    <section style={{background:`linear-gradient(145deg,${T.copper},#C47A3A,#7A3A18)`,padding:"clamp(48px,7vh,80px) clamp(40px,6vw,80px)",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:`linear-gradient(90deg,${T.gold},${T.copper},transparent)`}}/>
      <Mx w={560}><Rv>
        <div style={{textAlign:"center"}}>
          <div style={{fontFamily:F.display,fontSize:"clamp(26px,3.5vw,40px)",fontWeight:400,fontStyle:"italic",lineHeight:1.3,color:T.copperDk,marginBottom:28}}>
            Every person is chosen.<br/>Every room is composed.
          </div>
          <div style={{width:40,height:1,background:T.copperDk,opacity:.2,margin:"0 auto 28px"}}/>
          <p style={{fontFamily:F.body,fontSize:"clamp(13px,3vw,14px)",fontWeight:400,lineHeight:1.9,color:TX.onCopper,maxWidth:380,margin:"0 auto 32px"}}>If reading these profiles made you think of someone, that instinct is the point.</p>
          <p style={{fontFamily:F.display,fontSize:"clamp(22px,3vw,32px)",fontWeight:400,fontStyle:"italic",lineHeight:1.2,color:T.copperDk,marginBottom:32}}>If the room is right, you will know.</p>
          <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
          <Link href={getHref("apply")} {...hp} onClick={()=>{trackInteraction("cta_click","introduce_yourself");}} aria-label="Introduce yourself" style={{background:"rgba(13,1,24,.06)",cursor:"none",border:`1px solid rgba(13,1,24,.18)`,padding:"14px 44px",fontFamily:F.body,fontSize:"clamp(10px,2.2vw,11px)",fontWeight:500,letterSpacing:".32em",textTransform:"uppercase",color:T.copperDk,transition:"border-color .4s,background .4s,color .4s,opacity .4s",textDecoration:"none",display:"inline-block"}}
          onMouseEnter={e=>{setHov(true);e.target.style.background="rgba(13,1,24,.12)";}}
          onMouseLeave={e=>{setHov(false);e.target.style.background="rgba(13,1,24,.06)";}}
          >Introduce Yourself</Link>
          </div>
          <div style={{display:"flex",justifyContent:"center",gap:"clamp(20px,4vw,40px)",marginTop:20,flexWrap:"wrap"}}>
            <Link href={getHref("programme")} {...hp} style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".22em",textTransform:"uppercase",color:T.cream,opacity:.5,cursor:"none",borderBottom:`1px solid ${T.rose}30`,paddingBottom:3,transition:"color .3s,opacity .3s,border-color .3s",textDecoration:"none"}}
            onMouseEnter={e=>{setHov(true);e.target.style.opacity="1";e.target.style.color=T.rose;e.target.style.borderBottomColor=T.rose;}}
            onMouseLeave={e=>{setHov(false);e.target.style.opacity=".5";e.target.style.color=T.cream;e.target.style.borderBottomColor=`${T.rose}30`;}}
            >See the programme</Link>
            <Link href={getHref("founder")} {...hp} style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".22em",textTransform:"uppercase",color:T.cream,opacity:.5,cursor:"none",borderBottom:`1px solid ${T.rose}30`,paddingBottom:3,transition:"color .3s,opacity .3s,border-color .3s",textDecoration:"none"}}
            onMouseEnter={e=>{setHov(true);e.target.style.opacity="1";e.target.style.color=T.rose;e.target.style.borderBottomColor=T.rose;}}
            onMouseLeave={e=>{setHov(false);e.target.style.opacity=".5";e.target.style.color=T.cream;e.target.style.borderBottomColor=`${T.rose}30`;}}
            >About the founder</Link>
          </div>
          <div style={{display:"flex",gap:20,justifyContent:"center",flexWrap:"wrap",marginTop:20}}>
          <button type="button" {...hp} onClick={()=>{window.open('mailto:gigi@thehouseofclio.com?subject=I%20know%20someone%20the%20%C6%86use%20should%20meet&body=Gigi%2C%0A%0AI%20know%20someone%20you%20should%20have%20in%20the%20room.%0A%0A%0ATheir%20name%3A%20%0A%0ACity%3A%20%0A%0AThe%20reason%20I%20thought%20of%20them%3A%20%0A%0A%0AThe%20thing%20that%20makes%20them%20unforgettable%20in%20a%20room%3A%20%0A%0A%0ASomething%20they%20would%20never%20say%20about%20themselves%3A%20%0A%0A%0AMy%20name%3A%20%0A%0A%0A---%0ASent%20from%20thehouseofclio.com%0AThe%20best%20rooms%20are%20composed%20by%20the%20people%20already%20in%20them.');}} aria-label="Introduce someone" style={{background:"none",cursor:"none",border:`1px solid rgba(13,1,24,.12)`,padding:"14px 44px",fontFamily:F.body,fontSize:"clamp(10px,2.2vw,11px)",fontWeight:500,letterSpacing:".32em",textTransform:"uppercase",color:"rgba(13,1,24,.5)",transition:"border-color .4s,background .4s,color .4s,opacity .4s"}}
          onMouseEnter={e=>{setHov(true);e.target.style.borderColor="rgba(13,1,24,.25)";}}
          onMouseLeave={e=>{setHov(false);e.target.style.borderColor="rgba(13,1,24,.12)";}}
          >Introduce Someone</button>
          </div>
        </div>
      </Rv></Mx>
    </section>
    </>
  );
}
