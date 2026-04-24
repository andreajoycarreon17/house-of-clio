"use client";

import { useEffect, useState } from "react";

import { useSiteChrome } from "@/components/layout/site-context";
import { BTN } from "@/lib/theme";

const STORAGE_KEY = "clio_exit_dismissed";

export function ExitIntent() {
  const { hp } = useSiteChrome();

  const [show, setShow]           = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail]         = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Read localStorage once on mount
  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) setDismissed(true);
    } catch { /* private browsing — silently skip */ }
  }, []);

  // Attach / detach the mouse-leave listener
  useEffect(() => {
    if (dismissed || submitted) return;

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) setShow(true);
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [dismissed, submitted]);

  const dismiss = () => {
    setShow(false);
    setDismissed(true);
    try { localStorage.setItem(STORAGE_KEY, "true"); } catch { }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setShow(false);
          try { localStorage.setItem(STORAGE_KEY, "true"); } catch { }
        }, 2000);
      }
    } catch (err) {
      console.error("[ExitIntent] Newsletter error:", err);
    }
  };

  if (!show) return null;

  return (
    <div className="clio-exit-intent" role="dialog" aria-modal="true" aria-label="Before you go">
      <div className="clio-exit-intent__content">

        {/* Close button */}
        <button
          type="button"
          className="clio-exit-intent__close"
          onClick={dismiss}
          aria-label="Close"
          {...hp}
        >
          ×
        </button>

        {submitted ? (
          <p className="clio-exit-intent__success">
            You are in. Watch for the first letter.
          </p>
        ) : (
          <>
            <h3>Before you go</h3>
            <p>
              Receive notes from private rooms. Occasional letters on gathering
              and friendship.
            </p>

            <form onSubmit={handleSubmit} className="clio-exit-intent__form" noValidate>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                autoComplete="email"
                className="clio-exit-intent__input"
                aria-label="Email address"
              />
              <button
                type="submit"
                style={{ ...BTN.primary, cursor: "none" }}
                {...hp}
              >
                Receive
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
