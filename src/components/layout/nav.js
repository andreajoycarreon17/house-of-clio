"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { CI, F, T } from "@/components/shared";
import { getHref, getPageKey } from "@/lib/routes";

import { useSiteChrome } from "./site-context";

export default function Nav() {
  const pathname = usePathname();
  const page = getPageKey(pathname);
  const { hp, setHov, navVisible, sy, mobNav, setMobNav } = useSiteChrome();
  const ns = sy > 80;

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`nav-smart ${navVisible ? "" : "hidden"}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: ns || page !== "home" ? "rgba(14,1,19,.95)" : "transparent",
          WebkitBackdropFilter:
            ns || page !== "home" ? "blur(28px) saturate(1.3)" : "none",
          backdropFilter: ns || page !== "home" ? "blur(28px) saturate(1.3)" : "none",
          borderBottom:
            ns || page !== "home"
              ? "1px solid rgba(201,149,108,.05)"
              : "1px solid transparent",
          transition:
            "background .6s ease,border-color .6s ease,backdrop-filter .6s ease,transform .4s cubic-bezier(.16,1,.3,1)",
          padding: "0 clamp(28px,5vw,72px)",
          height: ns ? 72 : 88,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          {...hp}
          aria-label="Return to home page"
          style={{
            display: "flex",
            alignItems: "center",
            gap: ns ? 10 : 12,
            cursor: "none",
            textDecoration: "none",
          }}
        >
          <span className="nav-ci">
            <CI size={ns ? 48 : 56} />
          </span>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div
              style={{
                fontFamily: F.display,
                fontSize: ns ? 18 : 22,
                fontWeight: 500,
                letterSpacing: ns ? "3px" : "4px",
                color: T.cream,
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              The ƆUSE <em style={{ fontStyle: "normal", color: T.rose }}>ɔf</em> CLIO
            </div>
            {!ns && (
              <div
                className="desk-nav"
                style={{
                  fontFamily: F.display,
                  fontSize: 10,
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: T.roseL,
                  opacity: 0.45,
                  letterSpacing: ".06em",
                  marginTop: 4,
                  whiteSpace: "nowrap",
                  lineHeight: 1,
                }}
              >
                Every brilliant person you have not met yet.
              </div>
            )}
          </div>
        </Link>

        <div className="desk-nav" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {[
            ["The House", "house"],
            ["The Exchange", "programme"],
            ["The Circle", "circle"],
            ["Journal", "journal"],
            ["The Standard", "conduct"],
          ].map(([label, id]) => (
            <Link
              key={id}
              href={getHref(id)}
              {...hp}
              className={`nav-link ${page === id ? "active" : ""}`}
              aria-label={`Navigate to ${label}`}
              aria-current={page === id ? "page" : undefined}
              style={{
                padding: "0 0 6px",
                fontFamily: F.body,
                fontSize: 10,
                fontWeight: page === id ? 500 : 400,
                letterSpacing: ".22em",
                textTransform: "uppercase",
                color: page === id ? T.rose : "rgba(250,244,238,.45)",
                transition: "color .4s",
                position: "relative",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                setHov(true);
                e.target.style.color = T.roseL;
              }}
              onMouseLeave={(e) => {
                setHov(false);
                e.target.style.color = page === id ? T.rose : "rgba(250,244,238,.45)";
              }}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/apply"
            {...hp}
            style={{
              border: "1px solid rgba(201,149,108,.22)",
              padding: "12px 22px",
              minHeight: 44,
              fontFamily: F.body,
              fontSize: "clamp(9px,2vw,10px)",
              fontWeight: 400,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: T.rose,
              transition: "border-color .4s,background .4s,color .4s,opacity .4s",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              setHov(true);
              e.target.style.borderColor = "rgba(201,149,108,.45)";
              e.target.style.background = "rgba(201,149,108,.04)";
            }}
            onMouseLeave={(e) => {
              setHov(false);
              e.target.style.borderColor = "rgba(201,149,108,.22)";
              e.target.style.background = "none";
            }}
            aria-label="Introduce yourself"
          >
            Introduce Yourself
          </Link>
        </div>

        <button
          type="button"
          className="mob-btn"
          onClick={() => setMobNav(!mobNav)}
          aria-label={mobNav ? "Close menu" : "Open menu"}
          style={{
            display: "none",
            background: "none",
            border: "none",
            padding: 12,
            minWidth: 44,
            minHeight: 44,
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: 22,
              height: 2,
              background: T.rose,
              transition: "transform .3s ease,opacity .3s ease",
              transform: mobNav ? "rotate(45deg) translateY(7px)" : "none",
            }}
          />
          <div
            style={{
              width: 22,
              height: 2,
              background: T.rose,
              transition: "transform .3s ease,opacity .3s ease",
              opacity: mobNav ? 0 : 1,
            }}
          />
          <div
            style={{
              width: 22,
              height: 2,
              background: T.rose,
              transition: "transform .3s ease,opacity .3s ease",
              transform: mobNav ? "rotate(-45deg) translateY(-7px)" : "none",
            }}
          />
        </button>
      </nav>

      {mobNav && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1001,
            background: "rgba(14,1,19,.97)",
            WebkitBackdropFilter: "blur(32px)",
            backdropFilter: "blur(32px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            paddingTop: 88,
            animation: "fadeUp .4s ease both",
          }}
          onClick={() => setMobNav(false)}
        >
          {[
            ["The House", "house"],
            ["The Exchange", "programme"],
            ["The Circle", "circle"],
            ["Journal", "journal"],
            ["The Standard", "conduct"],
            ["Gigi Brown", "founder"],
            ["Questions", "questions"],
          ].map(([label, id]) => (
            <Link
              key={id}
              href={getHref(id)}
              onClick={() => setMobNav(false)}
              aria-label={`Navigate to ${label}`}
              style={{
                fontFamily: F.display,
                fontSize: "clamp(22px,5vw,26px)",
                fontWeight: 400,
                color: page === id ? T.rose : T.cream,
                letterSpacing: ".08em",
                transition: "color .3s",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
          <div
            style={{
              width: 40,
              height: 1,
              background: `linear-gradient(90deg,transparent,${T.rose}40,transparent)`,
              margin: "4px 0",
            }}
          />
          <Link
            href="/apply"
            onClick={() => setMobNav(false)}
            aria-label="Introduce yourself"
            style={{
              border: `1px solid ${T.rose}40`,
              padding: "12px 36px",
              fontFamily: F.body,
              fontSize: "clamp(9px,2vw,10px)",
              fontWeight: 500,
              letterSpacing: ".3em",
              textTransform: "uppercase",
              color: T.rose,
              transition: "color .3s,opacity .3s,border-color .3s",
              textDecoration: "none",
            }}
          >
            Introduce Yourself
          </Link>
        </div>
      )}
    </>
  );
}
