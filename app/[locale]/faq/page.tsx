import { QueryParams, SanityDocument } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";
import { loadQuery } from "@/../sanity/lib/store";
import { draftMode } from "next/headers";
import {
  FAQ_PAGE_METADATA_QUERY_BY_LANG,
  FAQ_PAGE_QUERY,
} from "../../../sanity/lib/queries";
import { FaqPageContainer } from "./components/FaqPageContainer";
import { FaqPageContainerPreview } from "./components/FaqPageContainerPreview";

export async function generateMetadata({ params }: any) {
  const initial = await loadQuery<SanityDocument>(
    FAQ_PAGE_METADATA_QUERY_BY_LANG,
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

type FaqPageProps = {
  params: QueryParams;
};

const FaqPage: React.FC<FaqPageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const initial = await loadQuery<SanityDocument>(FAQ_PAGE_QUERY, params, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  return draftMode().isEnabled ? (
    <FaqPageContainerPreview initial={initial} params={params} />
  ) : (
    <FaqPageContainer data={initial.data[0]} />
  );
};

export default FaqPage;
