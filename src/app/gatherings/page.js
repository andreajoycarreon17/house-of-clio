import ProgrammePageClient from "./programme-page-client";

export default function ProgrammePage() {
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
          Inaugural Table is part of the forthcoming gatherings in London.
        </p>
      </div>
      <ProgrammePageClient />
    </>
  );
}
