import "./ServicesPageContainer.scss";

import { ServicesListing } from "./ServicesListing";

export type ServicesPageContainerProps = {
  data?: {
    pageTitle?: string;
    description?: any[];
    services?: any[];
  }[];
};

export const ServicesPageContainer: React.FC<ServicesPageContainerProps> = ({
  data,
}) => {
  return (
    <div className="services-page-container">
      <div className="services-page-header">
        <h1 className="services-page-header-title">{data?.[0]?.pageTitle}</h1>
      </div>
      <div className="services-page-content">
        <div className="services-page-content-description-container">
          {data?.[0].description?.map((descriptionParagraph) => (
            <p key={descriptionParagraph._key}>
              {descriptionParagraph.children?.[0].text}
            </p>
          ))}
        </div>
        <ServicesListing services={data?.[0]?.services} />
        <div className="services-page-projects-container"></div>
      </div>
    </div>
  );
};
