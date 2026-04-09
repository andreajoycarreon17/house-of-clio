import { META } from "@/lib/brand";

export const metadata = {
  title: META.book.title,
  description: META.book.desc,
};

export default function Layout({ children }) {
  return children;
}
