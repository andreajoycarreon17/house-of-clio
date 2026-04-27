"use client";

import Link from "next/link";

import { useSiteChrome } from "@/components/layout/site-context";
import { BTN, F, Mx, Rv, Sec, T, TX } from "@/components/shared";
import { BRAND_AKAN } from "@/lib/brand";
import { JOURNAL_ARTICLES } from "@/data/formats";
import { JournalRecommendations } from "@/components/JournalRecommendations";

// Reading time calculation: 200 words per minute
function readingTime(bodyArray) {
  if (!bodyArray || !Array.isArray(bodyArray)) return "5 min read";
  const words = bodyArray
    .filter(line => line && line.t)
    .map(line => line.t.trim().split(/\s+/).length)
    .reduce((sum, count) => sum + count, 0);
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

export default function JournalArticleClient({ article, activeArticle, totalArticles, previous, next, continueReading }) {
  const { hp } = useSiteChrome();

  return (
    <>
      <Sec bg={T.bg} style={{ paddingTop: "clamp(80px,10vh,100px)", paddingBottom: "clamp(28px,3vh,40px)" }}>
        <Mx w={800}>
          <Rv>
            <div style={{ marginBottom: 32 }}>
              <Link href="/journal" {...hp} aria-label="Return to the Journal" style={{ background: "none", border: "none", cursor: "none", fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 400, letterSpacing: ".15em", color: TX.onDarkMuted, padding: 0, marginBottom: 20, transition: "color .3s", textDecoration: "none", display: "inline-block" }}>
                ← The Clio Journal
              </Link>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderTop: `1px solid ${T.rose}10`, borderBottom: `1px solid ${T.rose}10` }}>
                {previous ? (
                  <Link href={`/journal/${previous.slug}`} {...hp} style={{ background: "none", border: "none", cursor: "none", padding: 0, textAlign: "left", maxWidth: "35%", transition: "opacity .3s", textDecoration: "none" }}>
                    <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".25em", textTransform: "uppercase", color: T.rose, opacity: 0.5, marginBottom: 4 }}>← Previous</div>
                    <div style={{ fontFamily: F.display, fontSize: 13, fontWeight: 400, fontStyle: "italic", color: T.cream, opacity: 0.6, lineHeight: 1.3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{previous.title}</div>
                  </Link>
                ) : <div />}

                <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".3em", color: T.gold, opacity: 0.5, flexShrink: 0, padding: "0 12px" }}>
                  {String(activeArticle + 1).padStart(2, "0")} / {String(totalArticles).padStart(2, "0")}
                </div>

                {next ? (
                  <Link href={`/journal/${next.slug}`} {...hp} style={{ background: "none", border: "none", cursor: "none", padding: 0, textAlign: "right", maxWidth: "35%", transition: "opacity .3s", textDecoration: "none" }}>
                    <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".25em", textTransform: "uppercase", color: T.rose, opacity: 0.5, marginBottom: 4 }}>Next →</div>
                    <div style={{ fontFamily: F.display, fontSize: 13, fontWeight: 400, fontStyle: "italic", color: T.cream, opacity: 0.6, lineHeight: 1.3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{next.title}</div>
                  </Link>
                ) : <div />}
              </div>
            </div>
          </Rv>
        </Mx>
      </Sec>

      <section style={{ background: T.bg, paddingBottom: "clamp(60px,8vh,100px)" }}>
        <Mx w={780}>
          <Rv>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: -5, border: `2px solid ${T.copper}`, zIndex: 0 }} />
              <div style={{ position: "absolute", inset: -1, border: `1px solid ${T.rose}30`, zIndex: 0 }} />
              <div style={{ position: "relative", zIndex: 1, background: T.cream, boxShadow: "0 20px 80px rgba(0,0,0,.35)" }}>
                <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(0deg,transparent,transparent 33px,rgba(201,149,108,.04) 33px,rgba(201,149,108,.04) 34px)", pointerEvents: "none" }} />
                <div className="book-line" style={{ position: "absolute", left: "clamp(28px,5vw,56px)", top: 0, bottom: 0, width: 1, background: "rgba(192,80,77,.03)", pointerEvents: "none" }} />
                <div style={{ position: "relative", zIndex: 2, padding: "clamp(28px,4vh,56px) clamp(20px,5vw,64px) clamp(28px,4vh,56px) clamp(28px,6vw,80px)" }}>
                  <article itemScope itemType="https://schema.org/Article" role="article" aria-label={article.title}>
                    <meta itemProp="headline" content={article.title} />
                    <meta itemProp="author" content="Gigi Brown" />
                    <meta itemProp="datePublished" content="2026-06-01" />
                    <div style={{ marginBottom: 44 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, paddingBottom: 12, borderBottom: `1px solid rgba(201,149,108,.08)` }}>
                        <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color: T.copper, opacity: 0.6 }}>{article.tag}</div>
                        <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 400, color: TX.onLightMuted, opacity: 0.5 }}>{article.date}</div>
                      </div>
                      <h2 style={{ fontFamily: F.display, fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, lineHeight: 1.15, color: T.bg, marginBottom: 10 }}>{article.title}</h2>
                      <p style={{ fontFamily: F.body, fontSize: 13, color: "#C9956C", marginBottom: 14, opacity: 0.85 }}>
                        By <a href="/about/gigi-brown" style={{ color: "#C9956C", textDecoration: "none" }}>Gigi Brown</a>
                        {"\u00A0·\u00A0"}
                        <time dateTime={article.publishedAt ? article.publishedAt.slice(0, 10) : "2026-06-01"}>
                          {article.date}
                        </time>
                        {"\u00A0·\u00A0"}{readingTime(article.body)}
                      </p>
                      <div style={{ width: 48, height: 2, background: T.copper }} />
                    </div>
                    {article.body.map((line, index) => {
                      if (!line || !line.t) return <div key={index} style={{ height: 24 }} />;
                      const style = {
                        e: { fontFamily: F.display, fontSize: "clamp(16px,3.2vw,20px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.55, color: T.bg, marginBottom: 4 },
                        b: { fontFamily: F.body, fontSize: 15, fontWeight: 400, lineHeight: 2.3, color: TX.onLight, marginBottom: 2 },
                        l: { fontFamily: F.body, fontSize: 13, fontWeight: 300, lineHeight: 2.3, color: TX.onLightMuted, marginBottom: 2 },
                      }[line.s];
                      return <p key={index} style={style}>{line.t}</p>;
                    })}
                    <div style={{ marginTop: 44, paddingTop: 20, borderTop: `1px solid ${T.copper}30`, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                      <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 300, color: TX.onLightMuted, letterSpacing: ".12em" }}>The Clio Journal · {article.date}</div>
                      <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 300, color: T.copper, letterSpacing: ".1em" }}>{BRAND_AKAN}</div>
                    </div>
                    <div style={{ marginTop: 36, paddingTop: 24, borderTop: `1px solid rgba(201,149,108,.06)`, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20 }}>
                      {previous ? (
                        <Link href={`/journal/${previous.slug}`} {...hp} style={{ background: "none", border: "none", cursor: "none", padding: 0, textAlign: "left", flex: 1, transition: "opacity .3s", textDecoration: "none" }}>
                          <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".3em", textTransform: "uppercase", color: T.copper, opacity: 0.5, marginBottom: 6 }}>← Before This</div>
                          <div style={{ fontFamily: F.display, fontSize: 15, fontWeight: 400, color: TX.onLight, lineHeight: 1.3 }}>{previous.title}</div>
                        </Link>
                      ) : <div style={{ flex: 1 }} />}
                      {next ? (
                        <Link href={`/journal/${next.slug}`} {...hp} style={{ background: "none", border: "none", cursor: "none", padding: 0, textAlign: "right", flex: 1, transition: "opacity .3s", textDecoration: "none" }}>
                          <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".3em", textTransform: "uppercase", color: T.copper, opacity: 0.5, marginBottom: 6 }}>What Follows →</div>
                          <div style={{ fontFamily: F.display, fontSize: 15, fontWeight: 400, color: TX.onLight, lineHeight: 1.3 }}>{next.title}</div>
                        </Link>
                      ) : <div style={{ flex: 1 }} />}
                    </div>

                    {/* Author card */}
                    <div style={{ borderTop: "1px solid rgba(201,149,108,0.2)", paddingTop: 32, marginTop: 48 }}>
                      <p style={{ fontFamily: F.body, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9956C", marginBottom: 12 }}>Written by</p>
                      <p style={{ fontFamily: F.display, fontSize: 20, color: TX.onLight, marginBottom: 12 }}>
                        <a href="/about/gigi-brown" style={{ color: TX.onLight, textDecoration: "none", borderBottom: "1px solid rgba(201,149,108,0.3)" }}>
                          Gigi Brown, founder of The House of Clio
                        </a>
                      </p>
                      <Link href="/gatherings" {...hp} style={{ fontFamily: F.body, fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9956C", textDecoration: "none" }}>
                        View forthcoming gatherings
                      </Link>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </Rv>

          <Rv delay={100}>
            <div style={{ marginTop: 56 }}>
              {/* Behavioural recommendations — same-category articles first */}
              <JournalRecommendations
                currentSlug={article.slug}
                allArticles={JOURNAL_ARTICLES}
                category={article.tag}
              />
            </div>
          </Rv>

          <Rv delay={120}>
            <div style={{ marginTop: 56 }}>
              <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".4em", textTransform: "uppercase", color: T.gold, opacity: 0.45, marginBottom: 20, textAlign: "center" }}>The Conversation Continues</div>
              <div className="g2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "clamp(12px,2vw,20px)" }}>
                {continueReading.map((entry) => (
                  <Link key={entry.slug} href={`/journal/${entry.slug}`} {...hp} className="card-glow" style={{ background: "rgba(250,244,238,.02)", border: `1px solid ${T.rose}10`, padding: "24px 20px", cursor: "pointer", transition: "border-color .4s,background .4s,color .4s,opacity .4s", textDecoration: "none" }}>
                    <div style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".3em", textTransform: "uppercase", color: T.rose, opacity: 0.5, marginBottom: 10 }}>{entry.tag}</div>
                    <div style={{ fontFamily: F.display, fontSize: 17, fontWeight: 400, color: T.cream, lineHeight: 1.3, marginBottom: 10 }}>{entry.title}</div>
                    <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 300, color: TX.onDarkMuted, letterSpacing: ".1em" }}>Enter →</div>
                  </Link>
                ))}
              </div>
            </div>
          </Rv>

          <Rv delay={150}>
            <div style={{ marginTop: 36, display: "flex", justifyContent: "center", gap: "clamp(20px,4vw,44px)", flexWrap: "wrap" }}>
              <Link href="/programme" {...hp} style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".22em", textTransform: "uppercase", color: T.cream, opacity: 0.5, cursor: "none", borderBottom: `1px solid ${T.rose}30`, paddingBottom: 3, transition: "color .3s,opacity .3s,border-color .3s", textDecoration: "none" }}>The rooms these ideas come from</Link>
              <Link href="/the-circle" {...hp} style={{ fontFamily: F.body, fontSize: "clamp(9px,2vw,10px)", fontWeight: 500, letterSpacing: ".22em", textTransform: "uppercase", color: T.cream, opacity: 0.5, cursor: "none", borderBottom: `1px solid ${T.rose}30`, paddingBottom: 3, transition: "color .3s,opacity .3s,border-color .3s", textDecoration: "none" }}>The people in them</Link>
            </div>
          </Rv>

          <Rv delay={200}>
            <div style={{ marginTop: 48, textAlign: "center" }}>
              <div style={{ width: 40, height: 1, background: `linear-gradient(90deg,transparent,${T.gold}40,transparent)`, margin: "0 auto 24px" }} />
              <p style={{ fontFamily: F.display, fontSize: 18, fontWeight: 400, fontStyle: "italic", color: TX.onDarkMuted, marginBottom: 24 }}>The Journal is written for the House. If this is how you see the world, there is a place waiting for you.</p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/apply" {...hp} className="btn-shine" aria-label="Introduce yourself" style={{ ...BTN.primary, textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>Introduce Yourself</Link>
                <Link href="/journal" {...hp} aria-label="Return to the Journal" style={{ background: "none", cursor: "none", border: `1px solid rgba(201,149,108,.15)`, padding: "16px 44px", fontFamily: F.body, fontSize: "clamp(10px,2.2vw,11px)", fontWeight: 400, letterSpacing: ".32em", textTransform: "uppercase", color: T.rose, transition: "border-color .4s,background .4s,color .4s,opacity .4s", opacity: 0.6, textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>Return to the Journal</Link>
              </div>
            </div>
          </Rv>
        </Mx>
      </section>
    </>
  );
}
