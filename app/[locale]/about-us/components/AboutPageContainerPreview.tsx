"use client";

import { QueryParams, SanityDocument } from "next-sanity";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { AboutUsPageContainer } from "./AboutUsPageContainer";
import { ABOUT_US_PAGE_QUERY_BY_LANG } from "@/../sanity/lib/queries";

type AboutUsPageContainerPreviewProps = {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
};

export const AboutUsPageContainerPreview: React.FC<
  AboutUsPageContainerPreviewProps
> = ({ initial, params }) => {
  const { data } = useQuery<SanityDocument | null>(
    ABOUT_US_PAGE_QUERY_BY_LANG,
    params,
    {
      initial,
    }
  );

  return data ? <AboutUsPageContainer data={data} /> : <></>;
};
