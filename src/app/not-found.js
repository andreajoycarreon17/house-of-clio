import Link from "next/link";

export const metadata = {
  title: "Page Not Found | The House of Clio",
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      style={{
        background: "#1A0820",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(40px, 8vw, 80px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Muse Mark watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.04,
          pointerEvents: "none",
          width: "min(520px, 90vw)",
          height: "min(520px, 90vw)",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 320 320"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle cx="160" cy="160" r="160" fill="#1A0820" />
          <circle cx="160" cy="160" r="153" stroke="#C9956C" strokeWidth="0.5" fill="none" opacity="0.18" />
          <circle cx="160" cy="160" r="108" stroke="#C9956C" strokeWidth="1.8" fill="none" />
          <circle cx="160" cy="160" r="72" stroke="#C9956C" strokeWidth="0.5" fill="none" opacity="0.18" />
          <line x1="160" y1="63" x2="160" y2="46" stroke="#C9956C" strokeWidth="2" strokeLinecap="round" />
          <line x1="257" y1="160" x2="274" y2="160" stroke="#C9956C" strokeWidth="2" strokeLinecap="round" />
          <line x1="160" y1="257" x2="160" y2="274" stroke="#C9956C" strokeWidth="2" strokeLinecap="round" />
          <line x1="63" y1="160" x2="46" y2="160" stroke="#C9956C" strokeWidth="2" strokeLinecap="round" />
          <circle cx="160" cy="52" r="3.5" fill="#C9956C" opacity="0.9" />
          <circle cx="268" cy="160" r="3.5" fill="#C9956C" opacity="0.9" />
          <circle cx="160" cy="268" r="3.5" fill="#C9956C" opacity="0.9" />
          <circle cx="52" cy="160" r="3.5" fill="#C9956C" opacity="0.9" />
          <path d="M160,58 L220,214 L100,214 Z" stroke="#C9956C" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
          <path d="M160,250 L68,130 L252,130 Z" stroke="#C9956C" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
          <path d="M160,76 C197,110 197,210 160,244 C123,210 123,110 160,76 Z" stroke="#C9956C" strokeWidth="1.6" fill="none" />
          <path d="M160,110 C179,132 179,188 160,210 C141,188 141,132 160,110 Z" stroke="#C9956C" strokeWidth="0.8" fill="none" opacity="0.35" />
          <circle cx="160" cy="160" r="4.5" fill="#C9956C" opacity="0.92" />
          <circle cx="160" cy="160" r="3" fill="#C9956C" opacity="0.9" />
          <circle cx="160" cy="62" r="2.5" fill="#C9956C" opacity="0.85" />
        </svg>
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: 560,
        }}
      >
        {/* Small Muse Mark above the number */}
        <svg
          aria-hidden="true"
          width="48"
          height="48"
          viewBox="0 0 320 320"
          fill="none"
          style={{ marginBottom: 28, opacity: 0.7 }}
        >
          <circle cx="160" cy="160" r="108" stroke="#C9956C" strokeWidth="1.8" fill="none" />
          <path d="M160,58 L220,214 L100,214 Z" stroke="#C9956C" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
          <path d="M160,250 L68,130 L252,130 Z" stroke="#C9956C" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
          <path d="M160,76 C197,110 197,210 160,244 C123,210 123,110 160,76 Z" stroke="#C9956C" strokeWidth="1.6" fill="none" />
          <circle cx="160" cy="160" r="4.5" fill="#C9956C" opacity="0.92" />
        </svg>

        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#C9956C",
            marginBottom: 20,
          }}
        >
          404
        </p>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "#FAF4EE",
            marginBottom: 20,
          }}
        >
          The room you are looking for
          <br />
          <em style={{ color: "#C9956C" }}>does not exist.</em>
        </h1>

        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: 14,
            fontWeight: 300,
            lineHeight: 1.8,
            color: "rgba(250, 244, 238, 0.55)",
            marginBottom: 40,
            maxWidth: 380,
          }}
        >
          Every room at the House is composed with care. This one was not composed at all.
        </p>

        {/* Divider */}
        <div
          style={{
            width: 40,
            height: 1,
            background: "linear-gradient(90deg, transparent, #C9956C60, transparent)",
            marginBottom: 40,
          }}
        />

        <Link
          href="/"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#C9956C",
            textDecoration: "none",
            border: "1px solid rgba(201, 149, 108, 0.3)",
            padding: "14px 28px",
            display: "inline-block",
            transition: "border-color 0.3s, background 0.3s",
          }}
        >
          Return to The House of Clio
        </Link>
      </div>
    </main>
  );
}
