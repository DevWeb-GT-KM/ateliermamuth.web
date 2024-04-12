import { SanityDocument, QueryParams } from "next-sanity";
import { QueryResponseInitial } from "@sanity/react-loader";

export interface QueryRepository {
  getProjects: (
    params: QueryParams,
    isDraftModeEnable: boolean
  ) => Promise<QueryResponseInitial<SanityDocument[]>>;
}
