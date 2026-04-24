"use client";

import { useState } from "react";
import { useSiteChrome } from "@/components/layout/site-context";
import { F, T, TX } from "@/lib/theme";

/**
 * NewsletterSignup
 *
 * Reusable newsletter subscription form. Posts to /api/newsletter.
 * Handles rate-limit (429), success, and error states.
 *
 * Props:
 *   variant  "dark" (default) | "light"
 *            Controls input/button colours to suit dark or light backgrounds.
 */
export function NewsletterSignup({ variant = "dark" }) {
  const { hp, setHov } = useSiteChrome();
  const [email, setEmail]   = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [errorMsg, setErrorMsg] = useState("");

  const isDark = variant !== "light";

  const inputStyle = {
    flex: 1,
    background: isDark ? "rgba(250,244,238,.04)" : "rgba(160,80,37,.03)",
    border: `1px solid ${isDark ? `${T.rose}20` : "rgba(160,80,37,.12)"}`,
    padding: "12px 16px",
    fontFamily: F.body,
    fontSize: "clamp(11px,2.5vw,12px)",
    fontWeight: 300,
    color: isDark ? T.cream : T.bg,
    outline: "none",
    transition: "border-color .3s",
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim() || status === "sending") return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.status === 429) {
        setErrorMsg("Please wait a moment before trying again.");
        setStatus("error");
        return;
      }

      if (res.ok) {
        setStatus("done");
        setEmail("");
        return;
      }

      const data = await res.json().catch(() => ({}));
      setErrorMsg(data.error || "Something went wrong. Try again.");
      setStatus("error");
    } catch {
      setErrorMsg("Something went wrong. Try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p style={{
        fontFamily: F.body,
        fontSize: 12,
        fontWeight: 400,
        color: T.gold,
        textAlign: "center",
        letterSpacing: ".04em",
      }}>
        You are in. Watch for the first letter.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email"
          required
          autoComplete="email"
          aria-label="Email for occasional letters"
          disabled={status === "sending"}
          style={inputStyle}
          onFocus={e => {
            e.target.style.borderColor = isDark ? `${T.rose}50` : T.copper;
          }}
          onBlur={e => {
            e.target.style.borderColor = isDark
              ? `${T.rose}20`
              : "rgba(160,80,37,.12)";
          }}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          style={{
            background: T.copper,
            border: "none",
            padding: "12px 20px",
            fontFamily: F.body,
            fontSize: "clamp(9px,2vw,10px)",
            fontWeight: 500,
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: T.cream,
            cursor: status === "sending" ? "default" : "none",
            transition: "background .3s, opacity .3s",
            flexShrink: 0,
            opacity: status === "sending" ? 0.6 : 1,
          }}
          onMouseEnter={e => {
            setHov(true);
            if (status !== "sending") e.target.style.background = "rgba(160,80,37,.85)";
          }}
          onMouseLeave={e => {
            setHov(false);
            e.target.style.background = T.copper;
          }}
          {...hp}
        >
          {status === "sending" ? "..." : "Receive"}
        </button>
      </div>

      {status === "error" && (
        <p style={{
          fontFamily: F.body,
          fontSize: 11,
          fontWeight: 400,
          color: T.err,
          marginTop: 8,
          textAlign: "center",
        }}>
          {errorMsg || "Something went wrong. Try again."}
        </p>
      )}
    </form>
  );
}
