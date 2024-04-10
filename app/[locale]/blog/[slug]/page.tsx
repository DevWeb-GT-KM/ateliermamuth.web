import { QueryParams, SanityDocument } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";
import { client } from "@/../sanity/lib/client";
import { ARTICLES_QUERY_BY_LANG, ARTICLE_QUERY } from "@/../sanity/lib/queries";
import { loadQuery } from "@/../sanity/lib/store";
import { draftMode } from "next/headers";
import { ArticlePreview } from "../components/ArticlePreview";
import { Article } from "../components/Article";

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

  const initial = await loadQuery<SanityDocument>(ARTICLE_QUERY, params, {
    // Because of Next.js, RSC and Dynamic Routes this currently
    // cannot be set on the loadQuery function at the "top level"
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  return draftMode().isEnabled ? (
    <ArticlePreview initial={initial} params={params} />
  ) : (
    <Article article={initial.data} />
  );
};

export default ArticlePage;
