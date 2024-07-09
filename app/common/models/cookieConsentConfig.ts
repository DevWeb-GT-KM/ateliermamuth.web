export type CookieConsentPreferences = {
  necessary: boolean;
  analytics: boolean;
  advertising: boolean;
};

export const REJECT_ALL_COOKIE_CONSENT_PREFERENCES: CookieConsentPreferences = {
  necessary: true,
  analytics: false,
  advertising: false,
};

export const ACCEPT_ALL_COOKIE_CONSENT_PREFERENCES: CookieConsentPreferences = {
  necessary: true,
  analytics: true,
  advertising: true,
};

export const DEFAULT_UI_COOKIE_CONSENT_PREFERENCES: CookieConsentPreferences = {
  necessary: true,
  analytics: true,
  advertising: true,
};

export type CookieConsentPreferenceItem = {
  isAlwaysActive: boolean;
  cookieConsentPreferencesName: keyof CookieConsentPreferences;
};

export enum CookieConsentShowModalType {
  BANNER,
  MODAL,
  HIDE,
}
