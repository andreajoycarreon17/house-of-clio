import { PAGE_META } from "@/lib/brand";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://thehouseofclio.com" },
    { "@type": "ListItem", position: 2, name: "Introduce Yourself", item: "https://thehouseofclio.com/introduce-yourself" },
  ],
};

export const metadata = {
  title: "Introduce Yourself",
  description: PAGE_META.apply.desc,
  alternates: { canonical: "https://thehouseofclio.com/introduce-yourself" },
  openGraph: {
    title: "Introduce Yourself | The House of Clio",
    description: PAGE_META.apply.desc,
    url: "https://thehouseofclio.com/introduce-yourself",
    images: [{ url: "https://thehouseofclio.com/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Introduce Yourself | The House of Clio",
    description: PAGE_META.apply.desc,
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
