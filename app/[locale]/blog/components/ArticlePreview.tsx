"use client";

import { QueryParams, SanityDocument } from "next-sanity";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { Article } from "./Article";
import { PROJECT_QUERY } from "@/../sanity/lib/queries";

type ArticlePreviewProps = {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
};

export const ArticlePreview: React.FC<ArticlePreviewProps> = ({
  initial,
  params,
}) => {
  const { data } = useQuery<SanityDocument | null>(PROJECT_QUERY, params, {
    initial,
  });

  return data ? (
    <Article article={data} />
  ) : (
    <p className="article-single-none">Article not found</p>
  );
};
