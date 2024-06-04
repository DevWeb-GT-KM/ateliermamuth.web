import { Metadata } from "next";
import { QueryParams, SanityDocument } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";
import { loadQuery } from "@/../sanity/lib/store";
import { draftMode } from "next/headers";
import {
  CONTACT_PAGE_METADATA_QUERY_BY_LANG,
  CONTACT_PAGE_QUERY,
} from "../../../sanity/lib/queries";
import { ContactPageContainerPreview } from "./components/ContactPageContainerPreview";
import { ContactPageContainer } from "./components/ContactPageContainer";

export async function generateMetadata({ params }: any) {
  const initial = await loadQuery<SanityDocument>(
    CONTACT_PAGE_METADATA_QUERY_BY_LANG,
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

type ContactPageProps = {
  params: QueryParams;
};

const ContactPage: React.FC<ContactPageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const initial = await loadQuery<SanityDocument>(CONTACT_PAGE_QUERY, params, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  return draftMode().isEnabled ? (
    <ContactPageContainerPreview initial={initial} params={params} />
  ) : (
    <ContactPageContainer data={initial.data[0]} />
  );
};

export default ContactPage;
