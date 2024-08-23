"use client";

import {
  buildSeeMoreString,
  extractFirstSentence,
} from "@/common/helpers/TextHelper";
import "./projectInformation.scss";
import { Link } from "@/../navigation";

type ProjectInformationProps = {
  data: any[];
  currentIndex: number;
};

export const ProjectInformation: React.FC<ProjectInformationProps> = ({
  data,
  currentIndex,
}) => {
  return (
    <Link
      className="home-page-carousel-project-info-container"
      href={{
        pathname: "/projects/[slug]",
        params: { slug: data[0].carousel[currentIndex].slug.current },
      }}
    >
      <h2 className="home-page-carousel-project-info-project-title">
        {data[0].carousel[currentIndex].name}
      </h2>
      <p
        className="home-page-carousel-project-info-project-description"
        dangerouslySetInnerHTML={{
          __html: extractFirstSentence(
            data[0].carousel[currentIndex].shortDescription
          ),
        }}
      ></p>
      <div className="home-page-carousel-project-info-project-types">
        {data[0].carousel[currentIndex].projectTypes.map(
          (projectType: any, index: number) => {
            return (
              <p
                key={index}
                className="home-page-carousel-project-info-project-type"
              >
                {projectType}
              </p>
            );
          }
        )}
      </div>
    </Link>
  );
};
