import { Metadata } from "next";
import { QueryParams, SanityDocument } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";
import { loadQuery } from "@/../sanity/lib/store";
import { draftMode } from "next/headers";
import { FAQ_PAGE_QUERY } from "../../../sanity/lib/queries";
import { FaqPageContainer } from "./components/FaqPageContainer";
import { FaqPageContainerPreview } from "./components/FaqPageContainerPreview";

export const metadata: Metadata = {
  title: "Contact | Atelier Mamuth",
  description: "Contact description.",
};

type FaqPageProps = {
  params: QueryParams;
};

const FaqPage: React.FC<FaqPageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const initial = await loadQuery<SanityDocument>(FAQ_PAGE_QUERY, params, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  return draftMode().isEnabled ? (
    <FaqPageContainerPreview initial={initial} params={params} />
  ) : (
    <FaqPageContainer data={initial.data[0]} />
  );
};

export default FaqPage;
