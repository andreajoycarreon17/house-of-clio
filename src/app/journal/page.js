"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useSiteChrome } from "@/components/layout/site-context";
import { JOURNAL_ARTICLES } from "@/data/formats";
import { getHref } from "@/lib/routes";
import { CM, F, IMG, Lbl, Mx, RealImg, Rv, Sec, T, TX } from "@/components/shared";
import EditorialImage from "@/components/EditorialImage";

export default function JournalPage() {
  const router = useRouter();
  const { hp, setHov, trackInteraction } = useSiteChrome();
  const go = (target) => router.push(getHref(target));
  const articles = JOURNAL_ARTICLES;
  const featuredArticle =
    articles.find((article) => article.slug === "the-seven-minutes-before-you-walk-in") || articles[0];

  const openArticle = (article) => {
    if (!article) return;
    trackInteraction("article_open", article.title || article.tag);
    if (window.clioData) {
      window.clioData.interactions.push({
        type: "article_open",
        id: article.id,
        slug: article.slug,
        ts: Date.now(),
      });
    }
    router.push(`/journal/${article.slug}`);
  };

  return (
    <>
      <Sec bg={T.bg}>
        <Mx w={900}>
          <Rv>
            <Lbl>The Clio Journal</Lbl>
            <h1 style={{ fontFamily: F.display, fontSize: "clamp(36px,5vw,58px)", fontWeight: 400, lineHeight: 0.92, color: T.cream, marginBottom: 16 }}>
              Observations on
              <br />
              <em style={{ color: T.rose }}>the art of meeting well.</em>
            </h1>
            <p style={{ fontFamily: F.body, fontSize: 16, fontWeight: 400, lineHeight: 2, color: TX.onDarkSub, maxWidth: 520, marginBottom: 14 }}>
              Essays on adult friendship, the rooms that change people, and the art of meeting well. Written for people who take the quality of a room as seriously as the quality of what is served in it.
            </p>
            <p data-speakable="true" style={{ fontFamily: F.body, fontSize: 11, fontWeight: 300, lineHeight: 1.9, color: TX.onDarkMuted, maxWidth: 480, marginBottom: 56, letterSpacing: ".02em" }}>
              The Clio Journal is published by the Ɔuse Ɔf Clio, a private cultural house in London. Written by founder Gigi Brown, these essays explore why adult friendship is harder than it should be, how loneliness persists among accomplished people, why most social events fail, and how composed gatherings produce meaningful human connection.
            </p>
          </Rv>

          <Rv delay={50}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => openArticle(featuredArticle)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openArticle(featuredArticle);
                }
              }}
              style={{ maxWidth: 720, margin: "0 auto 4px", cursor: "pointer" }}
            >
              <RealImg src={IMG.dessert} alt="After a composed gathering at the Ɔuse Ɔf Clio. Nobody wanted to leave." h={200} aspect="21/9" />
            </div>
          </Rv>

          <Rv delay={100}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => openArticle(featuredArticle)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openArticle(featuredArticle);
                }
              }}
              style={{ position: "relative", maxWidth: 720, margin: "0 auto 64px", cursor: "pointer" }}
            >
              <div style={{ position: "absolute", inset: -5, border: `2px solid ${T.copper}`, zIndex: 0 }} />
              <div style={{ position: "absolute", inset: -1, border: `1px solid ${T.rose}30`, zIndex: 0 }} />
              <div style={{ position: "relative", zIndex: 1, background: T.cream, boxShadow: "0 20px 80px rgba(0,0,0,.35)" }}>
                <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(0deg,transparent,transparent 33px,rgba(201,149,108,.04) 33px,rgba(201,149,108,.04) 34px)", pointerEvents: "none" }} />
                <div className="book-line" style={{ position: "absolute", left: "clamp(24px,4vw,52px)", top: 0, bottom: 0, width: 1, background: "rgba(192,80,77,.03)", pointerEvents: "none" }} />
                <div style={{ position: "relative", zIndex: 2, padding: "clamp(36px,5vh,52px) clamp(36px,5vw,56px) clamp(36px,5vh,52px) clamp(52px,6vw,72px)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, paddingBottom: 10, borderBottom: `1px solid ${T.copper}0d` }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.copper, opacity: 0.3 }} />
                      <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".35em", textTransform: "uppercase", color: T.copper, opacity: 0.7 }}>On the Door</div>
                    </div>
                    <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".15em", textTransform: "uppercase", color: T.copper, opacity: 0.4 }}>From the Room</div>
                  </div>

                  <h2 style={{ fontFamily: F.display, fontSize: "clamp(24px,3.5vw,34px)", fontWeight: 400, lineHeight: 1.15, color: T.bg, marginBottom: 14 }}>The Seven Minutes Before You Walk In</h2>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 32 }}>
                    <div style={{ width: 36, height: 2, background: `linear-gradient(90deg,${T.copper},${T.gold})` }} />
                    <div style={{ width: 3, height: 3, borderRadius: "50%", background: T.gold, opacity: 0.35 }} />
                  </div>

                  <p style={{ fontFamily: F.body, fontSize: 15, fontWeight: 400, lineHeight: 2.3, color: TX.onLight, marginBottom: 4 }}>I was standing outside the restaurant. I could see candles through the window. I could hear voices. I was seven minutes early and I did not know a single person inside.</p>
                  <div style={{ height: 20 }} />
                  <p style={{ fontFamily: F.body, fontSize: 15, fontWeight: 400, lineHeight: 2.3, color: TX.onLight, marginBottom: 4 }}>My thumb was already on my phone. The text was half written. So sorry, something came up. Will definitely make the next one. The lie was composed before I had even decided to send it.</p>
                  <div style={{ height: 20 }} />
                  <p style={{ fontFamily: F.body, fontSize: 15, fontWeight: 400, lineHeight: 2.3, color: TX.onLight, marginBottom: 4 }}>I have sent that text more times than I have walked through the door. I have cancelled more plans than I have kept. I have told myself I am tired when the truth is I am scared.</p>
                  <div style={{ height: 20 }} />
                  <p style={{ fontFamily: F.body, fontSize: 15, fontWeight: 400, lineHeight: 2.3, color: TX.onLight, marginBottom: 4 }}>Not scared of anything specific. Scared of the seven minutes. The walk from the station. The moment you see the door and your body says: turn around. Go home. Order something. Watch something. Nobody will notice. Nobody will care.</p>
                  <div style={{ height: 20 }} />
                  <p style={{ fontFamily: F.display, fontSize: "clamp(16px,3.2vw,20px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.55, color: T.bg, marginBottom: 4 }}>This is the part of adult social life that nobody talks about. Not the event. Not the room. Not the conversation. The seven minutes before.</p>
                  <div style={{ height: 20 }} />
                  <p style={{ fontFamily: F.body, fontSize: 15, fontWeight: 400, lineHeight: 2.3, color: TX.onLight, marginBottom: 4 }}>I know this feeling because I have felt it a thousand times. The specific, physical vulnerability of being visible without purpose. Standing in a doorway with no one expecting you. No plus one. No name on a list you can see. Just you, your coat, and the question of whether you belong on the other side of that glass.</p>
                  <div style={{ height: 20 }} />
                  <p style={{ fontFamily: F.body, fontSize: 15, fontWeight: 400, lineHeight: 2.3, color: TX.onLight, marginBottom: 4 }}>That night, I went in. A woman at the door said my name before I said anything. She already knew who I was. She walked me to my place and introduced me to the person I was sitting next to. This is James. He spent three years in Oaxaca learning to cook mole from scratch. He is also terrified of being here.</p>
                  <div style={{ height: 20 }} />
                  <p style={{ fontFamily: F.body, fontSize: 15, fontWeight: 400, lineHeight: 2.3, color: TX.onLight, marginBottom: 4 }}>James laughed. I laughed. And the fear evaporated in about four seconds.</p>

                  <div style={{ margin: "32px -8px", padding: "20px 16px", borderLeft: `3px solid ${T.copper}`, background: "rgba(160,80,37,.02)" }}>
                    <p style={{ fontFamily: F.display, fontSize: "clamp(18px,2.5vw,23px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.45, color: T.bg }}>The hand on the door is the price of entry. Everything good happens afterwards.</p>
                  </div>

                  <p style={{ fontFamily: F.body, fontSize: 15, fontWeight: 400, lineHeight: 2.3, color: TX.onLight }}>The Ɔuse is designed around that moment. Not the venue. Not the food. Not the conversation that comes later. The seven minutes before. The walk from the station. The hand on the door. Because every person at the Ɔuse arrived alone the first time. Every single one of them knows what it cost.</p>

                  <div style={{ marginTop: 40, paddingTop: 14, borderTop: `1px solid ${T.copper}12`, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 300, color: TX.onLightMuted, letterSpacing: ".08em" }}>The Clio Journal · July MMXXVI</div>
                    <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 300, color: T.copper, letterSpacing: ".08em" }}>The Ɔuse Ɔf Clio</div>
                  </div>
                </div>
              </div>
            </div>
          </Rv>

          <Rv delay={150}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
              <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color: T.gold, opacity: 0.5 }}>What the Room Has Taught Us</div>
              <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,${T.gold}20,transparent)` }} />
            </div>
          </Rv>

          <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(16px,2vw,24px)" }}>
            {articles.map((article, index) => {
              const isDark = article.dark !== false;
              return (
                <Rv key={article.slug} delay={Math.min(index, 8) * 60}>
                  <div className="card-glow" role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter") e.currentTarget.click(); }} onClick={() => openArticle(article)} style={{ background: T.bg2, border: "1px solid rgba(201,149,108,.06)", cursor: "pointer", overflow: "hidden" }}>
                    <EditorialImage
                      src={`/images/journal/${article.slug}.jpg`}
                      alt={article.title}
                      ratio="3/2"
                    />
                    <div style={{ padding: "20px 20px 24px", textAlign: "center" }}>
                      <div style={{ fontFamily: F.display, fontSize: "clamp(16px,1.6vw,20px)", fontWeight: 400, color: T.cream, lineHeight: 1.3, marginBottom: 10 }}>{article.title}</div>
                      <div style={{ width: 24, height: 1, background: `linear-gradient(90deg,${T.gold}40,${T.rose}20)`, margin: "0 auto 10px" }} />
                      <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 300, color: TX.onDarkMuted, letterSpacing: ".1em" }}>{article.date}</div>
                    </div>
                  </div>
                </Rv>
              );
            })}
          </div>
        </Mx>
      </Sec>

      <section style={{ background: T.bg2, padding: "clamp(32px,4vh,44px) clamp(40px,6vw,80px)", textAlign: "center" }}>
        <Mx w={440}>
          <Rv>
            <div style={{ fontFamily: F.display, fontSize: 18, fontWeight: 400, fontStyle: "italic", color: T.cream, marginBottom: 12 }}>The Journal is written for the House. If this is how you see the world, stay close.</div>
            <div style={{ display: "flex", gap: 8, maxWidth: 340, margin: "0 auto" }}>
              <input type="email" placeholder="Your email" autoComplete="email" aria-label="Email for occasional letters" style={{ flex: 1, background: "rgba(250,244,238,.04)", border: `1px solid ${T.rose}20`, padding: "11px 14px", fontFamily: F.body, fontSize: "clamp(11px,2.5vw,12px)", fontWeight: 300, color: T.cream, outline: "none" }} onFocus={(e) => { e.target.style.borderColor = `${T.rose}50`; }} onBlur={(e) => { e.target.style.borderColor = `${T.rose}20`; }} />
              <button type="button" style={{ background: T.copper, border: "none", padding: "11px 18px", fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".2em", textTransform: "uppercase", color: T.cream, cursor: "pointer", flexShrink: 0 }}>Receive</button>
            </div>
          </Rv>
        </Mx>
      </section>

      <section style={{ background: T.bg, padding: "clamp(24px,3vh,36px) clamp(40px,6vw,80px)" }}>
        <Mx w={560}>
          <Rv>
            <div style={{ display: "flex", justifyContent: "center", gap: "clamp(16px,3vw,32px)", flexWrap: "wrap" }}>
              {[["How the ?use works", "house"], ["The seasonal programme", "programme"], ["The Circle", "circle"], ["Introduce yourself", "apply"], ["Meet the host", "founder"]].map(([text, page]) => (
                <Link
                  key={page}
                  href={getHref(page)}
                  {...hp}
                  style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".22em", textTransform: "uppercase", color: T.cream, opacity: 0.4, cursor: "none", borderBottom: `1px solid ${T.rose}25`, paddingBottom: 3, transition: "color .3s,opacity .3s,border-color .3s", textDecoration: "none" }}
                  onMouseEnter={(e) => { setHov(true); e.target.style.opacity = "1"; e.target.style.color = T.rose; e.target.style.borderBottomColor = T.rose; }}
                  onMouseLeave={(e) => { setHov(false); e.target.style.opacity = ".4"; e.target.style.color = T.cream; e.target.style.borderBottomColor = `${T.rose}25`; }}
                >
                  {text}
                </Link>
              ))}
            </div>
          </Rv>
        </Mx>
      </section>
    </>
  );
}
