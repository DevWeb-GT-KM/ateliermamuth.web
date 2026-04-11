import { QueryParams, SanityDocument } from "next-sanity";
import { setRequestLocale } from "next-intl/server";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { client } from "@/../sanity/lib/client";
import {
  ARTICLES_QUERY_BY_LANG,
  ARTICLE_PAGE_METADATA_QUERY_BY_LANG,
  ARTICLE_QUERY_BY_LANG,
  BLOG_PAGE_METADATA_QUERY_BY_LANG,
} from "@/../sanity/lib/queries";
import { loadQuery } from "@/../sanity/lib/store";
import { ArticlePageContainerPreview } from "./components/ArticlePageContainerPreview";
import { ArticlePageContainer } from "./components/ArticlePageContainer";

export async function generateMetadata({ params }: { params: Promise<QueryParams> }) {
  const resolvedParams = await params;
  const { isEnabled } = await draftMode();

  const blogPageMetadata = await loadQuery<SanityDocument>(
    BLOG_PAGE_METADATA_QUERY_BY_LANG,
    resolvedParams,
    {
      perspective: isEnabled ? "previewDrafts" : "published",
    }
  );

  const currentArticleMetadata = await loadQuery<SanityDocument>(
    ARTICLE_PAGE_METADATA_QUERY_BY_LANG,
    resolvedParams,
    {
      perspective: isEnabled ? "previewDrafts" : "published",
    }
  );

  return {
    title: `${currentArticleMetadata?.data?.title} | ${blogPageMetadata.data[0].metadata.metaTitle}`,
    description: currentArticleMetadata?.data?.metadata.metaDescription,
  };
}

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const localizedArticles = await client.fetch<SanityDocument[]>(
    ARTICLES_QUERY_BY_LANG,
    { locale }
  );

  return localizedArticles.map((article: any) => ({
    locale,
    slug: article.slug.current,
  }));
}

type ArticlePageProps = {
  params: Promise<QueryParams>;
};

const ArticlePage: React.FC<ArticlePageProps> = async ({ params }) => {
  const resolvedParams = await params;
  setRequestLocale(resolvedParams.locale);

  const { isEnabled } = await draftMode();
  const initial = await loadQuery<SanityDocument>(
    ARTICLE_QUERY_BY_LANG,
    resolvedParams,
    {
      perspective: isEnabled ? "previewDrafts" : "published",
    }
  );

  return isEnabled ? (
    <ArticlePageContainerPreview initial={initial} params={resolvedParams} />
  ) : (
    <ArticlePageContainer article={initial.data} />
  );
};

export default ArticlePage;
