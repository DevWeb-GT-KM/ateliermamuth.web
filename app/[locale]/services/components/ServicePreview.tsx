"use client";

import { QueryParams, SanityDocument } from "next-sanity";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { Service } from "./Service";
import { PROJECT_QUERY } from "@/../sanity/lib/queries";

type ServicePreviewProps = {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
};

export const ServicePreview: React.FC<ServicePreviewProps> = ({
  initial,
  params,
}) => {
  const { data } = useQuery<SanityDocument | null>(PROJECT_QUERY, params, {
    initial,
  });

  return data ? (
    <Service service={data} />
  ) : (
    <p className="service-single-none">Service not found</p>
  );
};
