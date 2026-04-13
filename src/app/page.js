import { PAGE_META } from "@/lib/brand";
import HomePage from "./home/HomePage";

// Home uses absolute title — no template suffix needed
export const metadata = {
  title: {
    absolute: PAGE_META.home.title,
  },
  description: PAGE_META.home.desc,
};

export default function Page() {
  return <HomePage />;
}
