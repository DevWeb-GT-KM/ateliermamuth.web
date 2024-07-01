import { useContext } from "react";

import { ServicesContext } from "../contexts/ServicesContext";

export const useService = (serviceName: string): any => {
  const servicesContext = useContext(ServicesContext);

  if (typeof servicesContext === "undefined") {
    throw Error("ServicesContext is required");
  } else if (servicesContext[serviceName] === undefined) {
    throw Error(`${serviceName} is not provided`);
  }

  return servicesContext[serviceName];
};
