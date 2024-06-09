import "./contactUs.scss";

import { Link } from "@/../navigation";

export const ContactUs: React.FC = () => {
  return (
    <div className={"contact-page-contact-us-container"}>
      <h1 className="contact-page-contact-us-message">
        {
          "Vous aimeriez avoir plus d'informations, écrivez-nous via notre formulaire"
        }
      </h1>
      <Link className="contact-page-contact-us-link" href={"/contact-form"}>
        Écrivez-nous
      </Link>
    </div>
  );
};
