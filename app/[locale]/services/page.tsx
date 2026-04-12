import { QueryParams, SanityDocument } from "next-sanity";
import { setRequestLocale } from "next-intl/server";
import { draftMode } from "next/headers";

import { loadQuery } from "@/../sanity/lib/store";
import {
  SERVICES_PAGE_METADATA_QUERY_BY_LANG,
  SERVICES_PAGE_QUERY,
} from "@/../sanity/lib/queries";
import { ServicesPageContainer } from "./components/ServicesPageContainer";
import { ServicesPageContainerPreview } from "./components/ServicesPageContainerPreview";

export async function generateMetadata({ params }: { params: Promise<QueryParams> }) {
  const resolvedParams = await params;
  const { isEnabled } = await draftMode();
  const initial = await loadQuery<SanityDocument>(
    SERVICES_PAGE_METADATA_QUERY_BY_LANG,
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

type ServicesPageProps = {
  params: Promise<QueryParams>;
};

const ServicesPage: React.FC<ServicesPageProps> = async ({ params }) => {
  const resolvedParams = await params;
  setRequestLocale(resolvedParams.locale);

  const { isEnabled } = await draftMode();
  const initial = await loadQuery<SanityDocument>(SERVICES_PAGE_QUERY, resolvedParams, {
    perspective: isEnabled ? "previewDrafts" : "published",
  });

  return isEnabled ? (
    <ServicesPageContainerPreview initial={initial} params={resolvedParams} />
  ) : (
    <ServicesPageContainer data={initial.data} />
  );
};

export default ServicesPage;
