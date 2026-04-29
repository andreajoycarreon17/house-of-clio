import { PAGE_META } from "@/lib/brand";

export const metadata = {
  title: "The Standard",
  description: PAGE_META.conduct.desc,
  alternates: { canonical: "https://thehouseofclio.com/the-standard" },
  openGraph: {
    title: "The Standard | The House of Clio",
    description: PAGE_META.conduct.desc,
    url: "https://thehouseofclio.com/the-standard",
    images: [{ url: "https://thehouseofclio.com/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Standard | The House of Clio",
    description: PAGE_META.conduct.desc,
    images: ["https://thehouseofclio.com/og-default.png"],
  },
};

export default function Layout({ children }) {
  return children;
}
