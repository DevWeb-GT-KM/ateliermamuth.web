import { CookieConsentPreferences } from "../models/cookieConsentConfig";

export interface GtmCookieConsentService {
  setContainerId: (containerId: string) => void;
  setConsent: (
    consent: CookieConsentPreferences,
    isDefaultConfig?: boolean
  ) => void;
}
