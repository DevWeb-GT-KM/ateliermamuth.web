"use client";

import { QueryParams, SanityDocument } from "next-sanity";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { FaqPageContainer } from "./FaqPageContainer";
import { FAQ_PAGE_QUERY } from "@/../sanity/lib/queries";

type FaqPageContainerPreviewProps = {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
};

export const FaqPageContainerPreview: React.FC<
  FaqPageContainerPreviewProps
> = ({ initial, params }) => {
  const { data } = useQuery<SanityDocument | null>(FAQ_PAGE_QUERY, params, {
    initial,
  });

  return data ? <FaqPageContainer data={data[0]} /> : <></>;
};
