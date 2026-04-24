"use client";

import { useState } from "react";
import Link from "next/link";

import { useSiteChrome } from "@/components/layout/site-context";
import { PROGRAMME_ROOMS } from "@/data/formats";
import { F, T, TX, BTN } from "@/lib/theme";

/**
 * ProgrammeComparison
 *
 * A toggleable comparison table of all programme formats.
 * Data is sourced from PROGRAMME_ROOMS in src/data/formats.js
 * so it stays in sync with the rest of the programme automatically.
 *
 * The kicker field ("24 places · London · Seasonal") is parsed into
 * capacity and frequency columns. The strap is used as the "Ideal for" copy.
 */

/** Parse "24 places · London · Seasonal" → { capacity, frequency } */
function parseKicker(kicker = "") {
  const parts = kicker.split("·").map((s) => s.trim());
  return {
    capacity:  parts[0] || "—",
    frequency: parts[2] || parts[1] || "—",
  };
}

export function ProgrammeComparison() {
  const { hp } = useSiteChrome();
  const [show, setShow] = useState(false);

  // Skip the Inaugural Table (index "0") — it's a one-off, not a recurring format
  const formats = PROGRAMME_ROOMS.filter((r) => r.index !== "0");

  return (
    <>
      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setShow((v) => !v)}
        style={{
          ...BTN.primary,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
        }}
        aria-expanded={show}
        aria-controls="programme-comparison-table"
        {...hp}
      >
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            transition: "transform 0.3s ease",
            transform: show ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
        {show ? "Hide Comparison" : "Compare Formats"}
      </button>

      {/* Comparison table */}
      {show && (
        <div
          id="programme-comparison-table"
          className="clio-programme-comparison"
          style={{ marginTop: "clamp(20px,3vh,32px)" }}
        >
          <table className="clio-comparison-table" role="table">
            <thead>
              <tr>
                <th scope="col">Format</th>
                <th scope="col">Capacity</th>
                <th scope="col">Duration</th>
                <th scope="col">Frequency</th>
                <th scope="col">Ideal For</th>
              </tr>
            </thead>
            <tbody>
              {formats.map((format) => {
                const { capacity, frequency } = parseKicker(format.kicker);
                return (
                  <tr key={format.slug}>
                    <td>
                      <Link
                        href={`/programme/${format.slug}`}
                        style={{
                          color: format.accent || T.rose,
                          fontFamily: F.display,
                          fontSize: "clamp(14px,2vw,16px)",
                          fontWeight: 400,
                          fontStyle: "italic",
                          textDecoration: "none",
                          transition: "opacity 0.2s",
                        }}
                        {...hp}
                      >
                        {format.title}
                      </Link>
                    </td>
                    <td>{capacity}</td>
                    <td>{format.when}</td>
                    <td>{frequency}</td>
                    <td
                      style={{
                        fontStyle: "italic",
                        color: TX.onDarkMuted,
                        maxWidth: "28ch",
                      }}
                    >
                      {format.strap}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
