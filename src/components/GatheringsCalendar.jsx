"use client";

import Link from "next/link";
import { useSiteChrome } from "@/components/layout/site-context";
import { PROGRAMME_ROOMS } from "@/data/formats";
import { F, T, TX } from "@/lib/theme";

/**
 * GatheringsCalendar
 *
 * Shows upcoming programme events in a clean list view.
 * Data sourced from PROGRAMME_ROOMS — only rooms with an eventSchema
 * startDate are shown, sorted chronologically.
 */
export function GatheringsCalendar() {
  const { hp } = useSiteChrome();

  // Build calendar entries from rooms that have event schema dates
  const events = PROGRAMME_ROOMS
    .filter((r) => r.eventSchema?.startDate)
    .map((r) => ({
      slug:      r.slug,
      title:     r.title,
      index:     r.index,
      kicker:    r.kicker,
      accent:    r.accent || T.rose,
      startDate: new Date(r.eventSchema.startDate),
      when:      r.when,
      strap:     r.strap,
      availability: r.eventSchema?.offers?.availability ?? null,
    }))
    .sort((a, b) => a.startDate - b.startDate);

  if (events.length === 0) return null;

  const formatDate = (date) =>
    date.toLocaleDateString("en-GB", {
      weekday: "short",
      day:     "numeric",
      month:   "long",
      year:    "numeric",
    });

  const availabilityLabel = (url) => {
    if (!url) return null;
    if (url.includes("LimitedAvailability")) return "Limited places";
    if (url.includes("SoldOut"))             return "Sold out";
    if (url.includes("InStock"))             return "Places available";
    return null;
  };

  return (
    <section aria-label="Upcoming gatherings calendar">
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {events.map((event) => {
          const avail = availabilityLabel(event.availability);
          return (
            <Link
              key={event.slug}
              href={`/gatherings/${event.slug}`}
              {...hp}
              aria-label={`${event.title} — ${formatDate(event.startDate)}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div
                style={{
                  display:         "grid",
                  gridTemplateColumns: "80px 1fr auto",
                  alignItems:      "center",
                  gap:             "clamp(12px,2vw,24px)",
                  padding:         "clamp(14px,2vh,20px) clamp(16px,2.5vw,24px)",
                  background:      "rgba(250,244,238,.02)",
                  border:          `1px solid rgba(201,149,108,.08)`,
                  borderLeft:      `3px solid ${event.accent}`,
                  transition:      "background .3s,border-color .3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,149,108,.04)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(250,244,238,.02)"; }}
              >
                {/* Date block */}
                <div style={{ textAlign: "center", flexShrink: 0 }}>
                  <div style={{
                    fontFamily:    F.display,
                    fontSize:      "clamp(22px,3vw,28px)",
                    fontWeight:    400,
                    color:         event.accent,
                    lineHeight:    1,
                    marginBottom:  2,
                  }}>
                    {event.startDate.getDate()}
                  </div>
                  <div style={{
                    fontFamily:    F.body,
                    fontSize:      "clamp(8px,1.5vw,9px)",
                    fontWeight:    500,
                    letterSpacing: ".15em",
                    textTransform: "uppercase",
                    color:         TX.onDarkMuted,
                    opacity:       0.6,
                  }}>
                    {event.startDate.toLocaleDateString("en-GB", { month: "short" })}
                  </div>
                </div>

                {/* Event details */}
                <div>
                  <div style={{
                    fontFamily:    F.body,
                    fontSize:      "clamp(8px,1.5vw,9px)",
                    fontWeight:    500,
                    letterSpacing: ".3em",
                    textTransform: "uppercase",
                    color:         event.accent,
                    opacity:       0.6,
                    marginBottom:  4,
                  }}>
                    {event.index !== "0" ? `Format ${event.index}` : "Inaugural"}
                  </div>
                  <div style={{
                    fontFamily:    F.display,
                    fontSize:      "clamp(15px,2.2vw,19px)",
                    fontWeight:    400,
                    fontStyle:     "italic",
                    color:         T.cream,
                    lineHeight:    1.2,
                    marginBottom:  4,
                  }}>
                    {event.title}
                  </div>
                  <div style={{
                    fontFamily:    F.body,
                    fontSize:      "clamp(10px,1.8vw,11px)",
                    fontWeight:    300,
                    color:         TX.onDarkMuted,
                    opacity:       0.55,
                  }}>
                    {event.kicker || event.when}
                  </div>
                </div>

                {/* Availability badge */}
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  {avail && (
                    <span style={{
                      fontFamily:    F.body,
                      fontSize:      "clamp(8px,1.4vw,9px)",
                      fontWeight:    500,
                      letterSpacing: ".15em",
                      textTransform: "uppercase",
                      color:         avail === "Sold out" ? TX.onDarkMuted : event.accent,
                      opacity:       avail === "Sold out" ? 0.4 : 0.7,
                      display:       "block",
                      marginBottom:  6,
                    }}>
                      {avail}
                    </span>
                  )}
                  <span style={{
                    fontFamily:    F.body,
                    fontSize:      "clamp(8px,1.4vw,9px)",
                    fontWeight:    400,
                    letterSpacing: ".1em",
                    color:         T.rose,
                    opacity:       0.5,
                  }}>
                    Reserve →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
