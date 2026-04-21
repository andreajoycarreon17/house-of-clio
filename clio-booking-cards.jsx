import { useState, useRef, useEffect } from "react";


const T = { bg: "#1A0820", cream: "#FAF4EE", rose: "#C9956C", gold: "#C9A84C", copper: "#A05025" };
const D = { CG: "'Cormorant Garamond',Georgia,serif", J: "'Jost',sans-serif" };

const ClioIcon = ({ size = 60, color = T.rose, opacity = .06, style = {} }) => (
  <svg style={{ position: "absolute", pointerEvents: "none", opacity, ...style }} width={size} height={size} viewBox="0 0 320 320" fill="none">
    <circle cx="160" cy="160" r="153" stroke={color} strokeWidth=".5" fill="none" opacity=".2" />
    <circle cx="160" cy="160" r="108" stroke={color} strokeWidth="1.8" fill="none" />
    <circle cx="160" cy="160" r="72" stroke={color} strokeWidth=".5" fill="none" opacity=".2" />
    <line x1="160" y1="63" x2="160" y2="46" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="257" y1="160" x2="274" y2="160" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="160" y1="257" x2="160" y2="274" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="63" y1="160" x2="46" y2="160" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="160" cy="52" r="3.5" fill={color} opacity=".9" />
    <circle cx="268" cy="160" r="3.5" fill={color} opacity=".9" />
    <circle cx="160" cy="268" r="3.5" fill={color} opacity=".9" />
    <circle cx="52" cy="160" r="3.5" fill={color} opacity=".9" />
    <polygon points="303,156.8 306.2,160 303,163.2 299.8,160" fill={color} opacity=".65" />
    <polygon points="17,156.8 20.2,160 17,163.2 13.8,160" fill={color} opacity=".65" />
    <path d="M160,58 L220,214 L100,214 Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" fill="none" />
    <path d="M160,250 L68,130 L252,130 Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" fill="none" />
    <path d="M160,76 C197,110 197,210 160,244 C123,210 123,110 160,76 Z" stroke={color} strokeWidth="1.6" fill="none" />
    <path d="M160,110 C179,132 179,188 160,210 C141,188 141,132 160,110 Z" stroke={color} strokeWidth=".8" fill="none" opacity=".4" />
    <circle cx="160" cy="160" r="4.5" fill={color} opacity=".92" />
    <circle cx="160" cy="160" r="3" fill={color} opacity=".9" />
    <circle cx="160" cy="62" r="2.5" fill={color} opacity=".88" />
  </svg>
);

/* Solid image placeholder tones — replaced from palette */
const GRADS = ["#1A0820", "#2D0B38", "#A05025", "#2D0B38", "#1A0820", "#A05025", "#1A0820"];

const MCOL = [T.rose, T.gold, T.rose, T.gold, T.rose, T.gold, T.rose];
const Img = ({ aspect = "16/9", v = 0, markSize = 240 }) => (
  <div data-img="" style={{ aspectRatio: aspect, position: "relative", overflow: "hidden", background: GRADS[v % GRADS.length] }}>
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
      <ClioIcon size={markSize} color={MCOL[v % MCOL.length]} opacity={.15} style={{ position: "relative" }} />
    </div>
  </div>
);

const DarkCard = ({ children, bg = T.bg, markOp = .08 }) => {
  const lt = bg === "#FAF4EE"; const isCp = bg === "#A05025"; const isDm = bg === "#2D0B38";
  const bc = lt ? "rgba(26,8,32,.08)" : isCp ? "rgba(250,244,238,.15)" : isDm ? "rgba(232,196,160,.15)" : "rgba(201,149,108,.22)";
  const mc = lt ? T.copper : isCp ? T.cream : isDm ? T.rose : T.rose;
  return (
    <div style={{ padding: "12px 0", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "min(95vw,640px)", position: "relative", overflow: "hidden", border: `2px solid ${bc}`, boxShadow: lt ? "0 4px 24px rgba(0,0,0,.06)" : "0 8px 40px rgba(0,0,0,.35)" }}>
        <div style={{ position: "absolute", inset: 0, background: bg }} />
        <ClioIcon size={400} color={mc} opacity={markOp} style={{ top: "35%", left: "50%", transform: "translate(-50%,-50%)" }} />
        <div style={{ position: "relative", zIndex: 5, padding: "52px 40px 80px" }}>{children}</div>
      </div>
    </div>);
};

const TxtLink = ({ children, onClick, dark, href }) => href
  ? (<a href={href} style={{ cursor: "pointer", fontFamily: D.J, fontSize: 14, fontWeight: 400, color: dark || T.bg, borderBottom: `1.5px solid ${dark || T.bg}`, paddingBottom: 4, marginRight: 20, textDecoration: "none", display: "inline-block" }}>{children}</a>)
  : (<span data-h="" onClick={onClick} style={{ cursor: "pointer", fontFamily: D.J, fontSize: 14, fontWeight: 400, color: dark || T.bg, borderBottom: `1.5px solid ${dark || T.bg}`, paddingBottom: 4, marginRight: 20 }}>{children}</span>);

// CTA copy per event id
const CTA_COPY = {
  fh: "Enquire about The First House",
  ev: "Enquire about The Evening",
  sl: "Enquire about The Supper Lecture",
  pa: "Reserve a place on the City Escape to Paris",
  du: "Reserve a place on the City Escape to Dublin",
  pu: "Enquire about The Crossing in Puglia",
  ah: "Enquire about The Annual House",
  rt: "Enquire about The Returning Table",
  wk: "Enquire about The Walk",
  dd: "Enquire about The Distance Day",
  ce: "Enquire about The Culture Evening",
  ri: "Enquire about The Ride",
  ph: "Begin a conversation about The Private House",
};

// Maps event id → /apply?event= slug (matches EVENT_LABELS in apply page)
const APPLY_SLUG = {
  fh: "the-first-house-2-june",
  ev: "the-evening-14-june",
  sl: "the-supper-lecture-12-july",
  pa: "city-escape-paris-september",
  du: "city-escape-dublin-october",
  pu: "grand-journey-puglia-october",
  ah: "the-annual-house-6-december",
  rt: "the-returning-table",
  wk: "the-walk",
  dd: "the-distance-day",
  ce: "the-culture-evening",
  ri: "the-ride",
  ph: "the-private-house",
};
const CTA = ({ children, onClick, disabled, full, ac, dk = true }) => { const c = ac || T.rose; const rb = dk ? "rgba(201,149,108,.35)" : "rgba(26,8,32,.12)"; const rh = dk ? "rgba(201,149,108,.5)" : "rgba(26,8,32,.2)"; const hb = dk ? "rgba(201,149,108,.06)" : "rgba(26,8,32,.03)"; return (<div style={{ marginTop: 20 }}><button data-h="" type="button" aria-label={typeof children === "string" ? children : undefined} onClick={onClick} disabled={disabled} style={{ background: "none", border: `1.5px solid ${rb}`, padding: `14px ${full ? "0" : "36px"}`, width: full ? "100%" : "auto", fontFamily: D.J, fontSize: 12, fontWeight: 500, letterSpacing: ".16em", textTransform: "uppercase", color: c, opacity: disabled ? .5 : 1, transition: "all .4s" }} onMouseEnter={e => { if (!disabled) { e.target.style.background = hb; e.target.style.borderColor = rh; } }} onMouseLeave={e => { e.target.style.background = "none"; e.target.style.borderColor = rb; }}>{children}</button></div>); };
const Field = ({ label, type = "text", placeholder, value, onChange, half, options, dk = true }) => { const tc = dk ? T.cream : T.bg; const bg = dk ? "rgba(250,244,238,.06)" : "rgba(26,8,32,.04)"; const bd = dk ? "1px solid rgba(201,149,108,.3)" : "1px solid rgba(26,8,32,.15)"; const lc = dk ? T.rose : T.copper; return (<div style={{ marginBottom: 14, display: "inline-block", width: half ? "48%" : "100%", marginRight: half ? "4%" : "0", verticalAlign: "top" }}><label style={{ fontFamily: D.J, fontSize: 11, fontWeight: 500, letterSpacing: ".16em", textTransform: "uppercase", color: lc, display: "block", marginBottom: 5 }}>{label}</label>{options ? <select value={value} onChange={onChange} style={{ width: "100%", padding: "12px 16px", background: bg, border: bd, fontFamily: D.J, fontSize: 15, fontWeight: 400, color: tc, WebkitAppearance: "none" }}>{options.map((o, i) => <option key={i} value={o} style={{ background: dk ? T.bg : T.cream, color: tc }}>{o}</option>)}</select> : <input type={type} value={value} onChange={onChange} placeholder={placeholder} style={{ width: "100%", padding: "12px 16px", background: bg, border: bd, fontFamily: D.J, fontSize: 15, fontWeight: 400, color: tc, borderRadius: 0, WebkitAppearance: "none" }} />}</div>); };
const Wh = ({ children, dk = true }) => (<div style={{ fontFamily: D.J, fontSize: 14, fontWeight: 400, fontStyle: "italic", color: dk ? "rgba(250,244,238,.95)" : "rgba(26,8,32,.85)", marginBottom: 6, lineHeight: 1.65 }}>{children}</div>);

const DIETS = [{ g: "Preference", d: ["None", "Vegetarian", "Vegan", "Pescatarian"] }, { g: "Allergy", d: ["Gluten-free", "Dairy-free", "Nut-free", "Shellfish-free"] }, { g: "Observance", d: ["Halal", "Kosher"] }, { g: "Other", d: ["Low sugar", "Allergy or condition"] }];
const DietaryPills = ({ value = [], other = "", onToggle, onOther, dk = true }) => { const tc = dk ? T.cream : T.bg; const ac = dk ? T.rose : T.copper; const bd = dk ? "rgba(201,149,108,.2)" : "rgba(26,8,32,.1)"; const onBg = dk ? "rgba(201,149,108,.18)" : "rgba(26,8,32,.08)"; const onBd = dk ? T.rose : T.copper; const gc = dk ? "rgba(250,244,238,.7)" : "rgba(26,8,32,.6)"; return (<div style={{ marginBottom: 14 }}><label style={{ fontFamily: D.J, fontSize: 11, fontWeight: 500, letterSpacing: ".16em", textTransform: "uppercase", color: dk ? T.rose : T.copper, display: "block", marginBottom: 12 }}>Dietary</label>{DIETS.map((group, gi) => (<div key={gi} style={{ marginBottom: gi < DIETS.length - 1 ? 12 : 0 }}><div style={{ fontFamily: D.J, fontSize: 11, color: gc, marginBottom: 6 }}>{group.g}</div><div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{group.d.map(d => { const on = d === "None" ? value.length === 0 : value.includes(d); return (<div key={d} data-h="" onClick={() => onToggle(d)} style={{ padding: "7px 14px", border: `1.5px solid ${on ? onBd : bd}`, background: on ? onBg : "transparent", fontFamily: D.J, fontSize: 13, fontWeight: on ? 500 : 400, color: on ? ac : tc, cursor: "pointer", transition: "all .25s", opacity: on ? 1 : .75, letterSpacing: on ? ".02em" : "0" }}>{d}</div>) })}</div></div>))}{value.includes("Allergy or condition") && <div style={{ marginTop: 10 }}><input type="text" value={other} onChange={onOther} placeholder="e.g. severe citrus allergy, pregnancy, histamine intolerance" style={{ width: "100%", padding: "10px 16px", background: dk ? "rgba(250,244,238,.06)" : "rgba(26,8,32,.04)", border: `1px solid ${bd}`, fontFamily: D.J, fontSize: 14, fontWeight: 400, color: tc, borderRadius: 0, WebkitAppearance: "none" }} /></div>}</div>); };

/* 4 ENVIRONMENTS — deep · bone · copper · damson */
const ENV = {
  deep: { bg: "#1A0820", txt: "#FAF4EE", sub: "rgba(250,244,238,.92)", meta: "rgba(250,244,238,.85)", tag: T.rose, rule: "rgba(201,149,108,.2)", link: T.rose, date: T.rose, dk: true, acc: T.rose },
  bone: { bg: "#FAF4EE", txt: "#1A0820", sub: "rgba(26,8,32,.8)", meta: "rgba(26,8,32,.75)", tag: "rgba(26,8,32,.8)", rule: "rgba(26,8,32,.1)", link: T.bg, date: T.copper, dk: false, acc: T.copper },
  copper: { bg: "#A05025", txt: "#FFFFFF", sub: "rgba(255,255,255,.95)", meta: "rgba(255,255,255,.85)", tag: "rgba(255,255,255,.9)", rule: "rgba(255,255,255,.15)", link: "#FFFFFF", date: "#FFFFFF", dk: true, acc: "#FFFFFF" },
  damson: { bg: "#2D0B38", txt: "#FAF4EE", sub: "rgba(250,244,238,.92)", meta: "rgba(250,244,238,.85)", tag: T.rose, rule: "rgba(201,149,108,.12)", link: T.rose, date: T.rose, dk: true, acc: T.rose },
};

const F = [
  { id: "fh", env: "copper", v: 0, wide: false, l1: "The First", l2: "House", when: "2 June", cap: "24", tag: "Season opening", it: "Twenty-four strangers. By lunch, not one.", bd: "Twenty-four people. A morning where you work side by side. By lunch, nobody is introducing themselves.", inc: ["Morning creative session", "Lunch for twenty-four", "Portraits in advance"], exp: ["Portraits arrive before you do", "By lunch, the room has already formed", "You leave knowing people you will see again"], wh: "Twenty-four only.", dur: "Half day", price: "£600", fx: true, sec: "seasonal" },
  { id: "ev", env: "deep", v: 1, wide: false, l1: "The", l2: "Evening", when: "14 June", cap: "18", tag: "Flagship", it: "Eighteen strangers. One long table. Never this room again.", bd: "Composed seating. Low light. Three courses. By dessert, nobody wants to leave.", inc: ["Dinner and wine", "Composed seating"], exp: ["Portraits of everyone at your table", "Greeted by name at the door", "The person beside you was chosen", "Three courses. Low light. Nobody wants to leave"], wh: "Not everyone who asks is placed.", dur: "Evening", price: "£300", fx: true, sec: "seasonal" },
  { id: "sl", env: "bone", v: 2, wide: false, l1: "The Supper", l2: "Lecture", when: "12 July", cap: "28", tag: "Salon", it: "Thirty minutes. Then dinner.", bd: "Four tables of seven. The speaker sits with everyone. The talk gives the room something to disagree about.", inc: ["The lecture", "Dinner and wine", "Seating across four tables", "Portraits in advance"], exp: ["A speaker. Thirty minutes", "The speaker sits down with everyone", "Four tables of seven", "The disagreement starts at dinner"], wh: "The speaker is announced. The guest list is not.", dur: "Evening", price: "£360", fx: true, sec: "seasonal" },
  { id: "pa", env: "damson", v: 3, wide: false, l1: "City Escape", l2: "Paris", when: "19 September", cap: "14", tag: "Destination", it: "Two nights. Doors that do not open otherwise.", bd: "Fourteen people. A private gallery. A restaurant you would never find.", inc: ["Two nights", "Dinner and private viewings", "Transfers", "Host throughout"], exp: ["Two nights. A hotel chosen for the conversation it produces.", "A private gallery", "You arrive. The city is already open."], wh: "Flights are yours to arrange.", dur: "Two nights", price: "From £2,880 per person", fx: false, sec: "seasonal" },
  { id: "du", env: "copper", v: 4, wide: false, l1: "City Escape", l2: "Dublin", when: "17 October", cap: "24", tag: "Destination", it: "A castle. Kildare. Two nights.", bd: "Twenty-four people. A castle. Kildare. Two nights the host has already walked.", inc: ["Two nights", "Castle dinner", "Kildare excursion", "Transfers throughout"], exp: ["Two vehicles. Twelve in each. The convoy moves together.", "Castle dinner. Three tables of eight.", "Kildare. A day the host has already walked."], wh: "Flights not included.", dur: "Two nights", price: "From £2,400 per person", fx: false, sec: "seasonal" },
  { id: "pu", env: "damson", v: 5, wide: false, l1: "Grand Journey", l2: "Puglia", when: "24 October", cap: "10", tag: "Journey", it: "Four nights. Not the obvious route.", bd: "Ten people. Every route walked by the host. Places chosen for what they do to conversation.", inc: ["Four nights", "Dinner and private guides", "Transport", "Host throughout"], exp: ["Four nights. Locations chosen for conversation", "Private guides who know the region", "Every route walked by the host"], wh: "Flights not included.", dur: "Four nights", price: "From £5,760 per person", fx: false, sec: "seasonal" },
  { id: "ah", env: "damson", v: 6, wide: true, l1: "The Annual", l2: "House", when: "6 December", cap: "120", tag: "Grand", it: "One hundred and twenty people. One room. One night.", bd: "One hundred and twenty people. The tables of the year in one room. Conversations resume mid-sentence.", inc: ["Drinks", "Dinner and wine", "Entertainment"], exp: ["The full Circle. One hundred and twenty", "People from different dinners find each other", "Conversations resume mid-sentence"], wh: "One night a year.", dur: "Evening", price: "£330", fx: true, sec: "seasonal" },
  { id: "rt", env: "deep", v: 7, wide: false, l1: "The Returning", l2: "Table", when: "Fortnightly from June", cap: "12", tag: "Recurring", it: "Same table. Deeper every time.", bd: "Twelve people. Some you sat beside last time. This is where belonging starts.", inc: ["Dinner and wine", "Composed seating"], exp: ["Some you sat beside last time", "The host invites people back", "You already know who is coming", "By the fourth table, introductions stop"], wh: "The host decides who returns.", dur: "Evening", price: "£180", fx: true, sec: "recurring" },
  { id: "wk", env: "bone", v: 8, wide: false, l1: "The", l2: "Walk", when: "Fortnightly from June", cap: "12", tag: "Recurring", it: "Six pairs walking. Ends at a table.", bd: "Twelve people. Hampstead Heath or the South Downs. Nobody walks in pairs for long.", inc: ["Guided walk with paired rotations", "Table at the end"], exp: ["Six pairs rotating", "Hampstead Heath or the South Downs", "The walk ends at a table"], dur: "Half day", price: "£55", fx: true, sec: "recurring" },
  { id: "dd", env: "copper", v: 9, wide: true, l1: "The Distance", l2: "Day", when: "Quarterly from September", cap: "8", tag: "Recurring", it: "Two cars of four. Leave London.", bd: "Ninety minutes in a car with one other person. The destination is chosen for the table.", inc: ["Transport", "Lunch", "Return"], exp: ["Two cars. Ninety minutes", "A destination chosen for the lunch", "You arrive knowing each other", "The table is the point"], wh: "Eight only. Quarterly.", dur: "Full day", price: "£235", fx: true, sec: "recurring" },
  { id: "ce", env: "deep", v: 10, wide: false, l1: "The Culture", l2: "Evening", when: "Monthly from July", cap: "16", tag: "Society", it: "Same performance. Then the conversation.", bd: "Sixteen people. The Almeida, the Barbican, or the Royal Academy. Dinner follows.", inc: ["Ticket", "Dinner and wine", "Seated by the host"], exp: ["The Almeida or Royal Academy", "Your ticket is waiting.", "Dinner follows", "The performance starts the conversation"], wh: "Sixteen only.", dur: "Evening", price: "£265", fx: true, sec: "society" },
  { id: "ri", env: "bone", v: 11, wide: false, l1: "The", l2: "Ride", when: "Fortnightly from June", cap: "10 riders", tag: "Cycling society", it: "Five pairs on the road. Long lunch at the end.", bd: "Ten riders. Richmond Park. The Surrey Hills. Kent lanes. Conversational pace. A cyclist who knows every climb.", inc: ["Guided ride with paired rotations", "Long lunch"], exp: ["Five pairs on the road", "Richmond Park. The Surrey Hills. Kent lanes", "Road cycling at conversational pace. A cyclist who knows every climb"], dur: "Half day", price: "£80", fx: true, sec: "society" },
];

const SECS = [{ key: "seasonal", label: "Seasonal" }, { key: "recurring", label: "Recurring" }, { key: "society", label: "Societies" }];

// Convert price string to pence for Stripe
const priceToPence = (priceStr) => {
  if (!priceStr) return 0;
  
  // Handle "From £X,XXX" format
  if (priceStr.startsWith("From ")) {
    const cleanPrice = priceStr.replace("From ", "").replace("£", "").replace(",", "").replace(" per person", "");
    return parseInt(parseFloat(cleanPrice) * 100);
  }
  
  // Handle "£XXX" format
  const cleanPrice = priceStr.replace("£", "").replace(",", "").replace(" per person", "");
  return parseInt(parseFloat(cleanPrice) * 100);
};

const WideCard=({f,go})=>{
  const e = ENV[f.env] || ENV.deep;
  return (
    <div data-card="" style={{ background: e.bg, gridColumn: "1 / -1" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", minHeight: 240 }}>
        <Img aspect="21/9" v={f.v} markSize={220} />
        <div style={{ padding: "clamp(28px,3vw,44px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ width: "32px", height: "1px", background: e.acc || T.rose, opacity: .4, marginBottom: 16 }} />
          <h3 style={{ fontFamily: D.CG, fontSize: "clamp(26px,4vw,36px)", fontWeight: 300, color: e.txt, margin: "0 0 12px" }}>{f.l1} <em style={{ color: e.acc || T.rose }}>{f.l2}</em></h3>
          <p style={{ fontFamily: D.CG, fontSize: 17, fontWeight: 400, fontStyle: "italic", lineHeight: 1.65, color: e.sub, marginBottom: 14, maxWidth: "32ch" }}>{f.it}</p>
          <div style={{ fontFamily: D.J, fontSize: 12, color: e.meta, marginBottom: 14 }}>{f.when} · {f.cap} · {f.dur}</div>
             <TxtLink onClick={() => go("detail", f)} dark={e.dk ? e.acc : e.link}>{CTA_COPY[f.id] || "Enquire"}</TxtLink>
        </div>
      </div>
    </div>);
};

const StdCard = ({ f, go }) => {
  const e = ENV[f.env] || ENV.deep;
  return (
    <div data-card="" style={{ background: e.bg, padding: "0 0 28px" }}>
      <Img aspect="4/3" v={f.v} markSize={280} />
      <div style={{ width: "40px", height: "1px", background: e.acc || T.rose, opacity: .4, margin: "0 28px" }} />
      <div style={{ padding: "20px 28px 0" }}>
        <h3 style={{ fontFamily: D.CG, fontSize: "clamp(24px,4vw,32px)", fontWeight: 300, color: e.txt, margin: "0 0 10px" }}>{f.l1} <em style={{ color: e.acc || T.rose }}>{f.l2}</em></h3>
        <p style={{ fontFamily: D.CG, fontSize: 17, fontWeight: 400, fontStyle: "italic", lineHeight: 1.65, color: e.sub, marginBottom: 12, maxWidth: "32ch" }}>{f.it}</p>
        <div style={{ fontFamily: D.J, fontSize: 12, color: e.meta, marginBottom: 12 }}>{f.when} · {f.cap} · {f.dur}</div>
         <TxtLink onClick={() => go("detail", f)} dark={e.dk ? e.acc : e.link}>{CTA_COPY[f.id] || "Enquire"}</TxtLink>
      </div>
    </div>);
};

export default function ClioReservation({ confirmed = false, formatId = null }){
  /* Cursor: circle + dot — pure DOM, zero React re-renders */
  const dotRef=useRef(null);const ringRef=useRef(null);
  const pos=useRef({x:-100,y:-100});const rpos=useRef({x:-100,y:-100});const raf=useRef(null);
  useEffect(()=>{
     const onMove = e => { pos.current = { x: e.clientX, y: e.clientY }; if (dotRef.current) { dotRef.current.style.left = e.clientX + "px"; dotRef.current.style.top = e.clientY + "px"; } };
    const animate = () => { rpos.current.x += (pos.current.x - rpos.current.x) * .12; rpos.current.y += (pos.current.y - rpos.current.y) * .12; if (ringRef.current) { ringRef.current.style.left = rpos.current.x + "px"; ringRef.current.style.top = rpos.current.y + "px"; } raf.current = requestAnimationFrame(animate); };
    const onOver = e => { if (e.target.closest("button,[data-h]")) ringRef.current?.classList.add("h"); };
    const onOut = e => { if (e.target.closest("button,[data-h]")) ringRef.current?.classList.remove("h"); };
    const onKey = e => { if (e.key === "Escape") { go("browse"); } }; window.addEventListener("keydown", onKey); window.addEventListener("mousemove", onMove); document.addEventListener("mouseover", onOver); document.addEventListener("mouseout", onOut);
    raf.current = requestAnimationFrame(animate);
    setTimeout(() => { if (dotRef.current) dotRef.current.style.opacity = "1"; if (ringRef.current) ringRef.current.style.opacity = "1"; }, 400);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("mousemove", onMove); document.removeEventListener("mouseover", onOver); document.removeEventListener("mouseout", onOut); cancelAnimationFrame(raf.current); };
  },[]);

  const [view,setView]=useState("browse");
  const [sel,setSel]=useState(null);
  const [tab,setTab]=useState("seasonal");

  // Check for confirmed=true and format URL parameters
  useEffect(() => {
    if (confirmed) {
      const format = formatId ? F.find(f => f.id === formatId) : null;
      setSel(format || null);
      setView('confirmed');
    }
  }, [confirmed, formatId]);
  const [sending,setSending]=useState(false);
  const [formStep,setFormStep]=useState(1);
  const [error,setError]=useState("");
  const scrollPos=useRef(0);
  const step2Ref=useRef(null);
  useEffect(()=>{if(formStep===2&&step2Ref.current){const first=step2Ref.current.querySelector('input:not([value]),select');if(first)setTimeout(()=>first.focus(),200);}},[formStep]);
  const ref=useRef(null);
  const [fm,setFm]=useState({name:"",email:"",phone:"",dietary:[],dietaryOther:"",attending:"Alone",guestName:"",guestEmail:"",guestPhone:"",guestDietary:[],guestDietaryOther:"",city:"",roomPref:"",guests:"1",occasion:"",timing:"",guestCount:"",locationPref:""});
  const up=(k,v)=>setFm(p=>({...p,[k]:v}));
  const toggleDiet=(d)=>{setFm(p=>{if(d==="None")return{...p,dietary:[],dietaryOther:""};const cur=p.dietary.filter(x=>x!=="None");return{...p,dietary:cur.includes(d)?cur.filter(x=>x!==d):[...cur,d]};});setError("");};
  const toggleGuestDiet=(d)=>{setFm(p=>{if(d==="None")return{...p,guestDietary:[],guestDietaryOther:""};const cur=p.guestDietary.filter(x=>x!=="None");return{...p,guestDietary:cur.includes(d)?cur.filter(x=>x!==d):[...cur,d]};});setError("");};
  const reset=()=>setFm({name:"",email:"",phone:"",dietary:[],dietaryOther:"",attending:"Alone",guestName:"",guestEmail:"",guestPhone:"",guestDietary:[],guestDietaryOther:"",city:"",roomPref:"",guests:"1",occasion:"",timing:"",guestCount:"",locationPref:""});
  const scroll=()=>setTimeout(()=>window.scrollTo({top:0,behavior:"smooth"}),60);
  const go=(v,f)=>{if(v!=="browse")scrollPos.current=window.scrollY;if(f)setSel(f);setView(v);setFormStep(1);if(v==="browse")setTimeout(()=>window.scrollTo({top:scrollPos.current,behavior:"smooth"}),100);else scroll();};
  const canSubmit=fm.name&&fm.email&&fm.email.includes("@")&&fm.phone;
  const idx=sel?F.findIndex(f=>f.id===sel.id):-1;
  const prev=idx>0?F[idx-1]:null;
  const next=idx<F.length-1&&idx>=0?F[idx+1]:null;
  const submit=async()=>{
    if(!canSubmit)return;
    setSending(true);
    setError("");
    
    try {
      if(sel.fx){
        // Fixed price formats - use Stripe Checkout
        const res=await fetch("/api/checkout",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({
            formatId:sel.id,
            formatName:`${sel.l1} ${sel.l2}`,
            formatSlug:sel.id,
            priceInPence:priceToPence(sel.price),
            name:fm.name,
            email:fm.email,
            phone:fm.phone,
            dietary:fm.dietary,
            dietaryNotes:fm.dietaryOther,
            attending:fm.attending,
            guestName:fm.guestName,
            guestEmail:fm.guestEmail,
            guestPhone:fm.guestPhone,
            guestDietary:fm.guestDietary,
            guestDietaryNotes:fm.guestDietaryOther,
          }),
        });
        const data=await res.json();
        if(data.url){
          window.location.href=data.url;
        }else{
          setError("Something went wrong. Please try again.");
          setSending(false);
        }
      }else{
        // Variable/bespoke formats - create CRM record
        const res=await fetch("/api/enquiry",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({
            type:"enquiry",
            name:fm.name,
            email:fm.email,
            phone:fm.phone,
            dietary:fm.dietary,
            dietaryNotes:fm.dietaryOther,
            formatName:`${sel.l1} ${sel.l2}`,
            formatId:sel.id,
            attending:fm.attending,
          }),
        });
        const data=await res.json();
        if(data.success){
          go("confirmed");
        }else{
          setError("Something went wrong. Please try again.");
        }
        setSending(false);
      }
    }catch(err){
      setError("Connection error. Please check your internet and try again.");
      setSending(false);
    }
  };
  const filtered=F.filter(f=>f.sec===tab);

  return(
    <div ref={ref} style={{minHeight:"100vh"}}>
      <style dangerouslySetInnerHTML={{__html:`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');*{margin:0;padding:0;box-sizing:border-box}[data-card]:focus-visible{outline:2px solid rgba(201,149,108,.4);outline-offset:4px}html{scroll-behavior:smooth;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(pointer:fine){body,*{cursor:none!important}}@media(pointer:fine){input,textarea,select{cursor:text!important}}.cr{position:fixed;width:44px;height:44px;border:1px solid rgba(201,149,108,.25);border-radius:50%;pointer-events:none;z-index:10000;transform:translate(-50%,-50%);transition:width .35s cubic-bezier(.22,1,.36,1),height .35s cubic-bezier(.22,1,.36,1),border-color .35s,background .35s,opacity .4s}.cr.h{width:60px;height:60px;border-color:rgba(201,149,108,.45);background:rgba(201,149,108,.04)}.cd{position:fixed;width:5px;height:5px;background:rgba(201,149,108,.7);border-radius:50%;pointer-events:none;z-index:10001;transform:translate(-50%,-50%);transition:opacity .3s}::selection{background:rgba(201,149,108,.2);color:#1A0820}input:focus,textarea:focus,select:focus{border-color:rgba(201,149,108,.5)!important;outline:none;box-shadow:0 0 0 2px rgba(201,149,108,.15)}input,textarea,select{border-radius:0;-webkit-appearance:none}[data-card]{transition:transform .5s cubic-bezier(.25,.1,.25,1)}[data-card]:hover{transform:none}[data-card]{opacity:0;animation:cardIn .6s ease forwards}@keyframes cardIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes pulse{0%,100%{opacity:.5}50%{opacity:1}}@keyframes checkIn{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}`}}/>
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:'{"@context":"https://schema.org","@type":"Organization","name":"The House of Clio","alternateName":"The \u0186use \u0254f Clio","url":"https://thehouseofclio.com","description":"A private cultural house in London offering composed private dinners, supper lectures, city escapes, and Grand Journeys. Founded 2026. By introduction only.","foundingDate":"2026","address":{"@type":"PostalAddress","addressLocality":"London","addressCountry":"GB"},"sameAs":["https://instagram.com/houseof_clio","https://x.com/TheHouseofClio"]}'}}/>
      <div ref={ringRef} className="cr" style={{opacity:0}}/>
      <div ref={dotRef} className="cd" style={{opacity:0}}/>

      {view==="browse"&&<div style={{background:T.cream,animation:"fadeIn .4s ease"}}>
        <div style={{textAlign:"center",padding:"clamp(48px,8vh,80px) 24px clamp(24px,4vh,36px)",position:"relative"}}>
          <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}><ClioIcon size={380} color={T.rose} opacity={.06} style={{position:"relative"}}/></div>
          <p style={{position:"absolute",width:1,height:1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap"}}>The House of Clio is a private cultural house in London offering composed private dinners, supper lectures, city escapes, and Grand Journeys. Twelve formats across the season. Every seat placed by the host. Founded 2026. By introduction only.</p>
          <div style={{position:"relative",zIndex:1}}>
            <div style={{fontFamily:D.J,fontSize:11,fontWeight:500,letterSpacing:".3em",textTransform:"uppercase",color:T.rose,marginBottom:16}}>THE {"\u0186"}USE {"\u0254"}F CLIO</div>
            <h1 style={{fontFamily:D.CG,fontSize:"clamp(30px,5vw,44px)",fontWeight:300,lineHeight:1.15,color:T.bg,marginBottom:16}}>The Programme</h1>
            <p style={{fontFamily:D.J,fontSize:14,fontWeight:400,lineHeight:1.85,color:"rgba(26,8,32,.8)",maxWidth:"56ch",margin:"0 auto"}}>The {"\u0186"}use {"\u0254"}f Clio is a private cultural house in London for people whose social lives have not caught up with the rest of their lives.</p>
          </div>
        </div>

        <div style={{display:"flex",justifyContent:"center",gap:"clamp(20px,4vw,40px)",borderBottom:"1px solid rgba(26,8,32,.12)",padding:"0 24px",marginBottom:"clamp(28px,4vh,44px)"}}>
          {SECS.map(s=>(<div key={s.key} onClick={()=>setTab(s.key)} style={{fontFamily:D.J,fontSize:13,fontWeight:400,color:tab===s.key?T.bg:"rgba(26,8,32,.65)",paddingBottom:14,borderBottom:tab===s.key?`2px solid ${T.bg}`:"2px solid transparent",transition:"all .3s",cursor:"pointer","data-h":"",}}>{s.label}</div>))}
          <div onClick={()=>setTab("private")} style={{fontFamily:D.J,fontSize:13,fontWeight:400,color:tab==="private"?T.bg:"rgba(26,8,32,.65)",paddingBottom:14,borderBottom:tab==="private"?`2px solid ${T.bg}`:"2px solid transparent",transition:"all .3s",cursor:"pointer","data-h":"",}}>Private House</div>
        </div>

        {(tab==="seasonal"||tab==="private")&&<div style={{maxWidth:960,margin:"0 auto",padding:"0 clamp(24px,4vw,48px)"}}>
          <Img aspect="21/9" v={tab==="seasonal"?0:2} markSize={320}/>
          <div style={{width:"48px",height:"1px",background:T.rose,opacity:.3,margin:"16px auto 0"}}/>
        </div>}

        <div style={{textAlign:"center",padding:(tab==="seasonal"||tab==="private")?"clamp(36px,5vh,56px) 24px clamp(24px,3vh,36px)":"clamp(24px,3vh,36px) 24px clamp(16px,2vh,24px)",maxWidth:640,margin:"0 auto"}}>
          <h2 style={{fontFamily:D.CG,fontSize:"clamp(26px,4vw,36px)",fontWeight:300,color:T.bg,marginBottom:(tab==="seasonal"||tab==="private")?12:8}}>
            {tab==="seasonal"&&"The Season"}
            {tab==="recurring"&&"Recurring"}
            {tab==="society"&&"Societies"}
            {tab==="private"&&"The Private House"}
          </h2>
          {(tab==="seasonal"||tab==="private")&&<p style={{fontFamily:D.J,fontSize:14,fontWeight:400,lineHeight:1.85,color:"rgba(26,8,32,.8)",maxWidth:"52ch",margin:"0 auto"}}>
            {tab==="seasonal"&&"Dinners for eighteen. Lectures for twenty-eight. Two city escapes. One Grand Journey. The first season opens 2 June 2026."}
            {tab==="private"&&"Your people in one room. Twelve to forty. The host handles the rest."}
          </p>}
          {(tab==="seasonal"||tab==="private")&&<div style={{width:40,height:1,background:T.rose,opacity:.35,margin:"20px auto 0"}}/>}
        </div>

        {tab!=="private"&&<div style={{maxWidth:960,margin:"0 auto",padding:"0 clamp(24px,4vw,48px)"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,380px),1fr))",gap:"clamp(24px,3vw,36px)"}}>
            {filtered.map((f,i)=>{
              if(f.wide) return <div key={i} data-card="" tabIndex={0} onKeyDown={e=>{if(e.key==="Enter")go("detail",f)}} style={{animationDelay:`${i*120}ms`}}><WideCard f={f} go={go}/></div>;
              return <div key={i} data-card="" tabIndex={0} onKeyDown={e=>{if(e.key==="Enter")go("detail",f)}} style={{animationDelay:`${i*120}ms`}}><StdCard f={f} go={go}/></div>;
            })}
          </div>
        </div>}

        {tab==="private"&&<div style={{maxWidth:960,margin:"0 auto",padding:"0 clamp(24px,4vw,48px)"}}>
          <div style={{background:T.copper,overflow:"hidden"}}>
            <Img aspect="21/9" v={2} markSize={280}/>
            <div style={{padding:"clamp(28px,4vw,48px)"}}>
              <div style={{fontFamily:D.J,fontSize:12,fontWeight:500,letterSpacing:".2em",textTransform:"uppercase",color:"rgba(255,255,255,.95)",marginBottom:10}}>By arrangement</div>
              <h3 style={{fontFamily:D.CG,fontSize:"clamp(28px,4.5vw,40px)",fontWeight:300,color:T.cream,margin:"0 0 16px"}}>The Private House</h3>
              <p style={{fontFamily:D.J,fontSize:14,fontWeight:400,lineHeight:1.85,color:"rgba(255,255,255,.95)",marginBottom:20,maxWidth:"40ch"}}>You name the people. The host composes the room. Venue, seating, portraits, catering.</p>
              <TxtLink onClick={()=>{setSel({id:"ph",env:"copper",l1:"The Private",l2:"House",tag:"By arrangement",it:"You name the people. The host does the rest.",wh:"Conversation first. Pricing follows.",bespoke:true});setView("form");scroll();}} dark={T.rose}>Begin a conversation</TxtLink>
            </div>
          </div>
        </div>}

        <div style={{textAlign:"center",padding:"clamp(36px,5vh,56px) 24px",maxWidth:540,margin:"0 auto",position:"relative"}}>
          <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}><ClioIcon size={280} color={T.rose} opacity={.06} style={{position:"relative"}}/></div>
          <div style={{position:"relative",zIndex:1}}>
          <div style={{width:40,height:1,background:T.rose,opacity:.2,margin:"0 auto 16px"}}/>
          <p style={{fontFamily:D.J,fontSize:15,fontWeight:400,color:"rgba(26,8,32,.85)",marginBottom:16}}>The Circle is open by introduction.</p>
          <TxtLink href="/apply">Introduce yourself</TxtLink>
          </div>
        </div>

        <div style={{background:T.bg,padding:"clamp(24px,3vh,36px) 24px",textAlign:"center",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}><ClioIcon size={200} color={T.rose} opacity={.06} style={{position:"relative"}}/></div>
          <div style={{position:"relative",zIndex:1}}>
            <div style={{fontFamily:D.J,fontSize:11,letterSpacing:".14em",color:"rgba(255,255,255,.85)",marginBottom:8}}>THE {"\u0186"}USE {"\u0254"}F CLIO</div>
            <div style={{fontFamily:D.CG,fontSize:14,fontWeight:400,fontStyle:"italic",color:"rgba(255,255,255,.85)"}}>London. Est. MMXXVI.</div>
          </div>
        </div>
      </div>}

      {view==="detail"&&sel&&(()=>{
        const e=ENV[sel.env]||ENV.deep;
        const dk=e.dk;
        const tc=e.txt;const sc=e.sub;
        const mc=e.meta;
        const ic=dk?"rgba(250,244,238,.9)":"rgba(26,8,32,.8)";
        const sc2=dk?"rgba(250,244,238,.92)":"rgba(26,8,32,.85)";
        const wc=dk?"rgba(250,244,238,.8)":"rgba(26,8,32,.7)";
        const rc=e.rule;
        const nc=dk?"rgba(250,244,238,.85)":"rgba(26,8,32,.75)";
        const pc=dk?"rgba(250,244,238,.8)":"rgba(26,8,32,.75)";
        const ac=e.acc||T.rose;
        const obg=e.bg==="#A05025"?"#5A2A10":e.bg==="#2D0B38"?"#1A0520":dk?"#080312":"#E8E2DB";
        return <div style={{background:obg,padding:"24px 0 48px",animation:"fadeIn .4s ease"}}>
        <DarkCard bg={e.bg} markOp={dk?.12:.07}>
          <div data-h="" onClick={()=>go("browse")} style={{fontFamily:D.J,fontSize:12,fontWeight:500,letterSpacing:".14em",textTransform:"uppercase",color:ac,cursor:"pointer",marginBottom:22}}>{"←"} Programme</div>
          <div style={{fontFamily:D.J,fontSize:11,color:mc,marginBottom:14}}>{idx+1} of {F.length}</div>
          <div style={{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap",marginBottom:20}}>
            <span style={{fontFamily:D.J,fontSize:12,fontWeight:500,letterSpacing:".16em",textTransform:"uppercase",color:ac}}>{sel.when}</span>
            <span style={{fontFamily:D.J,fontSize:12,color:mc}}>{sel.cap}{/\d+$/.test(sel.cap)?" seats":""}</span>
            <span style={{fontFamily:D.J,fontSize:12,color:mc}}>{sel.dur}</span>
          </div>
          <p style={{position:"absolute",width:1,height:1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap"}}>{(sel.l1||"")} {(sel.l2||"")} at The House of Clio. {sel.bd||""}. {sel.price||""}. Private cultural house, London. By introduction only.</p>
          <h2 style={{fontFamily:D.CG,fontSize:"clamp(32px,6vw,48px)",fontWeight:300,lineHeight:1.15,color:tc,margin:"0 0 20px"}}>{sel.l1} <em style={{color:ac}}>{sel.l2}</em></h2>
          <div style={{width:"40px",height:"1px",background:ac,opacity:.35,marginBottom:20}}/>
          <div style={{fontFamily:D.CG,fontSize:20,fontWeight:500,fontStyle:"italic",lineHeight:1.65,color:dk?"rgba(250,244,238,.95)":"rgba(26,8,32,.8)",maxWidth:"30ch",marginBottom:16}}>{sel.it}</div>
          <div style={{fontFamily:D.J,fontSize:15,fontWeight:400,lineHeight:1.85,color:sc,maxWidth:"36ch",marginBottom:16}}>{sel.bd}</div>
          <div style={{marginTop:12,marginBottom:8}}>{sel.inc.map((s,i)=><div key={i} style={{fontFamily:D.J,fontSize:14,fontWeight:400,lineHeight:1.8,color:ic,display:"flex",gap:8,alignItems:"flex-start",marginBottom:3}}><span style={{color:ac,fontSize:12,marginTop:2,flexShrink:0}}>—</span>{s}</div>)}</div>
          {sel.exp&&<div style={{marginTop:20}}>{sel.exp.map((step,i)=>(<div key={i} style={{display:"flex",gap:10,marginBottom:11,alignItems:"flex-start"}}><span style={{fontFamily:D.CG,fontSize:15,fontStyle:"italic",color:ac,opacity:.7,flexShrink:0,minWidth:16,textAlign:"right",lineHeight:1.3}}>{i+1}</span><span style={{fontFamily:D.J,fontSize:14,lineHeight:1.7,color:sc2}}>{step}</span></div>))}</div>}
          {sel.wh&&<div style={{fontFamily:D.J,fontSize:13,fontWeight:400,fontStyle:"italic",color:wc,marginTop:8,marginBottom:8,lineHeight:1.65}}>{sel.wh}</div>}
          <div style={{width:"32px",height:"1px",background:ac,opacity:.25,marginTop:24}}/>
          <div style={{fontFamily:D.CG,fontSize:34,marginTop:12,fontWeight:300,letterSpacing:".04em",color:tc,marginBottom:6}}>{sel.price.startsWith("From")?<><span style={{fontSize:18,fontWeight:400,opacity:.7}}>From </span>{sel.price.replace("From ","")}</>:sel.price}</div>

          {sel.fx&&<div style={{fontFamily:D.J,fontSize:13,fontWeight:400,color:wc,marginTop:8,fontStyle:"italic"}}>Once placed, your name is on the table.</div>}
          <CTA ac={ac} dk={dk} onClick={()=>go("form")}>{sel.fx?"Reserve your place":"Continue to arrangement"}</CTA>
          <div style={{ marginTop: 12, fontFamily: D.J, fontSize: 12, color: nc }}><a href={`/apply?event=${APPLY_SLUG[sel.id] || sel.id}`} style={{ color: ac, cursor: "pointer", borderBottom: `1.5px solid ${ac}`, opacity: .8, textDecoration: "none" }}>Introduce yourself</a></div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:24,paddingTop:16,borderTop:`1px solid ${rc}`}}>
            {prev?<div data-h="" onClick={()=>go("detail",prev)} style={{flex:1,cursor:"pointer"}}><div style={{fontFamily:D.J,fontSize:12,fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:ac,marginBottom:4}}>{"←"} Previous</div><div style={{fontFamily:D.CG,fontSize:16,fontStyle:"italic",color:sc2}}>{prev.l1} {prev.l2}</div></div>:<div style={{flex:1}}/>}
            <div data-h="" onClick={()=>go("browse")} style={{padding:"0 16px",textAlign:"center",cursor:"pointer"}}><div style={{width:8,height:8,borderRadius:"50%",border:`1.5px solid ${ac}`,opacity:.4,margin:"0 auto"}}/><div style={{fontFamily:D.J,fontSize:11,color:nc,marginTop:4}}>All</div></div>
            {next?<div data-h="" onClick={()=>go("detail",next)} style={{flex:1,textAlign:"right",cursor:"pointer"}}><div style={{fontFamily:D.J,fontSize:12,fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:ac,marginBottom:4}}>Next {"→"}</div><div style={{fontFamily:D.CG,fontSize:16,fontStyle:"italic",color:sc2}}>{next.l1} {next.l2}</div></div>:<div style={{flex:1}}/>}
          </div>
        </DarkCard>
      </div>})()}

      {view==="form"&&sel&&(()=>{
        const fe=ENV[sel.env]||ENV.deep;
        const fdk=fe.dk;
        const fac=fe.acc||T.rose;
        const ftc=fe.txt;
        const fmc=fdk?"rgba(250,244,238,.9)":"rgba(26,8,32,.8)";
        const fpc=fdk?"rgba(250,244,238,.85)":"rgba(26,8,32,.75)";
        const flc=fdk?"rgba(250,244,238,.85)":"rgba(26,8,32,.75)";
        const fobg=fe.bg==="#A05025"?"#5A2A10":fe.bg==="#2D0B38"?"#1A0520":fdk?"#080312":"#E8E2DB";
        return <div style={{background:fobg,padding:"24px 0 48px",animation:"fadeIn .4s ease"}}>
        <DarkCard bg={fe.bg} markOp={fdk?.08:.05}>
          <div data-h="" onClick={()=>sel.bespoke?go("browse"):go("detail")} style={{fontFamily:D.J,fontSize:12,fontWeight:500,letterSpacing:".14em",textTransform:"uppercase",color:fac,cursor:"pointer",marginBottom:22}}>{"\u2190"} {sel.l1} {sel.l2}</div>

          <h2 style={{fontFamily:D.CG,fontSize:"clamp(32px,6vw,48px)",fontWeight:300,lineHeight:1.15,color:ftc,margin:"0 0 12px"}}>{sel.l1} <em style={{color:fac}}>{sel.l2}</em></h2>
          {!sel.bespoke&&<div style={{fontFamily:D.J,fontSize:13,color:fmc,marginBottom:16}}>{sel.when} · {sel.cap}{/\d+$/.test(sel.cap)?" seats":""} · {sel.dur}{sel.fx?" · "+sel.price:""}</div>}
          <div style={{display:"flex",gap:8,marginBottom:16,alignItems:"center"}}><div style={{width:8,height:8,borderRadius:"50%",background:fac,opacity:formStep>=1?1:.3,transition:"opacity .3s"}}/><div style={{width:20,height:"1px",background:fac,opacity:.2}}/><div style={{width:8,height:8,borderRadius:"50%",background:fac,opacity:formStep>=2?1:.2,transition:"opacity .3s"}}/></div>
          <div style={{fontFamily:D.CG,fontSize:16,fontWeight:400,fontStyle:"italic",color:fpc,marginBottom:14,lineHeight:1.6}}>{sel.bespoke?"Tell us about the occasion.":"The host places every seat."}</div>
          <Field dk={fdk} label="Name" placeholder="" value={fm.name} onChange={e=>{up("name",e.target.value);setError("");}}/>
          <Field dk={fdk} label="Email" type="email" placeholder="" value={fm.email} onChange={e=>{up("email",e.target.value);setError("");}}/>
          {formStep===1&&fm.name&&fm.email&&<div style={{marginTop:16}}>{sel.wh&&<div style={{fontFamily:D.J,fontSize:13,fontWeight:400,fontStyle:"italic",color:fpc,marginBottom:10,lineHeight:1.65}}>{sel.wh}</div>}<span data-h="" onClick={()=>setFormStep(2)} style={{cursor:"pointer",fontFamily:D.J,fontSize:12,fontWeight:500,letterSpacing:".12em",textTransform:"uppercase",color:fac,borderBottom:`1.5px solid ${fac}`,paddingBottom:4}}>Continue</span></div>}
          {formStep>=2&&<Field dk={fdk} label="Phone" type="tel" placeholder="" value={fm.phone} onChange={e=>{up("phone",e.target.value);setError("");}}/>}{formStep>=2&&sel.fx&&<div ref={step2Ref}><Field dk={fdk} label="Attending" value={fm.attending} onChange={e=>up("attending",e.target.value)} options={["Alone","With a guest"]} half/><DietaryPills dk={fdk} value={fm.dietary} other={fm.dietaryOther} onToggle={toggleDiet} onOther={e=>up("dietaryOther",e.target.value)}/>{fm.attending==="With a guest"&&<div style={{marginTop:8,paddingTop:16,borderTop:`1px solid ${fdk?"rgba(201,149,108,.12)":"rgba(26,8,32,.06)"}`}}><div style={{fontFamily:D.CG,fontSize:16,fontWeight:400,fontStyle:"italic",color:fpc,marginBottom:14,lineHeight:1.6}}>Your guest is also our guest.</div><Field dk={fdk} label="Guest name" placeholder="" value={fm.guestName} onChange={e=>up("guestName",e.target.value)}/><Field dk={fdk} label="Guest email" type="email" placeholder="" value={fm.guestEmail} onChange={e=>up("guestEmail",e.target.value)} half/><Field dk={fdk} label="Guest phone" type="tel" placeholder="" value={fm.guestPhone} onChange={e=>up("guestPhone",e.target.value)} half/><DietaryPills dk={fdk} value={fm.guestDietary} other={fm.guestDietaryOther} onToggle={toggleGuestDiet} onOther={e=>up("guestDietaryOther",e.target.value)}/></div>}</div>}
          {formStep>=2&&!sel.fx&&!sel.bespoke&&<><Field dk={fdk} label="Departing from" placeholder="" value={fm.city} onChange={e=>up("city",e.target.value)}/><Field dk={fdk} label="Travelling" value={fm.guests} onChange={e=>up("guests",e.target.value)} options={["1","2"]} half/><Field dk={fdk} label="Room" placeholder="Single or double" value={fm.roomPref} onChange={e=>up("roomPref",e.target.value)} half/><DietaryPills dk={fdk} value={fm.dietary} other={fm.dietaryOther} onToggle={toggleDiet} onOther={e=>up("dietaryOther",e.target.value)}/>{fm.guests==="2"&&<div style={{marginTop:8,paddingTop:16,borderTop:`1px solid ${fdk?"rgba(201,149,108,.12)":"rgba(26,8,32,.06)"}`}}><div style={{fontFamily:D.CG,fontSize:16,fontWeight:400,fontStyle:"italic",color:fpc,marginBottom:14,lineHeight:1.6}}>Your guest is also our guest.</div><Field dk={fdk} label="Guest name" placeholder="" value={fm.guestName} onChange={e=>up("guestName",e.target.value)}/><Field dk={fdk} label="Guest email" type="email" placeholder="" value={fm.guestEmail} onChange={e=>up("guestEmail",e.target.value)} half/><Field dk={fdk} label="Guest phone" type="tel" placeholder="" value={fm.guestPhone} onChange={e=>up("guestPhone",e.target.value)} half/><DietaryPills dk={fdk} value={fm.guestDietary} other={fm.guestDietaryOther} onToggle={toggleGuestDiet} onOther={e=>up("guestDietaryOther",e.target.value)}/></div>}<Wh dk={fdk}> Pricing follows.</Wh></>}
          {formStep>=2&&sel.bespoke&&<><Field dk={fdk} label="Timing" placeholder="" value={fm.timing} onChange={e=>up("timing",e.target.value)}/><Field dk={fdk} label="Guest count" placeholder="" value={fm.guestCount} onChange={e=>up("guestCount",e.target.value)} half/><Field dk={fdk} label="Occasion" placeholder="" value={fm.occasion} onChange={e=>up("occasion",e.target.value)} half/><Field dk={fdk} label="Location" placeholder="" value={fm.locationPref} onChange={e=>up("locationPref",e.target.value)}/><Wh dk={fdk}>The host replies within 48 hours.</Wh></>}
          {formStep>=2&&<><div style={{marginTop:20}}/>{sel.fx&&<div style={{fontFamily:D.CG,fontSize:26,fontWeight:300,color:ftc,marginBottom:4}}>{sel.price}{fm.attending==="With a guest"?<span style={{fontSize:16,fontWeight:400,opacity:.7}}> each</span>:""}</div>}{sel.fx&&fm.attending==="With a guest"&&<div style={{fontFamily:D.J,fontSize:14,fontWeight:400,color:fmc,marginBottom:4}}>Two places · {sel.price} × 2</div>}{sel.fx&&<div style={{fontFamily:D.J,fontSize:13,color:fpc,marginBottom:14}}>{fm.attending==="With a guest"?"Both places confirmed immediately.":"Your place is confirmed immediately."}</div>}{!sel.fx&&!sel.bespoke&&<div style={{fontFamily:D.J,fontSize:13,color:fpc,marginBottom:14}}>The host confirms your place within 48 hours.</div>}{sel.bespoke&&<div style={{fontFamily:D.J,fontSize:13,color:fpc,marginBottom:14}}>The host replies within 48 hours.</div>}{error&&<div style={{fontFamily:D.J,fontSize:13,color:T.copper,marginBottom:14,padding:8,border:`1px solid rgba(160,80,37,.2)`,background:fdk?"rgba(160,80,37,.1)":"rgba(160,80,37,.05)"}}>{error}</div>}<CTA ac={fac} dk={fdk} onClick={submit} disabled={!canSubmit||sending} full>{sending?<span style={{animation:"pulse 1.2s infinite"}}>Confirming</span>:(sel.bespoke?"Proceed privately":sel.fx?"Confirm and pay":"Confirm your place")}</CTA></>}
          {formStep>=2&&<div style={{marginTop:12}}><div style={{display:"flex",alignItems:"center",gap:6}}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={fdk?"rgba(250,244,238,.8)":"rgba(26,8,32,.5)"} strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            <span style={{fontFamily:D.J,fontSize:12,color:flc}}>{sel.fx?"Secure payment via Stripe. 14-day cancellation.":sel.bespoke?"No payment now.":"No payment now. 30-day cancellation."}</span>
          </div></div>}
        </DarkCard>
      </div>})()}

      {view==="confirmed"&&sel&&(()=>{
        const ce=ENV[sel.env]||ENV.deep;
        const cdk=ce.dk;
        const cac=ce.acc||T.rose;
        const ctc=ce.txt;
        const cmc=cdk?"rgba(250,244,238,.9)":"rgba(26,8,32,.8)";
        const csc=cdk?"rgba(250,244,238,.92)":"rgba(26,8,32,.85)";
        const cobg=ce.bg==="#A05025"?"#5A2A10":ce.bg==="#2D0B38"?"#1A0520":cdk?"#080312":"#E8E2DB";
        return <div style={{background:cobg,padding:"24px 0 48px",animation:"fadeIn .4s ease"}}>
        <DarkCard bg={ce.bg} markOp={cdk?.08:.05}>
          <div style={{textAlign:"center"}}>
            <div style={{width:40,height:40,borderRadius:"50%",border:`2px solid ${cdk?"rgba(201,149,108,.5)":"rgba(26,8,32,.15)"}`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={cac} strokeWidth="1.5" style={{animation:"checkIn .5s cubic-bezier(.34,1.56,.64,1) .2s both"}}><polyline points="20 6 9 17 4 12"/></svg></div>
            <div style={{fontFamily:D.J,fontSize:12,fontWeight:500,letterSpacing:".16em",textTransform:"uppercase",color:cac,marginBottom:8}}>{sel.bespoke?"Received":sel.fx?"Place confirmed":"Submitted"}</div>
            <h2 style={{fontFamily:D.CG,fontSize:"clamp(32px,6vw,48px)",fontWeight:300,lineHeight:1.15,color:ctc,margin:"0 0 12px"}}>{sel.l1} <em style={{color:cac}}>{sel.l2}</em></h2>
            {!sel.bespoke&&<div style={{fontFamily:D.J,fontSize:12,color:cmc,marginBottom:24}}>{sel.when} · {sel.cap}{/\d+$/.test(sel.cap)?" seats":""}</div>}
            <div style={{width:"40px",height:"1px",background:cac,opacity:.35,margin:"16px auto"}}/>
            <div style={{textAlign:"left",marginTop:14}}>
                {(sel.bespoke?["The host replies within 48 hours.","Pricing and structure follow.","Nothing moves until you say."]:sel.fx?["Greeted by name at the door.","A portrait of the room before you arrive.","Confirmation within the hour.","Everything else at the right moment."]:["Availability and pricing within 48 hours.","A payment link by return.","Portraits of everyone in the room.","The host handles everything from there."]).map((s,i)=><div key={i} style={{display:"flex",gap:9,marginBottom:8,alignItems:"flex-start"}}><span style={{fontFamily:D.CG,fontSize:15,fontStyle:"italic",color:cac,opacity:.7,flexShrink:0,minWidth:14,textAlign:"right"}}>{i+1}</span><span style={{fontFamily:D.J,fontSize:14,fontWeight:400,lineHeight:1.75,color:csc}}>{s}</span></div>)}
            </div>
            <div style={{fontFamily:D.CG,fontSize:16,fontWeight:300,fontStyle:"italic",color:cdk?"rgba(250,244,238,.85)":"rgba(26,8,32,.7)",maxWidth:"24ch",margin:"48px auto 16px",lineHeight:1.6}}>You are part of the room now</div>
            <div style={{fontFamily:D.J,fontSize:12,color:cdk?"rgba(250,244,238,.65)":"rgba(26,8,32,.5)",marginTop:8,marginBottom:28,lineHeight:1.65}}>Tell someone who should be in this room.</div>
            <div style={{marginTop:12}}><CTA ac={cac} dk={cdk} onClick={()=>{setSel(null);reset();go("browse");}}>The Programme</CTA></div>

            {idx>=0&&<div style={{marginTop:24,paddingTop:18,borderTop:`1px solid ${cdk?"rgba(201,149,108,.15)":"rgba(26,8,32,.08)"}`,textAlign:"left"}}>
                {F.filter(x=>x.id!==sel.id&&x.sec!==sel.sec).concat(F.filter(x=>x.id!==sel.id&&x.sec===sel.sec)).slice(0,3).map((f,i)=>(<div key={i} onClick={()=>{reset();go("detail",f);}} data-h="" style={{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderTop:i?`0.5px solid ${cdk?"rgba(201,149,108,.06)":"rgba(26,8,32,.04)"}`:"none"}}><div><div style={{fontFamily:D.CG,fontSize:17,fontWeight:400,color:ctc}}>{f.l1} <em style={{color:cac}}>{f.l2}</em></div><div style={{fontFamily:D.J,fontSize:11,color:cdk?"rgba(250,244,238,.85)":"rgba(26,8,32,.7)",marginTop:4}}>{f.when} · {f.cap} · {f.price}</div></div><span style={{fontFamily:D.J,fontSize:14,color:cac}}>{"\u2192"}</span></div>))}
            </div>}
          </div>
        </DarkCard>
      </div>})()}
    </div>
  );
}
