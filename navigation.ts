import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const FRENCH_LOCALE = "fr";
export const ENGLISH_LOCALE = "en";

export const locales = [FRENCH_LOCALE, ENGLISH_LOCALE] as const;
export const localePrefix = "always";

export const pathnames = {
  "/": "/",

  "/projects": { fr: "/projets", en: "/projects" },

  "/projects/[slug]": {
    fr: "/projets/[slug]",
    en: "/projects/[slug]",
  },

  "/services": {
    fr: "/services",
    en: "/services",
  },

  "/services/[slug]": {
    fr: "/services/[slug]",
    en: "/services/[slug]",
  },

  "/about-us": {
    fr: "/a-propos",
    en: "/about-us",
  },

  "/contact": {
    fr: "/contact",
    en: "/contact",
  },

  "/contact-form": {
    fr: "/formulaire-contact",
    en: "/contact-form",
  },

  "/blog": {
    fr: "/blogue",
    en: "/blog",
  },

  "/blog/[slug]": {
    fr: "/blogue/[slug]",
    en: "/blog/[slug]",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
