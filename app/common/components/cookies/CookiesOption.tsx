"use client";

import { CookieConsentPreferences } from "@/common/models/cookieConsentConfig";
import "./cookiesOption.scss";
import { useCookiesConsent } from "@/common/hooks/useCookiesConsent";
import { useService } from "@/common/hooks/useService";
import { CookieService } from "@/common/services/cookieService";

type CookiesOptionProps = {
  title: string;
  description: string;
  type: keyof CookieConsentPreferences;
};

export const CookiesOption: React.FC<CookiesOptionProps> = ({
  title,
  description,
  type,
}) => {
  const isCheckable = type !== "necessary";

  const { cookieConsentPreferences, setCookieConsentPreferences } =
    useCookiesConsent();

  const cookieService: CookieService = useService("CookieService");

  const handleChange = (isChecked: boolean) => {
    cookieConsentPreferences[type] = isChecked;
    cookieService.setCookieConsentPreferences(cookieConsentPreferences);
    setCookieConsentPreferences(cookieConsentPreferences);
  };

  return (
    <div className="cookies-option">
      <div className="cookies-option-header">
        <p className="cookies-option-title">{title}</p>
        {isCheckable && (
          <label className="custom-checkbox">
            <input
              type="checkbox"
              className="hidden-checkbox"
              defaultChecked={cookieConsentPreferences[type]}
              onChange={(event) => handleChange(event.target.checked)}
            />
            <span className="custom-checkmark"></span>
          </label>
        )}
      </div>
      <p className="cookies-option-description">{description}</p>
    </div>
  );
};
