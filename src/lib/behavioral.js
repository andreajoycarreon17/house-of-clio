/**
 * THE HOUSE OF CLIO — Behavioral Tracking & Recommendations
 *
 * Lightweight client-side logic for:
 *   - Tracking which journal articles a visitor has viewed
 *   - Recommending articles based on category affinity and recency
 *
 * All data is stored in sessionStorage only — no cookies, no server calls.
 */

const STORAGE_KEY = "clio_journal_views";
const MAX_HISTORY = 20;

/* ─── Storage helpers ─────────────────────────────────────── */

function readHistory() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function writeHistory(history) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch {
    // sessionStorage unavailable — silently skip
  }
}

/* ─── Public API ──────────────────────────────────────────── */

/**
 * Record that the visitor viewed a journal article.
 * @param {string} slug     - Article slug
 * @param {string} category - Article tag / category
 */
export function trackPageView(slug, category) {
  if (typeof window === "undefined") return;

  const history = readHistory();

  // Remove existing entry for this slug so we can re-insert at front
  const filtered = history.filter((entry) => entry.slug !== slug);

  filtered.unshift({ slug, category: category || null, ts: Date.now() });

  writeHistory(filtered.slice(0, MAX_HISTORY));

  // Also push to the global clioData object used elsewhere in the app
  if (window.clioData) {
    window.clioData.interactions.push({
      type: "article_view",
      slug,
      category,
      ts: Date.now(),
    });
  }
}

/**
 * Return up to 3 recommended articles for the current article.
 *
 * Priority order:
 *   1. Articles in the same category not yet viewed this session
 *   2. Articles not yet viewed this session (any category)
 *   3. Any articles except the current one (fallback)
 *
 * @param {string} currentSlug  - Slug of the article being read
 * @param {Array}  allArticles  - Full JOURNAL_ARTICLES array
 * @returns {Array} Up to 3 article objects
 */
export function getRecommendations(currentSlug, allArticles) {
  if (!allArticles || allArticles.length === 0) return [];

  const history = readHistory();
  const viewedSlugs = new Set(history.map((e) => e.slug));

  // Determine the current article's category from history
  const currentEntry = history.find((e) => e.slug === currentSlug);
  const currentCategory = currentEntry?.category || null;

  // Exclude the article being read
  const candidates = allArticles.filter((a) => a.slug !== currentSlug);

  // Tier 1 — same category, not yet viewed
  const sameCatUnseen = candidates.filter(
    (a) => !viewedSlugs.has(a.slug) && a.tag === currentCategory
  );

  // Tier 2 — any category, not yet viewed
  const anyUnseen = candidates.filter((a) => !viewedSlugs.has(a.slug));

  // Tier 3 — fallback: everything except current
  const pool =
    sameCatUnseen.length >= 3
      ? sameCatUnseen
      : anyUnseen.length >= 3
      ? anyUnseen
      : candidates;

  // Shuffle deterministically using the current slug as a seed
  // so the same article always shows the same recommendations
  const seed = currentSlug
    .split("")
    .reduce((acc, ch) => acc + ch.charCodeAt(0), 0);

  const shuffled = [...pool].sort((a, b) => {
    const ha = ((a.id + seed) * 2654435761) >>> 0;
    const hb = ((b.id + seed) * 2654435761) >>> 0;
    return ha - hb;
  });

  return shuffled.slice(0, 3);
}
