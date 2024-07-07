"use client";

import { useCookiesConsent } from "@/common/hooks/useCookiesConsent";
import { CookieConsentShowModalType } from "@/common/models/cookieConsentConfig";

type CookiePreferencesTextProps = {
  label: string;
};

export const CookiePreferencesText: React.FC<CookiePreferencesTextProps> = ({
  label,
}) => {
  const { setCookieConsentShowModal } = useCookiesConsent();

  return (
    <p
      className="footer-link"
      style={{ cursor: "pointer" }}
      onClick={() => setCookieConsentShowModal(CookieConsentShowModalType.FULL)}
    >
      {label}
    </p>
  );
};
