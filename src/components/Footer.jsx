/**
 * src/components/Footer.jsx
 *
 * Named re-export shim so components can import { Footer } from "@/components/Footer"
 * while the full implementation lives in src/components/layout/footer.js.
 *
 * The layout/footer.js implementation is the authoritative version — it includes
 * hover effects, social links (Instagram, LinkedIn), SEO entity paragraph,
 * useSiteChrome integration, and the Akan note that the simplified spec version omits.
 */
export { default as Footer } from "@/components/layout/footer";
