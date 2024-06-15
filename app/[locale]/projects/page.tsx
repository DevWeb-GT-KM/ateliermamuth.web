import { draftMode } from "next/headers";
import { QueryParams, SanityDocument } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";

import { loadQuery } from "@/../sanity/lib/store";
import {
  PROJECTS_PAGE_QUERY,
  PROJECTS_PAGE_METADATA_QUERY_BY_LANG,
} from "@/../sanity/lib/queries";
import { ProjectsPageContainerPreview } from "./components/ProjectsPageContainerPreview";
import { ProjectsPageContainer } from "./components/ProjectsPageContainer";

export async function generateMetadata({ params }: any) {
  const initial = await loadQuery<SanityDocument>(
    PROJECTS_PAGE_METADATA_QUERY_BY_LANG,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return {
    title: initial.data[0].metadata.metaTitle,
    description: initial.data[0].metadata.metaDescription,
  };
}

type ProjectsPageProps = {
  params: QueryParams;
};

const ProjectsPage: React.FC<ProjectsPageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const initial = await loadQuery<SanityDocument>(PROJECTS_PAGE_QUERY, params, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  console.log(initial.data[0].projectsarchived[0]);

  return (
    <div>
      {draftMode().isEnabled ? (
        <ProjectsPageContainerPreview initial={initial} params={params} />
      ) : (
        <ProjectsPageContainer data={initial.data[0]} />
      )}
    </div>
  );
};

export default ProjectsPage;
