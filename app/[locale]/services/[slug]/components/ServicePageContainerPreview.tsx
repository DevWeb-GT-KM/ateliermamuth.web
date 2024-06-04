"use client";

import { QueryParams, SanityDocument } from "next-sanity";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { SERVICE_QUERY } from "@/../sanity/lib/queries";
import { ServicePageContainer } from "./ServicePageContainer";

type ServicePageContainerPreviewProps = {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
};

export const ServicePageContainerPreview: React.FC<
  ServicePageContainerPreviewProps
> = ({ initial, params }) => {
  const { data } = useQuery<SanityDocument | null>(SERVICE_QUERY, params, {
    initial,
  });

  return data ? <ServicePageContainer service={data} /> : <></>;
};
