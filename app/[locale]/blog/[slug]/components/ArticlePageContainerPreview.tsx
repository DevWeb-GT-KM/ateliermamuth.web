"use client";

import { QueryParams, SanityDocument } from "next-sanity";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { ArticlePageContainer } from "./ArticlePageContainer";
import { ARTICLE_QUERY_BY_LANG } from "@/../sanity/lib/queries";

type ArticlePageContainerPreviewProps = {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
};

export const ArticlePageContainerPreview: React.FC<
  ArticlePageContainerPreviewProps
> = ({ initial, params }) => {
  const { data } = useQuery<SanityDocument | null>(
    ARTICLE_QUERY_BY_LANG,
    params,
    {
      initial,
    }
  );

  return data ? <ArticlePageContainer article={data} /> : <></>;
};
