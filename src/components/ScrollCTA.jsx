"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { useSiteChrome } from "@/components/layout/site-context";
import { BTN } from "@/lib/theme";
import { ROUTES, CTA } from "@/lib/constants";

/**
 * ScrollCTA
 *
 * A floating "Introduce Yourself" button that appears once the visitor
 * has scrolled past 50 % of the page and hides again near the footer
 * (> 90 %) to avoid overlapping the footer CTA.
 *
 * Mounted globally in SiteShell so it works on every page.
 */
export function ScrollCTA() {
  const { hp } = useSiteChrome();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total    = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;

      const pct = (scrolled / total) * 100;
      setShow(pct > 50 && pct < 90);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="clio-scroll-cta" aria-hidden="false">
      <Link
        href={ROUTES.APPLY}
        className="clio-button--floating"
        aria-label={CTA.PRIMARY}
        style={{
          ...BTN.primary,
          display:        "inline-flex",
          alignItems:     "center",
          justifyContent: "center",
          textDecoration: "none",
        }}
        {...hp}
      >
        {CTA.PRIMARY}
      </Link>
    </div>
  );
}
