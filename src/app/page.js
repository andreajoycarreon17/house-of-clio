import { PAGE_META } from "@/lib/brand";
import HomePage from "./home/HomePage";
 
// Home uses absolute title — no template suffix needed
export const metadata = {
  title: "The House of Clio | Private Cultural House in London",
  description: PAGE_META.home.desc,
  alternates: { canonical: "https://thehouseofclio.com" },
  openGraph: {
    title: "The House of Clio | Private Cultural House in London",
    description: PAGE_META.home.desc,
    url: "https://thehouseofclio.com",
    images: [{ url: "https://thehouseofclio.com/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The House of Clio | Private Cultural House in London",
    description: PAGE_META.home.desc,
    images: ["https://thehouseofclio.com/og-default.png"],
  },
};
 
export default function Page() {
  return (
    <>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
        }}
      >
        <p data-speakable="true">
          Composed Society is the organising principle behind The House of Clio.
        </p>
      </div>
      <HomePage />
    </>
  );
}