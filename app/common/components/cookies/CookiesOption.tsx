"use client";

import "./cookiesOption.scss";

type CookiesOptionProps = {
  title: string;
  description: string;
  isChecked?: boolean;
  isCheckable?: boolean;
};

export const CookiesOption: React.FC<CookiesOptionProps> = ({
  title,
  description,
  isChecked,
  isCheckable,
}) => {
  return (
    <div className="cookies-option">
      <div className="cookies-option-header">
        <p className="cookies-option-title">{title}</p>
        {isCheckable && (
          <label className="custom-checkbox">
            <input type="checkbox" className="hidden-checkbox" />
            <span className="custom-checkmark"></span>
          </label>
        )}
      </div>
      <p className="cookies-option-description">{description}</p>
    </div>
  );
};
