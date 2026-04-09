import { META } from "@/lib/brand";

export const metadata = {
  title: META.conduct.title,
  description: META.conduct.desc,
};

export default function Layout({ children }) {
  return children;
}
