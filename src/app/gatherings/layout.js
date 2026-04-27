import { PAGE_META } from "@/lib/brand";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://thehouseofclio.com" },
    { "@type": "ListItem", position: 2, name: "Gatherings", item: "https://thehouseofclio.com/gatherings" },
  ],
};

export const metadata = {
  title: "The Programme",
  description: PAGE_META.programme.desc,
  alternates: { canonical: "https://thehouseofclio.com/gatherings" },
  openGraph: {
    title: "The Programme | The House of Clio",
    description: PAGE_META.programme.desc,
    url: "https://thehouseofclio.com/gatherings",
    images: [{ url: "https://thehouseofclio.com/og-default.png", width: 1200, height: 630 }],
  },
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
