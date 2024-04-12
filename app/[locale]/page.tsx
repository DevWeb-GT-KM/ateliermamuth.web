import "./page.scss";
import { Metadata } from "next";
import { QueryParams, SanityDocument } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";

import { HomePageCarousel } from "./components/HomePageCarousel";
import { loadQuery } from "../../sanity/lib/store";
import { HOME_PAGE_QUERY_BY_LANG } from "../../sanity/lib/queries";
import { draftMode } from "next/headers";

export const metadata: Metadata = {
  title: "Atelier Mamuth",
  description:
    "Atelier Mamuth offers a planning service for your design, interior and exterior architecture projects.",
};

type HomePageProps = {
  params: QueryParams;
};

const HomePage: React.FC<HomePageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const initial = await loadQuery<SanityDocument[]>(
    HOME_PAGE_QUERY_BY_LANG,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return <HomePageCarousel data={initial.data} />;
};

export default HomePage;
