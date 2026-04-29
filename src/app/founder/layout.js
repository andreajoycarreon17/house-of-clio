import { PAGE_META } from "@/lib/brand";

const PILLAR_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "How to Compose a Room: The Art of Human Chemistry",
  dateline: "London, United Kingdom",
  articleSection: "Cultural Journeys",
  keywords: "Gigi Brown, House of Clio founder, composed gathering host, social architecture London",
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
  mainEntityOfPage: "https://thehouseofclio.com/founder",
  image: { "@type": "ImageObject", url: "https://thehouseofclio.com/og/hoc-og-journal.jpg" },
};

export const metadata = {
  title: "Gigi Brown, Host",
  description: PAGE_META.founder.desc,
  alternates: { canonical: "https://thehouseofclio.com/founder" },
  openGraph: {
    title: "Gigi Brown, Host | The House of Clio",
    description: PAGE_META.founder.desc,
    url: "https://thehouseofclio.com/founder",
    images: [{ url: "https://thehouseofclio.com/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gigi Brown, Host | The House of Clio",
    description: PAGE_META.founder.desc,
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
