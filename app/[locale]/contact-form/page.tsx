import { QueryParams, SanityDocument } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";
import { loadQuery } from "@/../sanity/lib/store";
import { draftMode } from "next/headers";
import {
  CONTACT_FORM_PAGE_METADATA_QUERY_BY_LANG,
  CONTACT_FORM_PAGE_QUERY,
} from "@/../sanity/lib/queries";
import { ContactFormContainerPreview } from "./components/ContactFormContainerPreview";
import { ContactFormContainer } from "./components/ContactFormContainer";

export async function generateMetadata({ params }: any) {
  const initial = await loadQuery<SanityDocument>(
    CONTACT_FORM_PAGE_METADATA_QUERY_BY_LANG,
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

type ContactFormPageProps = {
  params: QueryParams;
};

const ContactFormPage: React.FC<ContactFormPageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const initial = await loadQuery<SanityDocument>(
    CONTACT_FORM_PAGE_QUERY,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return draftMode().isEnabled ? (
    <ContactFormContainerPreview initial={initial} params={params} />
  ) : (
    <ContactFormContainer data={initial.data[0]} />
  );
};

export default ContactFormPage;
