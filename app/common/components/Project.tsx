import "./project.scss";

import { SanityImageWrapper } from "./images/SanityImageWrapper";
import { SANITY_IMAGE_FORMAT } from "./images/sanityImageBuilderConfig";
import { Link } from "@/../navigation";
import { buildSeeMoreString } from "../helpers/SeeMore";

type ProjectProps = {
  data: any;
  isSecondaryProject?: boolean;
};

export const Project: React.FC<ProjectProps> = ({
  data,
  isSecondaryProject,
}) => {
  const MAX_CHARACTER_DISPLAYED = isSecondaryProject ? 80 : 300;

  return (
    <Link
      className={`project-container ${
        isSecondaryProject ? "secondary" : "primary"
      }`}
      href={{
        pathname: "/projects/[slug]",
        params: { slug: data.slug.current },
      }}
    >
      <SanityImageWrapper
        sanityImage={data.mainImage}
        imageBuilderConfig={{
          format: SANITY_IMAGE_FORMAT.Jpg,
          quality: 90,
          size: {
            width: 1920,
            height: 1080,
          },
        }}
      />
      <div className="project-description">
        <h1 className="project-description-title">{data.name}</h1>
        <h1 className="project-description-description" dangerouslySetInnerHTML={{ __html: buildSeeMoreString(data.shortDescription, MAX_CHARACTER_DISPLAYED) }}>
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
    </Link>
  );
};
