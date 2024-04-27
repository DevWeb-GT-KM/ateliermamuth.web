"use client";

import { QueryParams, SanityDocument } from "next-sanity";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { BlogPageContainer } from "./BlogPageContainer";
import { PROJECT_QUERY } from "@/../sanity/lib/queries";

type BlogPageContainerPreviewProps = {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
};

export const BlogPageContainerPreview: React.FC<
  BlogPageContainerPreviewProps
> = ({ initial, params }) => {
  const { data } = useQuery<SanityDocument | null>(PROJECT_QUERY, params, {
    initial,
  });

  return data ? (
    <BlogPageContainer data={data[0]} />
  ) : (
    <p className="article-single-none">Article not found</p>
  );
};
