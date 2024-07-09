"use client";

import "./cookiesConsent.scss";
import "./cookiesBanner.scss";

import { useEffect } from "react";
import { usePageOverlay } from "@/[locale]/components/pageOverlay/PageOverlayContext";
import { CookiesBanner } from "./CookiesBanner";
import { CookiesParameters } from "./CookiesParameters";
import { useCookiesConsent } from "@/common/hooks/useCookiesConsent";
import {
  ACCEPT_ALL_COOKIE_CONSENT_PREFERENCES,
  CookieConsentPreferences,
  CookieConsentShowModalType,
  DEFAULT_UI_COOKIE_CONSENT_PREFERENCES,
  REJECT_ALL_COOKIE_CONSENT_PREFERENCES,
} from "@/common/models/cookieConsentConfig";
import { useService } from "@/common/hooks/useService";
import { CookieService } from "@/common/services/cookieService";

export const CookiesConsent: React.FC = () => {
  const {
    cookieConsentShowModal,
    setCookieConsentShowModal,
    cookieConsentPreferences,
    setCookieConsentPreferences,
  } = useCookiesConsent();

  const { isPageOverlayHidden } = usePageOverlay();
  const cookieService: CookieService = useService("CookieService");

  useEffect(() => {
    if (
      isPageOverlayHidden &&
      cookieConsentShowModal === CookieConsentShowModalType.MODAL
    ) {
      handleCloseModal();
    }
  }, [isPageOverlayHidden]);

  const handleSave = (consent: CookieConsentPreferences) => {
    setCookieConsentPreferences(consent);
    cookieService.setCookieConsentPreferences(consent);
    hideCookieConsentUI();
  };

  const handleShowModal = () => {
    setCookieConsentShowModal(CookieConsentShowModalType.MODAL);
  };

  const handleCloseModal = () => {
    const savedCookieConsent = cookieService.getCookieConsentPreferences();

    if (!savedCookieConsent) {
      setCookieConsentPreferences(DEFAULT_UI_COOKIE_CONSENT_PREFERENCES);
      setCookieConsentShowModal(CookieConsentShowModalType.BANNER);
    } else {
      setCookieConsentPreferences(savedCookieConsent);
      hideCookieConsentUI();
    }
  };

  const hideCookieConsentUI = () => {
    setCookieConsentShowModal(CookieConsentShowModalType.HIDE);
  };

  return (
    <div className="cookies-consent-container">
      <CookiesBanner
        showCookiesBanner={
          cookieConsentShowModal === CookieConsentShowModalType.BANNER
        }
        onCookiesAccept={() =>
          handleSave(ACCEPT_ALL_COOKIE_CONSENT_PREFERENCES)
        }
        onCookiesShowParameters={handleShowModal}
      />
      <CookiesParameters
        onSave={() => handleSave(cookieConsentPreferences)}
        onRejectAll={() => handleSave(REJECT_ALL_COOKIE_CONSENT_PREFERENCES)}
        showCookiesParameters={
          cookieConsentShowModal === CookieConsentShowModalType.MODAL
        }
        onCloseCookiesParameters={handleCloseModal}
      />
    </div>
  );
};
