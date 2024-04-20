"use client";

import { QueryParams, SanityDocument } from "next-sanity";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { ProjectPageContainer } from "./ProjectPageContainer";
import { PROJECT_QUERY } from "@/../sanity/lib/queries";

type ProjectPageContainerPreviewProps = {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
};

export const ProjectPageContainerPreview: React.FC<
  ProjectPageContainerPreviewProps
> = ({ initial, params }) => {
  const { data } = useQuery<SanityDocument | null>(PROJECT_QUERY, params, {
    initial,
  });

  return data ? (
    <ProjectPageContainer project={data} />
  ) : (
    <p>Project not found</p>
  );
};
