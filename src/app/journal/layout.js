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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://thehouseofclio.com" },
    { "@type": "ListItem", position: 2, name: "Journal", item: "https://thehouseofclio.com/journal" },
  ],
};

export const metadata = {
  title: "Journal",
  description: PAGE_META.journal.desc,
  alternates: { canonical: "https://thehouseofclio.com/journal" },
  openGraph: {
    title: "The Clio Journal | Essays on Adult Friendship",
    description: PAGE_META.journal.desc,
    url: "https://thehouseofclio.com/journal",
    images: [{ url: "https://thehouseofclio.com/og-default.png", width: 1200, height: 630 }],
  },
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PILLAR_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
