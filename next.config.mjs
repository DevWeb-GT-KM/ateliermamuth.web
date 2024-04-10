/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  experimental: {
    taint: true,
  },
  sassOptions: {
    additionalData: `@import "./app/common/scss/variables";`,
  },
};

export default nextConfig;
