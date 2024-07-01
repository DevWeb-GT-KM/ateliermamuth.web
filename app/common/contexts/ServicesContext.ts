import React from "react";

import { CookieServiceImpl } from "../services/cookieServiceImpl";
import { GtmCookieConsentServiceImpl } from "../services/gtmCookieConsentServiceImpl";

export type Service = any;

export type Services = Record<string, Service>;

const initialize = () => {
  const services: Services = {};

  services["CookieService"] = new CookieServiceImpl("cookies_consent");
  services["GtmCookieConsentService"] = new GtmCookieConsentServiceImpl();

  return services;
};

export const ServicesContext = React.createContext<Services>(initialize());
