"use client";

import { QueryParams, SanityDocument } from "next-sanity";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { SERVICES_PAGE_QUERY } from "@/../sanity/lib/queries";
import { ServicesPageContainer } from "./ServicesPageContainer";

type ServicesPageContainerPreviewProps = {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
};

export const ServicesPageContainerPreview: React.FC<
  ServicesPageContainerPreviewProps
> = ({ initial, params }) => {
  const { data } = useQuery<SanityDocument | null>(
    SERVICES_PAGE_QUERY,
    params,
    {
      initial,
    }
  );

  return data ? <ServicesPageContainer data={data} /> : <></>;
};
