import { META } from "@/lib/brand";

export const metadata = {
  title: META.questions.title,
  description: META.questions.desc,
};

export default function Layout({ children }) {
  return children;
}
