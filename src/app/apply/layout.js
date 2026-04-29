import { PAGE_META } from "@/lib/brand";

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
  return children;
}
