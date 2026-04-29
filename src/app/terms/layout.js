import { PAGE_META } from "@/lib/brand";

export const metadata = {
  title: "Terms",
  description: PAGE_META.terms.desc,
  alternates: { canonical: "https://thehouseofclio.com/terms" },
  openGraph: {
    title: "Terms of Participation | The House of Clio",
    description: PAGE_META.terms.desc,
    url: "https://thehouseofclio.com/terms",
    images: [{ url: "https://thehouseofclio.com/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Participation | The House of Clio",
    description: PAGE_META.terms.desc,
    images: ["https://thehouseofclio.com/og-default.png"],
  },
};

export default function Layout({ children }) {
  return children;
}
