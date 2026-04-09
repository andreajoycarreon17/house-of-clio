import { META } from "@/lib/brand";

export const metadata = {
  title: META.contact.title,
  description: META.contact.desc,
};

export default function Layout({ children }) {
  return children;
}
