"use client";

import Link from "next/link";
import { CI, F, T } from "@/components/shared";
import { getHref } from "@/lib/routes";
import { useSiteChrome } from "./site-context";
import {
  BRAND_AKAN_UPPER,
  BRAND_TAGLINE,
  BRAND_ENTITY,
  BRAND_COPYRIGHT,
  BRAND_AKAN_NOTE,
} from "@/lib/brand";

export default function Footer() {
  const { setHov } = useSiteChrome();

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      style={{ background: "linear-gradient(180deg,#0A0014,#050008)", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(90deg,transparent 5%,${T.rose}50,transparent 95%)`,
        }}
      />
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "clamp(52px,8vh,80px) clamp(24px,5vw,64px) clamp(36px,5vh,48px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Brand block */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "clamp(32px,5vh,48px)" }}>
          <CI size={44} />
          <div
            style={{
              fontFamily: F.body,
              fontSize: "clamp(16px,3.5vw,21px)",
              fontWeight: 500,
              letterSpacing: ".3em",
              color: T.rose,
              marginTop: 12,
              lineHeight: 1,
              textAlign: "center",
            }}
          >
            {BRAND_AKAN_UPPER}
          </div>
          <div
            style={{
              width: 28,
              height: 1,
              background: `linear-gradient(90deg,transparent,${T.rose}60,transparent)`,
              margin: "10px 0",
            }}
          />
          <div
            style={{
              fontFamily: F.display,
              fontSize: "clamp(11px,2.5vw,13px)",
              fontWeight: 400,
              fontStyle: "italic",
              color: T.rose,
              opacity: 0.6,
              letterSpacing: ".06em",
              textAlign: "center",
            }}
          >
            {BRAND_TAGLINE}
          </div>
        </div>

        {/* Primary nav links */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0 clamp(16px,3vw,32px)", marginBottom: "clamp(14px,2vh,20px)" }}>
          {[
            ["The House", "house"],
            ["Seasonal Programme", "programme"],
            ["The Circle", "circle"],
            ["Gigi Brown", "founder"],
            ["Journal: Essays on Friendship", "journal"],
            ["The Standard", "conduct"],
          ].map(([label, key]) => (
            <Link
              key={key}
              href={getHref(key)}
              aria-label={`Go to ${label}`}
              style={{
                fontFamily: F.body,
                fontSize: "clamp(10px,2.2vw,11px)",
                fontWeight: 400,
                letterSpacing: ".1em",
                color: T.cream,
                opacity: 0.5,
                transition: "color .3s,opacity .3s",
                padding: "clamp(8px,1.5vh,12px) clamp(4px,1vw,8px)",
                lineHeight: 1,
                textDecoration: "none",
              }}
              onMouseEnter={(e) => { setHov(true); e.target.style.opacity = "1"; e.target.style.color = T.rose; }}
              onMouseLeave={(e) => { setHov(false); e.target.style.opacity = ".5"; e.target.style.color = T.cream; }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Secondary nav links */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0 clamp(14px,2.5vw,28px)", marginBottom: "clamp(20px,3vh,32px)" }}>
          {[
            ["How to Join", "questions"],
            ["Introduce Yourself", "apply"],
            ["Reserve a Place", "book"],
            ["Contact", "contact"],
            ["Press and Media", "press"],
          ].map(([label, key]) => (
            <Link
              key={key}
              href={getHref(key)}
              aria-label={`Go to ${label}`}
              style={{
                fontFamily: F.body,
                fontSize: "clamp(8px,1.8vw,9px)",
                fontWeight: 500,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: T.rose,
                opacity: 0.45,
                transition: "color .3s,opacity .3s",
                padding: "clamp(8px,1.5vh,12px) clamp(4px,1vw,8px)",
                lineHeight: 1,
                textDecoration: "none",
              }}
              onMouseEnter={(e) => { e.target.style.opacity = "1"; }}
              onMouseLeave={(e) => { e.target.style.opacity = ".75"; }}
            >
              {label}
            </Link>
          ))}
        </div>

        <div
          style={{
            width: "100%",
            maxWidth: 400,
            height: 1,
            background: `linear-gradient(90deg,transparent,${T.rose}30,transparent)`,
            marginBottom: "clamp(20px,3vh,28px)",
          }}
        />

        {/* Social links */}
        <div style={{ display: "flex", gap: 28, alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
          <a
            href="https://www.instagram.com/thehouseofclio.london/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{ color: T.rose, opacity: 0.4, transition: "opacity .3s", display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40 }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = ".4"; }}
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" /></svg>
          </a>
          <a
            href="https://www.linkedin.com/in/the-house-of-clio-1301643b6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: T.rose, opacity: 0.4, transition: "opacity .3s", display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40 }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = ".4"; }}
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
        </div>

        {/* Legal links */}
        <div style={{ display: "flex", gap: 24, alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
          {[["Privacy", "privacy"], ["Terms", "terms"], ["Corrections", "corrections"]].map(([label, key]) => (
            <Link
              key={key}
              href={getHref(key)}
              aria-label={`Read ${label}`}
              style={{
                fontFamily: F.body,
                fontSize: 10,
                fontWeight: 300,
                letterSpacing: ".1em",
                color: "rgba(250,244,238,.3)",
                transition: "color .3s",
                padding: "6px 0",
                lineHeight: 1,
                textDecoration: "none",
              }}
              onMouseEnter={(e) => { e.target.style.color = T.rose; }}
              onMouseLeave={(e) => { e.target.style.color = "rgba(250,244,238,.3)"; }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Entity paragraph — SEO + AIEO, no more mojibake */}
        <p
          data-entity="true"
          data-speakable="true"
          style={{
            fontFamily: F.body,
            fontSize: 9,
            fontWeight: 300,
            letterSpacing: ".04em",
            color: "rgba(250,244,238,.15)",
            lineHeight: 1.9,
            textAlign: "center",
            maxWidth: 440,
            margin: "0 auto 20px",
          }}
        >
          {BRAND_ENTITY}
        </p>

        {/* Copyright + Akan note */}
        <p
          style={{
            fontFamily: F.body,
            fontSize: "clamp(7px,1.6vw,8px)",
            fontWeight: 300,
            letterSpacing: ".06em",
            color: "rgba(250,244,238,.2)",
            lineHeight: 1.8,
            textAlign: "center",
            maxWidth: 340,
            margin: 0,
          }}
        >
          {BRAND_COPYRIGHT}
          <br />
          London and the cities that follow
          <br />
          <em>{BRAND_AKAN_NOTE}</em>
        </p>
      </div>
    </footer>
  );
}
