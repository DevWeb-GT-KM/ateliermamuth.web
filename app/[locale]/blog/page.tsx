import { QueryParams, SanityDocument } from "next-sanity";
import { setRequestLocale } from "next-intl/server";
import { loadQuery } from "@/../sanity/lib/store";
import {
  BLOG_PAGE_METADATA_QUERY_BY_LANG,
  BLOG_QUERY_BY_LANG,
} from "../../../sanity/lib/queries";
import { draftMode } from "next/headers";
import { BlogPageContainerPreview } from "./components/BlogPageContainerPreview";
import { BlogPageContainer } from "./components/BlogPageContainer";

export async function generateMetadata({ params }: { params: Promise<QueryParams> }) {
  const resolvedParams = await params;
  const { isEnabled } = await draftMode();
  const initial = await loadQuery<SanityDocument>(
    BLOG_PAGE_METADATA_QUERY_BY_LANG,
    resolvedParams,
    {
      perspective: isEnabled ? "previewDrafts" : "published",
    }
  );

  return {
    title: initial.data[0].metadata.metaTitle,
    description: initial.data[0].metadata.metaDescription,
  };
}

type BlogPageProps = {
  params: Promise<QueryParams>;
};

const BlogPage: React.FC<BlogPageProps> = async ({ params }) => {
  const resolvedParams = await params;
  setRequestLocale(resolvedParams.locale);

  const { isEnabled } = await draftMode();
  const initial = await loadQuery<SanityDocument>(BLOG_QUERY_BY_LANG, resolvedParams, {
    perspective: isEnabled ? "previewDrafts" : "published",
  });

  return isEnabled ? (
    <BlogPageContainerPreview initial={initial} params={resolvedParams} />
  ) : (
    <BlogPageContainer data={initial.data} />
  );
};

export default BlogPage;
