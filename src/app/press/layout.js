export const metadata = {
  title: "Press | The House of Clio",
  description:
    "Press resources and media contact for The House of Clio. For press enquiries: press@thehouseofclio.com",
  alternates: { canonical: "https://thehouseofclio.com/press" },
  openGraph: {
    title: "Press | The House of Clio",
    description: "Press resources and media contact for The House of Clio. For press enquiries: press@thehouseofclio.com",
    url: "https://thehouseofclio.com/press",
    images: [{ url: "https://thehouseofclio.com/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Press | The House of Clio",
    description: "Press resources and media contact for The House of Clio. For press enquiries: press@thehouseofclio.com",
    images: ["https://thehouseofclio.com/og-default.png"],
  },
};

export default function Layout({ children }) {
  return children;
}
