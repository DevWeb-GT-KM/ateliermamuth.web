import { useContext } from "react";

import {
  CookiesConsentContext,
  ICookiesConsentContext,
} from "../contexts/CookiesConsentContext";

const useCookiesConsent = (): ICookiesConsentContext => {
  const cookiesConsentContext = useContext(CookiesConsentContext);

  if (typeof cookiesConsentContext === "undefined") {
    throw Error("CookiesConsentContext is required");
  }

  return cookiesConsentContext;
};

export { useCookiesConsent };
