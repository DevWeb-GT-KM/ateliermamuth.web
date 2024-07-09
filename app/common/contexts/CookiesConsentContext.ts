import { Dispatch, SetStateAction, createContext } from "react";

import {
  CookieConsentPreferences,
  CookieConsentShowModalType,
} from "../models/cookieConsentConfig";

export interface ICookiesConsentContext {
  cookieConsentPreferences: CookieConsentPreferences;
  setCookieConsentPreferences: Dispatch<
    SetStateAction<CookieConsentPreferences>
  >;
  cookieConsentShowModal: CookieConsentShowModalType;
  setCookieConsentShowModal: Dispatch<
    SetStateAction<CookieConsentShowModalType>
  >;
}

export const CookiesConsentContext = createContext<ICookiesConsentContext>(
  // We don't really want a default value, but createContext requires one,
  // and TypeScript expect it to have correct type.
  undefined as unknown as ICookiesConsentContext
);
