import { PAGE_META } from "@/lib/brand";

export const metadata = {
  title: "Questions",
  description: PAGE_META.questions.desc,
  alternates: { canonical: "https://thehouseofclio.com/questions" },
  openGraph: {
    title: "Questions | The House of Clio",
    description: PAGE_META.questions.desc,
    url: "https://thehouseofclio.com/questions",
    images: [{ url: "https://thehouseofclio.com/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Questions | The House of Clio",
    description: PAGE_META.questions.desc,
    images: ["https://thehouseofclio.com/og-default.png"],
  },
};

export default function Layout({ children }) {
  return children;
}
