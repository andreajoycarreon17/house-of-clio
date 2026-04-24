"use client";

import { testimonials } from "@/data/testimonials";

/**
 * Testimonials
 *
 * Renders a grid of guest quotes sourced from src/data/testimonials.js.
 *
 * Props:
 *   category  {string|null}  Filter by category ("founding_member", "returning_table",
 *                            "first_house", "evening"). null = show all.
 *   limit     {number}       Max number of testimonials to show (default 3).
 */
export function Testimonials({ category = null, limit = 3 }) {
  const filtered = (
    category
      ? testimonials.filter((t) => t.category === category)
      : testimonials
  ).slice(0, limit);

  if (filtered.length === 0) return null;

  return (
    <section
      className="clio-testimonials"
      aria-label="From the Room"
    >
      <div className="clio-testimonials__grid">
        {filtered.map((t) => (
          <div key={t.id} className="clio-testimonial">
            <blockquote className="clio-testimonial__quote">
              {t.quote}
            </blockquote>
            <cite className="clio-testimonial__attribution">
              <span className="clio-testimonial__name">{t.name}</span>
              <span className="clio-testimonial__title">{t.title}</span>
              <span className="clio-testimonial__location">{t.location}</span>
            </cite>
          </div>
        ))}
      </div>
    </section>
  );
}
