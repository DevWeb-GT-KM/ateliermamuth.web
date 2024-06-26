"use client";

import "./cookiesBanner.scss";

type CookiesBannerProps = {
  showCookiesBanner: boolean;
  onCookiesAccept: () => void;
  onCookiesShowParameters: () => void;
};

export const CookiesBanner: React.FC<CookiesBannerProps> = ({
  showCookiesBanner,
  onCookiesAccept,
  onCookiesShowParameters,
}) => {
  return (
    <div
      className={`cookies-banner-container ${showCookiesBanner ? "cookies-banner-show" : ""}`}
    >
      <div className="cookies-banner-text">
        <p>
          Nous utilisons des cookies pour comprendre comment vous interagissez
          avec notre site. En acceptant, vous consentez à notre utilisation de
          ces cookies.
        </p>
      </div>
      <div className="cookies-banner-buttons">
        <button
          onClick={onCookiesShowParameters}
          className="cookies-parameter-btn cookies-btn"
        >
          paramètres
        </button>
        <button
          onClick={onCookiesAccept}
          className="cookies-btn cookies-accept-btn"
        >
          accepter
        </button>
      </div>
    </div>
  );
};
