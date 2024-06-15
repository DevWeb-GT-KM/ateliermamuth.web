import { MetadataRoute } from "next";
import { getPathname } from "../navigation";
import { loadQuery } from "../sanity/lib/store";
import { SanityDocument } from "next-sanity";
import { SITEMAP_SLUGS_FR_QUERY } from "../sanity/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugsQueryFr = await loadQuery<SanityDocument[]>(
    SITEMAP_SLUGS_FR_QUERY
  );
  const slugsFr = slugsQueryFr.data;

  const baseUrl = "https://ateliermamuth.vercel.app/fr";

  const projectsPageLink = getPathname({
    locale: "fr",
    href: {
      pathname: "/projects",
    },
  });

  const projectPagesLinks = slugsFr.filter((item) => item._type === "project");

  const servicesPageLink = getPathname({
    locale: "fr",
    href: {
      pathname: "/services",
    },
  });

  const servicePagesLinks = slugsFr.filter((item) => item._type === "service");

  const faqPageLink = getPathname({
    locale: "fr",
    href: {
      pathname: "/faq",
    },
  });

  const blogPageLink = getPathname({
    locale: "fr",
    href: {
      pathname: "/blog",
    },
  });

  const articlePagesLink = slugsFr.filter((item) => item._type === "article");

  const contactPageLink = getPathname({
    locale: "fr",
    href: {
      pathname: "/contact",
    },
  });

  const contactFormPageLink = getPathname({
    locale: "fr",
    href: {
      pathname: "/contact-form",
    },
  });

  return [
    {
      url: baseUrl,
    },
    {
      url: baseUrl + projectsPageLink,
    },
    {
      url: baseUrl + servicesPageLink,
    },
    {
      url: baseUrl + faqPageLink,
    },
    {
      url: baseUrl + blogPageLink,
    },
    {
      url: baseUrl + contactPageLink,
    },
    {
      url: baseUrl + contactFormPageLink,
    },
    ...projectPagesLinks.map((item) => ({
      url: baseUrl + projectsPageLink + `/${item.slug.current}`,
      lastModified: item._updatedAt,
    })),
    ...servicePagesLinks.map((item) => ({
      url: baseUrl + servicesPageLink + `/${item.slug.current}`,
      lastModified: item._updatedAt,
    })),
    ...articlePagesLink.map((item) => ({
      url: baseUrl + blogPageLink + `/${item.slug.current}`,
      lastModified: item._updatedAt,
    })),
  ];
}
