/**
 * THE HOUSE OF CLIO — Guest Testimonials
 *
 * Shared with permission. Used in the homepage "From the Room" section
 * and any other page that surfaces social proof.
 *
 * Categories:
 *   founding_member  — guests from the inaugural season
 *   returning_table  — regulars at The Returning Table
 *   first_house      — guests from The First House format
 *   evening          — guests from The Evening format
 */
export const testimonials = [
  {
    id: 1,
    name: "Elena Marchetti",
    title: "Founder, Archetype Studios",
    location: "London",
    quote: "I have walked into a hundred rooms and left knowing nobody. The first supper changed that. By dessert I had made a friend I still call every Sunday.",
    category: "founding_member",
  },
  {
    id: 2,
    name: "David Okonkwo",
    title: "Principal, Okonkwo Ventures",
    location: "London",
    quote: "Someone in the Circle introduced me to a collaborator who shifted my entire business model. That introduction was worth ten years of conferences.",
    category: "founding_member",
  },
  {
    id: 3,
    name: "Sarah Chen",
    title: "Director, Chen & Associates",
    location: "London",
    quote: "The Returning Table is the only room I protect in my calendar. Everything else can move. This cannot.",
    category: "returning_table",
  },
  {
    id: 4,
    name: "James Whitfield",
    title: "Founder, Whitfield Capital",
    location: "London",
    quote: "I spent twenty years attending things. This is the first room I actually wanted to return to.",
    category: "founding_member",
  },
  {
    id: 5,
    name: "Amara Osei",
    title: "CEO, Osei Group",
    location: "London",
    quote: "The seating was so precise that by the second course I forgot I had arrived alone. That is composition.",
    category: "first_house",
  },
  {
    id: 6,
    name: "Michael Dawson",
    title: "Managing Partner, Dawson Associates",
    location: "London",
    quote: "I asked a question I would never ask in public. Three people answered it without judgment. That room stays with you.",
    category: "founding_member",
  },
  {
    id: 7,
    name: "Priya Sharma",
    title: "Founder, Sharma Consulting",
    location: "London",
    quote: "Every other gathering I attend, I am performing. Here, I arrived as myself. That is rare.",
    category: "evening",
  },
  {
    id: 8,
    name: "Thomas Ashford",
    title: "Principal, Ashford & Co",
    location: "London",
    quote: "The fourth time someone greeted me by name without checking my badge, I realised this was not networking. This was belonging.",
    category: "returning_table",
  },
];

/**
 * Return testimonials filtered by category.
 * @param {string} category
 * @returns {Array}
 */
export function getTestimonialsByCategory(category) {
  return testimonials.filter((t) => t.category === category);
}

/**
 * Return a deterministic slice of testimonials for a given page.
 * Uses a simple offset so different pages show different quotes
 * without randomness (which would cause hydration mismatches).
 *
 * @param {number} count   How many to return
 * @param {number} offset  Starting index (default 0)
 * @returns {Array}
 */
export function getTestimonialsForPage(count = 3, offset = 0) {
  const len = testimonials.length;
  return Array.from({ length: count }, (_, i) => testimonials[(offset + i) % len]);
}
