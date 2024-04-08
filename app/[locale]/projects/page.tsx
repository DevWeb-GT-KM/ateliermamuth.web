import "./page.scss";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { QueryParams, SanityDocument } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";

import { ProjectsListing } from "./components/ProjectsListing";
import { ProjectsListingPreview } from "./components/ProjectsListingPreview";
import { loadQuery } from "@/../sanity/lib/store";
import { PROJECTS_QUERY_BY_LANG } from "@/../sanity/lib/queries";
import { Link } from "@/../navigation";

export const metadata: Metadata = {
  title: "Projects",
  description: "Listing of all the projects made by Atelier Mamuth.",
};

type ProjectsPageProps = {
  params: QueryParams;
};

const ProjectsPage: React.FC<ProjectsPageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const initial = await loadQuery<SanityDocument[]>(
    PROJECTS_QUERY_BY_LANG,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return (
    <div>
      <h1 className="projects-page-title">Projects page</h1>
      {draftMode().isEnabled ? (
        <ProjectsListingPreview initial={initial} />
      ) : (
        <ProjectsListing projects={initial.data} />
      )}
    </div>
  );
};

export default ProjectsPage;
