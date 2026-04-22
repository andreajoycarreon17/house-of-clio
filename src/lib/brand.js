// THE HOUSE OF CLIO - Brand Constants
// =========================================================
// Single source of truth for ALL non-ASCII characters.
// Every character is generated at runtime from its hex
// codepoint. Source file is 100% pure ASCII.
// =========================================================

const OPEN_O_UPPER = String.fromCharCode(0x0186); // Capital Open O (Akan)
const OPEN_O_LOWER = String.fromCharCode(0x0254); // Lowercase Open O (Akan)
const POUND_SIGN = String.fromCharCode(0x00A3); // Pound Sign
const MIDDLE_DOT = String.fromCharCode(0x00B7); // Middle Dot
const COPYRIGHT = String.fromCharCode(0x00A9); // Copyright Sign

/* ===== BRAND NAMES ===== */
export const BRAND_AKAN = "The " + OPEN_O_UPPER + "use " + OPEN_O_LOWER + "f Clio";
export const BRAND_AKAN_UPPER = "THE " + OPEN_O_UPPER + "USE " + OPEN_O_LOWER + "F CLIO";
export const BRAND_PLAIN = "The House of Clio";
export const AKAN_O = OPEN_O_UPPER;

/* ===== SAFE CHARACTERS ===== */
export const POUND = POUND_SIGN;
export const DOT = MIDDLE_DOT;
export const COPY = COPYRIGHT;
export const BRAND_EST = "EST " + MIDDLE_DOT + " MMXXVI";

/* ===== PRICE FORMATTER ===== */
export function price(amount, prefix) {
  const formatted = amount.toLocaleString("en-GB");
  if (prefix) return prefix + " " + POUND_SIGN + formatted;
  return POUND_SIGN + formatted;
}

export const PRICES = {
  firstHouse: price(500),
  evening: price(250),
  supperLecture: price(300),
  cityEscapeParis: price(2400, "From"),
  cityEscapeDublin: price(2000, "From"),
  grandJourney: price(4800, "From"),
  annualHouse: price(275),
  returningTable: price(150),
  walk: price(45),
  distanceDay: price(195),
  cultureEvening: price(220),
  ride: price(65),
};

/* ===== ENTITY DESCRIPTIONS ===== */
export const BRAND_ENTITY =
  BRAND_AKAN + " is a private cultural house in London with a seasonal " +
  "programme of twelve formats including composed private dinners, " +
  "supper lectures, cycling journeys, city escapes, and Grand Journeys. " +
  "No fixed premises. No membership fee. Pay-per-gathering. Every guest " +
  "is selected. Every seat is composed. Growth is network-driven through " +
  "member nominations. The Returning Table meets fortnightly. Composed " +
  "by Gigi Brown. London is the first city. Dublin is the second.";

export const BRAND_TAGLINE = "Every brilliant person you have not met yet.";
export const BRAND_COPYRIGHT = COPYRIGHT + " " + BRAND_AKAN + " MMXXVI";
export const BRAND_AKAN_NOTE = "The " + OPEN_O_UPPER + " is drawn from the Akan alphabet of Ghana";

/* ===== PAGE METADATA ===== */
export const PAGE_META = {
  // home uses absolute title (no template) to avoid doubling
  home: { title: BRAND_PLAIN + " | Private Cultural House in London", desc: "A private cultural house in London. Composed private dinners, supper lectures, city escapes, and Grand Journeys. By introduction only." },
  house: { title: "The House | Composed Private Gatherings | " + BRAND_PLAIN, desc: "Before each gathering, a host reads every portrait and decides who sits beside whom. You receive a portrait of every person at your table. London." },
  programme: { title: "The Programme | Seasonal Formats | " + BRAND_PLAIN, desc: "Seven seasonal rooms, three recurring formats, two member-led Societies. Private dinners, supper lectures, cycling journeys, and composed tables. London." },
  circle: { title: "The Circle | " + BRAND_PLAIN, desc: "The first people who said yes. Portraits composed around fascination, not profession. A circle of people who raise the standard of every room they enter." },
  founder: { title: "Gigi Brown | The Host | " + BRAND_PLAIN, desc: "Born in Ghana, based in London. Twenty years composing rooms across three continents. The host of " + BRAND_PLAIN + ". Hospitality and social architecture." },
  journal: { title: "The Clio Journal | Essays on Adult Friendship | " + BRAND_PLAIN, desc: "Why most gatherings fail. How composed rooms create real friendship. Essays on loneliness, social architecture, and belonging. By Gigi Brown." },
  questions: { title: "Questions | " + BRAND_PLAIN, desc: "How to join, what to expect, how people are selected, and why " + BRAND_PLAIN + " is different from a private members club. London." },
  apply: { title: "Introduce Yourself | Apply to Join | " + BRAND_PLAIN, desc: "Tell us who you are and what holds your attention. A person reads every word. Not everyone is accepted. London." },
  contact: { title: "Contact | " + BRAND_PLAIN, desc: "A question about composed gatherings, a thought about joining the circle, or a reason to say hello. A real person reads every message." },
  press: { title: "Press and Media | " + BRAND_PLAIN, desc: "Brand narrative, assets, imagery, story angles, and a direct line to Gigi Brown. Press enquiries welcome." },
  members: { title: "Members | " + BRAND_PLAIN, desc: "The private space for members of " + BRAND_PLAIN + "." },
  privacy: { title: "Privacy Policy | " + BRAND_PLAIN, desc: "Your data belongs to you. We collect only what we need. No advertising cookies. No retargeting. UK GDPR compliant." },
  terms: { title: "Terms of Participation | " + BRAND_PLAIN, desc: "Written in plain English. No membership fee. You pay only for the rooms you attend. Cancel 14 days before any gathering for a full refund." },
  book: { title: "Reserve Your Place | " + BRAND_PLAIN, desc: "Browse the seasonal programme. Reserve your place at a composed gathering, supper lecture, city escape, or journey." },
  conduct: { title: "The Standard | Seven Principles | " + BRAND_PLAIN, desc: "Presence. Curiosity. Generosity. Discretion. Courage. Warmth. Integrity. Protecting every room." },
};

/* ===== CANONICAL URL MAP ===== */
export const URLS = {
  home: "/",
  house: "/the-house",
  programme: "/programme",
  circle: "/the-circle",
  founder: "/founder",
  journal: "/journal",
  questions: "/questions",
  apply: "/apply",
  contact: "/contact",
  press: "/press",
  members: "/members",
  privacy: "/privacy",
  terms: "/terms",
  book: "/book",
  conduct: "/the-standard",
};

/* ===== JSON-LD SCHEMA ===== */
export const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND_PLAIN,
  alternateName: BRAND_AKAN,
  url: "https://thehouseofclio.com",
  logo: "https://thehouseofclio.com/HOC-MuseMark-White.png",
  description: BRAND_ENTITY,
  foundingDate: "2026",
  founder: { "@type": "Person", name: "Gigi Brown", jobTitle: "Host" },
  address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
  sameAs: ["https://instagram.com/thehouseofclio"],
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://thehouseofclio.com/#website",
  name: BRAND_PLAIN,
  url: "https://thehouseofclio.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://thehouseofclio.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

/* ===== BACKWARDS COMPATIBILITY ===== */
// Keeps existing layout.js and page.js imports working
export const META = {
  home: { title: PAGE_META.home.title, desc: PAGE_META.home.desc },
  house: { title: PAGE_META.house.title, desc: PAGE_META.house.desc },
  programme: { title: PAGE_META.programme.title, desc: PAGE_META.programme.desc },
  circle: { title: PAGE_META.circle.title, desc: PAGE_META.circle.desc },
  founder: { title: PAGE_META.founder.title, desc: PAGE_META.founder.desc },
  journal: { title: PAGE_META.journal.title, desc: PAGE_META.journal.desc },
  questions: { title: PAGE_META.questions.title, desc: PAGE_META.questions.desc },
  conduct: { title: PAGE_META.conduct.title, desc: PAGE_META.conduct.desc },
  apply: { title: PAGE_META.apply.title, desc: PAGE_META.apply.desc },
  contact: { title: PAGE_META.contact.title, desc: PAGE_META.contact.desc },
  press: { title: PAGE_META.press.title, desc: PAGE_META.press.desc },
  privacy: { title: PAGE_META.privacy.title, desc: PAGE_META.privacy.desc },
  terms: { title: PAGE_META.terms.title, desc: PAGE_META.terms.desc },
  book: { title: PAGE_META.book.title, desc: PAGE_META.book.desc },
};

export const siteMetadata = {
  metadataBase: new URL("https://thehouseofclio.com"),
  title: {
    default: BRAND_PLAIN,
    template: "%s",
  },
  description: BRAND_ENTITY,
  openGraph: {
    title: BRAND_PLAIN,
    description: BRAND_ENTITY,
    url: "https://thehouseofclio.com",
    siteName: BRAND_PLAIN,
    images: [{ url: "/HOC-MuseMark-White.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_PLAIN,
    description: BRAND_ENTITY,
    images: ["/HOC-MuseMark-White.png"],
  },
};
