import { PAGE_META } from "@/lib/brand";

export const metadata = {
  title: "The Circle",
  description: PAGE_META.circle.desc,
};

export default function Layout({ children }) {
  return children;
}
