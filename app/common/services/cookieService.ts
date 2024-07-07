import Cookies from "universal-cookie";
import { CookieConsentPreferences } from "../models/cookieConsentConfig";

export interface CookieService {
  addCookieConsentUpdateHandlers: (
    textId: string,
    cookieConsentUpdateHandler: (consent: CookieConsentPreferences) => void
  ) => void;
  getAllCookies: () => Cookies;
  removeAllCookies: () => void;
  setCookieConsentPreferences: (consent: CookieConsentPreferences) => void;
  getCookieConsentPreferences: () => CookieConsentPreferences | null;
}
