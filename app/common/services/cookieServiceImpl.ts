import Cookies from "universal-cookie";

import { CookieService } from "./cookieService";
import {
  CookieConsentPreferences,
  REJECT_ALL_COOKIE_CONSENT_PREFERENCES,
} from "../models/cookieConsentConfig";

export class CookieServiceImpl implements CookieService {
  private cookieConsentPreferenceName: string;

  private cookies: Cookies;

  private cookieConsentUpdateHandlers: Record<
    string,
    { (consent: CookieConsentPreferences): void }
  >;

  constructor(cookieConsentPreferenceName: string) {
    this.cookies = new Cookies();
    this.cookieConsentPreferenceName = cookieConsentPreferenceName;
    this.cookieConsentUpdateHandlers = {};
  }

  getAllCookies = (): Cookies => {
    return this.cookies;
  };

  addCookieConsentUpdateHandlers = (
    textId: string,
    cookieConsentUpdateHandler: (consent: CookieConsentPreferences) => void
  ): void => {
    this.cookieConsentUpdateHandlers[textId] = cookieConsentUpdateHandler;
  };

  getCookieConsentPreferences = (): CookieConsentPreferences | null => {
    const cookieConsentPreferences = this.cookies.get(
      this.cookieConsentPreferenceName
    );

    return cookieConsentPreferences ?? null;
  };

  setCookieConsentPreferences = (consent: CookieConsentPreferences): void => {
    this.cookies.set(
      this.cookieConsentPreferenceName,
      JSON.stringify(consent),
      {
        path: "/",
        expires: this.offsetYear(1),
      }
    );

    this.triggerCookieConsentUpdateHandlers(consent);
  };

  removeAllCookies = (): void => {
    const allCookies = this.cookies.getAll();
    for (const key of Object.keys(allCookies)) {
      this.cookies.remove(key, { path: "/" });
    }

    this.triggerCookieConsentUpdateHandlers(
      REJECT_ALL_COOKIE_CONSENT_PREFERENCES
    );
  };

  private triggerCookieConsentUpdateHandlers(
    consent: CookieConsentPreferences
  ) {
    Object.entries(this.cookieConsentUpdateHandlers).forEach(([, method]) =>
      method(consent)
    );
  }

  private offsetYear(year: number) {
    const date = new Date();
    date.setFullYear(date.getFullYear() + year);
    return date;
  }
}
