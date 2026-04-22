import { BRAND_AKAN } from "@/lib/brand";

const FAQ = [
  {
    q: "Is there a fee to join?",
    a: "No. There is no membership fee, no subscription, and no joining charge. You pay only for the gatherings you choose to attend. Each gathering is priced individually and the price is shared with you when you book.",
  },
  {
    q: "Do I need to know someone to join?",
    a: "No. You can introduce yourself directly through the Introduce Yourself form. Most people who are inside the House today arrived the same way: curious, slightly nervous, and reading the website.",
  },
  {
    q: "Will I know anyone when I arrive?",
    a: "Before every gathering, you receive a written portrait of every person in the room. Not their job title. What fascinates them. What they carry into a conversation. By the time you arrive, you already have something real to ask. You are not walking into a lounge hoping to meet someone interesting. The room has already been composed around you.",
  },
  {
    q: "What is The House of Clio?",
    a: "The House of Clio is a private cultural house in London. It hosts composed private dinners, supper lectures, cycling journeys, city escapes, and Grand Journeys. Every guest is selected. Every seat is placed by hand. Every person receives a written portrait of the room before they arrive. There is no membership fee. You pay only for the rooms you attend. Composed by Gigi Brown.",
  },
  {
    q: "How is The House of Clio different from a private members club?",
    a: "A private members club is a building. The House of Clio is a room. A building serves the same hundred people in the same hundred spaces. A composed room places eighteen specific people beside one another for one evening that will never be repeated. You are not a member. You are placed.",
  },
  {
    q: "How do I meet interesting people in London through The House of Clio?",
    a: "You introduce yourself through the website. A person reads what you wrote. If there is alignment, you are invited to a gathering. Before you arrive, you receive a portrait of every person at your table. A host greets you by name. The person beside you was chosen. The first gathering is usually The First House, which is where the Circle forms.",
  },
  {
    q: "What is a composed gathering?",
    a: "A composed gathering is a dinner, lecture, journey, or walk where every guest is selected in advance, every portrait is written by hand, and every seat is placed on purpose. Nothing is left to chance. The host has already decided who you should meet before you arrive.",
  },
  {
    q: "Where is The House of Clio based?",
    a: "London. Dublin is the second city, opening in December 2026. Further cities will follow as the right hosts and the right density of considered people emerge in each.",
  },
  {
    q: "Who founded The House of Clio?",
    a: "Gigi Brown, born in Ghana and based in London, is the founder and host. She has twenty years of experience composing rooms across three continents in tourism, cultural production, and hospitality.",
  },
  {
    q: "What kind of people are in the room?",
    a: "People from technology, creative industries, medicine, law, academia, finance, and the arts. People who notice things. People with a point of view. People who are curious, considered, and tired of rooms that go nowhere. The first room at the House is not about job titles.",
  },
  {
    q: "How are people selected?",
    a: "A person reads every introduction. Not a team. Not an algorithm. One person. Selection is based on alignment with the room being composed, not credentials or wealth. Not everyone who asks is placed. That is what protects the quality of the room.",
  },
  {
    q: "What happens after I write to you?",
    a: "Your introduction is read personally within seventy two hours. If there is alignment, we reply and begin a conversation. If there is not, we will say so clearly. Either way, you hear from a person, not a form letter.",
  },
  {
    q: "How often does The House of Clio meet?",
    a: "The seasonal programme runs across twelve formats. The Returning Table meets every two to three weeks. The Walk runs fortnightly. Together the programme creates over forty touchpoints per year. You attend as often or as little as you wish.",
  },
  {
    q: "I am an introvert. Is this for me?",
    a: "Yes. The House of Clio was designed for people who find conventional social events unbearable. The placement does the heavy lifting. You are not walking into a room and hoping to meet someone interesting. The host has already placed you beside someone specific. You arrive with something real to ask. Most introverts say this is the first social format that has ever worked for them.",
  },
  {
    q: "What is a supper lecture?",
    a: "A supper lecture is a gathering where a formidable mind speaks for thirty minutes and then stays for dinner with twenty-eight guests. The talk gives the room a shared reference. The dinner is where the real conversation happens.",
  },
  {
    q: "How is my personal information handled?",
    a: "Your profile is shared only with confirmed attendees of gatherings you are attending, and only for the purpose of composition. We do not sell, trade, or share your data with third parties for marketing. We comply with UK GDPR. You may request access, correction, or deletion of your data at any time.",
  },
  {
    q: "How much does it cost?",
    a: "Each gathering has its own price reflecting the venue, the hosting, and the composition. Prices are confirmed in writing at the time of booking and shared privately after you introduce yourself. There is no membership fee. You pay only for the rooms you attend.",
  },
  {
    q: "Why is there no fixed building?",
    a: "A building would cap the ambition. A club with a building serves the same hundred people in the same hundred rooms. The House of Clio travels to the right venue for the right evening. The composition is the product, not the address.",
  },
  {
    q: "What if the House is not for me?",
    a: "You may step away at any time. There is no contract, no obligation, and no penalty. If you prepay for a gathering and choose not to attend, the cancellation policy in the Terms of Participation applies.",
  },
];

// JSON-LD FAQPage schema for AI answer engines
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function QuestionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main id="main-content">
        {/* Hero */}
        <section
          style={{
            padding: "140px clamp(20px, 5vw, 72px) 80px",
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
              Questions
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
              What people ask before they arrive.
            </h1>
            <p
              data-speakable="true"
              style={{
                fontSize: 19,
                lineHeight: 1.7,
                color: "rgba(250, 244, 238, 0.85)",
                maxWidth: "60ch",
              }}
            >
              {BRAND_AKAN} is a private cultural house in London offering
              composed private dinners, supper lectures, and journeys. These
              are the questions people ask before they introduce themselves.
              The answers are direct. If something is not covered here, the
              contact page is open.
            </p>
          </div>
        </section>

        {/* FAQ list — every answer visible in HTML for AI extraction */}
        <section
          style={{
            padding: "80px clamp(20px, 5vw, 72px)",
            background: "#FAF4EE",
            color: "#1F0A2D",
          }}
        >
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            {FAQ.map((item, i) => (
              <article
                key={i}
                itemScope
                itemType="https://schema.org/Question"
                style={{
                  marginBottom: 48,
                  paddingBottom: 48,
                  borderBottom:
                    i < FAQ.length - 1
                      ? "1px solid rgba(90, 53, 117, 0.15)"
                      : "none",
                }}
              >
                <h2
                  itemProp="name"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(24px, 4vw, 32px)",
                    lineHeight: 1.25,
                    fontWeight: 400,
                    marginBottom: 20,
                    color: "#1F0A2D",
                  }}
                >
                  {item.q}
                </h2>
                <div
                  itemProp="acceptedAnswer"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <p
                    itemProp="text"
                    style={{
                      fontSize: 17,
                      lineHeight: 1.85,
                      color: "#3A1A4D",
                      maxWidth: "68ch",
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </article>
            ))}

            {/* Glossary link */}
            <div
              style={{
                paddingTop: 40,
                borderTop: "1px solid rgba(90,53,117,.12)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(16px,3vw,20px)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "#3A1A4D",
                  marginBottom: 16,
                }}
              >
                Unfamiliar with a term?
              </p>
              <a
                href="/glossary"
                style={{
                  fontFamily: "var(--font-jost), sans-serif",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: ".25em",
                  textTransform: "uppercase",
                  color: "#C9956C",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(201,149,108,.4)",
                  paddingBottom: 3,
                }}
              >
                Read the glossary of terms
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
