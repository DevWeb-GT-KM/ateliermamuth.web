"use client";

import { QueryParams, SanityDocument } from "next-sanity";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { CONTACT_FORM_PAGE_QUERY } from "@/../sanity/lib/queries";
import { ContactFormContainer } from "./ContactFormContainer";

type ContactFormContainerPreviewProps = {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
};

export const ContactFormContainerPreview: React.FC<
  ContactFormContainerPreviewProps
> = ({ initial, params }) => {
  const { data } = useQuery<SanityDocument | null>(
    CONTACT_FORM_PAGE_QUERY,
    params,
    {
      initial,
    }
  );

  return data ? (
    <ContactFormContainer data={data[0]} />
  ) : (
    <p className="service-single-none">Service not found</p>
  );
};
