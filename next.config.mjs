/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  async redirects() {
    return [
      // Page renames
      { source: "/the-house", destination: "/about", statusCode: 301 },
      { source: "/house", destination: "/about", statusCode: 301 },
      { source: "/programme", destination: "/gatherings", statusCode: 301 },
      { source: "/programme/:path*", destination: "/gatherings/:path*", statusCode: 301 },
      { source: "/exchange", destination: "/gatherings", statusCode: 301 },
      { source: "/questions", destination: "/faq", statusCode: 301 },
      { source: "/apply", destination: "/introduce-yourself", statusCode: 301 },
      { source: "/founder", destination: "/about/gigi-brown", statusCode: 301 },
      { source: "/the-circle", destination: "/circle", statusCode: 301 },
      // Blog → Journal
      { source: "/blog", destination: "/journal", statusCode: 301 },
      { source: "/blog/:slug", destination: "/journal/:slug", statusCode: 301 },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  images: {
    minimumCacheTTL: 60 * 60 * 24,
    qualities: [75, 88],
    deviceSizes: [640, 750, 900, 1080, 1400],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};
 
export default nextConfig;