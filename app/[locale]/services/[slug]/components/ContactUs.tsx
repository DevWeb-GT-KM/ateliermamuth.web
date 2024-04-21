import "./contactUs.scss";

import { Link } from "@/../navigation";

type ContactUsProps = {
  serviceType: string;
};

export const ContactUs: React.FC<ContactUsProps> = ({ serviceType }) => {
  return (
    <div
      className={`service-page-contact-us-container service-page-contact-us-${serviceType}`}
    >
      <h1 className="service-page-contact-us-message">
        Vous aimeriez avoir plus d'informations, écrivez-nous via notre
        formulaire
      </h1>
      <Link className="service-page-contact-us-link" href={{ pathname: "/" }}>
        écrivez-nous
      </Link>
    </div>
  );
};
