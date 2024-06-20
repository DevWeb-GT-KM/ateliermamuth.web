export type GtmCookieConsentStatus = "granted" | "denied";

export type GtmCookieConsentConfig = {
  ad_storage: GtmCookieConsentStatus;
  analytics_storage: GtmCookieConsentStatus;
  personalization_storage: GtmCookieConsentStatus;
  functionality_storage: GtmCookieConsentStatus;
  security_storage: GtmCookieConsentStatus;
};
