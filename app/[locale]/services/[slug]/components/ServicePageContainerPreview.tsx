"use client";

import { QueryParams, SanityDocument } from "next-sanity";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { ServicePageContainer } from "./ServicePageContainer";
import { PROJECT_QUERY } from "@/../sanity/lib/queries";

type ServicePageContainerPreviewProps = {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
};

export const ServicePageContainerPreview: React.FC<
  ServicePageContainerPreviewProps
> = ({ initial, params }) => {
  const { data } = useQuery<SanityDocument | null>(PROJECT_QUERY, params, {
    initial,
  });

  return data ? (
    <ServicePageContainer service={data} />
  ) : (
    <p className="service-single-none">Service not found</p>
  );
};
