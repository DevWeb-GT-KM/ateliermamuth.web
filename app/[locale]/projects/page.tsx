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
};

const ProjectsPage: React.FC<ProjectsPageProps> = async ({ params }) => {
  const resolvedParams = await params;
  setRequestLocale(resolvedParams.locale);

  const { isEnabled } = await draftMode();
  const initial = await loadQuery<SanityDocument>(PROJECTS_PAGE_QUERY, resolvedParams, {
    perspective: isEnabled ? "previewDrafts" : "published",
  });

  return (
    <div>
      {isEnabled ? (
        <ProjectsPageContainerPreview initial={initial} params={resolvedParams} />
      ) : (
        <ProjectsPageContainer data={initial.data[0]} />
      )}
    </div>
  );
};

export default ProjectsPage;
