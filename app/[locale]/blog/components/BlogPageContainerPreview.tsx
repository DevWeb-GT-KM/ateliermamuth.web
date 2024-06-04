"use client";

import { QueryParams, SanityDocument } from "next-sanity";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { BlogPageContainer } from "./BlogPageContainer";
import { BLOG_QUERY_BY_LANG } from "@/../sanity/lib/queries";

type BlogPageContainerPreviewProps = {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
};

export const BlogPageContainerPreview: React.FC<
  BlogPageContainerPreviewProps
> = ({ initial, params }) => {
  const { data } = useQuery<SanityDocument | null>(BLOG_QUERY_BY_LANG, params, {
    initial,
  });

  return data ? <BlogPageContainer data={data} /> : <></>;
};
