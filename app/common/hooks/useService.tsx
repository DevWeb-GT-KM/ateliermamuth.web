import { MamuthService } from "../models/mamuthService";
import { MamuthServices } from "../models/mamuthServices";
import { QueryServiceImpl } from "../services/queryService/services/queryServiceImpl";
import { QueryGroqRepository } from "../services/queryService/repositories/groq/queryGroqRepository";

let services: MamuthServices = {};

services["query"] = new QueryServiceImpl(new QueryGroqRepository());

export const useService = (serviceName: string) => {
  const serviceFound = services[serviceName];

  if (!serviceFound) {
    return `The service ${serviceName} is not provided`;
  }

  return serviceFound;
};
