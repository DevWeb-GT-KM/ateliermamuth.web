"use client";

import { QueryParams, SanityDocument } from "next-sanity";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { HOME_PAGE_QUERY_BY_LANG } from "@/../sanity/lib/queries";
import { HomePageContainer } from "./HomePageContainer";

type HomePageContainerPreviewProps = {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
};

export const HomePageContainerPreview: React.FC<
  HomePageContainerPreviewProps
> = ({ initial, params }) => {
  const { data } = useQuery<SanityDocument | null>(
    HOME_PAGE_QUERY_BY_LANG,
    params,
    {
      initial,
    }
  );

  return data ? <HomePageContainer data={data} /> : <></>;
};
