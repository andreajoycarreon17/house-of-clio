import { PAGE_META } from "@/lib/brand";

const PILLAR_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Composed Cultural Journeys for Discerning People",
  dateline: "London, United Kingdom",
  articleSection: "Art of Gathering",
  keywords: "adult friendship London, loneliness accomplished people, social connection London, composed gathering essays",
  author: {
    "@type": "Person",
    "@id": "https://thehouseofclio.com/about/gigi-brown#person",
    name: "Gigi Brown",
  },
  publisher: {
    "@id": "https://thehouseofclio.com/#organization",
    "@type": "Organization",
    name: "The House of Clio",
    logo: { "@type": "ImageObject", url: "https://thehouseofclio.com/images/hoc-mark-v8.png" },
  },
  datePublished: "2026-04-01",
  dateModified: "2026-04-01",
  mainEntityOfPage: "https://thehouseofclio.com/journal",
  image: { "@type": "ImageObject", url: "https://thehouseofclio.com/og/hoc-og-journal.jpg" },
};

export const metadata = {
  title: "Journal",
  description: PAGE_META.journal.desc,
  alternates: { canonical: "https://thehouseofclio.com/journal" },
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PILLAR_SCHEMA) }}
      />
      {children}
    </>
  );
}
