import { PAGE_META } from "@/lib/brand";

export const metadata = {
  title: "The Programme",
  description: PAGE_META.programme.desc,
};

export default function Layout({ children }) {
  return children;
}
