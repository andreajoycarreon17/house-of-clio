import { BRAND_AKAN, BRAND_PLAIN } from "@/lib/brand";

export default function DublinPage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section
        style={{
          padding: "140px clamp(20px, 5vw, 72px) 80px",
          background: "#0E0113",
          color: "#FAF4EE",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 820, margin: "0 auto", width: "100%" }}>
          <div
            style={{
              fontSize: 13,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C9956C",
              marginBottom: 24,
            }}
          >
            Dublin
          </div>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(40px, 7vw, 72px)",
              lineHeight: 1.1,
              fontWeight: 400,
              marginBottom: 32,
            }}
          >
            The House of Clio — Coming to Dublin, December 2026
          </h1>

          <p
            data-speakable="true"
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              color: "rgba(250, 244, 238, 0.85)",
              maxWidth: "60ch",
              marginBottom: 40,
            }}
          >
            {BRAND_AKAN} opens its second city in Dublin in December 2026.
            Composed private dinners, supper lectures, and journeys — every
            guest selected, every seat placed by hand.
          </p>

          <p
            style={{
              fontSize: 15,
              lineHeight: 1.7,
              color: "rgba(250, 244, 238, 0.6)",
              maxWidth: "52ch",
              marginBottom: 48,
            }}
          >
            London is the first city. Dublin is the second. If you are in
            Dublin and would like to be considered for the first rooms, introduce
            yourself now.
          </p>

          <a
            href="/introduce-yourself"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-jost), sans-serif",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#C9956C",
              textDecoration: "none",
              borderBottom: "1px solid rgba(201, 149, 108, 0.4)",
              paddingBottom: 3,
            }}
          >
            Introduce Yourself
          </a>
        </div>
      </section>
    </main>
  );
}
