import { PAGE_META } from "@/lib/brand";

export const metadata = {
  title: "The House",
  description: PAGE_META.house.desc,
};

export default function Layout({ children }) {
  return children;
}
