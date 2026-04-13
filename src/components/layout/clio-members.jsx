import { useState } from "react";

const T={bg:"#1A0820",cream:"#FAF4EE",rose:"#C9956C",gold:"#C9A84C",copper:"#A05025",damson:"#2D0B38"};
const D={CG:"'Cormorant Garamond',Georgia,serif",J:"'Jost',sans-serif"};
const CSS=`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');*{margin:0;padding:0;box-sizing:border-box}::selection{background:rgba(201,149,108,.2);color:#1A0820}input:focus,textarea:focus{border-color:rgba(201,149,108,.5)!important;outline:none;box-shadow:0 0 0 2px rgba(201,149,108,.15)}input,textarea{border-radius:0;-webkit-appearance:none;resize:none}`;
const Mk=({size=60,color=T.rose,op=.06})=>(<svg style={{opacity:op}} width={size} height={size} viewBox="0 0 320 320" fill="none"><circle cx="160" cy="160" r="153" stroke={color} strokeWidth=".5" fill="none" opacity=".2"/><circle cx="160" cy="160" r="108" stroke={color} strokeWidth="1.8" fill="none"/><circle cx="160" cy="160" r="72" stroke={color} strokeWidth=".5" fill="none" opacity=".2"/><line x1="160" y1="63" x2="160" y2="46" stroke={color} strokeWidth="2" strokeLinecap="round"/><line x1="257" y1="160" x2="274" y2="160" stroke={color} strokeWidth="2" strokeLinecap="round"/><line x1="160" y1="257" x2="160" y2="274" stroke={color} strokeWidth="2" strokeLinecap="round"/><line x1="63" y1="160" x2="46" y2="160" stroke={color} strokeWidth="2" strokeLinecap="round"/><circle cx="160" cy="52" r="3.5" fill={color} opacity=".9"/><circle cx="268" cy="160" r="3.5" fill={color} opacity=".9"/><circle cx="160" cy="268" r="3.5" fill={color} opacity=".9"/><circle cx="52" cy="160" r="3.5" fill={color} opacity=".9"/><polygon points="303,156.8 306.2,160 303,163.2 299.8,160" fill={color} opacity=".65"/><polygon points="17,156.8 20.2,160 17,163.2 13.8,160" fill={color} opacity=".65"/><path d="M160,58 L220,214 L100,214 Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" fill="none"/><path d="M160,250 L68,130 L252,130 Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" fill="none"/><path d="M160,76 C197,110 197,210 160,244 C123,210 123,110 160,76 Z" stroke={color} strokeWidth="1.6" fill="none"/><path d="M160,110 C179,132 179,188 160,210 C141,188 141,132 160,110 Z" stroke={color} strokeWidth=".8" fill="none" opacity=".4"/><circle cx="160" cy="160" r="4.5" fill={color} opacity=".92"/><circle cx="160" cy="160" r="3" fill={color} opacity=".9"/><circle cx="160" cy="62" r="2.5" fill={color} opacity=".88"/></svg>);
const Hse=()=><span>THE {"\u0186"}USE {"\u0254"}F CLIO</span>;
const GL=({w=40,m="0"})=><div style={{width:w,height:1,background:T.rose,opacity:.3,margin:m}}/>;
const Av=({c=T.bg,t="",s=48})=><div style={{width:s,height:s,borderRadius:"50%",background:c,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:D.J,fontSize:s*.28,fontWeight:500,color:T.cream,flexShrink:0}}>{t}</div>;

const P=[
  {id:1,n:"Amara Osei",r:"Architect",ct:"London",q:"What would buildings look like if loneliness were a design failure?",rd:"The Master Builder — Ibsen",th:"Why cities optimise for traffic but not for conversation.",ch:"Great architecture is about what happens between people inside it.",cv:"Architecture, cities, belonging, craft",rc:"Marina Tabassum at the Serpentine",bld:"A community kitchen in Peckham.",mt:"Urbanists, chefs, anyone who thinks about how rooms change behaviour.",pl:"Spent Tuesday in a brutalist car park in Croydon. Could not stop thinking about how much silence concrete holds.",av:"AO",c:T.copper,ps:["Accra","Copenhagen","Tokyo"],met:true,sat:true,next:true},
  {id:2,n:"James Harding",r:"Surgeon",ct:"London",q:"Why do doctors become worse listeners the more experienced they get?",rd:"Being Mortal — Gawande",th:"The conversation before surgery matters more than the cut.",ch:"Stillness is the mark of a good surgeon, not urgency.",cv:"Medicine, mortality, silence, craft",rc:"The Organised Mind — Levitin",bld:"A mentorship programme that includes philosophy.",mt:"Teachers, philosophers, anyone who thinks about attention.",pl:"A patient said nobody had asked what she was afraid of. I had not asked either.",av:"JH",c:T.damson,ps:["Edinburgh","Boston","Kyoto"],met:true,sat:false,next:false},
  {id:3,n:"Sofia Mensah",r:"Documentary filmmaker",ct:"London",q:"Why do adults stop making new friends at the age when they need them most?",rd:"In Other Words — Lahiri",th:"How to make a film about friendship without sentiment.",ch:"Presence matters more than objectivity.",cv:"Storytelling, friendship, West Africa",rc:"Close-Up — Kiarostami",bld:"A documentary about three strangers at the same table.",mt:"Writers, hosts, anyone who pays attention to what happens between people.",pl:"Watched a couple sit in silence for forty minutes. The most intimate thing I have seen all month.",av:"SM",c:T.bg,ps:["Lagos","Berlin","Marrakech"],met:false,sat:false,next:true},
  {id:4,n:"David Chen",r:"Venture capitalist",ct:"London",q:"What would a fund look like if it optimised for wisdom instead of returns?",rd:"The Beginning of Infinity — Deutsch",th:"The best founders can sit with not knowing.",ch:"I back the one who listens, not the smartest one.",cv:"Technology, philosophy, taste",rc:"Piranesi — Susanna Clarke",bld:"A quiet fund for founders over 40.",mt:"Artists, scientists, anyone building something they cannot fully explain.",pl:"A founder cried describing her product. I invested the next morning.",av:"DC",c:T.copper,ps:["Taipei","San Francisco","Florence"],met:false,sat:false,next:false},
  {id:5,n:"Priya Kaur",r:"Psychotherapist",ct:"London",q:"Why do people perform connection instead of practising it?",rd:"All About Love — bell hooks",th:"The difference between being heard and being listened to.",ch:"Therapy is not about fixing. It is about witnessing.",cv:"Attachment, silence, ritual, grief",rc:"My Year of Rest and Relaxation — Moshfegh",bld:"Group sessions for people who have everything except someone who asks how they really are.",mt:"Poets, hosts, anyone who holds a room without filling it.",pl:"A client: nine hundred contacts and nobody to call. That sentence all week.",av:"PK",c:T.damson,ps:["Amritsar","Vienna","Cape Town"],met:true,sat:true,next:true},
];

const EV=[
  {id:"fh",l1:"The First",l2:"House",when:"2 June",cap:24,seats:0,price:"£600",hook:"Twenty-four strangers. By lunch, not one.",body:"A morning where you work side by side. By lunch, nobody is introducing themselves.",inc:["Morning creative session","Lunch for twenty-four","Portraits in advance"],bg:T.copper,fx:true,sec:"s",st:"full"},
  {id:"ev",l1:"The",l2:"Evening",when:"14 June",cap:18,seats:4,price:"£300",hook:"Eighteen strangers. One long table. Never this room again.",body:"Composed seating. Low light. Three courses. By dessert, nobody wants to leave.",inc:["Dinner and wine","Composed seating","Portraits in advance"],bg:T.bg,fx:true,sec:"s",st:"open"},
  {id:"sl",l1:"The Supper",l2:"Lecture",when:"12 July",cap:28,seats:12,price:"£360",hook:"Thirty minutes. Then dinner.",body:"Four tables of seven. The speaker sits with everyone.",inc:["The lecture","Dinner and wine","Seating across four tables"],bg:T.cream,fx:true,sec:"s",st:"open"},
  {id:"pa",l1:"City Escape",l2:"Paris",when:"19 September",cap:14,seats:8,price:"From £2,880",hook:"Two nights. Doors that do not open otherwise.",body:"Fourteen people. A private gallery. A restaurant you would never find.",inc:["Two nights","Dinner and private viewings","Transfers","Host throughout"],bg:T.damson,fx:false,sec:"s",st:"open"},
  {id:"du",l1:"City Escape",l2:"Dublin",when:"17 October",cap:24,seats:18,price:"From £2,400",hook:"A castle. Kildare. Two nights.",body:"Twenty-four people. A castle. Kildare. Two nights the host has already walked.",inc:["Two nights","Castle dinner","Kildare excursion","Transfers throughout"],bg:T.copper,fx:false,sec:"s",st:"open"},
  {id:"pu",l1:"Grand Journey",l2:"Puglia",when:"24 October",cap:10,seats:6,price:"From £5,760",hook:"Four nights. Not the obvious route.",body:"Ten people. Every route walked by the host. Places chosen for what they do to conversation.",inc:["Four nights","Dinner and private guides","Transport","Host throughout"],bg:T.damson,fx:false,sec:"s",st:"open"},
  {id:"ah",l1:"The Annual",l2:"House",when:"6 December",cap:120,seats:80,price:"£330",hook:"One hundred and twenty people. One room. One night.",body:"The tables of the year in one room. Conversations resume mid-sentence.",inc:["Drinks","Dinner and wine","Entertainment"],bg:T.damson,fx:true,sec:"s",st:"open"},
  {id:"rt",l1:"The Returning",l2:"Table",when:"Fortnightly",cap:12,seats:3,price:"£180",hook:"Same table. Deeper every time.",body:"Twelve people. Some you sat beside last time. This is where belonging starts.",inc:["Dinner and wine","Composed seating"],bg:T.bg,fx:true,sec:"r",st:"open"},
  {id:"wk",l1:"The",l2:"Walk",when:"Fortnightly",cap:12,seats:5,price:"£55",hook:"Six pairs walking. Ends at a table.",body:"Twelve people. Hampstead Heath. Nobody walks in pairs for long.",inc:["Guided walk with paired rotations","Table at the end"],bg:T.cream,fx:true,sec:"r",st:"open"},
  {id:"dd",l1:"The Distance",l2:"Day",when:"Quarterly",cap:8,seats:4,price:"£235",hook:"Two cars of four. Leave London.",body:"Ninety minutes in a car with one other person. The destination is chosen for the table.",inc:["Transport","Lunch","Return"],bg:T.copper,fx:true,sec:"r",st:"open"},
  {id:"ce",l1:"The Culture",l2:"Evening",when:"Monthly",cap:16,seats:8,price:"£265",hook:"Same performance. Then the conversation.",body:"Sixteen people. The Almeida, the Barbican, or the Royal Academy. Dinner follows.",inc:["Ticket","Dinner and wine","Seated by the host"],bg:T.bg,fx:true,sec:"o",st:"open"},
  {id:"ri",l1:"The",l2:"Ride",when:"Fortnightly",cap:10,seats:6,price:"£80",hook:"Five pairs on the road. Long lunch at the end.",body:"Ten riders. Richmond Park. The Surrey Hills. Conversational pace.",inc:["Guided ride with paired rotations","Long lunch"],bg:T.cream,fx:true,sec:"o",st:"open"},
];

const PROMPTS=["What held your attention this week?","What conversation stayed with you?","What are you reading that is worth finishing?","What thought are you not done with yet?"];
const FRAG={t:"On the question nobody asks",b:"Nine hundred contacts and nobody to call. This is not a networking problem. This is a design failure in how adults build relationships. We optimised for breadth when we needed depth. We replaced dinners with drinks. We replaced letters with likes. The room is the correction."};

export default function ClioMembers(){
  const [pg,setPg]=useState("gate");
  const [em,setEm]=useState("");
  const [cd,setCd]=useState("");
  const [err,setErr]=useState("");
  const [sec,setSec]=useState("home");
  const [vm,setVm]=useState(null);
  const [ve,setVe]=useState(null);
  const [pt,setPt]=useState("");
  const [ps,setPs]=useState(false);
  const [sv,setSv]=useState([1,5]);
  const [pi,setPi]=useState(0);
  const [booked,setBooked]=useState([]);
  const [ptab,setPtab]=useState('s');

  const ist={width:"100%",padding:"14px 16px",background:"rgba(250,244,238,.06)",border:"1px solid rgba(201,149,108,.3)",fontFamily:D.J,fontSize:15,fontWeight:400,color:T.cream};
  const lbl={fontFamily:D.J,fontSize:11,fontWeight:500,letterSpacing:".16em",textTransform:"uppercase",color:T.rose,display:"block",marginBottom:5};
  const btn={background:"none",border:"1.5px solid rgba(201,149,108,.35)",padding:"14px 0",width:"100%",fontFamily:D.J,fontSize:12,fontWeight:500,letterSpacing:".16em",textTransform:"uppercase",color:T.rose,cursor:"pointer"};
  const btnC={background:"none",border:"1.5px solid rgba(26,8,32,.12)",fontFamily:D.J,fontSize:12,fontWeight:500,letterSpacing:".16em",textTransform:"uppercase",color:T.bg,cursor:"pointer",padding:"10px 28px"};
  const sH={fontFamily:D.J,fontSize:11,fontWeight:500,letterSpacing:".14em",textTransform:"uppercase",marginBottom:14};

  const enter=()=>{if(!em||!em.includes("@")){setErr("Please enter your email.");return;}if(!cd){setErr("Please enter your code.");return;}if(cd.toUpperCase()!=="CLIO2026"){setErr("Code not recognised.");return;}setErr("");setPg("welcome");};
  const nm=em?em.split("@")[0].replace(/[._]/g," ").replace(/\b\w/g,c=>c.toUpperCase()):"";
  const tSv=(id)=>setSv(p=>p.includes(id)?p.filter(x=>x!==id):[...p,id]);
  const goP=(m)=>{setVm(m);setPg("profile");};
  const goE=(e)=>{setVe(e);setPg("event");};
  const bk=()=>{setPg("inside");setVm(null);setVe(null);};

  const nav=[{k:"home",l:"Home"},{k:"programme",l:"Programme"},{k:"circle",l:"The Circle"},{k:"room",l:"The Room"},{k:"pulse",l:"Pulse"}];
  const dk=(bg)=>bg===T.bg||bg===T.damson;

  const MCard=({m,compact,dark})=>(
    <div onClick={()=>goP(m)} style={{display:"flex",gap:compact?12:16,padding:compact?"10px 0":"16px 0",cursor:"pointer"}}>
      <Av c={m.c} t={m.av} s={compact?36:46}/>
      <div style={{flex:1,minWidth:0}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}>
          <span style={{fontFamily:D.CG,fontSize:compact?16:19,fontWeight:400,color:dark?T.cream:T.bg}}>{m.n}</span>
          {!compact&&<span style={{fontFamily:D.J,fontSize:11,color:dark?"rgba(250,244,238,.45)":"rgba(26,8,32,.4)"}}>{m.ct}</span>}
        </div>
        <p style={{fontFamily:D.J,fontSize:12,color:dark?"rgba(250,244,238,.5)":"rgba(26,8,32,.5)",marginBottom:compact?0:5}}>{m.r}</p>
        {!compact&&<p style={{fontFamily:D.CG,fontSize:14,fontStyle:"italic",color:dark?"rgba(250,244,238,.7)":"rgba(26,8,32,.65)",lineHeight:1.5}}>"{m.q}"</p>}
      </div>
      {sv.includes(m.id)&&<span style={{fontFamily:D.J,fontSize:10,color:T.copper,marginTop:4}}>Saved</span>}
    </div>
  );

  const EvCard=({e,mini})=>{const d=dk(e.bg);const isFull=e.st==="full";const isBooked=booked.includes(e.id);const pHere=P.filter(m=>m.next).length;return(
    <div onClick={()=>mini?goE(e):null} style={{background:e.bg,padding:mini?"18px 24px":"28px 24px",cursor:mini?"pointer":"default"}}>
      {!mini&&isFull&&<div style={{fontFamily:D.J,fontSize:11,fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:d?T.rose:T.copper,marginBottom:8}}>Full</div>}
      {!mini&&isBooked&&<div style={{fontFamily:D.J,fontSize:11,fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:d?T.rose:T.copper,marginBottom:8}}>Your place is confirmed</div>}
      <h3 style={{fontFamily:D.CG,fontSize:mini?19:26,fontWeight:300,color:d?T.cream:T.bg,marginBottom:4}}>{e.l1} <em style={{color:d?T.rose:T.copper}}>{e.l2}</em></h3>
      <p style={{fontFamily:D.J,fontSize:12,color:d?"rgba(250,244,238,.55)":"rgba(26,8,32,.5)",marginBottom:mini?0:8}}>{e.when} · {e.cap} seats{!isFull&&!mini?" · "+e.seats+" remaining":""}{!mini?" · "+e.price:""}</p>
      {!mini&&<p style={{fontFamily:D.CG,fontSize:15,fontStyle:"italic",color:d?"rgba(250,244,238,.75)":"rgba(26,8,32,.65)",lineHeight:1.6,marginBottom:14,maxWidth:"34ch"}}>{e.hook}</p>}
      {!mini&&!isFull&&!isBooked&&<button type="button" onClick={()=>goE(e)} style={{...btn,width:"auto",padding:"10px 28px",fontSize:11,color:d?T.rose:T.copper,borderColor:d?"rgba(201,149,108,.35)":"rgba(26,8,32,.12)"}}>The room</button>}
      {!mini&&isFull&&!isBooked&&<button type="button" onClick={()=>goE(e)} style={{...btn,width:"auto",padding:"10px 28px",fontSize:11,color:d?T.rose:T.copper,borderColor:d?"rgba(201,149,108,.35)":"rgba(26,8,32,.12)",opacity:.6}}>Join the waitlist</button>}
      {!mini&&isBooked&&<p style={{fontFamily:D.J,fontSize:12,fontStyle:"italic",color:d?"rgba(250,244,238,.6)":"rgba(26,8,32,.5)"}}>Greeted by name at the door.</p>}
    </div>
  );};

  /* ═══ GATE ═══ */
  if(pg==="gate")return(
    <div style={{minHeight:"100vh",background:T.bg,display:"flex",alignItems:"center",justifyContent:"center",padding:24}}>
      <style>{CSS}</style>
      <div style={{width:"min(90vw,420px)",textAlign:"center"}}>
        <div style={{margin:"0 auto 32px"}}><Mk size={100} op={.3}/></div>
        <div style={{fontFamily:D.J,fontSize:11,fontWeight:500,letterSpacing:".4em",textTransform:"uppercase",color:T.rose,marginBottom:16}}><Hse/></div>
        <GL w={40} m="0 auto 24px"/>
        <h1 style={{fontFamily:D.CG,fontSize:"clamp(28px,5vw,40px)",fontWeight:300,color:T.cream,marginBottom:8}}>Welcome back</h1>
        <p style={{fontFamily:D.J,fontSize:14,color:"rgba(250,244,238,.7)",marginBottom:32}}>Enter the House.</p>
        <div style={{textAlign:"left",marginBottom:14}}><label style={lbl}>Email</label><input type="email" value={em} onChange={e=>setEm(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")enter()}} style={ist}/></div>
        <div style={{textAlign:"left",marginBottom:6}}><label style={lbl}>Your code</label><input type="password" value={cd} onChange={e=>setCd(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")enter()}} style={ist}/></div>
        {err&&<p style={{fontFamily:D.J,fontSize:13,color:T.rose,marginTop:12,fontStyle:"italic"}}>{err}</p>}
        <div style={{marginTop:24}}><button type="button" onClick={enter} style={btn}>Enter</button></div>
        <p style={{fontFamily:D.J,fontSize:11,color:"rgba(250,244,238,.4)",marginTop:32}}>Your code was sent with your welcome letter.</p>
      </div>
    </div>
  );

  /* ═══ WELCOME ═══ */
  if(pg==="welcome")return(
    <div style={{minHeight:"100vh",background:T.bg,display:"flex",alignItems:"center",justifyContent:"center",padding:48}}>
      <style>{CSS}</style>
      <div style={{textAlign:"center",maxWidth:480}}>
        <div style={{margin:"0 auto 24px"}}><Mk size={80} op={.2}/></div>
        <div style={{fontFamily:D.J,fontSize:11,fontWeight:500,letterSpacing:".3em",textTransform:"uppercase",color:T.rose,marginBottom:24}}><Hse/></div>
        <h1 style={{fontFamily:D.CG,fontSize:"clamp(32px,6vw,48px)",fontWeight:300,color:T.cream,marginBottom:12}}>Welcome, {nm}</h1>
        <GL w={40} m="0 auto 20px"/>
        <p style={{fontFamily:D.CG,fontSize:17,fontStyle:"italic",color:"rgba(250,244,238,.8)",marginBottom:32}}>The first season opens 2 June 2026.</p>
        <button type="button" onClick={()=>setPg("inside")} style={{...btn,width:"auto",padding:"14px 48px"}}>Enter</button>
      </div>
    </div>
  );

  /* ═══ EVENT DETAIL ═══ */
  if(pg==="event"&&ve){const e=ve;const d=dk(e.bg);const pInRoom=P.filter(m=>m.next);return(
    <div style={{minHeight:"100vh",background:d?"#080312":"#E8E2DB"}}>
      <style>{CSS}</style>
      <div style={{background:e.bg,padding:"14px 24px"}}><span onClick={bk} style={{fontFamily:D.J,fontSize:12,fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:d?T.rose:T.copper,cursor:"pointer"}}>{"←"} Programme</span></div>
      <div style={{maxWidth:640,margin:"0 auto",padding:"clamp(32px,5vh,56px) 24px 64px"}}>
        <div style={{background:e.bg,padding:"36px 32px"}}>
          <div style={{fontFamily:D.J,fontSize:12,color:d?"rgba(250,244,238,.6)":"rgba(26,8,32,.5)",marginBottom:12}}>{e.when} · {e.cap} seats · {e.seats} remaining</div>
          <h1 style={{fontFamily:D.CG,fontSize:"clamp(30px,6vw,44px)",fontWeight:300,color:d?T.cream:T.bg,marginBottom:8}}>{e.l1} <em style={{color:d?T.rose:T.copper}}>{e.l2}</em></h1>
          <GL w={40} m="0 0 20px"/>
          <p style={{fontFamily:D.CG,fontSize:18,fontStyle:"italic",color:d?"rgba(250,244,238,.85)":"rgba(26,8,32,.8)",lineHeight:1.6,marginBottom:16,maxWidth:"32ch"}}>{e.hook}</p>
          <p style={{fontFamily:D.J,fontSize:14,color:d?"rgba(250,244,238,.75)":"rgba(26,8,32,.7)",lineHeight:1.8,marginBottom:20}}>{e.body}</p>

          <div style={{marginBottom:20}}>{e.inc.map((s,i)=><div key={i} style={{fontFamily:D.J,fontSize:13,color:d?"rgba(250,244,238,.8)":"rgba(26,8,32,.7)",lineHeight:1.8,display:"flex",gap:8}}><span style={{color:d?T.rose:T.copper,flexShrink:0}}>—</span>{s}</div>)}</div>

          {/* SOCIAL CONFIDENCE: people in this room */}
          {pInRoom.length>0&&<div style={{paddingTop:20,borderTop:`1px solid ${d?"rgba(201,149,108,.1)":"rgba(26,8,32,.06)"}`}}>
            <div style={{...sH,color:d?T.rose:T.copper}}>People in this room</div>
            <p style={{fontFamily:D.J,fontSize:13,color:d?"rgba(250,244,238,.6)":"rgba(26,8,32,.5)",marginBottom:12}}>You will not arrive knowing nobody.</p>
            {pInRoom.map((m,i)=><div key={m.id} style={{borderTop:i?`1px solid ${d?"rgba(201,149,108,.06)":"rgba(26,8,32,.04)"}`:""}}><MCard m={m} compact dark={d}/></div>)}
          </div>}

          {/* PRICE + CTA */}
          <div style={{marginTop:24}}>
            <div style={{fontFamily:D.CG,fontSize:28,fontWeight:300,color:d?T.cream:T.bg,marginBottom:4}}>{e.price}</div>
            <p style={{fontFamily:D.J,fontSize:13,color:d?"rgba(250,244,238,.65)":"rgba(26,8,32,.55)",marginBottom:16}}>{e.fx?"Your place is confirmed immediately.":"The host confirms availability and pricing within 48 hours."}</p>
            {booked.includes(e.id)?
              <div style={{fontFamily:D.J,fontSize:13,color:d?T.rose:T.copper,fontStyle:"italic"}}>Your place is confirmed. Greeted by name at the door.</div>:
              e.st==="full"?<button type="button" onClick={()=>setBooked(p=>[...p,e.id])} style={{...btn,width:"auto",padding:"12px 36px",fontSize:11,color:d?T.rose:T.copper,borderColor:d?"rgba(201,149,108,.35)":"rgba(26,8,32,.12)",opacity:.7}}>Join the waitlist</button>:
              <button type="button" onClick={()=>setBooked(p=>[...p,e.id])} style={{...btn,width:"auto",padding:"12px 36px",fontSize:11,color:d?T.rose:T.copper,borderColor:d?"rgba(201,149,108,.35)":"rgba(26,8,32,.12)"}}>{e.fx?"Confirm and pay":"Express interest"}</button>
            }
          </div>
        </div>
      </div>
    </div>
  );}

  /* ═══ PROFILE ═══ */
  if(pg==="profile"&&vm){const m=vm;return(
    <div style={{minHeight:"100vh",background:T.cream}}>
      <style>{CSS}</style>
      <div style={{background:T.bg,padding:"14px 24px"}}><div style={{maxWidth:720,margin:"0 auto",display:"flex",justifyContent:"space-between"}}><span onClick={bk} style={{fontFamily:D.J,fontSize:12,fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:T.rose,cursor:"pointer"}}>{"←"} Back</span><span onClick={()=>tSv(m.id)} style={{fontFamily:D.J,fontSize:12,color:sv.includes(m.id)?T.rose:"rgba(250,244,238,.5)",cursor:"pointer"}}>{sv.includes(m.id)?"Saved":"Save"}</span></div></div>
      <div style={{maxWidth:720,margin:"0 auto",padding:"clamp(28px,4vh,48px) 24px 64px"}}>
        <div style={{display:"flex",gap:20,alignItems:"center",marginBottom:24}}><Av c={m.c} t={m.av} s={72}/><div><h1 style={{fontFamily:D.CG,fontSize:"clamp(26px,4vw,38px)",fontWeight:300,color:T.bg,marginBottom:4}}>{m.n}</h1><p style={{fontFamily:D.J,fontSize:13,color:"rgba(26,8,32,.6)"}}>{m.r} · {m.ct}</p></div></div>
        <GL w={40} m="0 0 20px"/>
        <div style={{fontFamily:D.CG,fontSize:19,fontStyle:"italic",color:"rgba(26,8,32,.85)",lineHeight:1.65,marginBottom:28,maxWidth:"36ch"}}>"{m.q}"</div>
        {[["Reading",m.rd],["Thinking about",m.th],["Changed my mind on",m.ch],["Conversations I want",m.cv],["Recommendation",m.rc],["Quietly building",m.bld],["Want to meet here",m.mt]].map(([l,v],i)=><div key={i} style={{marginBottom:18}}><div style={{fontFamily:D.J,fontSize:11,fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:T.copper,marginBottom:5}}>{l}</div><p style={{fontFamily:D.J,fontSize:14,color:"rgba(26,8,32,.8)",lineHeight:1.75}}>{v}</p></div>)}
        <div style={{marginBottom:18}}><div style={{fontFamily:D.J,fontSize:11,fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:T.copper,marginBottom:8}}>Places</div><div style={{display:"flex",gap:8,flexWrap:"wrap"}}>{m.ps.map((p,i)=><span key={i} style={{fontFamily:D.J,fontSize:13,padding:"5px 12px",border:"1px solid rgba(26,8,32,.1)",color:"rgba(26,8,32,.6)"}}>{p}</span>)}</div></div>
        {m.pl&&<div style={{marginTop:24,padding:24,background:T.bg}}><div style={{...sH,color:T.rose}}>Latest pulse</div><p style={{fontFamily:D.CG,fontSize:15,fontStyle:"italic",color:"rgba(250,244,238,.9)",lineHeight:1.65}}>{m.pl}</p></div>}
        {m.next&&<div style={{marginTop:20,padding:"16px 20px",border:"1px solid rgba(26,8,32,.08)"}}><p style={{fontFamily:D.J,fontSize:12,color:"rgba(26,8,32,.55)"}}>{m.n} is in your next room: <span style={{color:T.copper,cursor:"pointer"}} onClick={()=>goE(EV[0])}>The Evening · 14 June</span></p></div>}
      </div>
    </div>
  );}

  /* ═══ INSIDE ═══ */
  return(
    <div style={{minHeight:"100vh"}}>
      <style>{CSS}</style>
      <div style={{background:T.bg,borderBottom:"1px solid rgba(201,149,108,.12)",padding:"0 24px",position:"sticky",top:0,zIndex:100}}>
        <div style={{maxWidth:960,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:52}}>
          <div style={{display:"flex",alignItems:"center",gap:8}}><Mk size={22} op={.5}/><span style={{fontFamily:D.J,fontSize:10,fontWeight:500,letterSpacing:".25em",textTransform:"uppercase",color:T.rose}}>CLIO</span></div>
          <div style={{display:"flex",gap:"clamp(14px,2.5vw,28px)",overflow:"auto"}}>{nav.map(l=><div key={l.k} onClick={()=>setSec(l.k)} style={{fontFamily:D.J,fontSize:11,fontWeight:sec===l.k?500:400,color:sec===l.k?T.cream:"rgba(250,244,238,.5)",cursor:"pointer",whiteSpace:"nowrap"}}>{l.l}</div>)}</div>
          <div onClick={()=>{setPg("gate");setCd("");setErr("");}} style={{fontFamily:D.J,fontSize:11,color:"rgba(250,244,238,.4)",cursor:"pointer"}}>Step out</div>
        </div>
      </div>

      {/* ═══ HOME ═══ */}
      {sec==="home"&&<div style={{background:T.cream,padding:"clamp(24px,4vh,44px) 24px 64px"}}><div style={{maxWidth:720,margin:"0 auto"}}>
        <div style={{marginBottom:28}}><h1 style={{fontFamily:D.CG,fontSize:"clamp(24px,4vw,34px)",fontWeight:300,color:T.bg,marginBottom:4}}>Good evening, {nm}</h1><p style={{fontFamily:D.J,fontSize:13,color:"rgba(26,8,32,.5)"}}>Your House. Your rooms. Your people.</p></div>

        {/* NEXT ROOM — your recommended booking */}
        <div style={{marginBottom:24}}><EvCard e={EV[1]}/></div>

        {/* PRE-EVENT: PEOPLE IN YOUR NEXT ROOM */}
        {P.filter(m=>m.next).length>0&&<div style={{marginBottom:24}}>
          <div style={{...sH,color:T.copper}}>People in your next room</div>
          <p style={{fontFamily:D.J,fontSize:13,color:"rgba(26,8,32,.5)",marginBottom:10}}>The Evening · 14 June. You will not arrive knowing nobody.</p>
          {P.filter(m=>m.next).map((m,i)=><div key={m.id} style={{borderTop:i?"1px solid rgba(26,8,32,.05)":"none"}}><MCard m={m} compact/></div>)}
        </div>}

        {/* POST-EVENT: PEOPLE FROM YOUR LAST ROOM */}
        <div style={{marginBottom:24}}>
          <div style={{...sH,color:T.copper}}>From your last room</div>
          <p style={{fontFamily:D.J,fontSize:13,color:"rgba(26,8,32,.5)",marginBottom:8}}>The Returning Table · 1 June</p>
          {P.filter(m=>m.met).map((m,i)=><div key={m.id} style={{borderTop:i?"1px solid rgba(26,8,32,.05)":"none"}}><MCard m={m} compact/></div>)}
          <span onClick={()=>setSec("room")} style={{fontFamily:D.J,fontSize:12,color:T.copper,cursor:"pointer",marginTop:6,display:"inline-block"}}>The full room {"→"}</span>
        </div>

        {/* SAVED PEOPLE */}
        {sv.length>0&&<div style={{marginBottom:24}}>
          <div style={{...sH,color:T.copper}}>Your saved people</div>
          {P.filter(m=>sv.includes(m.id)).map((m,i)=><div key={m.id} style={{borderTop:i?"1px solid rgba(26,8,32,.05)":"none"}}><MCard m={m} compact/></div>)}
        </div>}

        {/* SOMEONE TO NOTICE */}
        <div style={{marginBottom:24}}>
          <div style={{...sH,color:T.copper}}>Someone to notice</div>
          <MCard m={P.find(m=>!m.met&&!sv.includes(m.id))||P[3]}/>
        </div>

        {/* PULSE FRAGMENT */}
        <div style={{background:T.bg,padding:24,marginBottom:24}}>
          <div style={{...sH,color:T.rose}}>From the Circle this week</div>
          <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:8,cursor:"pointer"}} onClick={()=>goP(P[4])}><Av c={P[4].c} t={P[4].av} s={32}/><span style={{fontFamily:D.J,fontSize:13,color:T.cream}}>{P[4].n}</span></div>
          <p style={{fontFamily:D.CG,fontSize:14,fontStyle:"italic",color:"rgba(250,244,238,.8)",lineHeight:1.6,paddingLeft:44}}>{P[4].pl}</p>
          <div style={{paddingLeft:44,marginTop:10}}><span onClick={()=>setSec("pulse")} style={{fontFamily:D.J,fontSize:12,color:T.rose,cursor:"pointer"}}>Share your own {"→"}</span></div>
        </div>

        {/* MORE ROOMS */}
        <div style={{marginBottom:24}}>
          <div style={{...sH,color:T.copper}}>More rooms opening</div>
          {EV.filter(e=>e.st==='open'&&e.id!=='ev').slice(0,3).map((e,i)=><div key={e.id} style={{borderTop:i?"1px solid rgba(26,8,32,.04)":"none"}}><EvCard e={e} mini/></div>)}
        </div>

        {/* FRAGMENT */}
        <div style={{padding:"16px 0",borderTop:"1px solid rgba(26,8,32,.06)"}}>
          <p style={{fontFamily:D.CG,fontSize:14,fontStyle:"italic",color:"rgba(26,8,32,.55)",lineHeight:1.65,maxWidth:"38ch"}}>"{FRAG.b.substring(0,100)}..."</p>
        </div>
      </div></div>}

      {/* ═══ PROGRAMME ═══ */}
      {sec==="programme"&&<div style={{background:T.cream,padding:"clamp(28px,4vh,48px) 24px 64px"}}><div style={{maxWidth:720,margin:"0 auto"}}>
        <h2 style={{fontFamily:D.CG,fontSize:"clamp(26px,4vw,36px)",fontWeight:300,color:T.bg,marginBottom:4}}>The Programme</h2>
        <p style={{fontFamily:D.J,fontSize:14,color:"rgba(26,8,32,.6)",marginBottom:4}}>Twelve formats across the season. Every seat placed by the host.</p>
        <GL w={40} m="0 0 20px"/>

        {/* TABS */}
        <div style={{display:"flex",gap:"clamp(16px,3vw,32px)",borderBottom:"1px solid rgba(26,8,32,.1)",marginBottom:"clamp(24px,3vh,36px)",padding:"0 0 12px"}}>
          {[{k:"s",l:"Seasonal"},{k:"r",l:"Recurring"},{k:"o",l:"Societies"}].map(t=><div key={t.k} onClick={()=>setPtab(t.k)} style={{fontFamily:D.J,fontSize:13,fontWeight:ptab===t.k?500:400,color:ptab===t.k?T.bg:"rgba(26,8,32,.55)",cursor:"pointer",borderBottom:ptab===t.k?"2px solid "+T.bg:"2px solid transparent",paddingBottom:10}}>{t.l}</div>)}
        </div>

        {/* RECOMMENDED FOR YOU */}
        {ptab==="s"&&<div style={{marginBottom:28,padding:"20px 24px",border:"1px solid rgba(160,80,37,.15)",background:"rgba(160,80,37,.03)"}}>
          <div style={{fontFamily:D.J,fontSize:11,fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:T.copper,marginBottom:8}}>Recommended for you</div>
          <p style={{fontFamily:D.J,fontSize:13,color:"rgba(26,8,32,.6)",lineHeight:1.65}}>Based on the people you saved and the rooms you have attended, the host recommends <strong style={{fontWeight:500}}>The Evening</strong> and <strong style={{fontWeight:500}}>The Returning Table</strong> for your next gathering.</p>
        </div>}

        {/* EVENT CARDS */}
        {EV.filter(e=>e.sec===ptab).map((e,i)=><div key={e.id} style={{marginBottom:20}}><EvCard e={e}/></div>)}

        {/* PRIVATE HOUSE — always visible at bottom of Seasonal */}
        {ptab==="s"&&<div style={{marginTop:12,background:T.copper,padding:"28px 24px"}}>
          <div style={{fontFamily:D.J,fontSize:11,fontWeight:500,letterSpacing:".16em",textTransform:"uppercase",color:"rgba(255,255,255,.85)",marginBottom:8}}>By arrangement</div>
          <h3 style={{fontFamily:D.CG,fontSize:24,fontWeight:300,color:T.cream,marginBottom:8}}>The Private House</h3>
          <p style={{fontFamily:D.J,fontSize:14,color:"rgba(255,255,255,.85)",lineHeight:1.75,marginBottom:16,maxWidth:"36ch"}}>You name the people. The host composes the room. Venue, seating, portraits, catering.</p>
          <button type="button" style={{background:"none",border:"1.5px solid rgba(255,255,255,.3)",padding:"10px 28px",fontFamily:D.J,fontSize:11,fontWeight:500,letterSpacing:".16em",textTransform:"uppercase",color:"#FFFFFF",cursor:"pointer"}}>Begin a conversation</button>
        </div>}
      </div></div>}

      {/* ═══ CIRCLE ═══ */}
      {sec==="circle"&&<div style={{background:T.cream,padding:"clamp(28px,4vh,48px) 24px 64px"}}><div style={{maxWidth:720,margin:"0 auto"}}>
        <h2 style={{fontFamily:D.CG,fontSize:"clamp(26px,4vw,36px)",fontWeight:300,color:T.bg,marginBottom:4}}>The Circle</h2>
        <p style={{fontFamily:D.J,fontSize:14,color:"rgba(26,8,32,.6)",marginBottom:4}}>Start with someone whose question interests you.</p>
        <GL w={40} m="0 0 24px"/>

        <div style={{marginBottom:24}}><div style={{...sH,color:T.copper}}>People in your next room</div>{P.filter(m=>m.next).map((m,i)=><div key={m.id} style={{borderTop:i?"1px solid rgba(26,8,32,.05)":"none"}}><MCard m={m}/></div>)}</div>
        <div style={{marginBottom:24}}><div style={{...sH,color:T.copper}}>People from your last room</div>{P.filter(m=>m.met).map((m,i)=><div key={m.id} style={{borderTop:i?"1px solid rgba(26,8,32,.05)":"none"}}><MCard m={m}/></div>)}</div>
        <div style={{marginBottom:24}}><div style={{...sH,color:T.copper}}>The host would place you near</div>{P.filter(m=>!m.met).slice(0,2).map((m,i)=><div key={m.id} style={{borderTop:i?"1px solid rgba(26,8,32,.05)":"none"}}><MCard m={m}/></div>)}</div>
        <div style={{marginBottom:24}}><div style={{...sH,color:T.copper}}>Everyone in the Circle</div>{P.map((m,i)=><div key={m.id} style={{borderTop:i?"1px solid rgba(26,8,32,.05)":"none"}}><MCard m={m}/></div>)}</div>
        {sv.length>0&&<div style={{paddingTop:20,borderTop:"1px solid rgba(26,8,32,.08)"}}><div style={{...sH,color:T.copper}}>Your saved people</div>{P.filter(m=>sv.includes(m.id)).map((m,i)=><div key={m.id} style={{borderTop:i?"1px solid rgba(26,8,32,.05)":"none"}}><MCard m={m} compact/></div>)}</div>}
      </div></div>}

      {/* ═══ THE ROOM ═══ */}
      {sec==="room"&&<div style={{background:T.cream,padding:"clamp(28px,4vh,48px) 24px 64px"}}><div style={{maxWidth:640,margin:"0 auto"}}>
        <h2 style={{fontFamily:D.CG,fontSize:"clamp(26px,4vw,36px)",fontWeight:300,color:T.bg,marginBottom:4}}>The Room</h2>
        <p style={{fontFamily:D.J,fontSize:14,color:"rgba(26,8,32,.6)",marginBottom:4}}>After the gathering. The people who stayed with you.</p>
        <GL w={40} m="0 0 24px"/>
        <div style={{background:T.bg,padding:"28px 24px",marginBottom:24}}>
          <div style={{...sH,color:T.rose}}>The Returning Table · 1 June</div>
          <p style={{fontFamily:D.CG,fontSize:15,fontStyle:"italic",color:"rgba(250,244,238,.8)",lineHeight:1.6,marginBottom:14}}>You sat beside three people.</p>
          {P.filter(m=>m.met).map(m=>(
            <div key={m.id} onClick={()=>goP(m)} style={{display:"flex",gap:14,alignItems:"center",padding:"12px 0",borderTop:"1px solid rgba(201,149,108,.08)",cursor:"pointer"}}>
              <Av c={m.c} t={m.av} s={40}/>
              <div style={{flex:1}}><div style={{fontFamily:D.CG,fontSize:17,color:T.cream}}>{m.n}</div><div style={{fontFamily:D.J,fontSize:12,color:"rgba(250,244,238,.55)"}}>{m.r}</div></div>
              <span onClick={e=>{e.stopPropagation();tSv(m.id);}} style={{fontFamily:D.J,fontSize:11,color:sv.includes(m.id)?T.rose:"rgba(250,244,238,.4)",cursor:"pointer"}}>{sv.includes(m.id)?"Saved":"Save"}</span>
            </div>
          ))}
        </div>
        <p style={{fontFamily:D.CG,fontSize:15,fontStyle:"italic",color:"rgba(26,8,32,.6)",lineHeight:1.65,marginBottom:8}}>Who stayed with you?</p>
        <p style={{fontFamily:D.J,fontSize:13,color:"rgba(26,8,32,.5)",lineHeight:1.7}}>Save anyone you want to see again. The host notices. Returning tables are composed from these signals.</p>
      </div></div>}

      {/* ═══ PULSE ═══ */}
      {sec==="pulse"&&<div style={{background:T.cream,padding:"clamp(28px,4vh,48px) 24px 64px"}}><div style={{maxWidth:640,margin:"0 auto"}}>
        <h2 style={{fontFamily:D.CG,fontSize:"clamp(26px,4vw,36px)",fontWeight:300,color:T.bg,marginBottom:4}}>Weekly Pulse</h2>
        <p style={{fontFamily:D.J,fontSize:14,color:"rgba(26,8,32,.6)",marginBottom:4}}>One thought. Once a week. Optional. Meaningful.</p>
        <GL w={40} m="0 0 24px"/>
        <div style={{background:T.bg,padding:28,marginBottom:24}}>
          <p style={{fontFamily:D.CG,fontSize:17,fontStyle:"italic",color:"rgba(250,244,238,.85)",lineHeight:1.6,marginBottom:14}}>{PROMPTS[pi]}</p>
          {!ps?<><textarea value={pt} onChange={e=>setPt(e.target.value)} placeholder="Write something small and true." rows={3} style={{width:"100%",padding:"14px 16px",background:"rgba(250,244,238,.06)",border:"1px solid rgba(201,149,108,.25)",fontFamily:D.J,fontSize:14,color:T.cream,lineHeight:1.65}}/><div style={{marginTop:12,display:"flex",justifyContent:"space-between",alignItems:"center"}}><span onClick={()=>setPi(p=>(p+1)%PROMPTS.length)} style={{fontFamily:D.J,fontSize:12,color:T.rose,cursor:"pointer",opacity:.7}}>Different prompt</span>{pt&&<button type="button" onClick={()=>setPs(true)} style={{...btn,width:"auto",padding:"10px 24px",fontSize:11}}>Share</button>}</div></>:
          <div><p style={{fontFamily:D.CG,fontSize:15,fontStyle:"italic",color:"rgba(250,244,238,.8)",marginBottom:8}}>Shared. The House heard you.</p><span onClick={()=>{setPs(false);setPt("");}} style={{fontFamily:D.J,fontSize:12,color:T.rose,cursor:"pointer"}}>Write another</span></div>}
        </div>
        <div style={{...sH,color:T.copper}}>From the Circle</div>
        {P.filter(m=>m.pl).map(m=><div key={m.id} style={{padding:"14px 0",borderTop:"1px solid rgba(26,8,32,.05)"}}><div style={{display:"flex",gap:12,alignItems:"center",marginBottom:8,cursor:"pointer"}} onClick={()=>goP(m)}><Av c={m.c} t={m.av} s={32}/><span style={{fontFamily:D.J,fontSize:13,color:T.bg}}>{m.n}</span></div><p style={{fontFamily:D.CG,fontSize:14,fontStyle:"italic",color:"rgba(26,8,32,.7)",lineHeight:1.6,paddingLeft:44}}>{m.pl}</p></div>)}
      </div></div>}

      <div style={{background:T.bg,padding:"clamp(24px,3vh,36px) 24px",textAlign:"center"}}><div style={{fontFamily:D.J,fontSize:11,letterSpacing:".14em",color:"rgba(255,255,255,.85)",marginBottom:8}}><Hse/></div><div style={{fontFamily:D.CG,fontSize:14,fontStyle:"italic",color:"rgba(255,255,255,.85)"}}>London. Est. MMXXVI.</div></div>
    </div>
  );
}
