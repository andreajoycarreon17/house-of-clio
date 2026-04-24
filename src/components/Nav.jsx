/**
 * src/components/Nav.jsx
 *
 * Named re-export shim so components can import { Nav } from "@/components/Nav"
 * while the full implementation lives in src/components/layout/nav.js.
 *
 * The layout/nav.js implementation is the authoritative version — it includes
 * scroll-aware styling, mobile drawer, useSiteChrome integration, and active
 * state logic that the simplified spec version omits.
 */
export { default as Nav } from "@/components/layout/nav";
