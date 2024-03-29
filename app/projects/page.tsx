import "./page.scss";

import { Metadata } from "next";
import { draftMode } from "next/headers";
import { SanityDocument } from "next-sanity";
import { ProjectsListing } from "@/components/projects/ProjectsListing";
import { loadQuery } from "@/../sanity/lib/store";
import { PROJECTS_QUERY } from "@/../sanity/lib/queries";
import ProjectsListingPreview from "@/components/projects/ProjectsListingPreview";

export const metadata: Metadata = {
  title: "Projects",
  description: "Listing of all the projects made by Atelier Mamuth.",
};

const Projects: React.FC = async () => {
  // const data = useData(isDrafModeEnabled, PROJECTS_QUERY);

  const initial = await loadQuery<SanityDocument[]>(
    PROJECTS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return (
    <main className="projects-page-container">
      <h1 className="projects-page-title">Projects page</h1>
      {draftMode().isEnabled ? (
        <ProjectsListingPreview initial={initial} />
      ) : (
        <ProjectsListing projects={initial.data} />
      )}
    </main>
  );
};

export default Projects;
