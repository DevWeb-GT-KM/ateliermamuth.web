"use client";

import "./projectInformation.scss";
import { useRouter } from "@/../navigation";

type ProjectInformationProps = {
  data: any[];
  currentIndex: number;
};

export const ProjectInformation: React.FC<ProjectInformationProps> = ({
  data,
  currentIndex,
}) => {
  const MAX_CHARACTER_DISPLAYED = 230;
  const formatDescription = (description: string) => {
    if (description.length <= MAX_CHARACTER_DISPLAYED) {
      return description;
    } else {
      let subDescription = description.substring(0, MAX_CHARACTER_DISPLAYED);
      return subDescription + "... Voir plus";
    }
  };

  const router = useRouter();

  return (
    <div
      className="home-page-carousel-project-info-container"
      onClick={() =>
        router.push({
          pathname: "/projects/[slug]",
          params: { slug: data[0].carousel[currentIndex].slug.current },
        })
      }
    >
      <h1 className="home-page-carousel-project-info-project-title">
        {data[0].carousel[currentIndex].name}
      </h1>
      <p className="home-page-carousel-project-info-project-description">
        {formatDescription(data[0].carousel[currentIndex].shortDescription)}
      </p>
      <div className="home-page-carousel-project-info-project-types">
        {data[0].carousel[currentIndex].projectTypes.map(
          (projectType: any, index: number) => {
            return (
              <h2
                key={index}
                className="home-page-carousel-project-info-project-type"
              >
                {projectType}
              </h2>
            );
          }
        )}
      </div>
    </div>
  );
};
