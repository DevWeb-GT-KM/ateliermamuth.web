"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import {
  CookiesConsentContext,
  ICookiesConsentContext,
} from "./CookiesConsentContext";

import {
  CookieConsentConfig,
  CookieConsentPreferences,
  DEFAULT_COOKIE_CONSENT_PREFERENCES,
  CookieConsentShowModalType,
} from "../models/cookieConsentConfig";

// import CookieConsentModal from "../components/modal/CookieConsentModal";
// import { useService } from "../hooks/useService";
// import { CookieService } from "../services/cookieService";
// import { GtmCookieConsentService } from "../services/gtmCookieConsentService";

export interface ICookiesConsentProvider {
  config: CookieConsentConfig;
  children: React.ReactNode;
}

export const CookiesConsentProvider: React.FC<ICookiesConsentProvider> = (
  props
) => {
  const { children, config } = props;

  const [cookieConsentPreferences, setCookieConsentPreferences] =
    useState<CookieConsentPreferences>(DEFAULT_COOKIE_CONSENT_PREFERENCES);

  const [cookieConsentShowModal, setCookieConsentShowModal] =
    useState<CookieConsentShowModalType>(CookieConsentShowModalType.HIDE_MODAL);
  const [defaultConsentIsSet, setDefaultConsentIsSet] =
    useState<boolean>(false);

  //   const cookieService: CookieService = useService("CookieService");
  //   const gtmCookieConsentService: GtmCookieConsentService = useService(
  //     "GtmCookieConsentService"
  //   );

  //   useEffect(() => {
  //     const defaultCookie = cookieService.getCookieConsentPreferences();

  //     if (defaultCookie == null) {
  //       setCookieConsentShowModal(CookieConsentShowModalType.SMALL);
  //     } else {
  //       setCookieConsentShowModal(
  //         isAllAccepted(defaultCookie)
  //           ? CookieConsentShowModalType.HIDE_ALL
  //           : CookieConsentShowModalType.HIDE_MODAL
  //       );
  //       setCookieConsentPreferences(defaultCookie);
  //     }

  //     addCookieConsentUpdateHandlers();
  //   }, []);

  const isAllAccepted = (
    cookieConsentPreferences: CookieConsentPreferences
  ): boolean => {
    let isAllAccepted = true;
    for (const preference in cookieConsentPreferences) {
      if (
        !cookieConsentPreferences[preference as keyof CookieConsentPreferences]
      ) {
        isAllAccepted = false;
        break;
      }
    }
    return isAllAccepted;
  };

  //   const addCookieConsentUpdateHandlers = () => {
  //     cookieService.addCookieConsentUpdateHandlers(
  //       "gtmCookieConsentService",
  //       (consent: CookieConsentPreferences) =>
  //         gtmCookieConsentService.setConsent(consent, false)
  //     );
  //   };

  const cookiesConsentContext: ICookiesConsentContext = {
    config: config,
    cookieConsentPreferences: cookieConsentPreferences,
    setCookieConsentPreferences: setCookieConsentPreferences,
    cookieConsentShowModal: cookieConsentShowModal,
    setCookieConsentShowModal: setCookieConsentShowModal,
    defaultConsentIsSet: defaultConsentIsSet,
    setDefaultConsentIsSet: setDefaultConsentIsSet,
  };

  return (
    <CookiesConsentContext.Provider value={cookiesConsentContext}>
      {children}
      {/* <CookieConsentModal /> */}
    </CookiesConsentContext.Provider>
  );
};
