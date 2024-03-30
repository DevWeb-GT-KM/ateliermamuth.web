import "./page.scss";

import { Metadata } from "next";
import { draftMode } from "next/headers";
import { QueryParams, SanityDocument } from "next-sanity";

import { loadQuery } from "@/../sanity/lib/store";
import { PROJECTS_QUERY_BY_LANG } from "@/../sanity/lib/queries";
import { ProjectsListingPreview } from "./components/ProjectsListingPreview";
import { ProjectsListing } from "./components/ProjectsListing";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Listing of all the projects made by Atelier Mamuth.",
};

type ProjectsProps = {
  params: QueryParams;
};

const Projects: React.FC<ProjectsProps> = async ({ params }) => {
  // const data = useData(isDrafModeEnabled, PROJECTS_QUERY);

  const initial = await loadQuery<SanityDocument[]>(
    PROJECTS_QUERY_BY_LANG,
    params,
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
      <Link href={"/"} style={{ marginTop: "20px" }}>
        Go to homepage
      </Link>
    </main>
  );
};

export default Projects;
