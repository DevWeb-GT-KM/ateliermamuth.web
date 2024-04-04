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
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
