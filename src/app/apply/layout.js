import { META } from "@/lib/brand";

export const metadata = {
  title: META.apply.title,
  description: META.apply.desc,
};

export default function Layout({ children }) {
  return children;
}
