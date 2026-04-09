"use client";

import Link from "next/link";

import { F, T, TX } from "@/components/shared";

export default function CookieBanner({ cookieOk, setCookieOk }) {
  if (cookieOk) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9000,
        background: "rgba(14,1,19,.95)",
        WebkitBackdropFilter: "blur(20px)",
        backdropFilter: "blur(20px)",
        borderTop: `1px solid ${T.rose}10`,
        padding: "20px clamp(28px,5vw,72px)",
        animation: "slideUp .5s ease both",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <p
          style={{
            fontFamily: F.body,
            fontSize: "clamp(11px,2.5vw,12px)",
            fontWeight: 300,
            color: TX.onDarkSub,
            lineHeight: 1.7,
            maxWidth: 560,
          }}
        >
          This site uses essential cookies and privacy-respecting analytics. No advertising.
          No retargeting. Your visit is private.{" "}
          <Link
            href="/privacy"
            style={{
              color: T.rose,
              cursor: "pointer",
              borderBottom: `1px solid ${T.rose}30`,
              textDecoration: "none",
            }}
          >
            Read our privacy policy.
          </Link>
        </p>
        <button
          type="button"
          aria-label="Accept cookies"
          onClick={() => {
            setCookieOk(true);
            try {
              localStorage.setItem("clio-cookies", "1");
            } catch {}
          }}
          style={{
            background: "none",
            border: `1px solid ${T.rose}30`,
            padding: "10px 28px",
            fontFamily: F.body,
            fontSize: "clamp(9px,2vw,10px)",
            fontWeight: 400,
            letterSpacing: ".25em",
            textTransform: "uppercase",
            color: T.rose,
            cursor: "pointer",
            transition: "color .3s,opacity .3s,border-color .3s",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            e.target.style.borderColor = T.rose;
          }}
          onMouseLeave={(e) => {
            e.target.style.borderColor = `${T.rose}30`;
          }}
        >
          Understood
        </button>
      </div>
    </div>
  );
}
