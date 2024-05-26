import { Metadata } from "next";
import { draftMode } from "next/headers";
import { QueryParams, SanityDocument } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";

import { loadQuery } from "@/../sanity/lib/store";
import { PROJECTS_PAGE_QUERY } from "../../../sanity/lib/queries";
import { ProjectsPageContainerPreview } from "./components/ProjectsPageContainerPreview";
import { ProjectsPageContainer } from "./components/ProjectsPageContainer";

export const metadata: Metadata = {
  title: "Projects",
  description: "Listing of all the projects made by Atelier Mamuth.",
};

type ProjectsPageProps = {
  params: QueryParams;
};

const ProjectsPage: React.FC<ProjectsPageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const initial = await loadQuery<SanityDocument>(PROJECTS_PAGE_QUERY, params, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

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
