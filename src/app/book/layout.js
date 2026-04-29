import { PAGE_META } from "@/lib/brand";

export const metadata = {
  title: "Reserve Your Place",
  description: PAGE_META.book.desc,
  alternates: { canonical: "https://thehouseofclio.com/book" },
  openGraph: {
    title: "Reserve Your Place | The House of Clio",
    description: PAGE_META.book.desc,
    url: "https://thehouseofclio.com/book",
    images: [{ url: "https://thehouseofclio.com/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reserve Your Place | The House of Clio",
    description: PAGE_META.book.desc,
    images: ["https://thehouseofclio.com/og-default.png"],
  },
};

export default function Layout({ children }) {
  return children;
}
