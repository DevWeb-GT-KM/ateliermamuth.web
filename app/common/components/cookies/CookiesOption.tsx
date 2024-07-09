"use client";

import "./cookiesOption.scss";

import { CookieConsentPreferences } from "@/common/models/cookieConsentConfig";
import { useCookiesConsent } from "@/common/hooks/useCookiesConsent";

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
  const { cookieConsentPreferences, setCookieConsentPreferences } =
    useCookiesConsent();

  const handleChange = (isChecked: boolean) => {
    let newPreferences = { ...cookieConsentPreferences };
    newPreferences[type] = isChecked;
    setCookieConsentPreferences(newPreferences);
  };

  return (
    <div className="cookies-option">
      <div className="cookies-option-header">
        <p className="cookies-option-title">{title}</p>
        {type !== "necessary" && (
          <label className="custom-checkbox">
            <input
              type="checkbox"
              className="hidden-checkbox"
              checked={cookieConsentPreferences[type]}
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
