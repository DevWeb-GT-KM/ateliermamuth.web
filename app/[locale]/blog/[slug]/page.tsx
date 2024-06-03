import { QueryParams, SanityDocument } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";
import { draftMode } from "next/headers";

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

export async function generateMetadata({ params }: any) {
  const blogPageMetadata = await loadQuery<SanityDocument>(
    BLOG_PAGE_METADATA_QUERY_BY_LANG,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  const currentArticleMetadata = await loadQuery<SanityDocument>(
    ARTICLE_PAGE_METADATA_QUERY_BY_LANG,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return {
    title: `${currentArticleMetadata.data.title} | ${blogPageMetadata.data[0].metadata.metaTitle}`,
    description: currentArticleMetadata.data.metadata.metaDescription,
  };
}

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const localizedArticles = await client.fetch<SanityDocument[]>(
    ARTICLES_QUERY_BY_LANG,
    { locale: locale }
  );

  return localizedArticles.map((article: any) => ({
    locale: locale,
    slug: article.slug.current,
  }));
}

type ArticlePageProps = {
  params: QueryParams;
};

const ArticlePage: React.FC<ArticlePageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const initial = await loadQuery<SanityDocument>(
    ARTICLE_QUERY_BY_LANG,
    params,
    {
      // Because of Next.js, RSC and Dynamic Routes this currently
      // cannot be set on the loadQuery function at the "top level"
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return draftMode().isEnabled ? (
    <ArticlePageContainerPreview initial={initial} params={params} />
  ) : (
    <ArticlePageContainer article={initial.data} />
  );
};

export default ArticlePage;
