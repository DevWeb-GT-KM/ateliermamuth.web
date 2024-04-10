import { QueryParams, SanityDocument } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";
import { loadQuery } from "@/../sanity/lib/store";
import { SERVICES_QUERY_BY_LANG } from "../../../sanity/lib/queries";
import { draftMode } from "next/headers";
import { ServicesListingPreview } from "./components/ServicesListingPreview";
import { ServicesListing } from "./components/ServicesListing";

type ServicesPageProps = {
  params: QueryParams;
};

const ServicesPage: React.FC<ServicesPageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const initial = await loadQuery<SanityDocument[]>(
    SERVICES_QUERY_BY_LANG,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return (
    <div className="services-page-container">
      <h1 className="services-page-title">Services page</h1>
      {draftMode().isEnabled ? (
        <ServicesListingPreview initial={initial} />
      ) : (
        <ServicesListing services={initial.data} />
      )}
    </div>
  );
};

export default ServicesPage;
