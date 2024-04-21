import { Metadata } from "next";
import { QueryParams } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";
import { loadQuery } from "@/../sanity/lib/store";
import {
  AboutUsPageContainer,
  AboutUsPageContainerProps,
} from "./components/AboutUsPageContainer";
import { ABOUT_US_PAGE_QUERY } from "../../../sanity/lib/queries";
import { draftMode } from "next/headers";

export const metadata: Metadata = {
  title: "About us | Atelier Mamuth",
  description: "About us description.",
};

type AboutUsPageProps = {
  params: QueryParams;
};

const AboutUsPage: React.FC<AboutUsPageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const { isEnabled } = draftMode();
  const initial = await loadQuery<AboutUsPageContainerProps["data"]>(
    ABOUT_US_PAGE_QUERY,
    params,
    {
      perspective: isEnabled ? "previewDrafts" : "published",
    }
  );

  return <AboutUsPageContainer data={initial.data} />;
};

export default AboutUsPage;
