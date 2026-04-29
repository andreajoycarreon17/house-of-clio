export const metadata = {
  title: "Glossary | The House of Clio",
  description:
    "Definitions of the terms used by The House of Clio, a Composed Society based in London.",
  alternates: {
    canonical: "https://thehouseofclio.com/glossary",
  },
  openGraph: {
    title: "Glossary | The House of Clio",
    description:
      "Definitions of the terms used by The House of Clio, a Composed Society based in London.",
    url: "https://thehouseofclio.com/glossary",
    type: "website",
    images: [{ url: "https://thehouseofclio.com/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glossary | The House of Clio",
    description: "Definitions of the terms used by The House of Clio, a Composed Society based in London.",
    images: ["https://thehouseofclio.com/og-default.png"],
  },
};

export default function Layout({ children }) {
  return children;
}
