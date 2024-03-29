import { QueryParams, SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";

import { loadQuery } from "@/../sanity/lib/store";
import { PROJECTS_QUERY, PROJECT_QUERY } from "@/../sanity/lib/queries";
import { client } from "@/../sanity/lib/client";
import ProjectPreview from "../components/ProjectPreview";
import Project from "../components/Project";

export async function generateStaticParams() {
  const projects = await client.fetch<SanityDocument[]>(PROJECTS_QUERY);

  return projects.map((project: any) => ({
    slug: project.slug.current,
  }));
}

export default async function Page({ params }: { params: QueryParams }) {
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
}
