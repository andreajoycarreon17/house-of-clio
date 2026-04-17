import { BRAND_AKAN } from "@/lib/brand";

const SECTIONS = [
  {
    num: "01",
    heading: "Who we are",
    body: "This privacy policy describes how House of Clio Ltd collects, uses, and protects your personal data. House of Clio Ltd is being incorporated in England and Wales. Company number will appear on incorporation. Registered office address will be updated upon incorporation. We are the data controller for the personal data we hold about you. Contact us at privacy@thehouseofclio.com for any privacy-related question.",
  },
  {
    num: "02",
    heading: "What data we collect",
    body: "We collect only what we need to compose the room and to operate the House. This includes your name, email address, city, and the free-text answers you provide in the Introduce Yourself form. When you book a gathering, we also collect payment information through our secure payment provider (Stripe). We do not store your full card details on our servers. For journeys and travel experiences, we additionally collect passport details, dietary requirements, and emergency contact information.",
  },
  {
    num: "03",
    heading: "How we use your data",
    body: "We use your personal data to compose the room around you, to communicate with you about gatherings you are attending, to process payments, to share guest portraits with other confirmed attendees before each gathering, and to send you essential communications about the House. We do not send marketing emails unless you explicitly opt in.",
  },
  {
    num: "04",
    heading: "Legal basis for processing",
    body: "Our lawful basis for processing your personal data under UK GDPR is: contract (to fulfil our obligations when you book a gathering), legitimate interest (to operate the House and protect the quality of the room), and consent (for any marketing communications you have explicitly opted into).",
  },
  {
    num: "05",
    heading: "Who we share your data with",
    body: "Your guest portrait is shared only with confirmed attendees of the specific gathering you are attending, and only for the purpose of composition. We do not sell, trade, or share your data with third parties for marketing purposes. We use the following processors: Stripe (payments), Resend (email delivery), Supabase (database), and Vercel (website hosting). Each processor is bound by its own data protection agreement.",
  },
  {
    num: "06",
    heading: "International transfers",
    body: "Some of our processors (including Stripe, Vercel, and Supabase) may store or process data outside the United Kingdom. Where personal data leaves the UK, we ensure that appropriate safeguards are in place, including standard contractual clauses approved by the UK Information Commissioner.",
  },
  {
    num: "07",
    heading: "How long we keep your data",
    body: "We keep your data for as long as you are an active participant and for a reasonable period afterwards to support our accounting and legal obligations. If you request deletion, we will remove your data within 30 days unless legal obligations require us to retain it (for example, booking and payment records for tax purposes).",
  },
  {
    num: "08",
    heading: "Your rights under UK GDPR",
    body: "You have the right to access your personal data, to request correction of inaccurate data, to request deletion of your data, to object to processing, to restrict processing, to data portability, and to withdraw consent at any time. To exercise any of these rights, write to privacy@thehouseofclio.com. We will respond within 1 calendar month.",
  },
  {
    num: "09",
    heading: "Cookies",
    body: "We use essential cookies required for the website to function, and privacy-respecting analytics to understand how the site is used. We do not use advertising cookies. We do not retarget. We do not track you across other sites. You can decline analytics cookies in your browser settings.",
  },
  {
    num: "10",
    heading: "Security",
    body: "We take reasonable technical and organisational measures to protect your personal data against loss, unauthorised access, or misuse. All payment processing is handled by Stripe, a PCI-DSS Level 1 certified provider. Our website uses HTTPS encryption. Database access is restricted to authorised personnel only.",
  },
  {
    num: "11",
    heading: "Complaints",
    body: "If you have a complaint about how we handle your personal data, please write to privacy@thehouseofclio.com and we will respond within 14 days. You also have the right to lodge a complaint with the Office of the Information Commissioner at ico.org.uk.",
  },
  {
    num: "12",
    heading: "Changes to this policy",
    body: "We may update this privacy policy from time to time. Changes take effect when published on this page. We will notify you of material changes by email where possible.",
  },
];

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(250, 244, 238, 0.82)" }}>
            Your data belongs to you. {BRAND_AKAN} complies with UK GDPR and the Data
            Protection Act 2018.
          </p>
          <p style={{ fontSize: 14, color: "rgba(250, 244, 238, 0.6)", marginTop: 20 }}>
            Last updated: 17 April 2026
          </p>
        </div>
      </section>

      {/* Sections */}
      <article
        style={{
          padding: "80px clamp(20px, 5vw, 72px)",
          background: "#FAF4EE",
          color: "#1F0A2D",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {SECTIONS.map((section) => (
            <section
              key={section.num}
              data-clause={section.num}
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
                {section.num}
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
                {section.heading}
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.85, color: "#1F0A2D", maxWidth: "68ch" }}>
                {section.body}
              </p>
            </section>
          ))}

          {/* Personal note */}
          <section
            style={{
              marginTop: 32,
              paddingTop: 48,
              borderTop: "1px solid rgba(90, 53, 117, 0.2)",
            }}
          >
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
              I built the House because people deserve a space where they can be honest without
              worrying about where that honesty ends up. Your data is part of that promise. If
              you ever feel it has been broken, I want to hear about it personally.
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
            <p style={{ fontSize: 15, color: "#3A1A4D" }}>privacy@thehouseofclio.com</p>
          </section>
        </div>
      </article>
    </main>
  );
}
