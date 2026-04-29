import { PAGE_META, BRAND_PLAIN } from "@/lib/brand";

export const metadata = {
  title: "Search",
  description: `Search ${BRAND_PLAIN} — gatherings, journal essays, and more.`,
  robots: { index: false, follow: true },
  alternates: { canonical: "https://thehouseofclio.com/search" },
  openGraph: {
    title: "Search | The House of Clio",
    description: `Search ${BRAND_PLAIN} — gatherings, journal essays, and more.`,
    url: "https://thehouseofclio.com/search",
    images: [{ url: "https://thehouseofclio.com/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Search | The House of Clio",
    description: `Search ${BRAND_PLAIN} — gatherings, journal essays, and more.`,
    images: ["https://thehouseofclio.com/og-default.png"],
  },
};

export default function Layout({ children }) {
  return children;
}
