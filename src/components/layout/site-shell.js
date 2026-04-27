"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { F, T } from "@/components/shared";
import { META } from "@/lib/brand";
import { CSS } from "@/lib/theme";
import { getPageKey } from "@/lib/routes";

import CookieBanner from "./cookie-banner";
import CustomCursor from "./custom-cursor";
import Footer from "./footer";
import Nav from "./nav";
import PageShell from "./page-shell";
import { SiteChromeContext } from "./site-context";
import { ExitIntent } from "@/components/ExitIntent";
import { ScrollCTA } from "@/components/ScrollCTA";
import { captureUTM, captureReferrer, markReturningVisitor, addEngagementPoints } from "@/lib/intelligence";

export default function SiteShell({ children }) {
  const pathname = usePathname();
  const page = getPageKey(pathname);

  const [mouse, setMouse] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [hov, setHov] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [sy, setSy] = useState(0);
  const [ld, setLd] = useState(false);
  const [preloaded, setPreloaded] = useState(false);
  const [mobNav, setMobNav] = useState(false);
  const [cookieOk, setCookieOk] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  const rr = useRef({ x: -100, y: -100 });
  const af = useRef(null);
  const lastSy = useRef(0);

  useEffect(() => {
    try {
      setCookieOk(localStorage.getItem("clio-cookies") === "1");
    } catch { }
  }, []);

  // Bootstrap intelligence on first mount
  useEffect(() => {
    captureUTM();
    captureReferrer();
    markReturningVisitor();
    addEngagementPoints("pageView");
  }, []);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    const handleMove = (event) => setMouse({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      rr.current.x += (mouse.x - rr.current.x) * 0.07;
      rr.current.y += (mouse.y - rr.current.y) * 0.07;
      setRing({ x: rr.current.x, y: rr.current.y });
      af.current = requestAnimationFrame(animate);
    };

    af.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(af.current);
  }, [mouse]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setSy(window.scrollY);
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setLd(true), 200);
    const t2 = setTimeout(() => setPreloaded(true), 1000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    const diff = sy - lastSy.current;
    if (sy < 100) {
      setNavVisible(true);
    } else if (diff > 8) {
      setNavVisible(false);
    } else if (diff < -4) {
      setNavVisible(true);
    }
    lastSy.current = sy;
  }, [sy]);

  useEffect(() => {
    setMobNav(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    if (pathname.startsWith("/programme/") || pathname.startsWith("/journal/")) {
      return;
    }

    const meta = META[page];
    if (!meta) return;

    document.title = meta.title;

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute("content", meta.desc);
  }, [page]);

  const scrollPct =
    typeof window !== "undefined"
      ? Math.min(
        100,
        Math.max(
          0,
          (sy / Math.max(1, document.body.scrollHeight - window.innerHeight)) * 100,
        ),
      )
      : 0;

  const hp = {
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
  };

  const trackInteraction = () => { };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteChromeContext.Provider
        value={{
          page,
          mouse,
          ring,
          hov,
          setHov,
          isTouchDevice,
          sy,
          ld,
          preloaded,
          mobNav,
          setMobNav,
          cookieOk,
          setCookieOk,
          navVisible,
          hp,
          trackInteraction,
        }}
      >
        <CustomCursor
          ld={ld}
          isTouchDevice={isTouchDevice}
          hov={hov}
          ring={ring}
          page={page}
          mouse={mouse}
          scrollPct={scrollPct}
          preloaded={preloaded}
        />

        <div style={{ background: T.bg2, minHeight: "100vh" }} lang="en-GB">
          <Nav />
          <PageShell>{children}</PageShell>
          <Footer />
          <button
            type="button"
            className={`back-top ${sy > 600 ? "show" : ""}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            style={{
              zIndex: 9101,
              bottom: cookieOk ? undefined : "104px",
            }}
          >
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 13V3M4 7l4-4 4 4"
                stroke={T.cream}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <CookieBanner cookieOk={cookieOk} setCookieOk={setCookieOk} />
          <ExitIntent />
          <ScrollCTA />
        </div>
      </SiteChromeContext.Provider>
    </>
  );
}
