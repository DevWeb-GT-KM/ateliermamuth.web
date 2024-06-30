import { QueryParams, SanityDocument } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";
import { draftMode } from "next/headers";

import { loadQuery } from "@/../sanity/lib/store";
import {
  HOME_PAGE_METADATA_QUERY_BY_LANG,
  HOME_PAGE_QUERY_BY_LANG,
} from "../../sanity/lib/queries";
import { HomePageContainer } from "./components/HomePageContainer";
import { HomePageContainerPreview } from "./components/HomePageContainerPreview";
import { META_TITLE_SUFFIX } from "./layout";

export async function generateMetadata({ params }: any) {
  const initial = await loadQuery<SanityDocument>(
    HOME_PAGE_METADATA_QUERY_BY_LANG,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return {
    title: `${initial.data[0].metadata.metaTitle}${META_TITLE_SUFFIX}`,
    description: initial.data[0].metadata.metaDescription,
  };
}

type HomePageProps = {
  params: QueryParams;
};

const HomePage: React.FC<HomePageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const initial = await loadQuery<SanityDocument>(
    HOME_PAGE_QUERY_BY_LANG,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return draftMode().isEnabled ? (
    <HomePageContainerPreview initial={initial} params={params} />
  ) : (
    <HomePageContainer data={initial.data} />
  );
};

export default HomePage;
