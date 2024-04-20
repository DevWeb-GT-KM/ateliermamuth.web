import { Metadata } from "next";
import { QueryParams } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";
import { draftMode } from "next/headers";

import { loadQuery } from "@/../sanity/lib/store";
import { SERVICES_PAGE_QUERY } from "@/../sanity/lib/queries";
import { LiveQueryWrapper } from "@/common/components/LiveQueryWrapper";
import {
  ServicesPageContainer,
  ServicesPageContainerProps,
} from "./components/ServicesPageContainer";

// TODO -> Get from CMS fr/en
export const metadata: Metadata = {
  title: "Nos services | Atelier Mamuth",
  description:
    "Chez Atelier Mamuth nous offrons 3 types de services afin de bien vous guider selon vos besoins.",
};

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
