"use client";

import { QueryParams, SanityDocument } from "next-sanity";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { ContactPageContainer } from "./ContactPageContainer";
import { CONTACT_PAGE_QUERY } from "@/../sanity/lib/queries";

type ContactPageContainerPreviewProps = {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
};

export const ContactPageContainerPreview: React.FC<
  ContactPageContainerPreviewProps
> = ({ initial, params }) => {
  const { data } = useQuery<SanityDocument | null>(CONTACT_PAGE_QUERY, params, {
    initial,
  });

  return data ? <ContactPageContainer data={data[0]} /> : <></>;
};
