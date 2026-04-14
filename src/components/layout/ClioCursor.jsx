"use client";
/*
 * THE HOUSE OF CLIO - ClioCursor (BOLD VARIANT)
 *
 * A larger, more solid, more visible cursor that draws clearly
 * over every background colour on the site.
 *
 * - 40px solid rose-gold ring with strong border
 * - Inner gold dot that sits under the pointer
 * - Drop-shadow gives contrast on light AND dark backgrounds
 * - Grows to 64px and fills with rose-gold on link hover
 * - Native cursor stays visible underneath as fallback
 * - Hidden until first mouse move
 * - Hidden on touch devices
 * - Respects prefers-reduced-motion
 *
 * INSTALL:
 *   1. Drop this file at src/components/ClioCursor.jsx
 *   2. In src/app/layout.js, inside <body>:
 *        import ClioCursor from "@/components/ClioCursor";
 *        <ClioCursor />
 *   3. Make sure globals-patch.css is pasted at the bottom of globals.css
 */

import { useEffect, useRef, useState } from "react";

export default function ClioCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;

    setEnabled(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let raf = 0;
    let visible = false;
    let lastTarget = null;

    const show = () => {
      if (visible) return;
      visible = true;
      if (ringRef.current) ringRef.current.style.opacity = "1";
      if (dotRef.current) dotRef.current.style.opacity = "1";
    };

    const hide = () => {
      if (!visible) return;
      visible = false;
      if (ringRef.current) ringRef.current.style.opacity = "0";
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      show();

      const target = e.target;
      if (target && target !== lastTarget) {
        lastTarget = target;
        const interactive = target.closest && target.closest(
          "a, button, [role=button], input, textarea, select, label[for]"
        );
        if (ringRef.current) {
          if (interactive) {
            ringRef.current.classList.add("clio-cursor-ring--active");
          } else {
            ringRef.current.classList.remove("clio-cursor-ring--active");
          }
        }
      }
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;
      if (ringRef.current) {
        ringRef.current.style.transform =
          "translate3d(" + (ringX - 20) + "px, " + (ringY - 20) + "px, 0)";
      }
      if (dotRef.current) {
        dotRef.current.style.transform =
          "translate3d(" + (mouseX - 3) + "px, " + (mouseY - 3) + "px, 0)";
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", show);
    window.addEventListener("blur", hide);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", show);
      window.removeEventListener("blur", hide);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="clio-cursor-ring"
        aria-hidden="true"
        style={{ opacity: 0 }}
      />
      <div
        ref={dotRef}
        className="clio-cursor-dot"
        aria-hidden="true"
        style={{ opacity: 0 }}
      />
    </>
  );
}
