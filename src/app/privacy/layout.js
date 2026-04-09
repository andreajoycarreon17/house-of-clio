import { META } from "@/lib/brand";

export const metadata = {
  title: META.privacy.title,
  description: META.privacy.desc,
};

export default function Layout({ children }) {
  return children;
}
