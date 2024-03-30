import { NextResponse } from "next/server";

// TODO - Valider le code ici (configurer le getLocale (aller lire si des cookies ont étés enregistrés pour la locale préférée), la configuration exportée en bas, etc)
let locales = ["fr", "en"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request: any) {
  return "fr";
}

export function middleware(request: any) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // "/((?!_next).*)",
    "/((?!_next|studio).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
