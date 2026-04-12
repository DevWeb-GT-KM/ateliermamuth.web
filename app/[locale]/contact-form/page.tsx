import { QueryParams, SanityDocument } from "next-sanity";
import { setRequestLocale } from "next-intl/server";
import { loadQuery } from "@/../sanity/lib/store";
import { draftMode } from "next/headers";
import {
  CONTACT_FORM_PAGE_METADATA_QUERY_BY_LANG,
  CONTACT_FORM_PAGE_QUERY,
} from "@/../sanity/lib/queries";
import { ContactFormContainerPreview } from "./components/ContactFormContainerPreview";
import { ContactFormContainer } from "./components/ContactFormContainer";

export async function generateMetadata({ params }: { params: Promise<QueryParams> }) {
  const resolvedParams = await params;
  const { isEnabled } = await draftMode();
  const initial = await loadQuery<SanityDocument>(
    CONTACT_FORM_PAGE_METADATA_QUERY_BY_LANG,
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

type ContactFormPageProps = {
  params: Promise<QueryParams>;
};

const ContactFormPage: React.FC<ContactFormPageProps> = async ({ params }) => {
  const resolvedParams = await params;
  setRequestLocale(resolvedParams.locale);

  const { isEnabled } = await draftMode();
  const initial = await loadQuery<SanityDocument>(
    CONTACT_FORM_PAGE_QUERY,
    resolvedParams,
    {
      perspective: isEnabled ? "previewDrafts" : "published",
    }
  );

  return isEnabled ? (
    <ContactFormContainerPreview initial={initial} params={resolvedParams} />
  ) : (
    <ContactFormContainer data={initial.data[0]} />
  );
};

export default ContactFormPage;
