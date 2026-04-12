import { QueryParams, SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { ProjectPageContainer } from "./components/ProjectPageContainer";
import { ProjectPageContainerPreview } from "./components/ProjectPageContainerPreview";
import { loadQuery } from "@/../sanity/lib/store";
import {
  PROJECTS_PAGE_METADATA_QUERY_BY_LANG,
  PROJECTS_QUERY_BY_LANG,
  PROJECT_PAGE_METADATA_QUERY_BY_LANG,
  PROJECT_QUERY_BY_LANG,
} from "@/../sanity/lib/queries";
import { client } from "@/../sanity/lib/client";

export async function generateMetadata({ params }: { params: Promise<QueryParams> }) {
  const resolvedParams = await params;
  const { isEnabled } = await draftMode();

  const projectsPageMetadata = await loadQuery<SanityDocument>(
    PROJECTS_PAGE_METADATA_QUERY_BY_LANG,
    resolvedParams,
    {
      perspective: isEnabled ? "previewDrafts" : "published",
    }
  );

  const currentProjectMetadata = await loadQuery<SanityDocument>(
    PROJECT_PAGE_METADATA_QUERY_BY_LANG,
    resolvedParams,
    {
      perspective: isEnabled ? "previewDrafts" : "published",
    }
  );

  return {
    title: `${currentProjectMetadata?.data?.name} | ${projectsPageMetadata.data[0].metadata.metaTitle}`,
    description: currentProjectMetadata?.data?.metadata.metaDescription,
  };
}

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const localizedProjects = await client.fetch<SanityDocument[]>(
    PROJECTS_QUERY_BY_LANG,
    { locale }
  );

  return localizedProjects.map((project: any) => ({
    locale,
    slug: project.slug.current,
  }));
}

type ProjectPageProps = {
  params: Promise<QueryParams>;
};

const ProjectPage: React.FC<ProjectPageProps> = async ({ params }) => {
  const resolvedParams = await params;
  setRequestLocale(resolvedParams.locale);

  const { isEnabled } = await draftMode();
  const projectQuery = await loadQuery<SanityDocument>(
    PROJECT_QUERY_BY_LANG,
    resolvedParams,
    {
      perspective: isEnabled ? "previewDrafts" : "published",
    }
  );

  return isEnabled ? (
    <ProjectPageContainerPreview initial={projectQuery} params={resolvedParams} />
  ) : (
    <ProjectPageContainer project={projectQuery.data} />
  );
};

export default ProjectPage;
