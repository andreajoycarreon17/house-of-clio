import "./globals.css";
import SiteShell from "@/components/layout/site-shell";
import ClioCursor from "@/components/layout/ClioCursor";
import { cormorant, jost } from "@/lib/fonts";
import {
  BRAND_PLAIN,
  BRAND_ENTITY,
  BRAND_TAGLINE,
  BRAND_COPYRIGHT,
  BRAND_AKAN_NOTE,
  ORG_SCHEMA,
} from "@/lib/brand";

/**
 * METADATA CONFIGURATION
 *
 * The template adds " | The House of Clio" automatically.
 * Every page layout.js should have ONLY the page name as title.
 *
 * Correct pattern in each route layout.js:
 *   export const metadata = { title: "Introduce Yourself" };
 *   // Renders as: "Introduce Yourself | The House of Clio"
 *
 * NEVER include the brand name in a page title or it will duplicate.
 */
export const metadata = {
  title: {
    template: "%s | " + BRAND_PLAIN,
    default: BRAND_PLAIN + " | Private Cultural House in London",
  },
  description: BRAND_ENTITY,
  metadataBase: new URL("https://thehouseofclio.com"),
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/favicon.png", color: "#C9956C" },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: BRAND_PLAIN,
    description: BRAND_TAGLINE,
    url: "https://thehouseofclio.com",
    siteName: BRAND_PLAIN,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_PLAIN,
    description: BRAND_TAGLINE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* JSON-LD Organisation schema for SEO and AIEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
        <meta name="google-site-verification" content="wzrmM0jaPyBKtzL2rnUYA8VDIo34eY16T_EsEFDh0yA" />
      </head>
      <body className="min-h-full">
        {/* Skip link for keyboard accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <ClioCursor />
        <SiteShell>{children}</SiteShell>

        {/* AIEO hidden entity paragraph for AI crawlers */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            overflow: "hidden",
            clip: "rect(0,0,0,0)",
            whiteSpace: "nowrap",
          }}
        >
          {/* <p data-speakable="true">{BRAND_ENTITY}</p>
          <p>{BRAND_COPYRIGHT}</p>
          <p>{BRAND_AKAN_NOTE}</p> */}
        </div>
      </body>
    </html>
  );
}
