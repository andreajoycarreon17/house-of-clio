import { PAGE_META, BRAND_PLAIN } from "@/lib/brand";

export const metadata = {
  title: "Search",
  description: `Search ${BRAND_PLAIN} — gatherings, journal essays, and more.`,
  robots: { index: false, follow: true },
};

export default function Layout({ children }) {
  return children;
}
