import "./globals.scss";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { QueryParams } from "next-sanity";
import { draftMode } from "next/headers";
import { unstable_setRequestLocale } from "next-intl/server";

import { LiveVisualEditing } from "../common/components/LiveVisualEditing";
import { FRENCH_LOCALE } from "@/../navigation";
import favIcon from "../common/assets/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

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

const RootLayout: React.FC<RootLayoutProps> = ({ children, params }) => {
  unstable_setRequestLocale(params.locale);

  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <header>
          <nav style={{ border: "2px solid green", minHeight: "100px" }}>
            <p>NavBar</p>
          </nav>
        </header>
        <main>{children}</main>
        <footer
          style={{
            border: "2px solid red",
            minHeight: "100px",
            verticalAlign: "bottom",
          }}
        >
          Footer
        </footer>
        {draftMode().isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  );
};

export default RootLayout;
