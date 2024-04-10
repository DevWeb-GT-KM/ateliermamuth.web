import { QueryParams, SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import { unstable_setRequestLocale } from "next-intl/server";

import { Project } from "../components/Project";
import { ProjectPreview } from "../components/ProjectPreview";
import { loadQuery } from "@/../sanity/lib/store";
import { PROJECTS_QUERY_BY_LANG, PROJECT_QUERY } from "@/../sanity/lib/queries";
import { client } from "@/../sanity/lib/client";

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const localizedProjects = await client.fetch<SanityDocument[]>(
    PROJECTS_QUERY_BY_LANG,
    { locale: locale }
  );

  return localizedProjects.map((project: any) => ({
    locale: locale,
    slug: project.slug.current,
  }));
}

type ProjectPageProps = {
  params: QueryParams;
};

const ProjectPage: React.FC<ProjectPageProps> = async ({ params }) => {
  unstable_setRequestLocale(params.locale);

  const initial = await loadQuery<SanityDocument>(PROJECT_QUERY, params, {
    // Because of Next.js, RSC and Dynamic Routes this currently
    // cannot be set on the loadQuery function at the "top level"
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  return draftMode().isEnabled ? (
    <ProjectPreview initial={initial} params={params} />
  ) : (
    <Project project={initial.data} />
  );
};

export default ProjectPage;
