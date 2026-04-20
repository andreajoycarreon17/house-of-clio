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
 
 