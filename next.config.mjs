/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  images: {
    minimumCacheTTL: 60 * 60 * 24, // 24h — prevents stale optimized URLs across navigations
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
