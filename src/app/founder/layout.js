import { META } from "@/lib/brand";

export const metadata = {
  title: META.founder.title,
  description: META.founder.desc,
};

export default function Layout({ children }) {
  return children;
}
