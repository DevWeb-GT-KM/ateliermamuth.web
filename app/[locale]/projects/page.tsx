import { draftMode } from "next/headers";
import { QueryParams, SanityDocument } from "next-sanity";
import { setRequestLocale } from "next-intl/server";

import { loadQuery } from "@/../sanity/lib/store";
import {
  PROJECTS_PAGE_QUERY,
  PROJECTS_PAGE_METADATA_QUERY_BY_LANG,
} from "@/../sanity/lib/queries";
import { ProjectsPageContainerPreview } from "./components/ProjectsPageContainerPreview";
import { ProjectsPageContainer } from "./components/ProjectsPageContainer";

export async function generateMetadata({ params }: { params: Promise<QueryParams> }) {
  const resolvedParams = await params;
  const { isEnabled } = await draftMode();
  const initial = await loadQuery<SanityDocument>(
    PROJECTS_PAGE_METADATA_QUERY_BY_LANG,
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

type ProjectsPageProps = {
  params: Promise<QueryParams>;
  searchParams: Promise<{ type?: string }>;
};

const ProjectsPage: React.FC<ProjectsPageProps> = async ({ params, searchParams }) => {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  setRequestLocale(resolvedParams.locale);

  const typeFilter = resolvedSearchParams.type ?? null;

  const { isEnabled } = await draftMode();
  const initial = await loadQuery<SanityDocument>(PROJECTS_PAGE_QUERY, resolvedParams, {
    perspective: isEnabled ? "previewDrafts" : "published",
  });

  return (
    <div>
      {isEnabled ? (
        <ProjectsPageContainerPreview initial={initial} params={resolvedParams} typeFilter={typeFilter} />
      ) : (
        <ProjectsPageContainer data={initial.data[0]} typeFilter={typeFilter} />
      )}
    </div>
  );
};

export default ProjectsPage;
