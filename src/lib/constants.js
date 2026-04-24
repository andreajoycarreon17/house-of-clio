/**
 * THE HOUSE OF CLIO — Shared UI Constants
 *
 * Thin re-export layer so components can import ROUTES and CTA
 * from a single place without depending on brand.js or routes.js directly.
 */

import { URLS } from "@/lib/brand";
import {
  BRAND_AKAN_UPPER,
  BRAND_TAGLINE as _TAGLINE,
  BRAND_ENTITY,
  BRAND_COPYRIGHT,
  BRAND_AKAN_NOTE,
} from "@/lib/brand";

export const ROUTES = {
  HOME:       URLS.home,
  ABOUT:      "/about",          // The House
  GATHERINGS: "/gatherings",     // Programme / gatherings listing
  HOUSE:      URLS.house,
  PROGRAMME:  URLS.programme,
  CIRCLE:     URLS.circle,
  FOUNDER:    URLS.founder,
  JOURNAL:    URLS.journal,
  QUESTIONS:  URLS.questions,
  APPLY:      URLS.apply,
  CONTACT:    URLS.contact,
  PRESS:      URLS.press,
  BOOK:       URLS.book,
  CONDUCT:    URLS.conduct,
  STANDARD:   URLS.conduct,     // alias — /the-standard
  PRIVACY:    URLS.privacy,
  TERMS:      URLS.terms,
};

export const CTA = {
  PRIMARY:    "Introduce Yourself",
  SECONDARY:  "Reserve Your Place",
  JOURNAL:    "Read the Journal",
  BOOK:       "Browse the Programme",
};

/** Brand strings for use in components that import from constants */
export const BRAND = {
  FULL:    "The House of Clio",
  HEADER:  BRAND_AKAN_UPPER,    // Akan-script uppercase brand name for nav/footer
  TAGLINE: _TAGLINE,            // "Every brilliant person you have not met yet."
  FOUNDER: "Gigi Brown",        // Founder name for footer nav
  SITE:    "https://www.thehouseofclio.com",
  TWITTER: "@thehouseofclio",
};

/** Copy strings for footer and other static text blocks */
export const COPY = {
  FOOTER_DESCRIPTION: BRAND_ENTITY,
  FOOTER_COPYRIGHT:   BRAND_COPYRIGHT,
  FOOTER_CITIES:      "London and the cities that follow",
  FOOTER_ORIGIN:      BRAND_AKAN_NOTE,
};
