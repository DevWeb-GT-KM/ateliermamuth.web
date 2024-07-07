import "./globals.scss";

import localFont from "next/font/local";
import type { Metadata } from "next";
import { QueryParams, SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import { unstable_setRequestLocale } from "next-intl/server";

import { FRENCH_LOCALE } from "@/../navigation";
import favIcon from "../common/assets/favicon.ico";
import { Footer } from "@/common/components/footer/Footer";
import { loadQuery } from "@/../sanity/lib/store";
import { FOOTER_QUERY_BY_LANG, NAV_BAR_BY_LANG } from "@/../sanity/lib/queries";
import { NavBar } from "@/common/components/navBar/NavBar";
import { PageOverlay } from "./components/pageOverlay/PageOverlay";
import { PageOverlayProvider } from "./components/pageOverlay/PageOverlayContext";
import { LiveVisualEditing } from "@/common/components/LiveVisualEditing";
import { CookiesConsent } from "@/common/components/cookies/CookiesConsent";
import { CookiesConsentContextProvider } from "@/common/contexts/CookiesConsentContextProvider";
import { ServicesContextProvider } from "@/common/contexts/ServicesContextProvider";

const saansTrial = localFont({
  src: "../common/assets/fonts/SaansTRIAL-Regular.ttf",
  display: "swap",
  variable: "--font-saans-trial",
});

const centuryOldStyleStd = localFont({
  src: "../common/assets/fonts/CenturyOldStyleStd-Regular.otf",
  display: "swap",
  variable: "--font-century-old-style-std",
});

export const dynamicParams = false;

export const META_TITLE_SUFFIX = " | Atelier Mamuth";

export const metadata: Metadata = {
  title: {
    template: `%s${META_TITLE_SUFFIX}`,
    default: "Atelier Mamuth",
  },
  icons: [
    {
      rel: "icon",
      sizes: "32x32",
      url: favIcon.src,
      type: "image/x-icon",
    },
  ],
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: QueryParams;
};

export async function generateStaticParams() {
  return [{ locale: FRENCH_LOCALE }];
}

const RootLayout: React.FC<RootLayoutProps> = async ({ children, params }) => {
  unstable_setRequestLocale(params.locale);

  const footerData = await loadQuery<SanityDocument[]>(
    FOOTER_QUERY_BY_LANG,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  const navBarData = await loadQuery<SanityDocument[]>(
    NAV_BAR_BY_LANG,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return (
    <PageOverlayProvider>
      <ServicesContextProvider>
        <CookiesConsentContextProvider
          config={{
            containerId: "GTM-WKFFMBVJ",
          }}
        >
          <html lang={params.locale}>
            <head>
              <meta
                name="google-site-verification"
                content="YM-m5Xn91Suf6XzbrBYTR_gU98NqtHzHLUxVLf-x95c"
              />
            </head>
            <body
              className={`${saansTrial.variable} ${centuryOldStyleStd.variable}`}
            >
              <PageOverlay />
              <header>
                <NavBar data={navBarData.data} />
              </header>
              <main>
                {children}
                <CookiesConsent />
              </main>
              <footer>
                <Footer data={footerData.data} />
              </footer>
              {draftMode().isEnabled && <LiveVisualEditing />}
            </body>
          </html>
        </CookiesConsentContextProvider>
      </ServicesContextProvider>
    </PageOverlayProvider>
  );
};

export default RootLayout;
