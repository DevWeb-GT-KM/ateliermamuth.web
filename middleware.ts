import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, pathnames, FRENCH_LOCALE } from "./navigation";

export default createMiddleware({
  defaultLocale: FRENCH_LOCALE,
  localePrefix,
  locales,
  pathnames,
});

// TODO - Valider la config (prise sur https://stackoverflow.com/questions/76871896/i-have-a-problem-with-my-middleware-in-next-js/76873535#76873535)
export const config = {
  // Match only internationalized pathnames
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - studio (CMS)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|studio|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
