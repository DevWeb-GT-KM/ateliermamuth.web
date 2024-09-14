/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

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
  async redirects() {
    return [
      {
        source: "/nos-services",
        destination: "/fr/services",
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./i18n.ts");

export default withNextIntl(nextConfig);
