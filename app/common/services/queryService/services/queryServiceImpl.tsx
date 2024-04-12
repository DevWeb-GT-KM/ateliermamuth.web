import { QueryRepository } from "../repositories/queryRepository";
import { queryService } from "./queryService";

import { SanityDocument, QueryParams } from "next-sanity";
import { QueryResponseInitial } from "@sanity/react-loader";

export class QueryServiceImpl implements queryService {
  private queryRepository: QueryRepository;

  constructor(queryRepository: QueryRepository) {
    this.queryRepository = queryRepository;
  }

  async getProjects(
    params: QueryParams,
    isDraftModeEnable: boolean
  ): Promise<QueryResponseInitial<SanityDocument[]>> {
    return await this.queryRepository
      .getProjects(params, isDraftModeEnable)
      .catch((error) => {
        throw error;
      });
  }
}
