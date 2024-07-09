"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

import {
  CookiesConsentContext,
  ICookiesConsentContext,
} from "./CookiesConsentContext";
import {
  CookieConsentPreferences,
  REJECT_ALL_COOKIE_CONSENT_PREFERENCES,
  CookieConsentShowModalType,
  DEFAULT_UI_COOKIE_CONSENT_PREFERENCES,
} from "../models/cookieConsentConfig";
import { useService } from "../hooks/useService";
import { CookieService } from "../services/cookieService";
import { GtmCookieConsentService } from "../services/gtmCookieConsentService";
import { usePageOverlay } from "@/[locale]/components/pageOverlay/PageOverlayContext";

const GTM_CONTAINER_ID = "GTM-WKFFMBVJ";

export interface ICookiesConsentContextProvider {
  children: React.ReactNode;
}

export const CookiesConsentContextProvider: React.FC<
  ICookiesConsentContextProvider
> = (props) => {
  const { children } = props;

  const [cookieConsentPreferences, setCookieConsentPreferences] =
    useState<CookieConsentPreferences>(DEFAULT_UI_COOKIE_CONSENT_PREFERENCES);

  const [cookieConsentShowModal, setCookieConsentShowModal] =
    useState<CookieConsentShowModalType>(CookieConsentShowModalType.HIDE);
  const [defaultConsentIsSet, setDefaultConsentIsSet] =
    useState<boolean>(false);

  const cookieService: CookieService = useService("CookieService");
  const gtmCookieConsentService: GtmCookieConsentService = useService(
    "GtmCookieConsentService"
  );

  const { setIsPageOverlayHidden } = usePageOverlay();

  useEffect(() => {
    const savedCookiesConsent = cookieService.getCookieConsentPreferences();

    if (savedCookiesConsent == null) {
      setCookieConsentShowModal(CookieConsentShowModalType.BANNER);
    } else {
      setCookieConsentShowModal(CookieConsentShowModalType.HIDE);
      setCookieConsentPreferences(savedCookiesConsent);
    }

    initGoogleTagManager(savedCookiesConsent);
    addCookieConsentUpdateHandlers();
  }, []);

  useEffect(() => {
    setIsPageOverlayHidden(
      cookieConsentShowModal !== CookieConsentShowModalType.MODAL
    );
  }, [cookieConsentShowModal]);

  const initGoogleTagManager = (
    savedCookiesConsent: CookieConsentPreferences | null
  ) => {
    gtmCookieConsentService.setContainerId(GTM_CONTAINER_ID);

    if (savedCookiesConsent) {
      gtmCookieConsentService.setConsent(savedCookiesConsent, true);
    } else {
      gtmCookieConsentService.setConsent(
        REJECT_ALL_COOKIE_CONSENT_PREFERENCES,
        true
      );
    }

    setDefaultConsentIsSet(true);
  };

  const addCookieConsentUpdateHandlers = () => {
    cookieService.addCookieConsentUpdateHandlers(
      "gtmCookieConsentService",
      (consent: CookieConsentPreferences) =>
        gtmCookieConsentService.setConsent(consent, false)
    );
  };

  const cookiesConsentContext: ICookiesConsentContext = {
    cookieConsentPreferences: cookieConsentPreferences,
    setCookieConsentPreferences: setCookieConsentPreferences,
    cookieConsentShowModal: cookieConsentShowModal,
    setCookieConsentShowModal: setCookieConsentShowModal,
  };

  return (
    <CookiesConsentContext.Provider value={cookiesConsentContext}>
      {defaultConsentIsSet ? (
        <GoogleTagManager
          gtmId={GTM_CONTAINER_ID}
          dataLayer={window.dataLayer as any}
        />
      ) : (
        <></>
      )}
      {children}
    </CookiesConsentContext.Provider>
  );
};
