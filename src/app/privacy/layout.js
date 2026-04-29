import { PAGE_META } from "@/lib/brand";

export const metadata = {
  title: "Privacy Policy",
  description: PAGE_META.privacy.desc,
  alternates: { canonical: "https://thehouseofclio.com/privacy" },
  openGraph: {
    title: "Privacy Policy | The House of Clio",
    description: PAGE_META.privacy.desc,
    url: "https://thehouseofclio.com/privacy",
    images: [{ url: "https://thehouseofclio.com/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | The House of Clio",
    description: PAGE_META.privacy.desc,
    images: ["https://thehouseofclio.com/og-default.png"],
  },
};

export default function Layout({ children }) {
  return children;
}
