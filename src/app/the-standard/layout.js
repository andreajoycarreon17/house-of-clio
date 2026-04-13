import { PAGE_META } from "@/lib/brand";

export const metadata = {
  title: "The Standard",
  description: PAGE_META.conduct.desc,
};

export default function Layout({ children }) {
  return children;
}
