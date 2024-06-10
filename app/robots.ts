import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/studio/",
    },
    sitemap: "https://ateliermamuth.vercel.app/sitemap.xml",
    host: "https://ateliermamuth.vercel.app",
  };
}
