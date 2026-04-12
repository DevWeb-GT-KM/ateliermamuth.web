import { Metadata } from "next";
import { QueryParams, SanityDocument } from "next-sanity";
import { setRequestLocale } from "next-intl/server";
import { loadQuery } from "@/../sanity/lib/store";
import { draftMode } from "next/headers";
import {
  CONTACT_PAGE_METADATA_QUERY_BY_LANG,
  CONTACT_PAGE_QUERY,
} from "../../../sanity/lib/queries";
import { ContactPageContainerPreview } from "./components/ContactPageContainerPreview";
import { ContactPageContainer } from "./components/ContactPageContainer";

export async function generateMetadata({ params }: { params: Promise<QueryParams> }) {
  const resolvedParams = await params;
  const { isEnabled } = await draftMode();
  const initial = await loadQuery<SanityDocument>(
    CONTACT_PAGE_METADATA_QUERY_BY_LANG,
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

type ContactPageProps = {
  params: Promise<QueryParams>;
};

const ContactPage: React.FC<ContactPageProps> = async ({ params }) => {
  const resolvedParams = await params;
  setRequestLocale(resolvedParams.locale);

  const { isEnabled } = await draftMode();
  const initial = await loadQuery<SanityDocument>(CONTACT_PAGE_QUERY, resolvedParams, {
    perspective: isEnabled ? "previewDrafts" : "published",
  });

  return isEnabled ? (
    <ContactPageContainerPreview initial={initial} params={resolvedParams} />
  ) : (
    <ContactPageContainer data={initial.data[0]} />
  );
};

export default ContactPage;
