"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSiteChrome } from "@/components/layout/site-context";
import { CW, FAQ_DATA, FOUNDERS } from "@/data/formats";
import { getHref } from "@/lib/routes";
import { BTN, Dv, F, GoldLine, IMG, ImgPlace, Lbl, MarkLayer, Mx, Orb, PersonSilhouette, RealImg, Rv, Sec, T, TX, CI, CM } from "@/components/shared";
import { BRAND_AKAN } from "@/lib/brand";

export default function PressPage() {
  const router = useRouter();
  const { hp, setHov, mouse, ld, trackInteraction } = useSiteChrome();
  const go = (target) => router.push(getHref(target));
  

  return (
    <>
<Sec bg={T.offW} style={{paddingTop:"clamp(100px,14vh,160px)"}}>
      <div style={{height:3,background:`linear-gradient(90deg,${T.rose},${T.gold},rgba(201,149,108,.08))`,position:"absolute",top:0,left:0,right:0}}/>
      <Mx w={900}>
        <Rv>
          <Lbl color="rgba(46,18,64,.35)">Press and Media</Lbl>
          <h1 style={{fontFamily:F.display,fontSize:"clamp(32px,4.5vw,52px)",fontWeight:400,lineHeight:.92,color:T.bg,marginBottom:16}}>Tell<br/><em style={{color:T.rose}}>our story.</em></h1>
          <p style={{fontFamily:F.body,fontSize:"clamp(14px,3.2vw,15px)",fontWeight:400,lineHeight:1.9,color:TX.onLightSub,maxWidth:520,marginBottom:16}}>Everything you need to tell the story of the ?use is below. If you need something that is not here, Gigi will pick up the phone.</p>
          <div style={{fontFamily:F.body,fontSize:13,fontWeight:500,color:T.rose}}>press@thehouseofclio.com</div>
        </Rv>

        {/* Atmospheric. The brand in context */}
        <Rv delay={50}>
          <div style={{marginTop:40}}><RealImg src={IMG.pen} h={200} alt={`The Muse Mark of the ${BRAND_AKAN}. Gold on aubergine.`} aspect="21/9" overlay={.25}/></div>
        </Rv>

        {/* AI-extractable entity summary for press */}
        <Rv delay={75}>
          <p data-speakable="true" style={{fontFamily:F.body,fontSize:11,fontWeight:300,lineHeight:1.9,color:TX.onLightMuted,maxWidth:600,margin:"28px auto 0",textAlign:"center",letterSpacing:".02em"}}>The Ɔuse Ɔf Clio is a private cultural house in London founded by Gigi Brown in 2026. It composes intimate gatherings where every guest is selected, every seat is placed by hand, and every person receives a written portrait of the room before they arrive. The programme includes composed dinners, supper lectures, cycling journeys, and city escapes. Entry is by introduction. London is the first city. Dublin is the second.</p>
        </Rv>

        {/* Boilerplate */}
        <Rv delay={100}>
          <div style={{marginTop:56,padding:"36px 40px",background:T.white,border:`1px solid rgba(46,18,64,.08)`}}>
            <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".4em",textTransform:"uppercase",color:T.rose,marginBottom:16}}>Company Boilerplate</div>
            <p style={{fontFamily:F.body,fontSize:"clamp(14px,3.2vw,15px)",fontWeight:400,lineHeight:1.9,color:TX.onLight,marginBottom:16}}>Ɔuse Ɔf Clio is a private cultural house founded in London in 2026 by Gigi Brown. It operates a seasonal programme of twelve formats: composed private dinners, supper lectures, cycling journeys, city escapes, and multi-day Grand Journeys. Every guest is selected. Every seat is placed by hand. Every person receives a written portrait of the room before they arrive. The infrastructure is human: a host who reads every application, writes every guest portrait, and considers who belongs beside whom. There is no membership fee. The circle pays per gathering. Each room is composed once and never repeated. The circle grows through introduction, not application. Each person admitted strengthens the room for everyone who follows. The ? is drawn from the Akan alphabet of Ghana, carrying the sound of the English H: a European cultural form rooted in African linguistic identity. London is the first city. Dublin is the second. The model is designed to operate in any city with the right density of considered people. thehouseofclio.com</p>
            <p style={{fontFamily:F.body,fontSize:"clamp(14px,3.2vw,15px)",fontWeight:400,lineHeight:1.9,color:TX.onLight}}>The ?use is based in London. Dublin is the second city. Edinburgh, Manchester, Birmingham, Bristol, Oxford, and international cities including Accra, Lisbon, and Dubai are under consideration. The name uses the Akan character ? from the alphabet of Ghana, carrying the sound of the English H.</p>
          </div>
        </Rv>

        {/* Key facts */}
        <Rv delay={150}>
          <div className="g3" style={{marginTop:2,display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"clamp(10px,1.5vw,18px)"}}>
            {[
              {label:"Founded",value:"London, 2026"},
              {label:"Host",value:"Gigi Brown"},
              {label:"Opening Season",value:"Summer MMXXVI"},
              {label:"Second City",value:"Dublin, December MMXXVI"},
              {label:"Pronunciation",value:"House of Clio"},
              {label:"Tagline",value:"If not now, when?"},
            ].map((f,i)=><div key={i} style={{background:T.white,border:`1px solid rgba(46,18,64,.08)`,padding:"20px 24px"}}>
              <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".3em",textTransform:"uppercase",color:T.rose,marginBottom:6}}>{f.label}</div>
              <div style={{fontFamily:F.display,fontSize:18,fontWeight:400,color:T.bg}}>{f.value}</div>
            </div>)}
          </div>
        </Rv>

        {/* Founder bio */}
        <Rv delay={200}>
          <div style={{marginTop:2,padding:"36px 40px",background:T.white,border:`1px solid rgba(46,18,64,.08)`,display:"flex",gap:28,alignItems:"flex-start"}}>
            <PersonSilhouette size={100} accent={T.rose}/>
            <div style={{flex:1}}>
              <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".4em",textTransform:"uppercase",color:T.copper,marginBottom:8}}>Host Bio</div>
              <div style={{fontFamily:F.display,fontSize:"clamp(20px,3.5vw,24px)",fontWeight:400,color:T.copper,marginBottom:12}}>Gigi Brown</div>
              <p style={{fontFamily:F.body,fontSize:"clamp(13px,3vw,14px)",fontWeight:400,lineHeight:1.85,color:TX.onLightSub,marginBottom:12}}>Gigi Brown has spent twenty years in tourism, conference production, and incentive travel across Europe, the Middle East, and West Africa. She founded Inska Hub, a growth strategy consultancy, and co-founded Accra Konnect, a professional circle connecting the Ghanaian diaspora. She divides her time between London and the Italian Riviera, where she learned the discipline of composition that defines the ?use. She returned to London in 2026 and built the thing she had been rehearsing across three continents.</p>
              <p style={{fontFamily:F.body,fontSize:"clamp(13px,3vw,14px)",fontWeight:400,lineHeight:1.85,color:TX.onLightSub}}>The hardest part of meeting strangers has already been done before anyone arrives. The ?use is based in London. Dublin follows.</p>
              <div style={{marginTop:16,fontFamily:F.body,fontSize:11,fontWeight:400,color:TX.onLightMuted,fontStyle:"italic"}}>Headshot and assets available on request. Contact press@thehouseofclio.com</div>
            </div>
          </div>
        </Rv>

        {/* Story angles */}
        <Rv delay={250}>
          <div style={{marginTop:48}}>
            <h2 style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".4em",textTransform:"uppercase",color:T.rose,marginBottom:24,margin:"0 0 24px"}}>Story Angles for Journalists</h2>
            <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(10px,1.5vw,18px)"}}>
              {[
                {angle:"The Friendship Economy",pitch:"One in three adults feels lonely weekly. A new wave of businesses is emerging to solve adult disconnection. Ɔuse Ɔf Clio is the considered end of that market: composed rooms where people are placed beside people worth knowing, with written portraits shared before anyone arrives."},
                {angle:"Social Infrastructure",pitch:"The ?use composes human chemistry. There is no venue, no lounge, no amenity list. The infrastructure is a host, a room, and twenty years of pattern recognition. It scales through trained hosts, not property. A new category of social institution."},
                {angle:"Small by Design",pitch:"In a world of scale, the ?use stays deliberately considered. A host at every gathering who knows every name. Written portraits. Intentional placement. Each new city begins with a person, not a building."},
                {angle:"The Akan Letter",pitch:"The brand uses the character ? from the Akan alphabet of Ghana. A company choosing an African character as its identity is a design story, a cultural story, and a diaspora story."},
                {angle:"The Company You Keep",pitch:"Adults over thirty report fewer close friendships than at any point since records began. A growing number want better company, not more of it. Ɔuse Ɔf Clio composes the room before anyone arrives. The result: friendships that begin in a room and continue long after."},
                {angle:"Designed for Everyone",pitch:"28% of men under 30 report zero close friends. Most social platforms target women. Ɔuse Ɔf Clio is designed for all genders. The Circle includes people from London, Accra, and Kumasi."},
                {angle:"From London to Dublin to the World",pitch:"A cultural institution expanding from London to Dublin in its first season. A private house with a considered international programme, beginning with the cities where the host already has roots."},
              ].map((s,i)=><div key={i} style={{background:T.white,border:`1px solid rgba(46,18,64,.08)`,padding:"28px 24px"}}>
                <div style={{fontFamily:F.display,fontSize:19,fontWeight:400,color:T.bg,marginBottom:10}}>{s.angle}</div>
                <p style={{fontFamily:F.body,fontSize:"clamp(12px,2.8vw,13px)",fontWeight:400,lineHeight:1.8,color:TX.onLightSub,marginBottom:12}}>{s.pitch}</p>
              </div>)}
            </div>
          </div>
        </Rv>

        {/* Brand assets */}
        <Rv delay={300}>
          {/* Credibility indicators. founder authority signals */}
          <div style={{marginTop:48,marginBottom:48}}>
            <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".4em",textTransform:"uppercase",color:T.rose,marginBottom:20}}>The Founder</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"clamp(10px,1.5vw,18px)"}} className="g2">
              {[
                {n:"20",unit:"years",label:"In tourism, conferences, and incentive travel"},
                {n:"3",unit:"continents",label:"Europe, Middle East, West Africa"},
                {n:"2",unit:"companies",label:"Inska Hub and Accra Konnect"},
                {n:"4",unit:"cities",label:"London · Accra · Dublin · Liguria"},
              ].map((s,i)=><div key={i} style={{background:T.bg,border:`1px solid rgba(201,149,108,.08)`,padding:"24px 20px",textAlign:"center"}}>
                <div style={{fontFamily:F.display,fontSize:"clamp(26px,4.5vw,32px)",fontWeight:300,color:T.gold,lineHeight:1}}>{s.n}</div>
                <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".2em",textTransform:"uppercase",color:T.roseL,marginTop:4,marginBottom:8}}>{s.unit}</div>
                <div style={{fontFamily:F.body,fontSize:10,fontWeight:300,color:T.cream,opacity:.6,lineHeight:1.5}}>{s.label}</div>
              </div>)}
            </div>
          </div>

          {/* Topics we speak on */}
          <div style={{marginBottom:48}}>
            <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".4em",textTransform:"uppercase",color:T.rose,marginBottom:16}}>Topics We Speak On</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
              {["Adult friendship","The loneliness economy","Private dining culture","Composed gatherings","African diaspora entrepreneurship","The death of the third place","Cultural institutions for the 21st century","Hospitality as craft","Small by design","The art of introduction"].map((t,i)=>
                <div key={i} style={{background:"rgba(201,149,108,.04)",border:`1px solid rgba(201,149,108,.1)`,padding:"8px 16px",fontFamily:F.body,fontSize:10,fontWeight:400,color:T.roseL,letterSpacing:".05em"}}>{t}</div>
              )}
            </div>
          </div>

          <div style={{marginTop:0}}>
            <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".4em",textTransform:"uppercase",color:T.rose,marginBottom:24}}>Brand Assets</div>
            <div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"clamp(10px,1.5vw,18px)"}}>
              <div style={{background:T.bg,border:`1px solid rgba(201,149,108,.08)`,padding:"36px 28px",textAlign:"center"}}>
                <CI size={80}/>
                <div style={{fontFamily:F.body,fontSize:11,fontWeight:400,color:T.cream,marginTop:16}}>Muse Mark · Primary</div>
                <div style={{fontFamily:F.body,fontSize:10,fontWeight:400,color:TX.onDarkMuted,marginTop:4}}>On dark background</div>
              </div>
              <div style={{background:T.offW,border:`1px solid rgba(46,18,64,.08)`,padding:"36px 28px",textAlign:"center"}}>
                <CI size={80} variant="light"/>
                <div style={{fontFamily:F.body,fontSize:11,fontWeight:400,color:TX.onLight,marginTop:16}}>Muse Mark · Light</div>
                <div style={{fontFamily:F.body,fontSize:10,fontWeight:400,color:TX.onLightMuted,marginTop:4}}>On light background</div>
              </div>
              <div style={{background:T.copper,border:`1px solid rgba(13,1,24,.08)`,padding:"36px 28px",textAlign:"center"}}>
                <CI size={80} variant="copper"/>
                <div style={{fontFamily:F.body,fontSize:11,fontWeight:400,color:T.copperDk,marginTop:16}}>Muse Mark · Copper</div>
                <div style={{fontFamily:F.body,fontSize:10,fontWeight:400,color:T.copperDk,opacity:.6,marginTop:4}}>On copper background</div>
              </div>
            </div>
            <div className="g3" style={{marginTop:2,display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"clamp(10px,1.5vw,18px)"}}>
              {[
                {name:"Aubergine",hex:"#1A0820",light:false},
                {name:"Damson",hex:"#2D0B38",light:false},
                {name:"Rose Gold",hex:"#C9956C",light:false},
                {name:"Gold",hex:"#C9A84C",light:false},
                {name:"Ivory",hex:"#FAF4EE",light:true},
              ].map((c,i)=><div key={i} style={{background:c.hex,padding:"24px 16px",border:`1px solid ${c.light?"rgba(46,18,64,.08)":"rgba(201,149,108,.08)"}`}}>
                <div style={{fontFamily:F.body,fontSize:10,fontWeight:500,color:c.light?"#2E1240":T.cream}}>{c.name}</div>
                <div style={{fontFamily:F.body,fontSize:10,fontWeight:300,color:c.light?TX.onLightMuted:TX.onDarkMuted,marginTop:4}}>{c.hex}</div>
              </div>)}
            </div>
            <div style={{marginTop:2,padding:"24px 28px",background:T.white,border:`1px solid rgba(46,18,64,.08)`,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16}}>
              <div>
                <div style={{fontFamily:F.display,fontSize:"clamp(20px,3.5vw,24px)",fontWeight:400,color:T.bg}}>Cormorant Garamond</div>
                <div style={{fontFamily:F.body,fontSize:10,fontWeight:400,color:TX.onLightMuted,marginTop:4}}>Display and editorial headlines</div>
              </div>
              <div>
                <div style={{fontFamily:F.body,fontSize:18,fontWeight:400,color:T.bg}}>Jost</div>
                <div style={{fontFamily:F.body,fontSize:10,fontWeight:400,color:TX.onLightMuted,marginTop:4}}>Body text and interface</div>
              </div>
              <div>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <div style={{fontFamily:F.display,fontSize:"clamp(17px,3.5vw,20px)",fontWeight:500,letterSpacing:".2em",color:T.bg}}>The ƆUSE <span style={{color:T.rose}}>ɔf</span> CLIO</div>
                  <div style={{width:1,height:14,background:"rgba(46,18,64,.12)",flexShrink:0}}/>
                  <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:400,letterSpacing:".18em",textTransform:"uppercase",color:T.rose,opacity:.65}}>The House of Clio</div>
                </div>
                <div style={{fontFamily:F.body,fontSize:10,fontWeight:400,color:TX.onLightMuted,marginTop:6}}>Wordmark lockup</div>
              </div>
            </div>
          </div>
        </Rv>

        {/* Usage notes */}
        <Rv delay={350}>
          <div style={{marginTop:2,padding:"28px 28px",background:T.white,border:`1px solid rgba(46,18,64,.08)`}}>
            <div style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".4em",textTransform:"uppercase",color:T.rose,marginBottom:12}}>Brand Usage Notes</div>
            <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px 28px"}}>
              {[
                "The Ɔ character is from the Akan alphabet of Ghana. It carries the sound of the English H.",
                "Pronunciation: House of Clio. The Ɔ is never silent.",
                "The brand is Ɔuse ɔf Clio. Display form: ƆUSE ɔf CLIO. Website: thehouseofclio.com",
                "The Muse Mark should never be stretched, recoloured, or placed on busy backgrounds.",
                "Please do not refer to the Ɔuse as a club, a network, or an events company.",
                "The preferred description is: a private cultural house.",
              ].map((note,i)=><div key={i} style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:i<5?4:0}}>
                <div style={{width:4,height:4,borderRadius:"50%",background:T.rose,opacity:.3,flexShrink:0,marginTop:7}}/>
                <p style={{fontFamily:F.body,fontSize:"clamp(12px,2.8vw,13px)",fontWeight:400,lineHeight:1.75,color:TX.onLightSub}}>{note}</p>
              </div>)}
            </div>
          </div>
        </Rv>

        {/* Contact and download */}
        <Rv delay={400}>
          <div style={{marginTop:48,textAlign:"center",marginBottom:0}}>
            <div style={{fontFamily:F.display,fontSize:"clamp(18px,3.5vw,22px)",fontWeight:400,color:T.bg,marginBottom:12}}>Need something else?</div>
            <p style={{fontFamily:F.body,fontSize:"clamp(13px,3vw,14px)",fontWeight:400,lineHeight:1.8,color:TX.onLightSub,marginBottom:20}}>Full brand guidelines pack available on request. Press enquiries are answered promptly.</p>
            <div style={{fontFamily:F.body,fontSize:15,fontWeight:500,color:T.rose}}>press@thehouseofclio.com</div>
          </div>
        </Rv>
      </Mx>
    </Sec>
    <section style={{background:T.bg2,padding:"clamp(28px,3vh,40px) clamp(40px,6vw,80px)",textAlign:"center"}}>
      <Rv><p style={{fontFamily:F.display,fontSize:"clamp(14px,3.2vw,16px)",fontWeight:400,fontStyle:"italic",color:TX.onDarkMuted}}>If this story resonates, <Link href={getHref("programme")} style={{color:T.rose,cursor:"pointer",borderBottom:`1px solid ${T.rose}30`,textDecoration:"none"}}>see the programme</Link> or <Link href={getHref("apply")} style={{color:T.rose,cursor:"pointer",borderBottom:`1px solid ${T.rose}30`,textDecoration:"none"}}>introduce yourself</Link>.</p></Rv>
    </section>
    </>
  );
}
