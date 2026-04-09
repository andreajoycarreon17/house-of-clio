import { META } from "@/lib/brand";

export const metadata = {
  title: META.press.title,
  description: META.press.desc,
};

export default function Layout({ children }) {
  return children;
}
