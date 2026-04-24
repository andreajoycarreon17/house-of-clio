export default function CorrectionsPage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section
        style={{
          padding: "140px clamp(20px, 5vw, 72px) 60px",
          background: "#0E0113",
          color: "#FAF4EE",
        }}
      >
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 13,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C9956C",
              marginBottom: 24,
            }}
          >
            Editorial
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(40px, 7vw, 72px)",
              lineHeight: 1.1,
              fontWeight: 400,
              marginBottom: 24,
            }}
          >
            Corrections
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(250, 244, 238, 0.82)" }}>
            Accuracy is a form of respect. We take it seriously.
          </p>
        </div>
      </section>

      {/* Body */}
      <article
        style={{
          padding: "80px clamp(20px, 5vw, 72px)",
          background: "#FAF4EE",
          color: "#1F0A2D",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <section
            style={{
              marginBottom: 48,
              paddingBottom: 48,
              borderBottom: "1px solid rgba(90, 53, 117, 0.12)",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(24px, 4vw, 32px)",
                lineHeight: 1.25,
                fontWeight: 400,
                marginBottom: 20,
                color: "#1F0A2D",
              }}
            >
              Our corrections policy
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: "#1F0A2D", maxWidth: "68ch", marginBottom: 20 }}>
              The House of Clio is committed to factual accuracy. If you believe any information
              on this site is inaccurate, please contact{" "}
              <a
                href="mailto:press@thehouseofclio.com?subject=Correction%20Request"
                style={{ color: "#C9956C", textDecoration: "none", borderBottom: "1px solid rgba(201,149,108,0.3)" }}
              >
                press@thehouseofclio.com
              </a>{" "}
              with the subject line <strong>Correction Request</strong>.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: "#1F0A2D", maxWidth: "68ch" }}>
              We review all corrections within 48 hours. Where a correction is upheld, we update
              the relevant content promptly and note the change where appropriate.
            </p>
          </section>

          <section
            style={{
              marginBottom: 48,
              paddingBottom: 48,
              borderBottom: "1px solid rgba(90, 53, 117, 0.12)",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(24px, 4vw, 32px)",
                lineHeight: 1.25,
                fontWeight: 400,
                marginBottom: 20,
                color: "#1F0A2D",
              }}
            >
              What to include
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: "#1F0A2D", maxWidth: "68ch", marginBottom: 16 }}>
              To help us review your request efficiently, please include:
            </p>
            <ul
              style={{
                fontSize: 17,
                lineHeight: 2,
                color: "#1F0A2D",
                maxWidth: "68ch",
                paddingLeft: 24,
                margin: 0,
              }}
            >
              <li>The URL of the page containing the inaccuracy</li>
              <li>The specific text or claim you believe is incorrect</li>
              <li>What you believe the accurate information to be</li>
              <li>Any supporting sources, if available</li>
            </ul>
          </section>

          <section>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(24px, 4vw, 32px)",
                lineHeight: 1.25,
                fontWeight: 400,
                marginBottom: 20,
                color: "#1F0A2D",
              }}
            >
              Contact
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: "#1F0A2D", maxWidth: "68ch", marginBottom: 8 }}>
              Corrections and editorial enquiries:
            </p>
            <a
              href="mailto:press@thehouseofclio.com?subject=Correction%20Request"
              style={{
                fontSize: 17,
                color: "#C9956C",
                textDecoration: "none",
                borderBottom: "1px solid rgba(201,149,108,0.3)",
              }}
            >
              press@thehouseofclio.com
            </a>
            <p style={{ fontSize: 14, color: "rgba(31,10,45,0.5)", marginTop: 12 }}>
              Response within 48 hours.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
