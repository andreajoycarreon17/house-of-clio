"use client";

import { useEffect, useState } from "react";
import { F, T, TX } from "@/lib/theme";
import {
  getCompletionStats,
  toggleBookmark,
  isBookmarked,
  getBookmarks,
  getMostViewedSlugs,
} from "@/lib/behavioral";

/* ─── Completion Meter ────────────────────────────────────── */

/**
 * Shows "You've read X of Y essays" with a progress bar.
 * Reads from localStorage via getCompletionStats().
 */
export function JournalCompletionMeter({ allArticles }) {
  const [stats, setStats] = useState({ read: 0, total: 0, pct: 0 });

  useEffect(() => {
    setStats(getCompletionStats(allArticles));
  }, [allArticles]);

  if (stats.total === 0) return null;

  return (
    <div
      aria-label={`You have read ${stats.read} of ${stats.total} essays`}
      style={{
        padding:       "clamp(14px,2vh,20px) clamp(16px,2.5vw,24px)",
        background:    "rgba(201,149,108,.04)",
        border:        `1px solid rgba(201,149,108,.12)`,
        marginBottom:  "clamp(20px,3vh,28px)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
        <span style={{
          fontFamily:    F.body,
          fontSize:      "clamp(9px,1.8vw,10px)",
          fontWeight:    500,
          letterSpacing: ".25em",
          textTransform: "uppercase",
          color:         T.rose,
          opacity:       0.7,
        }}>
          Your reading
        </span>
        <span style={{
          fontFamily: F.body,
          fontSize:   "clamp(10px,1.8vw,11px)",
          fontWeight: 400,
          color:      TX.onDarkMuted,
        }}>
          {stats.read} of {stats.total} essays
        </span>
      </div>

      {/* Progress bar */}
      <div
        role="progressbar"
        aria-valuenow={stats.pct}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{
          height:       3,
          background:   "rgba(201,149,108,.12)",
          borderRadius: 2,
          overflow:     "hidden",
        }}
      >
        <div style={{
          height:           "100%",
          width:            `${stats.pct}%`,
          background:       `linear-gradient(90deg,${T.rose},${T.gold})`,
          borderRadius:     2,
          transition:       "width 0.6s ease",
        }} />
      </div>
    </div>
  );
}

/* ─── Bookmark Button ─────────────────────────────────────── */

/**
 * Bookmark toggle button for a single article card.
 * Reads/writes localStorage via toggleBookmark / isBookmarked.
 */
export function BookmarkButton({ slug, title }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isBookmarked(slug));
  }, [slug]);

  const handleToggle = (e) => {
    e.stopPropagation(); // don't trigger card click
    const next = toggleBookmark(slug);
    setSaved(next);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={saved ? `Remove "${title}" from saved articles` : `Save "${title}" for later`}
      aria-pressed={saved}
      style={{
        background:    "none",
        border:        `1px solid ${saved ? T.rose : "rgba(201,149,108,.2)"}`,
        padding:       "4px 8px",
        cursor:        "none",
        display:       "inline-flex",
        alignItems:    "center",
        gap:           5,
        fontFamily:    F.body,
        fontSize:      "clamp(8px,1.5vw,9px)",
        fontWeight:    500,
        letterSpacing: ".15em",
        textTransform: "uppercase",
        color:         saved ? T.rose : TX.onDarkMuted,
        opacity:       saved ? 1 : 0.55,
        transition:    "border-color .3s,color .3s,opacity .3s",
      }}
    >
      <svg
        aria-hidden="true"
        width="10"
        height="12"
        viewBox="0 0 10 12"
        fill={saved ? T.rose : "none"}
        stroke={saved ? T.rose : "currentColor"}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 1h8v10L5 8 1 11V1z" />
      </svg>
      {saved ? "Saved" : "Save"}
    </button>
  );
}

/* ─── Most-Read Badge ─────────────────────────────────────── */

/**
 * Returns true if the given slug is in the top N most-viewed.
 * Used to conditionally render a "Most read" badge on article cards.
 */
export function useMostRead(slug, n = 3) {
  const [isMostRead, setIsMostRead] = useState(false);

  useEffect(() => {
    const top = getMostViewedSlugs(n);
    setIsMostRead(top.includes(slug));
  }, [slug, n]);

  return isMostRead;
}

/**
 * "Most read" badge — render inside an article card when useMostRead returns true.
 */
export function MostReadBadge() {
  return (
    <span
      aria-label="Most read this week"
      style={{
        display:       "inline-block",
        fontFamily:    F.body,
        fontSize:      "clamp(7px,1.4vw,8px)",
        fontWeight:    500,
        letterSpacing: ".2em",
        textTransform: "uppercase",
        color:         T.gold,
        border:        `1px solid ${T.gold}40`,
        padding:       "2px 7px",
        marginBottom:  6,
      }}
    >
      Most read
    </span>
  );
}

/* ─── Saved Articles Section ──────────────────────────────── */

/**
 * Shows a "Saved Articles" section on the journal index page.
 * Only renders if the visitor has bookmarked at least one article.
 */
export function SavedArticlesSection({ allArticles, onOpen }) {
  const [savedSlugs, setSavedSlugs] = useState([]);

  useEffect(() => {
    setSavedSlugs(getBookmarks());
  }, []);

  const saved = allArticles.filter((a) => savedSlugs.includes(a.slug));
  if (saved.length === 0) return null;

  return (
    <section
      aria-label="Your saved articles"
      style={{
        padding:      "clamp(20px,3vh,28px) clamp(16px,2.5vw,24px)",
        background:   "rgba(201,149,108,.03)",
        border:       `1px solid rgba(201,149,108,.1)`,
        marginBottom: "clamp(24px,3vh,36px)",
      }}
    >
      <div style={{
        fontFamily:    F.body,
        fontSize:      "clamp(9px,1.8vw,10px)",
        fontWeight:    500,
        letterSpacing: ".3em",
        textTransform: "uppercase",
        color:         T.rose,
        opacity:       0.6,
        marginBottom:  14,
      }}>
        Saved · {saved.length}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {saved.map((article) => (
          <button
            key={article.slug}
            type="button"
            onClick={() => onOpen(article)}
            style={{
              background:    "none",
              border:        "none",
              padding:       0,
              cursor:        "none",
              textAlign:     "left",
              display:       "flex",
              alignItems:    "center",
              gap:           10,
            }}
          >
            <div style={{
              width:      3,
              height:     3,
              borderRadius: "50%",
              background: T.rose,
              flexShrink: 0,
              opacity:    0.5,
            }} />
            <span style={{
              fontFamily:  F.display,
              fontSize:    "clamp(13px,2vw,15px)",
              fontWeight:  400,
              fontStyle:   "italic",
              color:       TX.onDarkSub,
              lineHeight:  1.3,
              transition:  "color .3s",
            }}>
              {article.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
