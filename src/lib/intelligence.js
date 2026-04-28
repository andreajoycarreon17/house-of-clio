/**
 * THE HOUSE OF CLIO — Behavioral Intelligence
 *
 * Engagement scoring, reading velocity, content affinity,
 * UTM attribution, and conversion probability.
 *
 * All data stored in localStorage. No cookies. No server calls.
 * SSR-safe: every function guards typeof window.
 */

/* ─── Storage keys ────────────────────────────────────────── */
const KEY_ENGAGEMENT  = "clio_engagement";
const KEY_UTM         = "clio_utm";
const KEY_AFFINITY    = "clio_affinity";
const KEY_VELOCITY    = "clio_velocity";
const KEY_RETURNING   = "clio_returning";

/* ─── Safe storage helpers ────────────────────────────────── */
function lsGet(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function lsSet(key, value) {
  if (typeof window === "undefined") return;
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* quota exceeded */ }
}

/* ═══════════════════════════════════════════════════════════
   1. ENGAGEMENT SCORING (0–100)
   ═══════════════════════════════════════════════════════════ */

const SCORE_CAPS = {
  pageView:       2,
  scroll50:       5,
  scroll100:      12,
  time30s:        5,
  time2min:       15,
  ctaHover:       5,
  visitApply:     15,
  returning:      12,
  scrollback:     10,
};

export function getEngagementScore() {
  return Math.min(100, lsGet(KEY_ENGAGEMENT, 0));
}

export function addEngagementPoints(event) {
  const pts = SCORE_CAPS[event] ?? 0;
  if (pts === 0) return;
  const current = getEngagementScore();
  lsSet(KEY_ENGAGEMENT, Math.min(100, current + pts));
}

export function resetEngagementScore() {
  lsSet(KEY_ENGAGEMENT, 0);
}

/* ═══════════════════════════════════════════════════════════
   2. READING VELOCITY
   ═══════════════════════════════════════════════════════════ */

/**
 * Start a reading session for an article.
 * @param {number} wordCount
 */
export function startReadingSession(wordCount) {
  if (typeof window === "undefined") return;
  lsSet(KEY_VELOCITY, { wordCount, startTs: Date.now() });
}

/**
 * End a reading session and classify velocity.
 * @returns {"scanning"|"skimming"|"deep"|null}
 */
export function endReadingSession() {
  const session = lsGet(KEY_VELOCITY, null);
  if (!session) return null;

  const elapsed = (Date.now() - session.startTs) / 1000; // seconds
  const wpm = elapsed > 0 ? (session.wordCount / elapsed) * 60 : 0;

  lsSet(KEY_VELOCITY, null);

  if (wpm > 400) return "scanning";
  if (wpm > 200) return "skimming";
  return "deep";
}

/* ═══════════════════════════════════════════════════════════
   3. CONTENT AFFINITY
   ═══════════════════════════════════════════════════════════ */

/**
 * Record a category interaction (view, click, etc.)
 * @param {string} category
 * @param {number} weight  1 = view, 2 = click, 3 = complete
 */
export function recordCategoryInteraction(category, weight = 1) {
  if (!category) return;
  const affinity = lsGet(KEY_AFFINITY, {});
  affinity[category] = (affinity[category] ?? 0) + weight;
  lsSet(KEY_AFFINITY, affinity);
}

/**
 * Return categories sorted by affinity score (highest first).
 * @returns {Array<{category: string, score: number}>}
 */
export function getAffinityRanking() {
  const affinity = lsGet(KEY_AFFINITY, {});
  return Object.entries(affinity)
    .map(([category, score]) => ({ category, score }))
    .sort((a, b) => b.score - a.score);
}

/**
 * Return the top preferred category, or null.
 */
export function getTopCategory() {
  const ranking = getAffinityRanking();
  return ranking.length > 0 ? ranking[0].category : null;
}

/* ═══════════════════════════════════════════════════════════
   4. UTM + ATTRIBUTION
   ═══════════════════════════════════════════════════════════ */

/**
 * Capture UTM params from the current URL and persist to localStorage.
 * Call once on page load. Existing values are NOT overwritten unless
 * new UTM params are present (last-touch model).
 */
export function captureUTM() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const source   = params.get("utm_source");
  const medium   = params.get("utm_medium");
  const campaign = params.get("utm_campaign");
  const term     = params.get("utm_term");
  const content  = params.get("utm_content");

  // Only write if at least one UTM param is present
  if (!source && !medium && !campaign) return;

  const existing = lsGet(KEY_UTM, {});

  // Preserve first-touch attribution separately
  const firstTouch = existing.first_touch || (source || medium || campaign ? {
    utm_source:   source   || null,
    utm_medium:   medium   || null,
    utm_campaign: campaign || null,
    utm_term:     term     || null,
    utm_content:  content  || null,
    referrer:     document.referrer || null,
    captured_at:  new Date().toISOString(),
  } : null);

  // Last-touch always overwrites with current params
  const lastTouch = {
    utm_source:   source   || null,
    utm_medium:   medium   || null,
    utm_campaign: campaign || null,
    utm_term:     term     || null,
    utm_content:  content  || null,
    referrer:     document.referrer || null,
    captured_at:  new Date().toISOString(),
  };

  lsSet(KEY_UTM, {
    ...existing,
    // Flat last-touch fields (backward-compatible)
    utm_source:   source   || existing.utm_source   || null,
    utm_medium:   medium   || existing.utm_medium   || null,
    utm_campaign: campaign || existing.utm_campaign || null,
    utm_term:     term     || existing.utm_term     || null,
    utm_content:  content  || existing.utm_content  || null,
    referrer:     existing.referrer || document.referrer || null,
    captured_at:  existing.captured_at || new Date().toISOString(),
    // Structured first/last touch
    first_touch:  firstTouch,
    last_touch:   lastTouch,
  });
}

/**
 * Capture referrer on first visit (no UTM required).
 */
export function captureReferrer() {
  if (typeof window === "undefined") return;
  const existing = lsGet(KEY_UTM, {});
  if (existing.referrer) return; // already captured
  if (!document.referrer) return;
  lsSet(KEY_UTM, { ...existing, referrer: document.referrer, captured_at: new Date().toISOString() });
}

/**
 * Return stored UTM data for submission.
 * @returns {object}
 */
export function getUTMData() {
  return lsGet(KEY_UTM, {});
}

/* ═══════════════════════════════════════════════════════════
   5. RETURNING VISITOR
   ═══════════════════════════════════════════════════════════ */

/**
 * Mark this visitor as returning and award points.
 * Call once per session.
 */
export function markReturningVisitor() {
  if (typeof window === "undefined") return;
  const visits = lsGet(KEY_RETURNING, 0);
  lsSet(KEY_RETURNING, visits + 1);
  if (visits > 0) {
    addEngagementPoints("returning");
  }
}

export function getVisitCount() {
  return lsGet(KEY_RETURNING, 0);
}

/* ═══════════════════════════════════════════════════════════
   6. CONVERSION PROBABILITY (0–100)
   ═══════════════════════════════════════════════════════════ */

/**
 * Combine all signals into a 0–100 conversion probability score.
 *
 * Weights:
 *   - Engagement score:  50%
 *   - Affinity depth:    20%  (number of distinct categories engaged)
 *   - Visit count:       15%  (capped at 5 visits)
 *   - UTM present:       15%  (intentional arrival)
 */
export function getConversionProbability() {
  const engagement = getEngagementScore();                          // 0–100
  const affinity   = Math.min(5, getAffinityRanking().length) * 20; // 0–100
  const visits     = Math.min(5, getVisitCount()) * 20;             // 0–100
  const utm        = Object.keys(getUTMData()).length > 0 ? 100 : 0; // 0 or 100

  return Math.round(
    engagement * 0.50 +
    affinity   * 0.20 +
    visits     * 0.15 +
    utm        * 0.15
  );
}

/**
 * Return a human-readable confidence label.
 */
export function getConfidenceLabel() {
  const score = getConversionProbability();
  if (score >= 75) return "Strong fit";
  if (score >= 50) return "Good alignment";
  if (score >= 25) return "Early interest";
  return "Just exploring";
}
