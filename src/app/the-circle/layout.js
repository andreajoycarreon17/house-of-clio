import { META } from "@/lib/brand";

export const metadata = {
  title: META.circle.title,
  description: META.circle.desc,
};

export default function Layout({ children }) {
  return children;
}
