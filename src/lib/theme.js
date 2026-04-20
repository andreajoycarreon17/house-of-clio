const T={bg:"#1A0820",bg2:"#0E0113",damson:"#2D0B38",cream:"#FAF4EE",offW:"#F4F0EB",rose:"#C9956C",roseL:"#E8C4A0",gold:"#C9A84C",goldL:"#E2C97E",copper:"#A05025",copperDk:"#0D0118",white:"#FFFFFF",black:"#0C0C0C",err:"#C44040"};

/* --- Text tokens --- */
const TX={onDark:"rgba(250,244,238,.92)",onDarkSub:"rgba(250,244,238,.72)",onDarkMuted:"rgba(250,244,238,.7)",onLight:"#2E1240",onLightSub:"#4A2660",onLightMuted:"#5A3575",onCopper:"rgba(13,1,24,.82)",onCopperSub:"rgba(13,1,24,.6)"};

/* --- Shared typography --- */
const F={display:"'Cormorant Garamond',serif",body:"'Jost',sans-serif"};

/* --- Shared button presets --- */
const BTN={primary:{background:"rgba(201,149,108,.06)",cursor:"none",border:`1px solid rgba(201,149,108,.25)`,padding:"16px 44px",fontFamily:F.body,fontSize:"clamp(10px,2.2vw,11px)",fontWeight:500,letterSpacing:".32em",textTransform:"uppercase",color:T.rose,transition:"border-color .4s,background .4s,color .4s,opacity .4s"},copper:{background:"rgba(13,1,24,.06)",cursor:"none",border:`1px solid rgba(13,1,24,.18)`,padding:"16px 44px",fontFamily:F.body,fontSize:"clamp(10px,2.2vw,11px)",fontWeight:500,letterSpacing:".32em",textTransform:"uppercase",color:T.copperDk,transition:"border-color .4s,background .4s,color .4s,opacity .4s"},deep:{background:"rgba(250,244,238,.06)",cursor:"none",border:`1px solid rgba(250,244,238,.2)`,padding:"16px 44px",fontFamily:F.body,fontSize:"clamp(10px,2.2vw,11px)",fontWeight:500,letterSpacing:".32em",textTransform:"uppercase",color:T.cream,transition:"border-color .4s,background .4s,color .4s,opacity .4s"}};

const CSS=`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Jost:wght@300;400;500&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
body{background:${T.bg2};font-family:'Jost',sans-serif;color:${T.cream};overflow-x:hidden;cursor:none!important;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-feature-settings:'kern' 1,'liga' 1,'calt' 1;font-kerning:normal;}
::selection{background:rgba(201,149,108,.18);color:inherit;}
::placeholder{transition:opacity .4s;}
:focus::placeholder{opacity:.2;}
button,a{cursor:none!important;}
input,textarea,select{cursor:text!important;pointer-events:auto!important;user-select:text!important;-webkit-user-select:text!important;}
.faq-item{transition:background .4s;margin:0 -12px;padding-left:12px!important;padding-right:12px!important;}.faq-item:hover{background:rgba(201,149,108,.015);}
.skip-link{position:absolute;top:-40px;left:0;background:${T.copper};color:${T.copperDk};padding:8px 16px;z-index:99999;font-family:'Jost',sans-serif;font-size:13px;transition:top .2s;}.skip-link:focus{top:0;}
.cr{position:fixed;width:40px;height:40px;border:0.5px solid rgba(201,149,108,.15);border-radius:50%;pointer-events:none;z-index:10000;transform:translate(-50%,-50%);transition:width .6s cubic-bezier(.16,1,.3,1),height .6s cubic-bezier(.16,1,.3,1),border-color .6s,background .6s;}
.cr.h{width:56px;height:56px;border-color:rgba(201,149,108,.3);background:rgba(201,149,108,.02);}
.cd{position:fixed;width:4px;height:4px;background:${T.rose};border-radius:50%;pointer-events:none;z-index:10001;transform:translate(-50%,-50%);}
@keyframes br{0%,100%{opacity:.18}50%{opacity:.4}}
@keyframes od{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(12px,-8px) scale(1.01)}66%{transform:translate(-8px,6px) scale(.99)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes spinSlow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes slideUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
@keyframes pageFade{from{opacity:0}to{opacity:1}}
@keyframes goldShimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
@keyframes curtainReveal{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}
@keyframes lineGrow{from{width:0}to{width:100%}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes preloaderFade{from{opacity:1}to{opacity:0;pointer-events:none;visibility:hidden}}
@keyframes pulseGlow{0%,100%{opacity:.12}50%{opacity:.28}}
@keyframes heroTextReveal{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.scroll-progress{position:fixed;top:0;left:0;height:1px;background:linear-gradient(90deg,${T.gold},${T.rose});z-index:10002;transition:width .1s linear;pointer-events:none;}
.rv{opacity:0;transform:translateY(16px);transition:opacity 1.2s cubic-bezier(.16,1,.3,1),transform 1.2s cubic-bezier(.16,1,.3,1);}.rv.v{opacity:1;transform:translateY(0);}
.hl{transition:border-color .6s cubic-bezier(.16,1,.3,1),box-shadow .6s;}.hl:hover{border-color:rgba(201,149,108,.18)!important;box-shadow:0 2px 20px rgba(0,0,0,.08);}
.card-glow{transition:border-color .6s cubic-bezier(.16,1,.3,1),box-shadow .6s;}.card-glow:hover{box-shadow:0 8px 36px rgba(201,149,108,.06);border-color:rgba(201,149,108,.12)!important;}
.nav-link{position:relative;}.nav-link::after{content:'';position:absolute;bottom:-4px;left:50%;width:0;height:1px;background:${T.rose};transition:width .4s cubic-bezier(.16,1,.3,1),left .4s cubic-bezier(.16,1,.3,1);}.nav-link:hover::after,.nav-link.active::after{width:100%;left:0;}
.page-enter{animation:fadeUp 1s cubic-bezier(.16,1,.3,1) both;}
.page-fade{animation:pageFade .8s ease both;}
.ft-link{transition:color .4s cubic-bezier(.16,1,.3,1),transform .4s cubic-bezier(.16,1,.3,1);display:inline-block;}.ft-link:hover{color:${T.rose}!important;transform:translateX(2px);}
.input-glow:focus{box-shadow:0 4px 24px rgba(201,149,108,.06)!important;border-bottom-color:${T.copper}!important;}
.back-top{position:fixed;bottom:28px;right:28px;width:38px;height:38px;border-radius:50%;background:rgba(160,80,37,.85);border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:900;transition:all .5s cubic-bezier(.16,1,.3,1);opacity:0;transform:translateY(8px);pointer-events:none;box-shadow:0 2px 12px rgba(160,80,37,.2);}
.back-top.show{opacity:.7;transform:translateY(0);pointer-events:auto;}
.back-top:hover{opacity:1;box-shadow:0 4px 20px rgba(160,80,37,.3);}
.btn-shine{position:relative;overflow:hidden;}.btn-shine::after{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(201,149,108,.06),transparent);transition:left .8s cubic-bezier(.16,1,.3,1);}.btn-shine:hover::after{left:100%;}
.btn-magnetic{transition:transform .4s cubic-bezier(.16,1,.3,1),box-shadow .4s;}
.gold-line{height:1px;background:linear-gradient(90deg,transparent,${T.gold}40,transparent);animation:none;}.gold-line.v{animation:lineGrow 1.4s cubic-bezier(.16,1,.3,1) both;}
.gold-shimmer{background:linear-gradient(90deg,transparent 0%,${T.gold}30 25%,${T.rose}20 50%,${T.gold}30 75%,transparent 100%);background-size:200% 100%;animation:goldShimmer 5s ease infinite;}
.img-curtain{clip-path:inset(0 100% 0 0);transition:clip-path 1.4s cubic-bezier(.16,1,.3,1);}.img-curtain.v{clip-path:inset(0 0 0 0);}
.hero-text-line{opacity:0;transform:translateY(20px);transition:opacity 1s cubic-bezier(.16,1,.3,1),transform 1s cubic-bezier(.16,1,.3,1);}
.hero-text-line.v{opacity:1;transform:translateY(0);}
.section-fade{opacity:0;transform:translateY(28px);transition:opacity 1.4s cubic-bezier(.16,1,.3,1),transform 1.4s cubic-bezier(.16,1,.3,1);}.section-fade.v{opacity:1;transform:translateY(0);}
.parallax-slow{transition:transform .1s linear;}
.preloader{position:fixed;inset:0;z-index:99999;background:${T.bg2};display:flex;flex-direction:column;align-items:center;justify-content:center;}
.preloader.done{animation:preloaderFade .6s ease forwards;pointer-events:none;}
.preloader-mark{animation:pulseGlow 2s ease-in-out infinite;}
.preloader-line{width:60px;height:1px;background:linear-gradient(90deg,transparent,${T.rose},transparent);margin-top:20px;opacity:.4;}
.nav-smart{transition:transform .4s cubic-bezier(.16,1,.3,1),background .3s;}.nav-smart.hidden{transform:translateY(-100%);}
.hover-glow{position:relative;overflow:hidden;}.hover-glow::before{content:'';position:absolute;width:160px;height:160px;border-radius:50%;background:radial-gradient(circle,rgba(201,149,108,.04),transparent 70%);pointer-events:none;opacity:0;transition:opacity .5s;transform:translate(-50%,-50%);z-index:1;}.hover-glow:hover::before{opacity:1;}
.quote-float{transition:transform 1.6s cubic-bezier(.16,1,.3,1),opacity 1.2s;opacity:0;transform:translateY(16px);}.quote-float.v{opacity:1;transform:translateY(0);}
input::placeholder,textarea::placeholder{color:#8A6CA0;font-style:italic;font-weight:300;opacity:.7;}
input:focus,textarea:focus{outline:none;}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:0.01ms!important;animation-iteration-count:1!important;transition-duration:0.01ms!important;scroll-behavior:auto!important;}.rv{opacity:1!important;transform:none!important;transition:none!important;}.rv.v{opacity:1;transform:none;}}
button:focus-visible,a:focus-visible,input:focus-visible,textarea:focus-visible{outline:1.5px solid rgba(201,168,76,.5);outline-offset:4px;border-radius:2px;}
@media(max-width:768px){body{font-size:16px;cursor:auto!important;}.cr,.cd{display:none!important;}section{padding-left:clamp(20px,5vw,40px)!important;padding-right:clamp(20px,5vw,40px)!important;}h1{font-size:clamp(28px,7vw,44px)!important;}h2{font-size:clamp(24px,5.5vw,36px)!important;}.carousel-btn{width:48px;height:48px;min-width:48px;min-height:48px;}button,a{min-height:44px;min-width:44px;}.nav-smart.hidden{transform:none;}footer nav button{min-height:40px;padding:10px 6px!important;}footer .ft-link{padding:8px 4px!important;min-height:40px;}.card-glow{-webkit-tap-highlight-color:rgba(201,149,108,.1);}.card-glow>*:not(.mark-layer){position:relative;z-index:1;}.book-line{display:none!important;}.book-spine{display:none!important;}.book-border{border-right:none!important;}}
@media(max-width:480px){nav{height:60px!important;padding:0 20px!important;}}
.g1{grid-template-columns:1fr;}
@media(min-width:769px){.g1{grid-template-columns:auto 1fr;}}
.g2{display:grid;grid-template-columns:repeat(2,1fr);gap:clamp(10px,1.5vw,18px);}
.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(10px,1.5vw,18px);}
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(10px,1.5vw,18px);}
@media(max-width:768px){.g1,.g2,.g3,.g4{grid-template-columns:1fr!important;gap:12px!important;}.desk-nav{display:none!important;}.mob-btn{display:flex!important;flex-direction:column;gap:5px;}.hero-mark svg{width:120px!important;height:120px!important;}.nav-ci{display:none!important;}.back-top{bottom:16px;right:16px;width:40px;height:40px;}[style*="columns"]{columns:1!important;}[style*="columnGap"]{column-gap:0!important;}[style*="gridTemplateColumns: repeat(5"],[style*="gridTemplateColumns:repeat(5"]{grid-template-columns:repeat(2,1fr)!important;}[style*="gridTemplateColumns: repeat(3"],[style*="gridTemplateColumns:repeat(3"]{grid-template-columns:1fr!important;}[style*="padding: 56px 64px"],[style*="padding:56px 64px"]{padding:28px 20px 28px 28px!important;}footer{padding:48px 20px 32px!important;}}
@media(max-width:480px){.g1,.g2,.g3,.g4{gap:8px!important;}h1{margin-bottom:12px!important;}section{padding-top:clamp(20px,3vh,40px)!important;padding-bottom:clamp(20px,3vh,40px)!important;}[style*="gridTemplateColumns: repeat(5"],[style*="gridTemplateColumns:repeat(5"]{grid-template-columns:1fr!important;}}
@media(min-width:769px){.mob-btn{display:none!important;}}

/* === ENTERPRISE CSS === */
@media print{nav,.scroll-progress,.cr,.cd,.preloader,.back-top,footer button,.mob-btn{display:none!important;}body{background:#fff!important;color:#1A0820!important;cursor:auto!important;}*{box-shadow:none!important;text-shadow:none!important;}section{break-inside:avoid;}a{text-decoration:underline;color:#1A0820!important;}img{max-width:100%!important;}}
@media(pointer:coarse){*{cursor:auto!important;}.cr,.cd{display:none!important;}}
.scroll-progress{will-change:width;}
img{max-width:100%;height:auto;}
.img-curtain img{content-visibility:visible!important;}

/* === USER PREFERENCE SUPPORT === */

/* Dark mode is the default. Light mode users: brand stays dark, we soften transitions */
@media(prefers-color-scheme:light){
  .preloader{background:#0E0113!important;}
   body{color-scheme:dark;}
}

/* High contrast. boost text opacity, strengthen borders */
@media(prefers-contrast:more){
  *{border-color:currentColor!important;}
  .rv{opacity:1!important;transform:none!important;}
  nav{background:rgba(14,1,19,.98)!important;border-bottom:1px solid rgba(201,149,108,.3)!important;}
  button,a{text-decoration:underline!important;}
  h1,h2,h3{color:${T.cream}!important;}
}

/* Forced colors. Windows High Contrast */
@media(forced-colors:active){
  *{border-color:CanvasText!important;}
  button,a{color:LinkText!important;}
  svg{fill:CanvasText;}
  .cr,.cd,.scroll-progress,.preloader{display:none!important;}
}

/* Reduced transparency. kill blur effects */
@media(prefers-reduced-transparency:reduce){
  nav{backdrop-filter:none!important;background:rgba(14,1,19,.99)!important;}
  .preloader{backdrop-filter:none!important;}
}

/* Text scaling. respect user font size */
html{-webkit-text-size-adjust:100%;text-size-adjust:100%;}

/* Save data. skip decorative animations */
@media(prefers-reduced-data:reduce){
  .rv{opacity:1!important;transform:none!important;transition:none!important;}
  .scroll-progress,.cr,.cd{display:none!important;}
  img{content-visibility:auto;}
}

/* Selection styling. brand-consistent */
::-moz-selection{background:rgba(201,149,108,.18);color:inherit;}

/* Typography polish. Japanese-informed spacing */
a,button{text-underline-offset:3px;text-decoration-thickness:1px;}
h1,h2,h3{text-wrap:balance;overflow-wrap:break-word;hyphens:manual;}
/* Heading scale. enforced hierarchy */
h1{font-weight:300!important;}
h2{font-weight:400!important;}
h3{font-weight:400!important;}

p{text-wrap:pretty;overflow-wrap:break-word;orphans:2;widows:2;}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}

/* Scrollbar. dark themed */
::-webkit-scrollbar{width:3px;height:3px;}
::-webkit-scrollbar-track{background:#0E0113;}
::-webkit-scrollbar-thumb{background:rgba(201,149,108,.15);border-radius:2px;}
::-webkit-scrollbar-thumb:hover{background:rgba(201,149,108,.3);}
html{scrollbar-color:rgba(201,149,108,.15) #0E0113;scrollbar-width:thin;}
`;

export { T, TX, F, BTN, CSS };
