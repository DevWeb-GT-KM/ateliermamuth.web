"use client";

import { PROJECT_QUERY } from "@/../sanity/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { QueryParams, SanityDocument } from "next-sanity";

import Project from "@/components/projects/Project";

type ProjectPreviewProps = {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
};

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ initial, params }) => {
  const { data } = useQuery<SanityDocument | null>(PROJECT_QUERY, params, {
    initial,
  });

  return data ? (
    <Project project={data} />
  ) : (
    <p className="projects-single-none">Project not found</p>
  );
};

export default ProjectPreview;
