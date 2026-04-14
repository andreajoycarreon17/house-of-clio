"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { T, TX, F, BTN } from "@/lib/theme";
import { IMG } from "@/data/formats";

/* === SHARED COMPONENTS === */
function CI({ size = 80, variant = "dark" }) {
  const c = { dark: { bg: T.bg, s: T.rose, a: T.rose }, copper: { bg: T.copper, s: T.copperDk, a: T.copperDk }, light: { bg: T.offW, s: T.bg, a: T.rose }, damson: { bg: T.damson, s: T.cream, a: T.cream }, deep: { bg: T.damson, s: T.cream, a: T.roseL }, gold: { bg: T.bg, s: T.gold, a: T.gold } }[variant] || { bg: T.bg, s: T.rose, a: T.rose };
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 320 320" fill="none" preserveAspectRatio="xMidYMid meet" style={{ display: "block", flexShrink: 0 }}>
      <circle cx="160" cy="160" r="160" fill={c.bg} />
      <circle cx="160" cy="160" r="153" stroke={c.a} strokeWidth=".5" fill="none" opacity=".18" />
      <circle cx="160" cy="160" r="108" stroke={c.a} strokeWidth="1.8" fill="none" />
      <circle cx="160" cy="160" r="72" stroke={c.a} strokeWidth=".5" fill="none" opacity=".18" />
      {[[160, 63, 160, 46], [257, 160, 274, 160], [160, 257, 160, 274], [63, 160, 46, 160]].map(([x1, y1, x2, y2], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c.a} strokeWidth="2" strokeLinecap="round" />)}
      {[[160, 52], [268, 160], [160, 268], [52, 160]].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="3.5" fill={c.a} opacity=".9" />)}
      <path d="M160,58 L220,214 L100,214 Z" stroke={c.s} strokeWidth="2.5" strokeLinejoin="round" fill="none" />
      <path d="M160,250 L68,130 L252,130 Z" stroke={c.s} strokeWidth="2.5" strokeLinejoin="round" fill="none" />
      <path d="M160,76 C197,110 197,210 160,244 C123,210 123,110 160,76 Z" stroke={c.s} strokeWidth="1.6" fill="none" />
      <path d="M160,110 C179,132 179,188 160,210 C141,188 141,132 160,110 Z" stroke={c.s} strokeWidth=".8" fill="none" opacity=".35" />
      <circle cx="160" cy="160" r="4.5" fill={c.a} opacity=".92" />
      <circle cx="160" cy="160" r="3" fill={c.s} opacity=".9" />
      <circle cx="160" cy="62" r="2.5" fill={c.a} opacity=".85" />
    </svg>
  );
}

function CM({ size = 240 }) {
  // All non-ASCII characters as codepoints — no encoding issues
  const OPEN_O_UPPER = String.fromCharCode(0x0186); // Akan capital O
  const OPEN_O_LOWER = String.fromCharCode(0x0254); // Akan lowercase o
  const MIDDLE_DOT = String.fromCharCode(0x00B7); // middle dot · U+00B7
  const topText = `THE ${OPEN_O_UPPER}USE ${OPEN_O_LOWER}F CLIO`;
  const botText = `EST ${MIDDLE_DOT} MMXXVI`;

  // Stable IDs — no collision risk from size-based suffix
  const gradId = "clio-gradient";
  const pathTop = "clio-path-top";
  const pathBot = "clio-path-bot";
  const textGradId = "clio-text-gradient";

  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 320 320" fill="none">
      <defs>
        <path id={pathTop} d="M 40,160 A 120,120 0 0,1 280,160" />
        <path id={pathBot} d="M 34,160 A 126,126 0 0,0 286,160" />
        {/* Gradient for geometric paths */}
        <linearGradient id={gradId} x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#E8C4A0" />
          <stop offset="45%" stopColor="#C9956C" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
        {/* Gradient for circular text */}
        <linearGradient id={textGradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E8C4A0" />
          <stop offset="50%" stopColor="#C9956C" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
      </defs>

      {/* Background */}
      <circle cx="160" cy="160" r="160" fill={T.bg} />

      {/* Outer decorative rings — improved opacity for mobile */}
      <circle cx="160" cy="160" r="153" stroke="#C9956C" strokeWidth="1" fill="none" opacity=".35" />
      <circle cx="160" cy="160" r="143" stroke="#C9956C" strokeWidth="1" fill="none" opacity=".4" />
      <circle cx="160" cy="160" r="108" stroke="#C9956C" strokeWidth="1.8" fill="none" />
      <circle cx="160" cy="160" r="72" stroke="#C9956C" strokeWidth="1" fill="none" opacity=".35" />

      {/* Cardinal tick marks */}
      {[[160, 63, 160, 46], [257, 160, 274, 160], [160, 257, 160, 274], [63, 160, 46, 160]].map(([x1, y1, x2, y2], i) =>
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C9956C" strokeWidth="2" strokeLinecap="round" />
      )}

      {/* Diagonal tick marks — improved stroke for mobile */}
      {[[234.95, 85.05, 240.61, 79.39], [234.95, 234.95, 240.61, 240.61], [85.05, 234.95, 79.39, 240.61], [85.05, 85.05, 79.39, 79.39]].map(([x1, y1, x2, y2], i) =>
        <line key={`i${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C9956C" strokeWidth="1.2" strokeLinecap="round" opacity=".4" />
      )}

      {/* Cardinal dots */}
      {[[160, 52], [268, 160], [160, 268], [52, 160]].map(([cx, cy], i) =>
        <circle key={i} cx={cx} cy={cy} r="3.5" fill="#C9956C" opacity=".9" />
      )}

      {/* Arrow diamonds */}
      <polygon points="303,156.8 306.2,160 303,163.2 299.8,160" fill="#C9956C" opacity=".6" />
      <polygon points="17,156.8 20.2,160 17,163.2 13.8,160" fill="#C9956C" opacity=".6" />

      {/* Circular text — gradient fill */}
      <text fontFamily="'Cormorant Garamond','Times New Roman',serif" fontSize="11" fontWeight="400" letterSpacing="4.2" fill={`url(#${textGradId})`}>
        <textPath href={`#${pathTop}`} startOffset="50%" textAnchor="middle">{topText}</textPath>
      </text>
      <text fontFamily="'Cormorant Garamond','Times New Roman',serif" fontSize="11" fontWeight="400" letterSpacing="4.2" fill={`url(#${textGradId})`} opacity=".9">
        <textPath href={`#${pathBot}`} startOffset="50%" textAnchor="middle">{botText}</textPath>
      </text>

      {/* Geometric paths — gradient stroke */}
      <path d="M160,58 L220,214 L100,214 Z" stroke={`url(#${gradId})`} strokeWidth="2.5" strokeLinejoin="round" fill="none" />
      <path d="M160,250 L68,130 L252,130 Z" stroke={`url(#${gradId})`} strokeWidth="2.5" strokeLinejoin="round" fill="none" />
      <path d="M160,76 C197,110 197,210 160,244 C123,210 123,110 160,76 Z" stroke={`url(#${gradId})`} strokeWidth="1.6" fill="none" />
      <path d="M160,110 C179,132 179,188 160,210 C141,188 141,132 160,110 Z" stroke="#C9956C" strokeWidth="1.2" fill="none" opacity=".4" />

      {/* Centre dots */}
      <circle cx="160" cy="160" r="4.5" fill="#C9956C" opacity=".92" />
      <circle cx="160" cy="160" r="3" fill="#C9A84C" opacity=".85" />
      <circle cx="160" cy="62" r="2.5" fill="#C9A84C" opacity=".85" />
    </svg>
  );
}

function Orb({ color, size, top, left, delay = 0 }) { return <div style={{ position: "absolute", top, left, width: size, height: size, borderRadius: "50%", filter: "blur(100px)", opacity: .06, background: color, pointerEvents: "none", animation: `od ${24 + delay}s ease-in-out infinite`, animationDelay: `${delay}s` }} />; }
function Rv({ children, delay = 0, style = {} }) { const r = useRef(null); useEffect(() => { const el = r.current; if (!el) return; const rect = el.getBoundingClientRect(); if (rect.top < window.innerHeight && rect.bottom > 0) { el.classList.add('v'); el.style.transitionDuration = '0s'; requestAnimationFrame(() => { el.style.transitionDuration = ''; }); return; } const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('v'); o.unobserve(el); } }, { threshold: .12, rootMargin: '40px' }); o.observe(el); return () => o.disconnect(); }, []); return <div ref={r} className="rv" style={{ transitionDelay: `${delay}ms`, ...style }}>{children}</div>; }
function PersonSilhouette({ size = 100, accent = T.rose }) { return (<div style={{ width: size, height: size, borderRadius: "50%", background: `linear-gradient(135deg,${accent}10,${accent}04)`, display: "flex", alignItems: "center", justifyContent: "center", border: `1.5px solid ${accent}30`, flexShrink: 0 }}><svg aria-hidden="true" width={size * .42} height={size * .42} viewBox="0 0 40 40" fill="none"><circle cx="20" cy="14" r="6.5" stroke={accent} strokeWidth="1.3" fill="none" opacity=".5" /><path d="M7,36 C7,27 13.5,23 20,23 C26.5,23 33,27 33,36" stroke={accent} strokeWidth="1.3" fill="none" opacity=".4" /></svg></div>); }

const Lbl = ({ children, color = T.rose }) => <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color, marginBottom: 28, opacity: .9 }}>{children}</div>;

function MarkLayer({ layer = 1, size = 180, color = "rgba(201,149,108,.06)", style = {} }) {
  const s = size; const v = "0 0 320 320";
  const layers = {
    1: (<svg aria-hidden="true" width={s} height={s} viewBox={v} fill="none"><circle cx="160" cy="160" r="108" stroke={color} strokeWidth="2.5" fill="none" /></svg>),
    2: (<svg aria-hidden="true" width={s} height={s} viewBox={v} fill="none"><path d="M160,58 L220,214 L100,214 Z" stroke={color} strokeWidth="2.5" strokeLinejoin="round" fill="none" /></svg>),
    3: (<svg aria-hidden="true" width={s} height={s} viewBox={v} fill="none"><path d="M160,250 L68,130 L252,130 Z" stroke={color} strokeWidth="2.5" strokeLinejoin="round" fill="none" /></svg>),
    4: (<svg aria-hidden="true" width={s} height={s} viewBox={v} fill="none">{[[160, 63, 160, 36], [267, 160, 294, 160], [160, 257, 160, 284], [53, 160, 26, 160]].map(([x1, y1, x2, y2], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="3" strokeLinecap="round" />)}{[[160, 42], [288, 160], [160, 278], [32, 160]].map(([cx, cy], i) => <circle key={`d${i}`} cx={cx} cy={cy} r="4" fill={color} />)}</svg>),
    5: (<svg aria-hidden="true" width={s} height={s} viewBox={v} fill="none"><path d="M160,76 C197,110 197,210 160,244 C123,210 123,110 160,76 Z" stroke={color} strokeWidth="2.5" fill="none" /></svg>),
    6: (<svg aria-hidden="true" width={s} height={s} viewBox={v} fill="none"><path d="M160,110 C179,132 179,188 160,210 C141,188 141,132 160,110 Z" stroke={color} strokeWidth="2.5" fill="none" /><circle cx="160" cy="160" r="5" fill={color} /></svg>),
    7: (<svg aria-hidden="true" width={s} height={s} viewBox={v} fill="none"><circle cx="160" cy="160" r="108" stroke={color} strokeWidth="1.8" fill="none" /><circle cx="160" cy="160" r="72" stroke={color} strokeWidth="1.2" fill="none" /><circle cx="160" cy="160" r="5" fill={color} /></svg>),
  };
  return <div className="mark-layer" style={{ position: "absolute", top: "8%", right: "6%", pointerEvents: "none", opacity: .5, zIndex: 0, ...style }}>{layers[layer] || null}</div>;
}

const Dv = ({ w = "100%", m = "0", shimmer = false }) => <div className={shimmer ? "gold-shimmer" : ""} style={{ height: 1, width: w, margin: m, background: shimmer ? undefined : `linear-gradient(90deg,${T.rose}60,${T.gold}25,transparent)` }} />;

function GoldLine() { const r = useRef(null); useEffect(() => { const el = r.current; if (!el) return; const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('v'); o.unobserve(el); } }, { threshold: .3 }); o.observe(el); return () => o.disconnect(); }, []); return <div ref={r} className="gold-line" style={{ height: 1, background: `linear-gradient(90deg,transparent,${T.gold}40,transparent)`, margin: "0 auto", maxWidth: 120 }} />; }

function ImgPlace({ h = 280, label = "Photograph", brief = "", aspect }) {
  const r = useRef(null);
  useEffect(() => {
    const el = r.current;
    if (!el) return;
    const reveal = () => requestAnimationFrame(() => el.classList.add('v'));
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) { reveal(); return; }
    if (typeof IntersectionObserver === "undefined") { reveal(); return; }
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { reveal(); o.unobserve(el); } }, { threshold: .1 });
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return (<div ref={r} className="img-curtain" style={{ background: `linear-gradient(155deg,#120618,${T.damson},#0C0310)`, height: aspect ? undefined : h, aspectRatio: aspect || undefined, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "80%", height: "100%", background: `radial-gradient(ellipse,${T.rose}0C,transparent 65%)`, pointerEvents: "none" }} />
    <div style={{ opacity: .15, pointerEvents: "none", filter: `drop-shadow(0 0 40px ${T.rose}25)` }}><CI size={Math.min(h * .35, 90)} variant="dark" /></div>
    <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: `linear-gradient(90deg,transparent,${T.rose}35,transparent)` }} />
    <div style={{ position: "absolute", bottom: 0, left: "10%", right: "10%", height: 1, background: `linear-gradient(90deg,transparent,${T.rose}20,transparent)` }} />
    <div style={{ position: "absolute", bottom: 14, left: 18, right: 18 }}>
      <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".35em", textTransform: "uppercase", color: T.rose, opacity: .7, marginBottom: 3 }}>{label}</div>
      {brief && <div style={{ fontFamily: F.display, fontSize: 11, fontWeight: 400, fontStyle: "italic", color: T.cream, opacity: .3, lineHeight: 1.4 }}>{brief}</div>}
    </div>
  </div>);
}

function RealImg({ src, h = 280, alt = "", aspect, overlay = .15 }) {
  const r = useRef(null);
  const [offset, setOffset] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const el = r.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setVisible(true); return; }
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); o.unobserve(el); }
    }, { threshold: 0, rootMargin: "0px" });
    o.observe(el);
    return () => o.disconnect();
  }, [src]);

  useEffect(() => {
    const f = () => {
      if (!r.current) return;
      const rect = r.current.getBoundingClientRect();
      const pct = (rect.top + rect.height / 2) / window.innerHeight;
      setOffset((pct - .5) * -30);
    };
    window.addEventListener('scroll', f, { passive: true });
    f();
    return () => window.removeEventListener('scroll', f);
  }, []);

  useEffect(() => { setLoaded(false); setFailed(false); }, [src]);

  return (
    <div ref={r} style={{ height: aspect ? undefined : h, aspectRatio: aspect || undefined, position: "relative", overflow: "hidden", background: `linear-gradient(155deg,#120618,${T.damson},#0C0310)`, clipPath: visible ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)", transition: visible ? "clip-path 1.4s cubic-bezier(.16,1,.3,1)" : "none" }}>
      {!failed && (
        <div style={{ position: "absolute", inset: "-20px 0", height: "calc(100% + 40px)", transform: `translateY(${offset}px)`, transition: "transform .1s linear", filter: "saturate(.85) contrast(1.05)" }}>
          <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 900px" loading="eager" onLoad={() => setLoaded(true)} onError={() => setFailed(true)} style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
      )}
      {!failed && <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg,rgba(26,8,32,${overlay}),rgba(26,8,32,${overlay * .6}))`, pointerEvents: "none" }} />}
      {!loaded && !failed && (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 20, height: 20, border: `1.5px solid ${T.rose}30`, borderTop: `1.5px solid ${T.rose}`, borderRadius: "50%", animation: "spinSlow 1s linear infinite" }} />
        </div>
      )}
      {failed && (
        <>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: .15 }}><CI size={Math.min(h * .3, 80)} variant="dark" /></div>
          {alt && <div style={{ position: "absolute", bottom: 14, left: 18, right: 18 }}>
            <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".35em", textTransform: "uppercase", color: T.rose, opacity: .7 }}>Photograph</div>
            <div style={{ fontFamily: F.display, fontSize: 11, fontWeight: 400, fontStyle: "italic", color: T.cream, opacity: .3, lineHeight: 1.4 }}>{alt}</div>
          </div>}
        </>
      )}
    </div>
  );
}

const Pg = ({ children, bg = T.bg2 }) => <main id="main-content" role="main" className="page-fade" style={{ background: bg, minHeight: "100vh", paddingTop: 88 }}>{children}</main>;
const Sec = ({ children, bg = T.bg, id, style = {} }) => <section id={id} style={{ background: bg, padding: "clamp(48px,7vh,88px) clamp(32px,5vw,72px)", position: "relative", overflow: "hidden", ...style }}>{children}</section>;
const Mx = ({ children, w = 1200 }) => <div style={{ maxWidth: w, margin: "0 auto" }}>{children}</div>;

export { T, TX, F, BTN, IMG, CI, CM, Orb, Rv, PersonSilhouette, Lbl, MarkLayer, Dv, GoldLine, ImgPlace, RealImg, Pg, Sec, Mx };
