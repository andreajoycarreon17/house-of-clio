/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  images: {
    minimumCacheTTL: 60 * 60 * 24,
    deviceSizes: [640, 750, 900, 1080, 1400],
  },
};

export default nextConfig;
