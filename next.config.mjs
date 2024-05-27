/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apicdn.sanity.io",
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

const withNextIntl = createNextIntlPlugin("./i18n.ts");

export default withNextIntl(nextConfig);
