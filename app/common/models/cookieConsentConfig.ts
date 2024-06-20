export type CookieConsentPreferences = {
  necessary: boolean;
  analytics: boolean;
  advertising: boolean;
};

export const DEFAULT_COOKIE_CONSENT_PREFERENCES: CookieConsentPreferences = {
  necessary: true,
  analytics: false,
  advertising: false,
};

export type CookieConsentPreferenceItem = {
  isAlwaysActive: boolean;
  cookieConsentPreferencesName: keyof CookieConsentPreferences;
};

export type CookieConsentConfig = {
  containerId: string;
  cookieConsentPreferences?: CookieConsentPreferenceItem[];
};

export enum CookieConsentShowModalType {
  SMALL,
  FULL,
  HIDE_MODAL,
}
