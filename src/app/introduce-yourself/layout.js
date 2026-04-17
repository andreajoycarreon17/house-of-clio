import { PAGE_META } from "@/lib/brand";

export const metadata = {
  title: "Introduce Yourself",
  description: PAGE_META.apply.desc,
};

export default function Layout({ children }) {
  return children;
}
