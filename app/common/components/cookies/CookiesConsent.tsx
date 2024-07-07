"use client";

import "./cookiesBanner.scss";

import { useEffect, useState } from "react";
import { usePageOverlay } from "@/[locale]/components/pageOverlay/PageOverlayContext";
import { CookiesBanner } from "./CookiesBanner";
import { CookiesParameters } from "./CookiesParameters";
import { useCookiesConsent } from "@/common/hooks/useCookiesConsent";
import {
  CookieConsentPreferences,
  CookieConsentShowModalType,
} from "@/common/models/cookieConsentConfig";
import { useService } from "@/common/hooks/useService";
import { CookieService } from "@/common/services/cookieService";

export const CookiesConsent: React.FC = () => {
  const { cookieConsentShowModal, setCookieConsentShowModal } =
    useCookiesConsent();
  const [showCookiesParameters, setShowCookiesParameters] =
    useState<boolean>(false);

  const { isPageOverlayHidden } = usePageOverlay();

  const cookiesConsentContext = useCookiesConsent();
  const cookieService: CookieService = useService("CookieService");

  useEffect(() => {
    if (
      isPageOverlayHidden &&
      cookieConsentShowModal === CookieConsentShowModalType.FULL
    ) {
      hideCookieConsentUI();
    }
  }, [isPageOverlayHidden]);

  const onAcceptCookies = () => {
    const allTrueCookieConsentPreferences: CookieConsentPreferences = {
      necessary: true,
      analytics: true,
      advertising: true,
    };

    cookieService.setCookieConsentPreferences(allTrueCookieConsentPreferences);
    cookiesConsentContext.setCookieConsentPreferences(
      allTrueCookieConsentPreferences
    );
    hideCookieConsentUI();
  };

  const onShowCookiesParameters = () => {
    setCookieConsentShowModal(CookieConsentShowModalType.FULL);
  };

  const hideCookieConsentUI = () => {
    setCookieConsentShowModal(CookieConsentShowModalType.HIDE);
  };

  return (
    <>
      <CookiesBanner
        showCookiesBanner={
          cookieConsentShowModal === CookieConsentShowModalType.SMALL
        }
        onCookiesAccept={onAcceptCookies}
        onCookiesShowParameters={onShowCookiesParameters}
      />
      <CookiesParameters
        onAcceptCookies={onAcceptCookies}
        showCookiesParameters={
          cookieConsentShowModal === CookieConsentShowModalType.FULL
        }
        onCloseCookiesParameters={hideCookieConsentUI}
      />
    </>
  );
};
