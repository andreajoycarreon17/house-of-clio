import "./globals.css";
import SiteShell from "@/components/layout/site-shell";
import { siteMetadata } from "@/lib/brand";
import { cormorant, jost } from "@/lib/fonts";

export const metadata = siteMetadata;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
