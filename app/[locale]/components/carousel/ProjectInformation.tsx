"use client";
import "./projectInformation.scss";

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

  return (
    <div className="carousel-project-info-container">
      <h1 className="carousel-project-info-project-title">
        {data[0].carousel[currentIndex].name}
      </h1>
      <p className="carousel-project-info-project-description">
        {formatDescription(data[0].carousel[currentIndex].shortDescription)}
      </p>
      <div className="carousel-project-info-project-types">
        {data[0].carousel[currentIndex].projectTypes.map(
          (projectType: any, index: number) => {
            return (
              <div key={index} className="carousel-project-info-project-type">
                {projectType}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
