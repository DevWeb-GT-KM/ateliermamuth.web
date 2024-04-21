import { QueryParams, SanityDocument } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";
import { client } from "@/../sanity/lib/client";
import { SERVICES_LIST_QUERY, SERVICE_QUERY } from "@/../sanity/lib/queries";
import { loadQuery } from "@/../sanity/lib/store";
import { draftMode } from "next/headers";
import { ServicePreview } from "./components/ServicePreview";
import { ServicePageContainer } from "./components/ServicePageContainer";

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
    <ServicePreview initial={initial} params={params} />
  ) : (
    <ServicePageContainer service={initial.data} />
  );
};

export default ServicePage;
