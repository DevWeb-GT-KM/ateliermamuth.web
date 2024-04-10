import { QueryParams, SanityDocument } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";
import { client } from "@/../sanity/lib/client";
import { SERVICES_QUERY_BY_LANG, SERVICE_QUERY } from "@/../sanity/lib/queries";
import { loadQuery } from "@/../sanity/lib/store";
import { draftMode } from "next/headers";
import { ServicePreview } from "../components/ServicePreview";
import { Service } from "../components/Service";

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const localizedArticles = await client.fetch<SanityDocument[]>(
    SERVICES_QUERY_BY_LANG,
    { locale: locale }
  );

  return localizedArticles.map((article: any) => ({
    locale: locale,
    slug: article.slug.current,
  }));
}

type ServicePageProps = {
  params: QueryParams;
};

const ServicePage: React.FC<ServicePageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const initial = await loadQuery<SanityDocument>(SERVICE_QUERY, params, {
    // Because of Next.js, RSC and Dynamic Routes this currently
    // cannot be set on the loadQuery function at the "top level"
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  return draftMode().isEnabled ? (
    <ServicePreview initial={initial} params={params} />
  ) : (
    <Service service={initial.data} />
  );
};

export default ServicePage;
