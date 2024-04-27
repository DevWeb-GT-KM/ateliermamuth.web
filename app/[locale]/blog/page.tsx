import { QueryParams, SanityDocument } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";
import { loadQuery } from "@/../sanity/lib/store";
import { BLOG_QUERY_BY_LANG } from "../../../sanity/lib/queries";
import { draftMode } from "next/headers";
import { BlogPageContainerPreview } from "./components/BlogPageContainerPreview";
import { BlogPageContainer } from "./components/BlogPageContainer";

type BlogPageProps = {
  params: QueryParams;
};

const BlogPage: React.FC<BlogPageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const initial = await loadQuery<SanityDocument>(BLOG_QUERY_BY_LANG, params, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  return draftMode().isEnabled ? (
    <BlogPageContainerPreview initial={initial} params={params} />
  ) : (
    <BlogPageContainer data={initial.data} />
  );
};

export default BlogPage;
