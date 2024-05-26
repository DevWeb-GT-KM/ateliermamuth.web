import "./project.scss";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";

type ProjectProps = {
  data: any;
  isSecondaryProject?: boolean;
};

export const Project: React.FC<ProjectProps> = ({
  data,
  isSecondaryProject,
}) => {
  const builder = imageUrlBuilder(client);
  const MAX_CHARACTER_DISPLAYED = isSecondaryProject ? 80 : 230;
  const formatDescription = (description: string) => {
    if (description.length <= MAX_CHARACTER_DISPLAYED) {
      return description;
    } else {
      let subDescription = description.substring(0, MAX_CHARACTER_DISPLAYED);
      return subDescription + "... Voir plus";
    }
  };
  return (
    <div
      className={`project-container ${
        isSecondaryProject ? "secondary" : "primary"
      }`}
    >
      <div
        className="project-image"
        style={{
          backgroundImage: `url(${builder
            .image(data.mainImage.asset.url)
            .url()})`,
        }}
      />
      <div className="project-description">
        <h1 className="project-description-title">{data.name}</h1>
        <h1 className="project-description-description">
          {formatDescription(data.shortDescription)}
        </h1>
        {!isSecondaryProject && (
          <div className="project-description-project-types">
            {data.projectTypes.map((projectType: any, index: number) => {
              return (
                <div key={index} className="project-description-project-type">
                  {projectType}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
