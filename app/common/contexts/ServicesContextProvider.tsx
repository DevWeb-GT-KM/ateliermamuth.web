"use client";

import React, { useContext } from "react";

import { ServicesContext } from "./ServicesContext";

export interface IServicesContextProviderProps {
  children: React.ReactNode;
}

export const ServicesContextProvider: React.FC<
  IServicesContextProviderProps
> = (props: IServicesContextProviderProps) => {
  const servicesContext = useContext(ServicesContext);

  return (
    <ServicesContext.Provider value={servicesContext}>
      {props.children}
    </ServicesContext.Provider>
  );
};
