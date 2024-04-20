/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
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
    additionalData: `
      @import "./app/common/scss/variables";
      @import "./app/common/scss/common";
    `,
  },
};

export default nextConfig;
