"use client";

import { QueryParams, SanityDocument } from "next-sanity";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { Project } from "./Project";
import { PROJECT_QUERY } from "@/../sanity/lib/queries";

type ProjectPreviewProps = {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
};

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  initial,
  params,
}) => {
  const { data } = useQuery<SanityDocument | null>(PROJECT_QUERY, params, {
    initial,
  });

  return data ? <Project project={data} /> : <p>Project not found</p>;
};
