import { QueryParams, SanityDocument } from "next-sanity";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
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

export async function generateMetadata({ params }: { params: Promise<QueryParams> }) {
  const resolvedParams = await params;
  const { isEnabled } = await draftMode();

  const servicesPageMetadata = await loadQuery<SanityDocument>(
    SERVICES_PAGE_METADATA_QUERY_BY_LANG,
    resolvedParams,
    {
      perspective: isEnabled ? "previewDrafts" : "published",
    }
  );

  const currentServiceMetadata = await loadQuery<SanityDocument>(
    SERVICE_PAGE_METADATA_QUERY_BY_LANG,
    resolvedParams,
    {
      perspective: isEnabled ? "previewDrafts" : "published",
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
    { locale }
  );

  return localizedServices.map((service: any) => ({
    locale,
    slug: service.slug.current,
  }));
}

type ServicePageProps = {
  params: Promise<QueryParams>;
};

const ServicePage: React.FC<ServicePageProps> = async ({ params }) => {
  const resolvedParams = await params;
  setRequestLocale(resolvedParams.locale);

  const { isEnabled } = await draftMode();
  const initial = await loadQuery<SanityDocument>(SERVICE_QUERY, resolvedParams, {
    perspective: isEnabled ? "previewDrafts" : "published",
  });

  if (!initial) {
    return notFound();
  }

  return isEnabled ? (
    <ServicePageContainerPreview initial={initial} params={resolvedParams} />
  ) : (
    <ServicePageContainer service={initial.data} />
  );
};

export default ServicePage;
