import { Dispatch, SetStateAction, createContext } from "react";

import {
  CookieConsentConfig,
  CookieConsentPreferences,
  CookieConsentShowModalType,
} from "../models/cookieConsentConfig";

export interface ICookiesConsentContext {
  config: CookieConsentConfig;
  cookieConsentPreferences: CookieConsentPreferences;
  setCookieConsentPreferences: Dispatch<
    SetStateAction<CookieConsentPreferences>
  >;
  cookieConsentShowModal: CookieConsentShowModalType;
  setCookieConsentShowModal: Dispatch<
    SetStateAction<CookieConsentShowModalType>
  >;
  defaultConsentIsSet: boolean;
  setDefaultConsentIsSet: Dispatch<SetStateAction<boolean>>;
}

export const CookiesConsentContext = createContext<ICookiesConsentContext>(
  // We don't really want a default value, but createContext requires one,
  // and TypeScript expect it to have correct type.
  undefined as unknown as ICookiesConsentContext
);
