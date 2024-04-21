import { ContactUs } from "./ContactUs";
import { ServiceStep } from "./ServiceStep";
import "./servicePageContainer.scss";

import { SanityDocument } from "next-sanity";

type ServicePagecontainerProps = {
  service: SanityDocument;
};

export const ServicePageContainer: React.FC<ServicePagecontainerProps> = ({
  service,
}) => {
  return (
    <div
      className={`service-page-container service-page-${service.slug.current}-container`}
    >
      <div className="service-page-header">
        <h1 className="service-page-title">{service.name}</h1>
        <p className="service-page-description">{service.description}</p>
      </div>
      <div className="service-page-steps-section">
        <div className="service-page-steps-section-header">
          <h2 className="service-page-steps-section-title">
            {service.stepsTitle}
          </h2>
        </div>
        <div className="service-page-steps-section-body">
          <ServiceStep data={service.steps} />
        </div>
      </div>
      <ContactUs serviceType={service.slug.current} />
    </div>
  );
};
