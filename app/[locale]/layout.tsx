import "./globals.scss";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { QueryParams, SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import { unstable_setRequestLocale } from "next-intl/server";

import { LiveVisualEditing } from "../common/components/LiveVisualEditing";
import { FRENCH_LOCALE } from "@/../navigation";
import favIcon from "../common/assets/favicon.ico";
import { Footer } from "@/common/components/footer/Footer";
import { loadQuery } from "@/../sanity/lib/store";
import { FOOTER_QUERY_BY_LANG } from "../../sanity/lib/queries";

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

export const metadata: Metadata = {
  title: "Generic CMS title",
  description: "Generic CMS description",
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

  const initial = await loadQuery<SanityDocument[]>(
    FOOTER_QUERY_BY_LANG,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return (
    <html lang={params.locale}>
      <body className={`${saansTrial.variable} ${centuryOldStyleStd.variable}`}>
        {/* <header>
          <nav>
            <h1>NavBar</h1>
          </nav>
        </header> */}
        <main>{children}</main>
        <footer>
          <Footer data={initial.data} />
        </footer>
        {draftMode().isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  );
};

export default RootLayout;
