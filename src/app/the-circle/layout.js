import { PAGE_META } from "@/lib/brand";

const PILLAR_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Beyond Members Clubs: A New Institution in London",
  dateline: "London, United Kingdom",
  articleSection: "Private Institutions",
  keywords: "private members club London alternative, cultural institution London, composed society London",
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
  mainEntityOfPage: "https://thehouseofclio.com/the-circle",
  image: { "@type": "ImageObject", url: "https://thehouseofclio.com/og/hoc-og-journal.jpg" },
};

export const metadata = {
  title: "The Circle",
  description: PAGE_META.circle.desc,
  alternates: { canonical: "https://thehouseofclio.com/the-circle" },
  openGraph: {
    title: "The Circle | The House of Clio",
    description: PAGE_META.circle.desc,
    url: "https://thehouseofclio.com/the-circle",
    images: [{ url: "https://thehouseofclio.com/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Circle | The House of Clio",
    description: PAGE_META.circle.desc,
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
