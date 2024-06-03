import { QueryParams, SanityDocument } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";
import { client } from "@/../sanity/lib/client";
import {
  SERVICES_LIST_QUERY,
  SERVICES_PAGE_METADATA_QUERY_BY_LANG,
  SERVICE_PAGE_METADATA_QUERY_BY_LANG,
  SERVICE_QUERY,
} from "@/../sanity/lib/queries";
import { loadQuery } from "@/../sanity/lib/store";
import { draftMode } from "next/headers";
import { ServicePageContainerPreview } from "./components/ServicePageContainerPreview";
import { ServicePageContainer } from "./components/ServicePageContainer";

export async function generateMetadata({ params }: any) {
  const servicesPageMetadata = await loadQuery<SanityDocument>(
    SERVICES_PAGE_METADATA_QUERY_BY_LANG,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  const currentServiceMetadata = await loadQuery<SanityDocument>(
    SERVICE_PAGE_METADATA_QUERY_BY_LANG,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return {
    title: `${currentServiceMetadata.data.name} | ${servicesPageMetadata.data[0].metadata.metaTitle}`,
    description: currentServiceMetadata.data.metadata.metaDescription,
  };
}

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const localizedServices = await client.fetch<SanityDocument[]>(
    SERVICES_LIST_QUERY,
    { locale: locale }
  );

  return localizedServices.map((service: any) => ({
    locale: locale,
    slug: service.slug.current,
  }));
}

type ServicePageProps = {
  params: QueryParams;
};

const ServicePage: React.FC<ServicePageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const initial = await loadQuery<SanityDocument>(SERVICE_QUERY, params, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  return draftMode().isEnabled ? (
    <ServicePageContainerPreview initial={initial} params={params} />
  ) : (
    <ServicePageContainer service={initial.data} />
  );
};

export default ServicePage;
