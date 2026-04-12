import { QueryParams, SanityDocument } from "next-sanity";
import { setRequestLocale } from "next-intl/server";
import { draftMode } from "next/headers";

import { loadQuery } from "@/../sanity/lib/store";
import {
  HOME_PAGE_METADATA_QUERY_BY_LANG,
  HOME_PAGE_QUERY_BY_LANG,
} from "../../sanity/lib/queries";
import { HomePageContainer } from "./components/HomePageContainer";
import { HomePageContainerPreview } from "./components/HomePageContainerPreview";
import { META_TITLE_SUFFIX } from "./layout";

export async function generateMetadata({ params }: { params: Promise<QueryParams> }) {
  const resolvedParams = await params;
  const { isEnabled } = await draftMode();
  const initial = await loadQuery<SanityDocument>(
    HOME_PAGE_METADATA_QUERY_BY_LANG,
    resolvedParams,
    {
      perspective: isEnabled ? "previewDrafts" : "published",
    }
  );

  return {
    title: `${initial.data[0].metadata.metaTitle}${META_TITLE_SUFFIX}`,
    description: initial.data[0].metadata.metaDescription,
  };
}

type HomePageProps = {
  params: Promise<QueryParams>;
};

const HomePage: React.FC<HomePageProps> = async ({ params }) => {
  const resolvedParams = await params;
  setRequestLocale(resolvedParams.locale);

  const { isEnabled } = await draftMode();
  const initial = await loadQuery<SanityDocument>(
    HOME_PAGE_QUERY_BY_LANG,
    resolvedParams,
    {
      perspective: isEnabled ? "previewDrafts" : "published",
    }
  );

  return isEnabled ? (
    <HomePageContainerPreview initial={initial} params={resolvedParams} />
  ) : (
    <HomePageContainer data={initial.data} />
  );
};

export default HomePage;
