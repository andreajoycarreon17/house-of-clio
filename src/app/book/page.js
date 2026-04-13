"use client";
/*
 * THE HOUSE OF CLIO - Book Page (drop-in replacement)
 *
 * FIXES:
 * - Replaces the static price listing (with broken pound signs)
 *   with the full interactive booking system from
 *   clio-booking-cards.jsx
 * - Removes the "Reserve" buttons that do nothing
 * - Removes the dead-end "Begin booking" links to /contact
 *
 * WHERE TO INSTALL:
 *   src/app/book/page.js (replaces existing file)
 *
 * PREREQUISITE:
 *   clio-booking-cards.jsx must be in the project root,
 *   same level as the app folder.
 *
 *   If it is not there yet, copy it from the files Gigi sent.
 *
 * IMPORT PATH:
 *   Adjust the import path below based on your folder structure.
 *   If your app folder is at src/app/, use "../../clio-booking-cards"
 *   If your app folder is at app/, use "../../clio-booking-cards"
 */

import ClioReservation from "../../../clio-booking-cards";

// Note: metadata cannot be exported from a client component.
// The metadata for /book is handled by the layout template
// which adds " | The House of Clio" automatically.
// To set a specific title for this page, create a separate
// metadata.js file in this folder, or wrap in a server component.

export default function BookPage() {
  return <ClioReservation />;
}
