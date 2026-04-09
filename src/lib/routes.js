export const routeMap = {
  "home": "/",
  "house": "/the-house",
  "programme": "/programme",
  "circle": "/the-circle",
  "founder": "/founder",
  "journal": "/journal",
  "questions": "/questions",
  "apply": "/apply",
  "contact": "/contact",
  "press": "/press",
  "members": "/members",
  "privacy": "/privacy",
  "terms": "/terms",
  "book": "/book",
  "conduct": "/the-standard"
};

export function getPageKey(pathname) {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  if (normalized.startsWith("/programme/")) return "programme";
  if (normalized.startsWith("/journal/")) return "journal";
  const entry = Object.entries(routeMap).find(([, value]) => value === normalized);
  return entry ? entry[0] : "home";
}

export function getHref(key) {
  return routeMap[key] || "/";
}
