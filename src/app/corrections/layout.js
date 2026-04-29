export const metadata = {
  title: "Corrections Policy | The House of Clio",
  description:
    "The House of Clio is committed to factual accuracy. Submit a correction request to press@thehouseofclio.com.",
  alternates: { canonical: "https://thehouseofclio.com/corrections" },
  openGraph: {
    title: "Corrections Policy | The House of Clio",
    description: "The House of Clio is committed to factual accuracy. Submit a correction request to press@thehouseofclio.com.",
    url: "https://thehouseofclio.com/corrections",
    images: [{ url: "https://thehouseofclio.com/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corrections Policy | The House of Clio",
    description: "The House of Clio is committed to factual accuracy. Submit a correction request to press@thehouseofclio.com.",
    images: ["https://thehouseofclio.com/og-default.png"],
  },
};

export default function Layout({ children }) {
  return children;
}
