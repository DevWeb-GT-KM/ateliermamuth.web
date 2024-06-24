"use client";

import "./cookiesBanner.scss";

import { useEffect, useState } from "react";
import { usePageOverlay } from "@/[locale]/components/pageOverlay/PageOverlayContext";
import { CookiesBanner } from "./CookiesBanner";
import { CookiesParameters } from "./CookiesParameters";

type CookiesConsentProps = {};

export type Cookies = {
  essentialCookies: boolean;
  marketingCookies: boolean;
  fonctionalCookies: boolean;
  analyticCookies: boolean;
};

export const CookiesConsent: React.FC<CookiesConsentProps> = ({}) => {
  const [showCookiesBanner, setShowCookiesBanner] = useState<boolean>(true);
  const [showCookiesParameters, setShowCookiesParameters] =
    useState<boolean>(false);

  const { isPageOverlayHidden, setIsPageOverlayHidden } = usePageOverlay();

  const [cookies, setCookies] = useState<Cookies>({
    essentialCookies: true,
    marketingCookies: true,
    fonctionalCookies: true,
    analyticCookies: true,
  });

  const onAcceptCookies = () => {
    setShowCookiesBanner(false);
    setIsPageOverlayHidden(true);
    setShowCookiesParameters(false);
  };

  useEffect(() => {
    if (isPageOverlayHidden && showCookiesParameters) {
      onCloseCookiesParameters();
    }
  }, [isPageOverlayHidden]);

  const onShowCookiesParameters = () => {
    setShowCookiesBanner(false);
    setShowCookiesParameters(true);
    setIsPageOverlayHidden(false);
  };

  const onCloseCookiesParameters = () => {
    setShowCookiesParameters(false);
    setShowCookiesBanner(true);
    setIsPageOverlayHidden(true);
  };

  return (
    <>
      <CookiesBanner
        showCookiesBanner={showCookiesBanner}
        onCookiesAccept={onAcceptCookies}
        onCookiesShowParameters={onShowCookiesParameters}
      />
      <CookiesParameters
        cookies={cookies}
        onAcceptCookies={onAcceptCookies}
        showCookiesParameters={showCookiesParameters}
        onCloseCookiesParameters={onCloseCookiesParameters}
      />
    </>
  );
};
