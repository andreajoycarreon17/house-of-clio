"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSiteChrome } from "@/components/layout/site-context";
import { CW, FAQ_DATA, FOUNDERS } from "@/data/formats";
import { getHref } from "@/lib/routes";
import { BTN, Dv, F, GoldLine, IMG, ImgPlace, Lbl, MarkLayer, Mx, Orb, PersonSilhouette, RealImg, Rv, Sec, T, TX, CI, CM } from "@/components/shared";
import { BRAND_AKAN } from "@/lib/brand";

export default function ContactPage() {
  const router = useRouter();
  const { hp, setHov, mouse, ld, trackInteraction } = useSiteChrome();
  const go = (target) => router.push(getHref(target));
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", city: "", curiosity: "", referral: "" });
  const [formErrors, setFormErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [formMode, setFormMode] = useState("short");
  const [contactReason, setContactReason] = useState(null);
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Please enter your name";
    if (!formData.email.trim()) errors.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Please enter a valid email";
    if (!formData.city.trim()) errors.city = "Please enter your city";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };
  const handleSubmit = async () => {
    if (validateForm()) {
      trackInteraction("form_submit", formMode);
      setSending(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 800));
        setSubmitted(true);
      } catch (error) {
        alert("Something went wrong. Please email hello@thehouseofclio.com directly.");
      } finally {
        setSending(false);
      }
    }
  };

  return (
    <>
<Sec bg={T.offW} style={{paddingTop:"clamp(100px,14vh,160px)"}}>
      <div style={{height:3,background:`linear-gradient(90deg,${T.rose},${T.gold},rgba(201,149,108,.08))`,position:"absolute",top:0,left:0,right:0}}/>
      <Mx w={640}>
        <Rv>
          <Lbl color="rgba(46,18,64,.35)">Contact</Lbl>
          <h1 style={{fontFamily:F.display,fontSize:"clamp(32px,4.5vw,48px)",fontWeight:400,lineHeight:.92,color:T.bg,marginBottom:16}}>We would rather<br/><em style={{color:T.rose}}>hear from you.</em></h1>
          <p style={{fontFamily:F.body,fontSize:"clamp(14px,3.2vw,15px)",fontWeight:400,lineHeight:1.9,color:TX.onLightSub,maxWidth:480,marginBottom:28}}>A question about our composed gatherings. A thought about joining the circle. A reason you are not quite ready to introduce yourself but wanted to say hello. Whatever it is, a real person reads it and a real person replies.</p>
          <Dv w="48px" m="0 0 32px"/>
        </Rv>

        {/* Contact options */}
        <Rv delay={50}>
          <div style={{marginBottom:44,textAlign:"center"}}>
            <h2 style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".35em",textTransform:"uppercase",color:T.rose,opacity:.5,marginBottom:14,margin:"0 0 14px"}}>Contact the ?use ?f Clio</h2>
            <div style={{fontFamily:F.body,fontSize:14,fontWeight:400,color:TX.onLight,marginBottom:6}}>hello@thehouseofclio.com</div>
            <div style={{fontFamily:F.body,fontSize:"clamp(11px,2.5vw,12px)",fontWeight:300,color:TX.onLightSub,marginBottom:16}}>A real person reads every message. If you prefer a call, say so and we will arrange a time that suits you.</div>
            <div style={{fontFamily:F.body,fontSize:10,fontWeight:400,color:T.rose,opacity:.7}}>thehouseofclio.com</div>
          </div>
        </Rv>

        {/* Atmospheric */}
        <Rv delay={75}>
          <RealImg src={IMG.pen} alt={`A handwritten invitation to the ${BRAND_AKAN}. Copper ink on heavy paper.`} h={180} aspect="21/9"/>

        </Rv>

        {/* The form. cream inputs on white, maximum readability */}
        <Rv delay={100}>
          <div style={{background:T.white,padding:"44px 40px",border:`1px solid rgba(46,18,64,.06)`,position:"relative"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${T.rose},${T.gold}40,transparent)`}}/>
            <div style={{position:"relative",zIndex:1}}>
              {(()=>{
                const ls={display:"block",fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:500,letterSpacing:".35em",textTransform:"uppercase",color:T.bg,marginBottom:8,opacity:.5};
                const is={width:"100%",background:T.cream,border:`1px solid rgba(46,18,64,.1)`,borderRadius:2,padding:"14px 16px",fontFamily:F.body,fontSize:15,fontWeight:400,color:T.bg,outline:"none",transition:"border-color .3s,box-shadow .3s"};
                const fc=e=>{e.target.style.borderColor=T.copper;e.target.style.boxShadow="0 2px 12px rgba(160,80,37,.08)";};
                const bl=e=>{e.target.style.borderColor="rgba(46,18,64,.1)";e.target.style.boxShadow="none";};
                return(<>
                  <div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 24px"}}>
                    <div style={{marginBottom:24}}><label style={ls}>Name</label><input placeholder="As you would introduce yourself" autoComplete="name" aria-label="Your name" aria-required="true" id="contact-name" style={is} onFocus={fc} onBlur={bl}/></div>
                    <div style={{marginBottom:24}}><label style={ls}>Email</label><input type="email" placeholder="For our reply" aria-label="Email address" autoComplete="email" autoComplete="email" style={is} onFocus={fc} onBlur={bl}/></div>
                  </div>
                  <div style={{marginBottom:24}}><label style={ls}>Message</label><textarea placeholder="Whatever brought you here" aria-label="Your message" rows={4} style={{...is,resize:"none"}} onFocus={fc} onBlur={bl}/></div>
                  <div style={{display:"flex",justifyContent:"flex-end"}}>
                    <button type="button" {...hp} style={{background:T.bg,cursor:"none",border:"none",padding:"14px 40px",fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:400,letterSpacing:".3em",textTransform:"uppercase",color:T.cream,transition:"border-color .4s,background .4s,color .4s,opacity .4s"}} aria-label="Send your message" onClick={()=>{/* DEVELOPER: Wire to Resend API. send to hello@thehouseofclio.com */alert("Thank you. Your message has been received.");}} onMouseEnter={e=>{setHov(true);e.target.style.background=T.damson;}} onMouseLeave={e=>{setHov(false);e.target.style.background=T.bg;}}>Send</button>
                  </div>
                </>);
              })()}
            </div>
          </div>
        </Rv>

        {/* Hours. one line */}
        <Rv delay={150}>
          <div style={{marginTop:28,textAlign:"center"}}>
            <p style={{fontFamily:F.body,fontSize:"clamp(11px,2.5vw,12px)",fontWeight:400,color:TX.onLight}}>Monday to Friday, 9am to 6pm GMT.</p>
          </div>
        </Rv>
        <Rv delay={200}>
          <div style={{marginTop:28,display:"flex",justifyContent:"center",gap:"clamp(24px,4vw,48px)",flexWrap:"wrap"}}>
            <Link href={getHref("programme")} {...hp} style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:400,letterSpacing:".2em",textTransform:"uppercase",color:"rgba(26,8,32,.7)",cursor:"none",borderBottom:"2px solid rgba(26,8,32,.3)",paddingBottom:2,transition:"color .3s,opacity .3s,border-color .3s",textDecoration:"none"}}
            onMouseEnter={e=>{setHov(true);e.target.style.color="rgba(26,8,32,.85)";}}
            onMouseLeave={e=>{setHov(false);e.target.style.color="rgba(26,8,32,.5)";}}
            >See the programme</Link>
            <Link href={getHref("journal")} {...hp} style={{fontFamily:F.body,fontSize:"clamp(9px,2vw,10px)",fontWeight:400,letterSpacing:".2em",textTransform:"uppercase",color:"rgba(26,8,32,.7)",cursor:"none",borderBottom:"2px solid rgba(26,8,32,.3)",paddingBottom:2,transition:"color .3s,opacity .3s,border-color .3s",textDecoration:"none"}}
            onMouseEnter={e=>{setHov(true);e.target.style.color="rgba(26,8,32,.85)";}}
            onMouseLeave={e=>{setHov(false);e.target.style.color="rgba(26,8,32,.5)";}}
            >Read the Journal</Link>
          </div>
        </Rv>
      </Mx>
    </Sec>
    </>
  );
}
