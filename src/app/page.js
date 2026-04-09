import { META } from "@/lib/brand";
import HomePage from "./home/HomePage";

export const metadata = {
  title: META.home.title,
  description: META.home.desc,
};

export default function Page() {
  return <HomePage />;
}
