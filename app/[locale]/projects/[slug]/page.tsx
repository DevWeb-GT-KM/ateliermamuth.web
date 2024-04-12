import { QueryParams, SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import { unstable_setRequestLocale } from "next-intl/server";

import { Project } from "../components/Project";
import { ProjectPreview } from "../components/ProjectPreview";
import { loadQuery } from "@/../sanity/lib/store";
import { PROJECTS_QUERY, PROJECT_QUERY } from "@/../sanity/lib/queries";
import { client } from "@/../sanity/lib/client";

export async function generateStaticParams() {
  const allProjects = await client.fetch<SanityDocument[]>(PROJECTS_QUERY);

  return allProjects.map((project: any) => ({
    locale: project.language,
    slug: project.slug.current,
  }));
}

type ProjectPageProps = {
  params: QueryParams;
};

const ProjectPage: React.FC<ProjectPageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const initial = await loadQuery<SanityDocument>(PROJECT_QUERY, params, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  return draftMode().isEnabled ? (
    <ProjectPreview initial={initial} params={params} />
  ) : (
    <Project project={initial.data} />
  );
};

export default ProjectPage;
