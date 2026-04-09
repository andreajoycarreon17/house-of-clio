"use client";

import { CI, F, T } from "@/components/shared";

export default function CustomCursor({
  ld,
  isTouchDevice,
  hov,
  ring,
  page,
  mouse,
  scrollPct,
  preloaded,
}) {
  return (
    <>
      {ld && !isTouchDevice && (
        <div className={`cr ${hov ? "h" : ""}`} style={{ left: ring.x, top: ring.y }} />
      )}
      {ld && !isTouchDevice && page !== "apply" && (
        <div className="cd" style={{ left: mouse.x, top: mouse.y }} />
      )}
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} />
      <div className={`preloader ${preloaded ? "done" : ""}`}>
        <div className="preloader-mark" style={{ opacity: 0.3 }}>
          <CI size={64} />
        </div>
        <div className="preloader-line" />
        <div
          style={{
            fontFamily: F.display,
            fontSize: 11,
            fontWeight: 400,
            fontStyle: "italic",
            letterSpacing: ".15em",
            color: T.roseL,
            opacity: 0.3,
            marginTop: 16,
          }}
        >
          Composing the room
        </div>
      </div>
    </>
  );
}
