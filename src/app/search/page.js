import Link from "next/link";
import { JOURNAL_ARTICLES, PROGRAMME_ROOMS } from "@/data/formats";
import { BRAND_PLAIN } from "@/lib/brand";

// Simple in-memory search across gatherings and journal articles
function runSearch(query) {
  if (!query || query.trim().length < 2) return { gatherings: [], articles: [] };

  const q = query.toLowerCase().trim();

  const gatherings = PROGRAMME_ROOMS.filter(
    (r) =>
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      (r.strap && r.strap.toLowerCase().includes(q))
  );

  const articles = JOURNAL_ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tag.toLowerCase().includes(q)
  );

  return { gatherings, articles };
}

export default async function SearchPage({ searchParams }) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const { gatherings, articles } = runSearch(query);
  const totalResults = gatherings.length + articles.length;
  const hasQuery = query.length >= 2;

  return (
    <main
      id="main-content"
      style={{
        background: "#0E0113",
        minHeight: "100vh",
        paddingTop: 100,
        paddingBottom: "clamp(80px,10vh,120px)",
        color: "#FAF4EE",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 clamp(24px,5vw,48px)" }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div
            style={{
              fontFamily: "var(--font-jost), sans-serif",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: ".4em",
              textTransform: "uppercase",
              color: "#C9956C",
              marginBottom: 20,
              opacity: 0.8,
            }}
          >
            Search
          </div>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontSize: "clamp(32px,5vw,52px)",
              fontWeight: 400,
              lineHeight: 1,
              color: "#FAF4EE",
              marginBottom: 32,
            }}
          >
            {hasQuery ? (
              <>
                Results for{" "}
                <em style={{ color: "#C9956C", fontStyle: "italic" }}>
                  &ldquo;{query}&rdquo;
                </em>
              </>
            ) : (
              <>Search {BRAND_PLAIN}</>
            )}
          </h1>

          {/* Search form */}
          <form method="GET" action="/search" role="search">
            <div style={{ display: "flex", gap: 0, maxWidth: 520 }}>
              <input
                type="search"
                name="q"
                defaultValue={query}
                placeholder="Gatherings, essays, the circle…"
                autoComplete="off"
                aria-label={`Search ${BRAND_PLAIN}`}
                style={{
                  flex: 1,
                  background: "rgba(250,244,238,.04)",
                  border: "1px solid rgba(201,149,108,.25)",
                  borderRight: "none",
                  padding: "14px 18px",
                  fontFamily: "var(--font-jost), sans-serif",
                  fontSize: 14,
                  fontWeight: 300,
                  color: "#FAF4EE",
                  outline: "none",
                  appearance: "none",
                }}
              />
              <button
                type="submit"
                aria-label="Submit search"
                style={{
                  background: "#C9956C",
                  border: "1px solid #C9956C",
                  padding: "14px 22px",
                  fontFamily: "var(--font-jost), sans-serif",
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: ".25em",
                  textTransform: "uppercase",
                  color: "#0E0113",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Results */}
        {hasQuery && (
          <>
            <div
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                fontSize: 11,
                fontWeight: 300,
                color: "rgba(250,244,238,.4)",
                letterSpacing: ".06em",
                marginBottom: 40,
              }}
            >
              {totalResults === 0
                ? "No results found."
                : `${totalResults} result${totalResults !== 1 ? "s" : ""}`}
            </div>

            {/* Gatherings results */}
            {gatherings.length > 0 && (
              <section aria-label="Gathering results" style={{ marginBottom: 48 }}>
                <div
                  style={{
                    fontFamily: "var(--font-jost), sans-serif",
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: ".35em",
                    textTransform: "uppercase",
                    color: "#C9A84C",
                    opacity: 0.7,
                    marginBottom: 20,
                    paddingBottom: 12,
                    borderBottom: "1px solid rgba(201,168,76,.12)",
                  }}
                >
                  Gatherings
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {gatherings.map((room) => (
                    <li
                      key={room.slug}
                      style={{
                        borderBottom: "1px solid rgba(201,149,108,.08)",
                        padding: "20px 0",
                      }}
                    >
                      <Link
                        href={`/gatherings/${room.slug}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          style={{
                            fontFamily:
                              "var(--font-cormorant), 'Cormorant Garamond', serif",
                            fontSize: "clamp(18px,2.5vw,22px)",
                            fontWeight: 400,
                            color: "#FAF4EE",
                            marginBottom: 6,
                            lineHeight: 1.2,
                          }}
                        >
                          {room.title}
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-jost), sans-serif",
                            fontSize: 12,
                            fontWeight: 300,
                            color: "rgba(250,244,238,.5)",
                            lineHeight: 1.7,
                            maxWidth: "60ch",
                          }}
                        >
                          {room.strap}
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-jost), sans-serif",
                            fontSize: 10,
                            fontWeight: 500,
                            letterSpacing: ".2em",
                            textTransform: "uppercase",
                            color: "#C9956C",
                            marginTop: 8,
                            opacity: 0.7,
                          }}
                        >
                          {room.when} · London
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Journal results */}
            {articles.length > 0 && (
              <section aria-label="Journal results" style={{ marginBottom: 48 }}>
                <div
                  style={{
                    fontFamily: "var(--font-jost), sans-serif",
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: ".35em",
                    textTransform: "uppercase",
                    color: "#C9A84C",
                    opacity: 0.7,
                    marginBottom: 20,
                    paddingBottom: 12,
                    borderBottom: "1px solid rgba(201,168,76,.12)",
                  }}
                >
                  Journal
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {articles.map((article) => (
                    <li
                      key={article.slug}
                      style={{
                        borderBottom: "1px solid rgba(201,149,108,.08)",
                        padding: "20px 0",
                      }}
                    >
                      <Link
                        href={`/journal/${article.slug}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          style={{
                            fontFamily: "var(--font-jost), sans-serif",
                            fontSize: 10,
                            fontWeight: 500,
                            letterSpacing: ".3em",
                            textTransform: "uppercase",
                            color: "#C9956C",
                            opacity: 0.7,
                            marginBottom: 6,
                          }}
                        >
                          {article.tag}
                        </div>
                        <div
                          style={{
                            fontFamily:
                              "var(--font-cormorant), 'Cormorant Garamond', serif",
                            fontSize: "clamp(18px,2.5vw,22px)",
                            fontWeight: 400,
                            color: "#FAF4EE",
                            marginBottom: 6,
                            lineHeight: 1.2,
                          }}
                        >
                          {article.title}
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-jost), sans-serif",
                            fontSize: 12,
                            fontWeight: 300,
                            color: "rgba(250,244,238,.5)",
                            lineHeight: 1.7,
                            maxWidth: "60ch",
                          }}
                        >
                          {article.excerpt}
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-jost), sans-serif",
                            fontSize: 10,
                            fontWeight: 300,
                            color: "rgba(250,244,238,.3)",
                            marginTop: 8,
                            letterSpacing: ".06em",
                          }}
                        >
                          {article.date}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* No results */}
            {totalResults === 0 && (
              <div style={{ padding: "40px 0" }}>
                <p
                  style={{
                    fontFamily:
                      "var(--font-cormorant), 'Cormorant Garamond', serif",
                    fontSize: "clamp(18px,2.5vw,22px)",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "rgba(250,244,238,.5)",
                    marginBottom: 24,
                  }}
                >
                  Nothing found for &ldquo;{query}&rdquo;.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "clamp(16px,3vw,32px)",
                    flexWrap: "wrap",
                  }}
                >
                  {[
                    ["The gatherings", "/gatherings"],
                    ["The journal", "/journal"],
                    ["Introduce yourself", "/introduce-yourself"],
                  ].map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      style={{
                        fontFamily: "var(--font-jost), sans-serif",
                        fontSize: 10,
                        fontWeight: 500,
                        letterSpacing: ".25em",
                        textTransform: "uppercase",
                        color: "#C9956C",
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(201,149,108,.3)",
                        paddingBottom: 3,
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Empty state — no query */}
        {!hasQuery && (
          <div style={{ paddingTop: 8 }}>
            <p
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                fontSize: 13,
                fontWeight: 300,
                lineHeight: 2,
                color: "rgba(250,244,238,.4)",
                maxWidth: "48ch",
                marginBottom: 32,
              }}
            >
              Search across gatherings, journal essays, and the programme.
            </p>
            <div style={{ display: "flex", gap: "clamp(16px,3vw,32px)", flexWrap: "wrap" }}>
              {[
                ["The gatherings", "/gatherings"],
                ["The journal", "/journal"],
                ["Introduce yourself", "/introduce-yourself"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontFamily: "var(--font-jost), sans-serif",
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: ".25em",
                    textTransform: "uppercase",
                    color: "#C9956C",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(201,149,108,.3)",
                    paddingBottom: 3,
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
