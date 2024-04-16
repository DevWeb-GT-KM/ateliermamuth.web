import "./project.scss";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../sanity/lib/client";

type ProjectProps = {
  data: any;
};

export const Project: React.FC<ProjectProps> = ({ data }) => {
  const builder = imageUrlBuilder(client);
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
    <div className="home-page-project-container">
      <div
        className="home-page-project-image"
        style={{
          backgroundImage: `url(${builder
            .image(data.mainImage.asset.url)
            .url()})`,
        }}
      />
      <div className="home-page-project-description">
        <h1 className="home-page-project-description-title">{data.name}</h1>
        <h1 className="home-page-project-description-description">
          {formatDescription(data.shortDescription)}
        </h1>
        <div className="home-page-project-description-project-types">
          {data.projectTypes.map((projectType: any, index: number) => {
            return (
              <div
                key={index}
                className="home-page-project-description-project-type"
              >
                {projectType}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
