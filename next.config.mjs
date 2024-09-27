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
  // async redirects() {
  //   return [
  //     {
  //       source: "/nos-services",
  //       destination: "/fr/services",
  //       permanent: true,
  //     },
  //     {
  //       source: "/portfolio",
  //       destination: "/fr/projets",
  //       permanent: true,
  //     },
  //     {
  //       source: "/contact",
  //       destination: "/fr/contact",
  //       permanent: true,
  //     },
  //     {
  //       source: "/a-propos",
  //       destination: "/fr/a-propos",
  //       permanent: true,
  //     },
  //     {
  //       source: "/mmfm",
  //       destination: "/fr/projets/mmfm",
  //       permanent: true,
  //     },
  //     {
  //       source: "/winner-dinner",
  //       destination: "/fr/projets/winner-dinner",
  //       permanent: true,
  //     },
  //     {
  //       source: "/couleur-plateau",
  //       destination: "/fr/projets/couleur-plateau",
  //       permanent: true,
  //     },
  //     {
  //       source: "/luma-cabin",
  //       destination: "/fr/projets/luma-cabin",
  //       permanent: true,
  //     },
  //     {
  //       source: "/zz-countertop",
  //       destination: "/fr/projets/zz-countertop",
  //       permanent: true,
  //     },
  //     {
  //       source: "/eau-claire-sur-terreau",
  //       destination: "/fr/projets/eau-claire-sur-terreau",
  //       permanent: true,
  //     },
  //     {
  //       source: "/codem-cje",
  //       destination: "/fr/projets/codem-cje",
  //       permanent: true,
  //     },
  //     {
  //       source: "/eau-claire-sur-terreau",
  //       destination: "/fr/projets/eau-claire-sur-terreau",
  //       permanent: true,
  //     },
  //   ];
  // },
};

const withNextIntl = createNextIntlPlugin("./i18n.ts");

export default withNextIntl(nextConfig);
