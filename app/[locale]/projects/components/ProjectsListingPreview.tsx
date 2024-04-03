"use client";

import { SanityDocument } from "next-sanity";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { PROJECTS_QUERY } from "@/../sanity/lib/queries";
import { ProjectsListing } from "./ProjectsListing";

type ProjectsListingPreviewProps = {
  initial: QueryResponseInitial<SanityDocument[]>;
};

export const ProjectsListingPreview: React.FC<ProjectsListingPreviewProps> = ({
  initial,
}) => {
  const { data } = useQuery<SanityDocument[] | null>(
    PROJECTS_QUERY,
    {},
    { initial }
  );

  return data ? (
    <ProjectsListing projects={data} />
  ) : (
    <p className="projects-listing-none">No projects found</p>
  );
};
