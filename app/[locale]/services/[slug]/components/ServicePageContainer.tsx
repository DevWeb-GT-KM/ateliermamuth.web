import { BottomToTopSlider } from "@/common/components/animations/BottomToTopSlider";
import { ContactUs } from "./ContactUs";
import { ServiceStep } from "./ServiceStep";
import "./servicePageContainer.scss";

import { SanityDocument } from "next-sanity";
import { Link } from "@/../navigation";
import { getServiceType } from "@/common/helpers/ServiceHelper";

const PROJECT_TYPE_BY_SLUG: Record<string, string> = {
  "design-interieur-residentiel": "residentiel",
  "architecture-residentielle": "residentiel",
  "design-interieur-commercial": "commercial",
};

type ServicePageContainerProps = {
  service: SanityDocument;
};

export const ServicePageContainer: React.FC<ServicePageContainerProps> = ({ service }) => {
  const serviceType = getServiceType(service.slug.current);
  const projectType = PROJECT_TYPE_BY_SLUG[service.slug.current];
  return (
    <div className={`service-page-container service-page-${serviceType}-container`}>
      <div className="service-page-header">
        <h1 className="service-page-title">{service.name}</h1>
      </div>
      <BottomToTopSlider>
        <p className="service-page-description">{service.description}</p>
      </BottomToTopSlider>
      <div className="service-page-steps-section">
        <div className="service-page-steps-section-header">
          <h2 className="service-page-steps-section-title">{service.stepsTitle}</h2>
        </div>
        <div className="service-page-steps-section-body">
          <ServiceStep data={service.steps} />
        </div>
      </div>
      {service.projectsCta && (
        <div className="service-page-projects-cta">
          <p className="service-page-projects-cta-title">{service.projectsCta.title}</p>
          <Link
            className="service-page-projects-cta-link"
            href={{ pathname: "/projects", query: projectType ? { type: projectType } : undefined }}
          >
            {service.projectsCta.buttonLabel}
          </Link>
        </div>
      )}
      <ContactUs serviceType={serviceType} />
    </div>
  );
};
