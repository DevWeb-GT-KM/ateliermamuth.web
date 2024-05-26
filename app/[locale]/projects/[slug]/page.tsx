import { Metadata } from "next";
import { QueryParams, SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import { unstable_setRequestLocale } from "next-intl/server";

import { ProjectPageContainer } from "./components/ProjectPageContainer";
import { ProjectPageContainerPreview } from "./components/ProjectPageContainerPreview";
import { loadQuery } from "@/../sanity/lib/store";
import {
  PROJECTS_QUERY_BY_LANG,
  PROJECT_QUERY_BY_LANG,
} from "@/../sanity/lib/queries";
import { client } from "@/../sanity/lib/client";

// TODO -> Get from CMS fr/en
export const metadata: Metadata = {
  title: "Nom du projet | Atelier Mamuth",
  description: "Description du projet.",
};

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

  const projectQuery = await loadQuery<SanityDocument>(
    PROJECT_QUERY_BY_LANG,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return draftMode().isEnabled ? (
    <ProjectPageContainerPreview initial={projectQuery} params={params} />
  ) : (
    <ProjectPageContainer project={projectQuery.data} />
  );
};

export default ProjectPage;
