import "./page.scss";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { QueryParams, SanityDocument } from "next-sanity";
import { unstable_setRequestLocale } from "next-intl/server";

import { ProjectsListing } from "./components/ProjectsListing";
import { ProjectsListingPreview } from "./components/ProjectsListingPreview";
import { Link } from "@/../navigation";
import { useService } from "@/common/hooks/useService";

export const metadata: Metadata = {
  title: "Projects",
  description: "Listing of all the projects made by Atelier Mamuth.",
};

type ProjectsPageProps = {
  params: QueryParams;
};

const ProjectsPage: React.FC<ProjectsPageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const services = useService("query");

  const initial = await services.getProjects(params);
  const test = await services.getProjects(params);

  return (
    <div className="projects-page-container">
      <h1 className="projects-page-title">Projects page</h1>
      {draftMode().isEnabled ? (
        <ProjectsListingPreview initial={initial} />
      ) : (
        <ProjectsListing projects={initial.data} />
      )}
      <Link href={"/"} style={{ marginTop: "20px" }}>
        Go to homepage
      </Link>
    </div>
  );
};

export default ProjectsPage;
