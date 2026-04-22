import { PAGE_META } from "@/lib/brand";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://thehouseofclio.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://thehouseofclio.com/about" },
  ],
};

const localBizSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  "@id": "https://thehouseofclio.com/#organization",
  name: "The House of Clio",
  url: "https://thehouseofclio.com",
  email: "hello@thehouseofclio.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  areaServed: {
    "@type": "City",
    name: "London",
    sameAs: "https://www.wikidata.org/wiki/Q84",
  },
  priceRange: "£££",
};

export const metadata = {
  title: "The House",
  description: PAGE_META.house.desc,
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }}
      />
      {children}
    </>
  );
}
