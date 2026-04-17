"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CI, F, T } from "@/components/shared";
import { getHref } from "@/lib/routes";
import { BRAND_AKAN_UPPER, BRAND_TAGLINE } from "@/lib/brand";
import { useSiteChrome } from "./site-context";

const DESKTOP_LINKS = [
  { label: "The House",   href: "/about" },
  { label: "Programme",   href: "/gatherings" },
  { label: "Book",        href: "/book" },
  { label: "The Circle",  href: "/circle" },
  { label: "Journal",     href: "/journal" },
  { label: "The Standard",href: "/the-standard" },
];

const MOBILE_LINKS = [
  { label: "The House",   href: "/about" },
  { label: "Programme",   href: "/gatherings" },
  { label: "Book",        href: "/book" },
  { label: "The Circle",  href: "/circle" },
  { label: "Journal",     href: "/journal" },
  { label: "The Standard",href: "/the-standard" },
  { label: "Gigi Brown",  href: "/founder" },
  { label: "Questions",   href: "/faq" },
];

export default function Nav() {
  const pathname = usePathname();
  const { hp, setHov, navVisible, sy, mobNav, setMobNav } = useSiteChrome();
  const ns = sy > 80;

  const isActive = (href) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  // Close mobile nav on route change
  const handleNavClick = () => setMobNav(false);

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
          background: ns || pathname !== "/" ? "rgba(14,1,19,.95)" : "transparent",
          WebkitBackdropFilter: ns || pathname !== "/" ? "blur(28px) saturate(1.3)" : "none",
          backdropFilter: ns || pathname !== "/" ? "blur(28px) saturate(1.3)" : "none",
          borderBottom: ns || pathname !== "/" ? "1px solid rgba(201,149,108,.05)" : "1px solid transparent",
          transition: "background .6s ease,border-color .6s ease,backdrop-filter .6s ease,transform .4s cubic-bezier(.16,1,.3,1)",
          padding: "0 clamp(28px,5vw,72px)",
          height: ns ? 72 : 88,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Brand logo */}
        <Link
          href="/"
          {...hp}
          aria-label="Return to home page"
          style={{ display: "flex", alignItems: "center", gap: ns ? 10 : 12, cursor: "none", textDecoration: "none" }}
        >
          <span className="nav-ci">
            <CI size={ns ? 48 : 56} />
          </span>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div
              style={{
                fontFamily: F.body,
                fontSize: ns ? 18 : 22,
                fontWeight: 500,
                letterSpacing: ns ? "3px" : "4px",
                color: T.rose,
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              {BRAND_AKAN_UPPER}
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
                {BRAND_TAGLINE}
              </div>
            )}
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="desk-nav" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {DESKTOP_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              {...hp}
              className={`nav-link ${isActive(link.href) ? "active" : ""}`}
              aria-label={`Navigate to ${link.label}`}
              aria-current={isActive(link.href) ? "page" : undefined}
              style={{
                padding: "0 0 6px",
                fontFamily: F.body,
                fontSize: 10,
                fontWeight: isActive(link.href) ? 500 : 400,
                letterSpacing: ".22em",
                textTransform: "uppercase",
                color: isActive(link.href) ? T.rose : "rgba(250,244,238,.45)",
                borderBottom: isActive(link.href) ? `1px solid ${T.rose}` : "1px solid transparent",
                transition: "color .4s,border-color .4s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => { setHov(true); e.target.style.color = T.roseL; }}
              onMouseLeave={(e) => { setHov(false); e.target.style.color = isActive(link.href) ? T.rose : "rgba(250,244,238,.45)"; }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/apply"
            {...hp}
            aria-label="Introduce yourself"
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
              transition: "border-color .4s,background .4s",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => { setHov(true); e.target.style.borderColor = "rgba(201,149,108,.45)"; e.target.style.background = "rgba(201,149,108,.04)"; }}
            onMouseLeave={(e) => { setHov(false); e.target.style.borderColor = "rgba(201,149,108,.22)"; e.target.style.background = "none"; }}
          >
            Introduce Yourself
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="mob-btn"
          onClick={() => setMobNav(!mobNav)}
          aria-label={mobNav ? "Close menu" : "Open menu"}
          aria-expanded={mobNav}
          style={{ display: "none", background: "none", border: "none", padding: 12, minWidth: 44, minHeight: 44, cursor: "pointer" }}
        >
          <div style={{ width: 22, height: 2, background: T.rose, transition: "transform .3s ease,opacity .3s ease", transform: mobNav ? "rotate(45deg) translateY(7px)" : "none" }} />
          <div style={{ width: 22, height: 2, background: T.rose, transition: "transform .3s ease,opacity .3s ease", opacity: mobNav ? 0 : 1 }} />
          <div style={{ width: 22, height: 2, background: T.rose, transition: "transform .3s ease,opacity .3s ease", transform: mobNav ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile drawer */}
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
          onClick={handleNavClick}
        >
          {MOBILE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              aria-label={`Navigate to ${link.label}`}
              aria-current={isActive(link.href) ? "page" : undefined}
              style={{
                fontFamily: F.display,
                fontSize: "clamp(22px,5vw,26px)",
                fontWeight: 400,
                color: isActive(link.href) ? T.rose : T.cream,
                letterSpacing: ".08em",
                transition: "color .3s",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ width: 40, height: 1, background: `linear-gradient(90deg,transparent,${T.rose}40,transparent)`, margin: "4px 0" }} />
          <Link
            href="/apply"
            onClick={handleNavClick}
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
              transition: "color .3s,border-color .3s",
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
