import { QueryParams, SanityDocument } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";
import { loadQuery } from "@/../sanity/lib/store";
import { ARTICLES_QUERY_BY_LANG } from "../../../sanity/lib/queries";
import { draftMode } from "next/headers";
import { ArticleListingPreview } from "./components/ArticleListingPreview";
import { ArticleListing } from "./components/ArticleListing";

type BlogPageProps = {
  params: QueryParams;
};

const BlogPage: React.FC<BlogPageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const initial = await loadQuery<SanityDocument[]>(
    ARTICLES_QUERY_BY_LANG,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return (
    <div className="blog-page-container">
      <h1 className="blog-page-title">Blog page</h1>
      {draftMode().isEnabled ? (
        <ArticleListingPreview initial={initial} />
      ) : (
        <ArticleListing articles={initial.data} />
      )}
    </div>
  );
};

export default BlogPage;
