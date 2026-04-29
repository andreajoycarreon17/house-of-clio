"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useSiteChrome } from "@/components/layout/site-context";
import { JOURNAL_ARTICLES } from "@/data/formats";
import { getHref } from "@/lib/routes";
import { CM, F, IMG, Lbl, Mx, RealImg, Rv, Sec, T, TX } from "@/components/shared";
import EditorialImage from "@/components/EditorialImage";
import { BRAND_AKAN, AKAN_O } from "@/lib/brand";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import {
  JournalCompletionMeter,
  BookmarkButton,
  MostReadBadge,
  SavedArticlesSection,
  useMostRead,
} from "@/components/JournalMeta";

const LAUNCH_UNLOCK_COUNT = 10;

// ArticleCard must be defined OUTSIDE JournalPage so React treats it as a
// stable component identity. Defining it inside causes remount on every render,
// which breaks click handlers and violates the Rules of Hooks (useMostRead).
function ArticleCard({ article, articleIndex, onOpen }) {
  const isMostRead = useMostRead(article.slug);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const publishDate = article.publishedAt ? new Date(article.publishedAt) : null;
  if (publishDate) publishDate.setHours(0, 0, 0, 0);

  const isLocked =
    articleIndex >= LAUNCH_UNLOCK_COUNT &&
    publishDate !== null &&
    publishDate > today;

  const unlockLabel = isLocked && article.publishedAt
    ? `Unlocks ${new Date(article.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long" })}`
    : null;

  return (
    <div
      className="card-glow"
      style={{
        background: T.bg2,
        border:     "1px solid rgba(201,149,108,.06)",
        overflow:   "hidden",
        position:   "relative",
        opacity:    isLocked ? 0.55 : 1,
        transition: "opacity .3s",
      }}
    >
      {isMostRead && !isLocked && (
        <div style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}>
          <MostReadBadge />
        </div>
      )}
      {isLocked && (
        <div style={{
          position:      "absolute",
          top:           8,
          right:         8,
          zIndex:        2,
          fontFamily:    F.body,
          fontSize:      "clamp(7px,1.4vw,8px)",
          fontWeight:    500,
          letterSpacing: ".15em",
          textTransform: "uppercase",
          color:         TX.onDarkMuted,
          background:    "rgba(14,1,19,.8)",
          border:        "1px solid rgba(201,149,108,.15)",
          padding:       "3px 8px",
        }}>
          {unlockLabel}
        </div>
      )}
      <div
        role={isLocked ? undefined : "button"}
        tabIndex={isLocked ? -1 : 0}
        aria-disabled={isLocked}
        onKeyDown={(e) => { if (!isLocked && e.key === "Enter") onOpen(article); }}
        onClick={() => { if (!isLocked) onOpen(article); }}
        style={{ cursor: isLocked ? "default" : "pointer" }}
      >
        <EditorialImage
          src={`/images/journal/${article.slug}.jpg`}
          // src={`/images/journal/hoc_Open-notebook-overhead_2.jpg`}
          alt={article.title}
          ratio="3/2"
        />
        <div style={{ padding: "20px 20px 16px", textAlign: "center" }}>
          <div style={{ fontFamily: F.display, fontSize: "clamp(16px,1.6vw,20px)", fontWeight: 400, color: T.cream, lineHeight: 1.3, marginBottom: 10 }}>{article.title}</div>
          <div style={{ width: 24, height: 1, background: `linear-gradient(90deg,${T.gold}40,${T.rose}20)`, margin: "0 auto 10px" }} />
          <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 300, color: TX.onDarkMuted, letterSpacing: ".1em" }}>{article.date}</div>
        </div>
      </div>
      {!isLocked && (
        <div style={{ padding: "0 20px 16px", display: "flex", justifyContent: "center" }}>
          <BookmarkButton slug={article.slug} title={article.title} />
        </div>
      )}
    </div>
  );
}

export default function JournalPage() {
  const router = useRouter();
  const { hp, setHov, trackInteraction } = useSiteChrome();
  const articles = JOURNAL_ARTICLES;
  const featuredArticle =
    articles.find((article) => article.slug === "the-seven-minutes-before-you-walk-in") || articles[0];

  // Category filter state
  const [activeFilter, setActiveFilter] = useState(null);

  // Build unique category list with counts
  const categories = articles.reduce((acc, a) => {
    if (a.tag) acc[a.tag] = (acc[a.tag] || 0) + 1;
    return acc;
  }, {});

  const filteredArticles = activeFilter
    ? articles.filter((a) => a.tag === activeFilter)
    : articles;

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
    <main id="main-content">
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
              The Clio Journal is published by {BRAND_AKAN}, a private cultural house in London. Written by Gigi Brown, these essays explore why adult friendship is harder than it should be, how loneliness persists among accomplished people, why most social events fail, and how composed gatherings produce meaningful human connection.
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
              <RealImg src={IMG.dessert} alt={`After a composed gathering at ${BRAND_AKAN}. Nobody wanted to leave.`} h={200} aspect="16/9" />
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

                  <p style={{ fontFamily: F.body, fontSize: 15, fontWeight: 400, lineHeight: 2.3, color: TX.onLight }}>The {AKAN_O}use is designed around that moment. Not the venue. Not the food. Not the conversation that comes later. The seven minutes before. The walk from the station. The hand on the door. Because every person at the {AKAN_O}use arrived alone the first time. Every single one of them knows what it cost.</p>

                  <div style={{ marginTop: 40, paddingTop: 14, borderTop: `1px solid ${T.copper}12`, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 300, color: TX.onLightMuted, letterSpacing: ".08em" }}>The Clio Journal · July MMXXVI</div>
                    <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 300, color: T.copper, letterSpacing: ".08em" }}>{BRAND_AKAN}</div>
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

            {/* Completion meter + saved articles */}
            <JournalCompletionMeter allArticles={articles} />
            <SavedArticlesSection allArticles={articles} onOpen={openArticle} />

            {/* Category filters */}
            <div
              role="group"
              aria-label="Filter by category"
              style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}
            >
              <button
                type="button"
                onClick={() => setActiveFilter(null)}
                aria-pressed={activeFilter === null}
                style={{
                  background: activeFilter === null ? `rgba(201,149,108,.12)` : "none",
                  border: `1px solid ${activeFilter === null ? T.rose : "rgba(201,149,108,.2)"}`,
                  padding: "6px 14px",
                  fontFamily: F.body,
                  fontSize: "clamp(9px,1.8vw,10px)",
                  fontWeight: 500,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: activeFilter === null ? T.rose : TX.onDarkMuted,
                  cursor: "none",
                  transition: "border-color .3s,background .3s,color .3s",
                }}
              >
                All ({articles.length})
              </button>
              {Object.entries(categories).map(([cat, count]) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(activeFilter === cat ? null : cat)}
                  aria-pressed={activeFilter === cat}
                  style={{
                    background: activeFilter === cat ? `rgba(201,149,108,.12)` : "none",
                    border: `1px solid ${activeFilter === cat ? T.rose : "rgba(201,149,108,.2)"}`,
                    padding: "6px 14px",
                    fontFamily: F.body,
                    fontSize: "clamp(9px,1.8vw,10px)",
                    fontWeight: 500,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: activeFilter === cat ? T.rose : TX.onDarkMuted,
                    cursor: "none",
                    transition: "border-color .3s,background .3s,color .3s",
                  }}
                >
                  {cat} ({count})
                </button>
              ))}
            </div>
          </Rv>

          <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(16px,2vw,24px)" }}>
            {filteredArticles.map((article, index) => {
              const isDark = article.dark !== false;
              // Use the article's position in the full array for unlock logic,
              // so filtering never accidentally unlocks a future article
              const articleIndex = articles.indexOf(article);
              return (
                <Rv key={article.slug} delay={Math.min(index, 8) * 60}>
                  <ArticleCard article={article} articleIndex={articleIndex} onOpen={openArticle} />
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
            <div style={{ maxWidth: 340, margin: "0 auto" }}>
              <NewsletterSignup variant="dark" />
            </div>
          </Rv>
        </Mx>
      </section>

      <section style={{ background: T.bg, padding: "clamp(24px,3vh,36px) clamp(40px,6vw,80px)" }}>
        <Mx w={560}>
          <Rv>
            <div style={{ display: "flex", justifyContent: "center", gap: "clamp(16px,3vw,32px)", flexWrap: "wrap" }}>
              {[["How the House works", "house"], ["The seasonal programme", "programme"], ["The Circle", "circle"], ["Introduce yourself", "apply"], ["Meet the host", "founder"]].map(([text, page]) => (
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
    </main>
  );
}
