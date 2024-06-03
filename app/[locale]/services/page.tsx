import { QueryParams, SanityDocument } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";
import { draftMode } from "next/headers";

import { loadQuery } from "@/../sanity/lib/store";
import {
  SERVICES_PAGE_METADATA_QUERY_BY_LANG,
  SERVICES_PAGE_QUERY,
} from "@/../sanity/lib/queries";
import { LiveQueryWrapper } from "@/common/components/LiveQueryWrapper";
import {
  ServicesPageContainer,
  ServicesPageContainerProps,
} from "./components/ServicesPageContainer";

export async function generateMetadata({ params }: any) {
  const initial = await loadQuery<SanityDocument>(
    SERVICES_PAGE_METADATA_QUERY_BY_LANG,
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

type ServicesPageProps = {
  params: QueryParams;
};

const ServicesPage: React.FC<ServicesPageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const { isEnabled } = draftMode();
  const initial = await loadQuery<ServicesPageContainerProps["data"]>(
    SERVICES_PAGE_QUERY,
    params,
    {
      perspective: isEnabled ? "previewDrafts" : "published",
    }
  );

  return (
    <LiveQueryWrapper
      isEnabled={isEnabled}
      query={isEnabled ? SERVICES_PAGE_QUERY : ""}
      params={isEnabled ? params : {}}
      initial={initial}
    >
      <ServicesPageContainer />
    </LiveQueryWrapper>
  );
};

export default ServicesPage;
