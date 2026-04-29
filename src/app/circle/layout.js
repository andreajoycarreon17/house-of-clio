import { PAGE_META } from "@/lib/brand";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://thehouseofclio.com" },
    { "@type": "ListItem", position: 2, name: "The Circle", item: "https://thehouseofclio.com/circle" },
  ],
};

export const metadata = {
  title: "The Circle",
  description: PAGE_META.circle.desc,
  alternates: { canonical: "https://thehouseofclio.com/circle" },
  openGraph: {
    title: "The Circle | The House of Clio",
    description: PAGE_META.circle.desc,
    url: "https://thehouseofclio.com/circle",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
