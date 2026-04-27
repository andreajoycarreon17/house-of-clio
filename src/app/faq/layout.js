import { PAGE_META } from "@/lib/brand";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://thehouseofclio.com" },
    { "@type": "ListItem", position: 2, name: "Questions", item: "https://thehouseofclio.com/faq" },
  ],
};

export const metadata = {
  title: "Questions",
  description: PAGE_META.questions.desc,
  alternates: { canonical: "https://thehouseofclio.com/faq" },
  openGraph: {
    title: "Questions | The House of Clio",
    description: PAGE_META.questions.desc,
    url: "https://thehouseofclio.com/faq",
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
