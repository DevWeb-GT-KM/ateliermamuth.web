import { useContext } from "react";

import {
  CookiesConsentContext,
  ICookiesConsentContext,
} from "../contexts/CookiesConsentContext";

const useCookiesConsent = (): ICookiesConsentContext => {
  const context = useContext(CookiesConsentContext);
  if (typeof context === "undefined")
    throw Error("CookiesConsentContext is required");
  return context;
};

export { useCookiesConsent };
