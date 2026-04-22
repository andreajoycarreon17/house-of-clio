import Link from "next/link";
import { BRAND_PLAIN } from "@/lib/brand";

const TERMS = [
  {
    term: "Composed Society",
    definition:
      "A private cultural institution in which the quality of every gathering is determined entirely by the composition of the room. Every person present was considered. Every conversation was made possible by design. The House of Clio is a Composed Society.",
  },
  {
    term: "The Circle",
    definition:
      "The community of members of The House of Clio. Every person in the Circle was considered before being introduced. The Circle grows through nomination, not application. Each member holds a limited number of introductions per season.",
  },
  {
    term: "Composed Room",
    definition:
      "A gathering where every person present was selected for the human chemistry they bring to the space. Not assembled — composed. The host has read every profile, considered every pairing, and placed every person with intention.",
  },
  {
    term: "By Introduction",
    definition:
      "The access model of The House of Clio. Introductions are made personally by the founding team, not through automated systems or open applications. Every person inside the House arrived because someone who understood the standard made the case for them.",
  },
  {
    term: "Guest Portrait",
    definition:
      "A written profile of every person attending a gathering, shared with all confirmed guests before they arrive. Not a biography or a CV. A portrait of what fascinates them, where they have lived, and what they carry into a room. The portrait is what makes the first conversation possible.",
  },
  {
    term: "Social Architecture",
    definition:
      "The deliberate design of the conditions under which human connection occurs. Who is in the room. How they are placed. What they know about each other before they arrive. The House of Clio practises social architecture as a discipline.",
  },
  {
    term: "The Returning Table",
    definition:
      "A recurring format within the House of Clio programme. The same people meet again across different tables until recognition becomes belonging. Meets every two to three weeks. The mechanism through which the Circle deepens.",
  },
  {
    term: "Composition",
    definition:
      "The act of selecting, placing, and preparing the people in a room. At The House of Clio, composition is the product. The venue, the food, and the programme serve the composition — not the other way around.",
  },
];

const glossarySchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "The House of Clio — Glossary of Terms",
  url: "https://thehouseofclio.com/glossary",
  hasDefinedTerm: TERMS.map((t) => ({
    "@type": "DefinedTerm",
    name: t.term,
    description: t.definition,
    inDefinedTermSet: "https://thehouseofclio.com/glossary",
  })),
};

export default function GlossaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }}
      />

      <main id="main-content">

        {/* Hero */}
        <section
          style={{
            padding: "clamp(100px,12vh,140px) clamp(24px,5vw,72px) clamp(60px,8vh,88px)",
            background: "#0E0113",
            color: "#FAF4EE",
          }}
        >
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <div
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: ".4em",
                textTransform: "uppercase",
                color: "#C9956C",
                marginBottom: 24,
                opacity: 0.9,
              }}
            >
              {BRAND_PLAIN}
            </div>
            <h1
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: "clamp(36px,6vw,68px)",
                lineHeight: 1.0,
                fontWeight: 400,
                marginBottom: 28,
                color: "#FAF4EE",
              }}
            >
              A Glossary of Terms —{" "}
              <em style={{ color: "#C9956C", fontStyle: "italic" }}>
                The House of Clio
              </em>
            </h1>
            <div
              style={{
                width: 48,
                height: 1,
                background:
                  "linear-gradient(90deg,#C9956C,rgba(201,168,76,.4),transparent)",
                marginBottom: 28,
              }}
            />
            <p
              data-speakable="true"
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                fontSize: "clamp(14px,3vw,16px)",
                lineHeight: 1.9,
                color: "rgba(250,244,238,.7)",
                maxWidth: "58ch",
              }}
            >
              The House of Clio is a Composed Society. These are the terms
              that define how it works — the language of rooms built by
              design, not by chance.
            </p>
          </div>
        </section>

        {/* Terms */}
        <section
          style={{
            padding: "clamp(60px,8vh,96px) clamp(24px,5vw,72px)",
            background: "#FAF4EE",
            color: "#1F0A2D",
          }}
        >
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <dl>
              {TERMS.map((item, i) => (
                <div
                  key={item.term}
                  id={item.term.toLowerCase().replace(/\s+/g, "-")}
                  itemScope
                  itemType="https://schema.org/DefinedTerm"
                  style={{
                    marginBottom: 0,
                    paddingTop: i === 0 ? 0 : "clamp(36px,5vh,52px)",
                    paddingBottom: "clamp(36px,5vh,52px)",
                    borderBottom:
                      i < TERMS.length - 1
                        ? "1px solid rgba(90,53,117,.12)"
                        : "none",
                  }}
                >
                  <dt
                    itemProp="name"
                    style={{
                      fontFamily:
                        "var(--font-cormorant), 'Cormorant Garamond', serif",
                      fontSize: "clamp(26px,4vw,36px)",
                      lineHeight: 1.15,
                      fontWeight: 400,
                      color: "#1F0A2D",
                      marginBottom: 16,
                    }}
                  >
                    {item.term}
                  </dt>
                  <dd
                    itemProp="description"
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-jost), sans-serif",
                      fontSize: "clamp(14px,3vw,16px)",
                      lineHeight: 1.85,
                      color: "#3A1A4D",
                      maxWidth: "64ch",
                    }}
                  >
                    {item.definition}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Footer links */}
        <section
          style={{
            padding: "clamp(40px,5vh,56px) clamp(24px,5vw,72px)",
            background: "#0E0113",
            color: "#FAF4EE",
          }}
        >
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <p
              style={{
                fontFamily:
                  "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: "clamp(16px,2.5vw,20px)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.5,
                color: "rgba(250,244,238,.6)",
                maxWidth: "52ch",
                marginBottom: 32,
              }}
            >
              These terms describe a way of meeting that most people have
              never experienced. The programme is the proof.
            </p>
            <div
              style={{
                display: "flex",
                gap: "clamp(20px,4vw,40px)",
                flexWrap: "wrap",
              }}
            >
              {[
                ["The gatherings", "/gatherings"],
                ["About the House", "/about"],
                ["Questions", "/faq"],
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
        </section>

      </main>
    </>
  );
}
