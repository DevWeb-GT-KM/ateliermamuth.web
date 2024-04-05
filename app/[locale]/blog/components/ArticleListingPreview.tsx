"use client";

import { SanityDocument } from "next-sanity";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { PROJECTS_QUERY } from "@/../sanity/lib/queries";
import { ArticleListing } from "./ArticleListing";

type ArticleListingPreviewProps = {
  initial: QueryResponseInitial<SanityDocument[]>;
};

export const ArticleListingPreview: React.FC<ArticleListingPreviewProps> = ({
  initial,
}) => {
  const { data } = useQuery<SanityDocument[] | null>(
    PROJECTS_QUERY,
    {},
    { initial }
  );

  return data ? (
    <ArticleListing articles={data} />
  ) : (
    <p className="article-listing-none">No articles found</p>
  );
};
