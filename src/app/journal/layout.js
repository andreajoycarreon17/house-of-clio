import { PAGE_META } from "@/lib/brand";

export const metadata = {
  title: "Journal",
  description: PAGE_META.journal.desc,
};

export default function Layout({ children }) {
  return children;
}
