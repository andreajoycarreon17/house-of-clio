import { BRAND_PLAIN } from "@/lib/brand";

export const metadata = {
  title: "Dublin",
  description:
    "The House of Clio is coming to Dublin in December 2026. A composed private cultural house — composed private dinners, supper lectures, and journeys. The second city.",
  alternates: { canonical: "https://thehouseofclio.com/dublin" },
  openGraph: {
    title: "Dublin | The House of Clio",
    description: "The House of Clio is coming to Dublin in December 2026. A composed private cultural house — composed private dinners, supper lectures, and journeys. The second city.",
    url: "https://thehouseofclio.com/dublin",
    images: [{ url: "https://thehouseofclio.com/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dublin | The House of Clio",
    description: "The House of Clio is coming to Dublin in December 2026. A composed private cultural house — composed private dinners, supper lectures, and journeys.",
    images: ["https://thehouseofclio.com/og-default.png"],
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
