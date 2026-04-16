import { BRAND_AKAN } from "@/lib/brand";

const CLAUSES = [
  {
    num: "01",
    heading: "These terms",
    body: "By participating in any __BRAND__ gathering, journey, or programme, you accept these terms. They form a binding agreement between you and House of Clio Ltd, a company registered in England and Wales (company number pending registration). Registered address: London, United Kingdom. If anything here is unclear, write to hello@thehouseofclio.com. We will explain it in conversation.",
  },
  {
    num: "02",
    heading: "What the House provides",
    body: "__BRAND__ offers composed gatherings, supper lectures, city escapes, multi-day journeys, recurring tables, guided walks, and member-led societies. Before each gathering, you receive a written portrait of every confirmed attendee. A host is present at every occasion. For journeys and travel experiences, the House acts as organiser and books accommodation, transport, venues, cultural access, and dining on your behalf.",
  },
  {
    num: "03",
    heading: "No membership fee",
    body: "The House has no subscription, no annual fee, and no joining charge. You pay only for the gatherings and journeys you choose to attend. Participation is voluntary. You may step away at any time without contract, obligation, or penalty.",
  },
  {
    num: "04",
    heading: "Eligibility",
    body: "Participation is open to individuals aged 18 and over. By participating, you confirm that you are at least 18 years of age. The House is a space of inclusion. We welcome people of all backgrounds, gender identities, ethnicities, nationalities, and orientations. Discrimination, harassment, or hostility of any kind is grounds for immediate removal from the circle.",
  },
  {
    num: "05",
    heading: "Pricing",
    body: "Each gathering, journey, or experience is priced individually and confirmed at the point of booking. Prices reflect the quality of the venue, the hosting, and the composition. Once a price is confirmed to you in writing, it will not change for that booking. We reserve the right to adjust pricing for future occasions. All prices are inclusive of VAT where applicable.",
  },
  {
    num: "06",
    heading: "Payment",
    body: "Full payment is required at the time of booking unless otherwise agreed in writing. Payments are processed securely through our payment provider. You will receive written confirmation of every booking. A booking is confirmed only when payment has been received and confirmation has been issued.",
  },
  {
    num: "07",
    heading: "Cancellation of gatherings and lectures",
    body: "You may cancel any gathering, supper lecture, or recurring table up to 14 days before the date for a full refund. Between 14 and 7 days before, a credit is issued toward a future occasion. Within 7 days, refunds are at our discretion depending on costs already committed. Non-attendance of a confirmed seat without notice incurs the full charge.",
  },
  {
    num: "08",
    heading: "Cancellation of journeys and travel",
    body: "Journeys, city escapes, and any experience involving accommodation, flights, or group transport require a minimum of 30 days notice for cancellation. Between 30 and 14 days, a 50 percent credit toward a future journey is offered. Within 14 days, refunds are not available unless we can fill your place or recover costs from the provider. This policy reflects the commitments we make to hotels, venues, and transport providers on your behalf, many of which are non-refundable to us once confirmed.",
  },
  {
    num: "09",
    heading: "Cancellation by the House",
    body: "If we cancel any gathering or journey for any reason, you receive a full refund within 14 days. That is our responsibility, not yours. If we reschedule, you are notified at least 14 days in advance and may opt out for a full refund.",
  },
  {
    num: "10",
    heading: "Photography and recording",
    body: "The House is a private space. No photography, video, audio recording, or live-streaming is permitted during gatherings, unless explicitly invited by the host. This protects the privacy of every person in the room. Portraits shared before each gathering are confidential and may not be shared, forwarded, screenshot, or published outside the circle.",
  },
  {
    num: "11",
    heading: "Conduct",
    body: "The Standard is our behavioural code. By participating, you agree to uphold it. The House is not a venue for commercial activity, professional solicitation, recruitment, or co-working. If you hand someone a business card at the House, you have misunderstood what this is. We reserve the right to ask anyone to step away from the circle if The Standard is breached.",
  },
  {
    num: "12",
    heading: "Travel responsibilities",
    body: "For international journeys and city escapes, you are responsible for ensuring you hold a valid passport, any required visas, and any necessary vaccinations or health documentation. The House is not liable for your inability to travel due to inadequate documentation. We strongly recommend that you obtain comprehensive travel insurance covering cancellation, medical expenses, repatriation, and personal belongings for all journeys.",
  },
  {
    num: "13",
    heading: "Our liability",
    body: "We take reasonable care to ensure every occasion is safe, well hosted, and of the standard you expect. For journeys and travel, we act as organiser and not as the direct provider of accommodation, transport, or venue services. These are delivered by third-party providers whose own terms apply. Our total liability to you is limited to the amount you have paid for the specific occasion in question. Nothing in these terms excludes or limits our liability for death or personal injury caused by our negligence, or for fraud.",
  },
  {
    num: "14",
    heading: "Your data",
    body: "We collect only the personal data we need to compose the room and to operate the House. Your profile information is shared only with confirmed attendees of gatherings you are attending. We do not sell, trade, or share your data with third parties for marketing purposes. We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. You may request access to, correction of, or deletion of your personal data at any time by writing to privacy@thehouseofclio.com.",
  },
  {
    num: "15",
    heading: "Intellectual property",
    body: "__BRAND__ name, the Muse Mark, and all original content on this website are the intellectual property of House of Clio Ltd. You may not reproduce, distribute, or create derivative works from our brand assets without written permission.",
  },
  {
    num: "16",
    heading: "Governing law",
    body: "These terms are governed by the laws of England and Wales. Disputes are subject to the exclusive jurisdiction of the courts of England and Wales. If there is a problem, we would rather resolve it in conversation than through a legal process.",
  },
];

// Replaces __BRAND__ placeholder with the BRAND_AKAN component
function ClauseBody({ text }) {
  const parts = text.split("__BRAND__");
  return (
    <p style={{ fontSize: 17, lineHeight: 1.85, color: "#1F0A2D", maxWidth: "68ch" }}>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && BRAND_AKAN}
        </span>
      ))}
    </p>
  );
}

export default function TermsPage() {
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
            Legal
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
            Terms of Participation
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(250, 244, 238, 0.82)" }}>
            {BRAND_AKAN}. Written in plain English because clarity is a form of respect.
          </p>
          <p style={{ fontSize: 14, color: "rgba(250, 244, 238, 0.6)", marginTop: 20 }}>
            Last updated: April 2026
          </p>
        </div>
      </section>

      {/* Clauses */}
      <article
        style={{
          padding: "80px clamp(20px, 5vw, 72px)",
          background: "#FAF4EE",
          color: "#1F0A2D",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {CLAUSES.map((clause) => (
            <section
              key={clause.num}
              data-clause={clause.num}
              style={{
                marginBottom: 48,
                paddingBottom: 48,
                borderBottom: "1px solid rgba(90, 53, 117, 0.12)",
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  letterSpacing: "0.15em",
                  color: "#C9956C",
                  marginBottom: 10,
                  fontWeight: 500,
                }}
              >
                {clause.num}
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(24px, 4vw, 32px)",
                  lineHeight: 1.25,
                  fontWeight: 400,
                  marginBottom: 16,
                  color: "#1F0A2D",
                }}
              >
                {clause.heading}
              </h2>
              <ClauseBody text={clause.body} />
            </section>
          ))}

          {/* Personal note */}
          <section style={{ marginTop: 80, paddingTop: 48, borderTop: "1px solid rgba(90, 53, 117, 0.2)" }}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(24px, 4vw, 32px)",
                fontStyle: "italic",
                marginBottom: 20,
                color: "#1F0A2D",
              }}
            >
              A Personal Note
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: "#1F0A2D", marginBottom: 20 }}>
              These terms exist to protect you, not to protect us from you. I wrote them the way
              I would explain them if you were sitting across from me. If anything here feels
              unclear, or if you ever feel the House has not held up its end of this agreement,
              write to me directly. I would rather hear it from you than from a lawyer.
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 20,
                fontStyle: "italic",
                color: "#1F0A2D",
                marginBottom: 6,
              }}
            >
              Gigi
            </p>
            <p style={{ fontSize: 15, color: "#3A1A4D" }}>gigi@thehouseofclio.com</p>
          </section>
        </div>
      </article>
    </main>
  );
}
