import { META } from "@/lib/brand";

export const metadata = {
  title: META.journal.title,
  description: META.journal.desc,
};

export default function Layout({ children }) {
  return children;
}
