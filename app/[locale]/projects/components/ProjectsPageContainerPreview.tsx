"use client";

import { QueryParams, SanityDocument } from "next-sanity";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { PROJECTS_PAGE_QUERY } from "@/../sanity/lib/queries";
import { ProjectsPageContainer } from "./ProjectsPageContainer";

type ProjectsPageContainerPreviewProps = {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
};

export const ProjectsPageContainerPreview: React.FC<
  ProjectsPageContainerPreviewProps
> = ({ initial, params }) => {
  const { data } = useQuery<SanityDocument | null>(
    PROJECTS_PAGE_QUERY,
    params,
    {
      initial,
    }
  );

  return data ? <ProjectsPageContainer data={data[0]} /> : <></>;
};
