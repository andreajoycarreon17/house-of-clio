import "./globals.css";
import SiteShell from "@/components/layout/site-shell";
import { siteMetadata } from "@/lib/brand";
import { cormorant, jost } from "@/lib/fonts";

export const metadata = siteMetadata;

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The House of Clio",
  url: "https://thehouseofclio.com",
  logo: "https://thehouseofclio.com/markv8white.png",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}