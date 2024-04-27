import { Employee } from "./Employee";
import "./aboutUsPageContainer.scss";

import { PortableText } from "@portabletext/react";
import { Publications } from "./publications/Publications";

export type AboutUsPageContainerProps = {
  data: any[];
};

export const AboutUsPageContainer: React.FC<AboutUsPageContainerProps> = ({
  data,
}) => {
  return (
    <div className="about-us-page-container">
      <div className="about-us-page-header">
        <h1 className="about-us-page-title">{data[0].pageTitle}</h1>
      </div>
      <div className="about-us-page-description-section">
        <p className="about-us-page-small-description">
          {data[0].shortDescription}
        </p>
        <div className="about-us-page-description">
          <div className="about-us-page-description-rich-text">
            <PortableText value={data[0].description} />
          </div>
          <div className="about-us-page-description-image"></div>
        </div>
      </div>
      <div className="about-us-page-employee-section">
        {data[0].employees.map((employee: any, index: number) => {
          return <Employee key={index} data={employee} />;
        })}
      </div>
      <Publications data={data[0].publications} />
    </div>
  );
};
