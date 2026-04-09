import { META } from "@/lib/brand";

export const metadata = {
  title: META.terms.title,
  description: META.terms.desc,
};

export default function Layout({ children }) {
  return children;
}
