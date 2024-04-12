import { loadQuery } from "../../../../../../sanity/lib/store";
import { QueryRepository } from "../queryRepository";
import { groq } from "next-sanity";
import { SanityDocument, QueryParams } from "next-sanity";
import { QueryResponseInitial } from "@sanity/react-loader";

export class QueryGroqRepository implements QueryRepository {
  async getProjects(
    params: QueryParams,
    isDraftModeEnabled: boolean
  ): Promise<QueryResponseInitial<SanityDocument[]>> {
    return await loadQuery<SanityDocument[]>(
      groq`*[_type == "project" && defined(slug)]`,
      params,
      {
        perspective: isDraftModeEnabled ? "previewDrafts" : "published",
      }
    );
  }
}
