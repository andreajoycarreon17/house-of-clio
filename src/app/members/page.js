"use client";
/*
 * THE HOUSE OF CLIO - Members Page (drop-in replacement)
 *
 * Replaces the static members directory with the full
 * interactive members experience from clio-members.jsx.
 *
 * WHERE TO INSTALL:
 *   src/app/members/page.js (replaces existing file)
 *
 * PREREQUISITE:
 *   clio-members.jsx must be in the project root,
 *   same level as the app folder.
 *
 * TEST LOGIN:
 *   Any email address
 *   Code: CLIO2026
 */

import ClioMembers from "../../../clio-members";

export default function MembersPage() {
  return <ClioMembers />;
}
