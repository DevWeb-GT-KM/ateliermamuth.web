import { QueryParams, SanityDocument } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";
import { draftMode } from "next/headers";

import { loadQuery } from "@/../sanity/lib/store";
import { AboutUsPageContainer } from "./components/AboutUsPageContainer";
import {
  ABOUT_US_PAGE_METADATA_QUERY_BY_LANG,
  ABOUT_US_PAGE_QUERY_BY_LANG,
} from "@/../sanity/lib/queries";
import { AboutUsPageContainerPreview } from "./components/AboutPageContainerPreview";

export async function generateMetadata({ params }: any) {
  const initial = await loadQuery<SanityDocument>(
    ABOUT_US_PAGE_METADATA_QUERY_BY_LANG,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return {
    title: initial.data[0].metadata.metaTitle,
    description: initial.data[0].metadata.metaDescription,
  };
}

type AboutUsPageProps = {
  params: QueryParams;
};

const AboutUsPage: React.FC<AboutUsPageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const { isEnabled } = draftMode();
  const initial = await loadQuery<SanityDocument>(
    ABOUT_US_PAGE_QUERY_BY_LANG,
    params,
    {
      perspective: isEnabled ? "previewDrafts" : "published",
    }
  );

  return isEnabled ? (
    <AboutUsPageContainerPreview initial={initial} params={params} />
  ) : (
    <AboutUsPageContainer data={initial.data} />
  );
};

export default AboutUsPage;
