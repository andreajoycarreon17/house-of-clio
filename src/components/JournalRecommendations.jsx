"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { useSiteChrome } from "@/components/layout/site-context";
import { T, TX, F } from "@/lib/theme";
import { getRecommendations, trackPageView } from "@/lib/behavioral";

/**
 * JournalRecommendations
 *
 * Renders up to 3 recommended articles below the current journal article.
 * Recommendations are derived from session-based behavioral data — same
 * category articles are prioritised, then unseen articles, then any others.
 *
 * Props:
 *   currentSlug  {string}  — slug of the article currently being read
 *   allArticles  {Array}   — full JOURNAL_ARTICLES array
 *   category     {string}  — tag / category of the current article
 */
export function JournalRecommendations({ currentSlug, allArticles, category }) {
  const [recommendations, setRecommendations] = useState([]);
  const { hp } = useSiteChrome();

  useEffect(() => {
    trackPageView(`/journal/${currentSlug}`, category);
    const recs = getRecommendations(currentSlug, allArticles);
    setRecommendations(recs);
  }, [currentSlug, category, allArticles]);

  if (recommendations.length === 0) return null;

  return (
    <section
      className="clio-recommendations"
      aria-label="You might also enjoy"
      style={{
        borderTop: `1px solid rgba(201,149,108,0.12)`,
        paddingTop: "clamp(48px,6vh,72px)",
        paddingBottom: "clamp(48px,6vh,72px)",
      }}
    >
      {/* Section heading */}
      <p
        style={{
          fontFamily: F.body,
          fontSize: "clamp(9px,2vw,10px)",
          fontWeight: 500,
          letterSpacing: ".32em",
          textTransform: "uppercase",
          color: T.rose,
          opacity: 0.6,
          marginBottom: "clamp(28px,4vh,40px)",
        }}
      >
        You might also enjoy
      </p>

      {/* Cards grid */}
      <div className="clio-recommendations__grid">
        {recommendations.map((article) => (
          <article key={article.slug} className="clio-recommendation">
            <Link
              href={`/journal/${article.slug}`}
              {...hp}
              aria-label={`Read: ${article.title}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              {/* Colour swatch from article bg */}
              <div
                className="clio-recommendation__swatch"
                style={{ background: article.bg || T.damson }}
                aria-hidden="true"
              />

              {/* Tag / category */}
              <p className="clio-recommendation__category">
                {article.tag}
              </p>

              {/* Title */}
              <h3 className="clio-recommendation__title">
                {article.title}
              </h3>

              {/* Excerpt */}
              {article.excerpt && (
                <p className="clio-recommendation__excerpt">
                  {article.excerpt}
                </p>
              )}

              {/* Reading time */}
              <p className="clio-recommendation__meta">
                {readingTime(article.body)} · {article.date}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─── Helpers ─────────────────────────────────────────────── */

/** Estimate reading time from the article body array (200 wpm). */
function readingTime(bodyArray) {
  if (!bodyArray || !Array.isArray(bodyArray)) return "5 min read";
  const words = bodyArray
    .filter((line) => line && line.t)
    .map((line) => line.t.trim().split(/\s+/).length)
    .reduce((sum, n) => sum + n, 0);
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}
