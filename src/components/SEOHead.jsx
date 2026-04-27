/**
 * SEOHead
 *
 * In Next.js App Router, <link rel="canonical"> and <meta> tags must be
 * declared via the metadata API (layout.js / page.js exports), not injected
 * as JSX. Next.js deduplicates and hoists them automatically.
 *
 * This file therefore has two exports:
 *
 *   1. buildPageMetadata(page, overrides?)
 *      A helper for page/layout files to generate a full metadata object
 *      including canonical, og:site_name, and twitter:site — call it from
 *      any page's `export const metadata` or `generateMetadata`.
 *
 *   2. SEOHead({ page })
 *      A Server Component that injects only the parts that cannot be
 *      expressed through the metadata API — currently the Speculation Rules
 *      script for instant navigation prerendering.
 *      Canonical / OG / Twitter tags are NOT duplicated here.
 */

import { BRAND } from "@/lib/constants";

const BASE_URL = "https://www.thehouseofclio.com";

/* ─── Speculation Rules payload ──────────────────────────────────────────── */

const SPECULATION_RULES = {
  prerender: [
    {
      where: {
        and: [
          { href_matches: "/*" },
          { not: { href_matches: "/api/*" } },
        ],
      },
      eagerness: "moderate",
    },
  ],
};

/* ─── 1. Metadata helper (use in page.js / layout.js) ───────────────────── */

/**
 * Build a Next.js metadata object for a given page path.
 *
 * Used in page/layout files to generate canonical, og:site_name, twitter:site.
 *
 * Usage in any page or layout:
 *   import { buildPageMetadata } from "@/components/SEOHead";
 *   export const metadata = buildPageMetadata("/journal");
 *   export const metadata = buildPageMetadata("/journal/my-slug", {
 *     title: "My Article | The Clio Journal",
 *     description: "...",
 *     openGraph: { images: [{ url: "..." }] },
 *   });
 *
 * Already applied to:
 *   - src/app/apply/layout.js
 *   - src/app/faq/layout.js
 *   - src/app/about/layout.js
 *   - src/app/circle/layout.js
 *   - src/app/gatherings/layout.js
 *   - src/app/journal/layout.js
 *   - src/app/founder/layout.js
 *   - src/app/about/gigi-brown/layout.js
 *
 * @param {string} page       - Absolute path, e.g. "/journal"
 * @param {object} overrides  - Any valid Next.js Metadata fields
 */
export function buildPageMetadata(page, overrides = {}) {
  const canonical = `${BASE_URL}${page}`;

  return {
    alternates: {
      canonical,
    },
    openGraph: {
      siteName: BRAND.FULL,
      url: canonical,
      ...overrides.openGraph,
    },
    twitter: {
      site: BRAND.TWITTER,
      ...overrides.twitter,
    },
    // Spread remaining overrides last so callers can override anything
    ...overrides,
    // Re-apply nested objects after spread to prevent shallow-merge loss
    openGraph: {
      siteName: BRAND.FULL,
      url: canonical,
      ...overrides.openGraph,
    },
    twitter: {
      site: BRAND.TWITTER,
      ...overrides.twitter,
    },
  };
}

/* ─── 2. SEOHead component (Speculation Rules only) ─────────────────────── */

/**
 * Drop <SEOHead page="/your-path" /> into any Server Component layout or page
 * to inject the Speculation Rules script for that route.
 *
 * Canonical / OG / Twitter are intentionally omitted — use buildPageMetadata
 * or the root layout metadata export for those.
 */
export function SEOHead({ page }) {
  // page prop is kept for forward-compatibility (e.g. per-route rule tuning)
  void page;

  return (
    <script
      type="speculationrules"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(SPECULATION_RULES),
      }}
    />
  );
}
