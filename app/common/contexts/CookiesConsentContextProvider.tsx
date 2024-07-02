"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

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
import { useService } from "../hooks/useService";
import { CookieService } from "../services/cookieService";
import { GtmCookieConsentService } from "../services/gtmCookieConsentService";
import { usePageOverlay } from "@/[locale]/components/pageOverlay/PageOverlayContext";

const GTM_CONTAINER_ID = "GTM-WKFFMBVJ";

export interface ICookiesConsentContextProvider {
  config: CookieConsentConfig;
  children: React.ReactNode;
}

export const CookiesConsentContextProvider: React.FC<
  ICookiesConsentContextProvider
> = (props) => {
  const { children, config } = props;

  const [cookieConsentPreferences, setCookieConsentPreferences] =
    useState<CookieConsentPreferences>(DEFAULT_COOKIE_CONSENT_PREFERENCES);

  const [cookieConsentShowModal, setCookieConsentShowModal] =
    useState<CookieConsentShowModalType>(CookieConsentShowModalType.HIDE);
  const [defaultConsentIsSet, setDefaultConsentIsSet] =
    useState<boolean>(false);

  const cookieService: CookieService = useService("CookieService");
  const gtmCookieConsentService: GtmCookieConsentService = useService(
    "GtmCookieConsentService"
  );

  const { isPageOverlayHidden, setIsPageOverlayHidden } = usePageOverlay();

  useEffect(() => {
    const defaultCookie = cookieService.getCookieConsentPreferences();

    if (defaultCookie == null) {
      setCookieConsentShowModal(CookieConsentShowModalType.SMALL);
    } else {
      setCookieConsentShowModal(CookieConsentShowModalType.HIDE);
      setCookieConsentPreferences(defaultCookie);
    }

    addCookieConsentUpdateHandlers();

    if (!defaultConsentIsSet) {
      gtmCookieConsentService.setContainerId(GTM_CONTAINER_ID);

      const savedCookieConsent = cookieService.getCookieConsentPreferences();

      if (savedCookieConsent) {
        gtmCookieConsentService.setConsent(savedCookieConsent, true);
      } else {
        gtmCookieConsentService.setConsent(
          DEFAULT_COOKIE_CONSENT_PREFERENCES,
          true
        );
      }

      setDefaultConsentIsSet(true);
    }
  }, []);

  useEffect(() => {
    setIsPageOverlayHidden(
      cookieConsentShowModal !== CookieConsentShowModalType.FULL
    );
  }, [cookieConsentShowModal]);

  const addCookieConsentUpdateHandlers = () => {
    cookieService.addCookieConsentUpdateHandlers(
      "gtmCookieConsentService",
      (consent: CookieConsentPreferences) =>
        gtmCookieConsentService.setConsent(consent, false)
    );
  };

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
      <GoogleTagManager gtmId={GTM_CONTAINER_ID} />
      {children}
    </CookiesConsentContext.Provider>
  );
};
