import { QueryParams, SanityDocument } from "next-sanity";
import { setRequestLocale } from "next-intl/server";
import { loadQuery } from "@/../sanity/lib/store";
import { draftMode } from "next/headers";
import {
  FAQ_PAGE_METADATA_QUERY_BY_LANG,
  FAQ_PAGE_QUERY,
} from "../../../sanity/lib/queries";
import { FaqPageContainer } from "./components/FaqPageContainer";
import { FaqPageContainerPreview } from "./components/FaqPageContainerPreview";

export async function generateMetadata({ params }: { params: Promise<QueryParams> }) {
  const resolvedParams = await params;
  const { isEnabled } = await draftMode();
  const initial = await loadQuery<SanityDocument>(
    FAQ_PAGE_METADATA_QUERY_BY_LANG,
    resolvedParams,
    {
      perspective: isEnabled ? "previewDrafts" : "published",
    }
  );

  return {
    title: initial.data[0].metadata.metaTitle,
    description: initial.data[0].metadata.metaDescription,
  };
}

type FaqPageProps = {
  params: Promise<QueryParams>;
};

const FaqPage: React.FC<FaqPageProps> = async ({ params }) => {
  const resolvedParams = await params;
  setRequestLocale(resolvedParams.locale);

  const { isEnabled } = await draftMode();
  const initial = await loadQuery<SanityDocument>(FAQ_PAGE_QUERY, resolvedParams, {
    perspective: isEnabled ? "previewDrafts" : "published",
  });

  return isEnabled ? (
    <FaqPageContainerPreview initial={initial} params={resolvedParams} />
  ) : (
    <FaqPageContainer data={initial.data[0]} />
  );
};

export default FaqPage;
