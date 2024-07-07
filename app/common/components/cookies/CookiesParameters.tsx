"use client";

import "./cookiesParameters.scss";

import { CookiesOption } from "./CookiesOption";
import { FaXmark } from "react-icons/fa6";

type CookiesParametersProps = {
  showCookiesParameters: boolean;
  onCloseCookiesParameters: () => void;
  onAcceptCookies: () => void;
};

export const CookiesParameters: React.FC<CookiesParametersProps> = ({
  showCookiesParameters,
  onCloseCookiesParameters,
  onAcceptCookies,
}) => {
  return (
    <div
      className={`cookies-parameters ${showCookiesParameters ? "show" : ""}`}
    >
      <div className="cookies-parameters-header">
        <p className="cookies-parameters-title">
          Paramètres avancés des cookies
        </p>
        <FaXmark
          className="cookies-parameters-close-btn"
          onClick={onCloseCookiesParameters}
        />
      </div>

      <div className="cookies-options">
        <CookiesOption
          type="necessary"
          title="Cookies essentiels"
          description="Ces cookies permettent l'activation de fonctionnalités essentielles telles que la sécurité, la vérification d'identité et la gestion de réseau. Ces cookies ne peuvent pas être désactivés."
        />
        <CookiesOption
          type="advertising"
          title="Activer les cookies de publicité"
          description="Ces cookies sont utilisés pour suivre l'efficacité de la publicité afin de fournir un service plus adapté et de diffuser de meilleures annonces en fonction des intérêts des visiteurs."
        />
        <CookiesOption
          type="analytics"
          title="Activer les cookies analytiques"
          description="Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site, à découvrir les erreurs et à fournir une meilleure analyse globale."
        />
      </div>
      <div className="save-cookies-setting-container">
        <button onClick={onAcceptCookies} className="save-cookies-setting-btn">
          Enregistrer
        </button>
      </div>
    </div>
  );
};
