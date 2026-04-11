import { BottomToTopSlider } from "@/common/components/animations/BottomToTopSlider";
import { ContactUs } from "./ContactUs";
import { ServiceStep } from "./ServiceStep";
import "./servicePageContainer.scss";

import { SanityDocument } from "next-sanity";
import { getServiceType } from "@/common/helpers/ServiceHelper";

type ServicePageContainerProps = {
  service: SanityDocument;
};

export const ServicePageContainer: React.FC<ServicePageContainerProps> = ({
  service,
}) => {
  const serviceType = getServiceType(service.slug.current);
  return (
    <div
      className={`service-page-container service-page-${serviceType}-container`}
    >
      <div className="service-page-header">
        <h1 className="service-page-title">{service.name}</h1>
      </div>
      <BottomToTopSlider>
        <p className="service-page-description">{service.description}</p>
      </BottomToTopSlider>
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
      <ContactUs serviceType={serviceType} />
    </div>
  );
};
