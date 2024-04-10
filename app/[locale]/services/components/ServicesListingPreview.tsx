"use client";

import { SanityDocument } from "next-sanity";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { PROJECTS_QUERY } from "@/../sanity/lib/queries";
import { ServicesListing } from "./ServicesListing";

type ServicesListingPreviewProps = {
  initial: QueryResponseInitial<SanityDocument[]>;
};

export const ServicesListingPreview: React.FC<ServicesListingPreviewProps> = ({
  initial,
}) => {
  const { data } = useQuery<SanityDocument[] | null>(
    PROJECTS_QUERY,
    {},
    { initial }
  );

  return data ? (
    <ServicesListing services={data} />
  ) : (
    <p className="services-listing-none">No services found</p>
  );
};
