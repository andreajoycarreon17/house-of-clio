import { META } from "@/lib/brand";

export const metadata = {
  title: META.programme.title,
  description: META.programme.desc,
};

export default function Layout({ children }) {
  return children;
}
