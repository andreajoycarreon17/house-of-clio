import { PAGE_META } from "@/lib/brand";

const PILLAR_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "The Definitive Guide to Private Dining in London",
  dateline: "London, United Kingdom",
  articleSection: "Private Dining",
  keywords: "private dining London, composed gathering, private dinner London, intimate dining London",
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
  mainEntityOfPage: "https://thehouseofclio.com/the-house",
  image: { "@type": "ImageObject", url: "https://thehouseofclio.com/og/hoc-og-journal.jpg" },
};

export const metadata = {
  title: "The House",
  description: PAGE_META.house.desc,
  alternates: { canonical: "https://thehouseofclio.com/the-house" },
  openGraph: {
    title: "The House | The House of Clio",
    description: PAGE_META.house.desc,
    url: "https://thehouseofclio.com/the-house",
    images: [{ url: "https://thehouseofclio.com/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The House | The House of Clio",
    description: PAGE_META.house.desc,
    images: ["https://thehouseofclio.com/og-default.png"],
  },
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
