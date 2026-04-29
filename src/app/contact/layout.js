import { PAGE_META } from "@/lib/brand";

export const metadata = {
  title: "Contact",
  description: PAGE_META.contact.desc,
  alternates: { canonical: "https://thehouseofclio.com/contact" },
  openGraph: {
    title: "Contact | The House of Clio",
    description: PAGE_META.contact.desc,
    url: "https://thehouseofclio.com/contact",
    images: [{ url: "https://thehouseofclio.com/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | The House of Clio",
    description: PAGE_META.contact.desc,
    images: ["https://thehouseofclio.com/og-default.png"],
  },
};

export default function Layout({ children }) {
  return children;
}
