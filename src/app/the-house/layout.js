import { META } from "@/lib/brand";

export const metadata = {
  title: META.house.title,
  description: META.house.desc,
};

export default function Layout({ children }) {
  return children;
}
