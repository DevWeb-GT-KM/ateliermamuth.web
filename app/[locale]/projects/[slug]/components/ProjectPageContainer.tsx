import "./projectPageContainer.scss";

import { SanityDocument } from "next-sanity";
import Image from "next/image";

type ProjectPageContainerProps = {
  project: SanityDocument;
};

export const ProjectPageContainer: React.FC<ProjectPageContainerProps> = ({
  project,
}) => {
  return (
    <div className="project-page-container">
      <h1 className="project-page-title">{project.name}</h1>
      <div className="project-page-first-block-container">
        <p>{project.shortDescription}</p>
        {project.projectTypes.map((type: string, index: number) => (
          <div key={index}>{type}</div>
        ))}

        {project.credits.map((credit: any, index: number) => (
          <p key={index}>{`${credit.label} : ${credit.value}`}</p>
        ))}

        <div className="project-page-first-block-image-container">
          <Image
            className="project-page-first-block-image"
            src={project?.mainImage?.asset?.url}
            alt=""
            fill
          />
        </div>
      </div>
      <div className="project-page-second-block-container">
        <p>{project.description?.[0]?.children?.[0]?.text}</p>

        <div className="project-page-second-block-images-container">
          <div className="project-page-second-block-big-image">
            <Image
              className="project-page-second-block-big-image"
              src={project?.mainImage?.asset?.url}
              alt=""
              fill
            />
          </div>
          <div className="project-page-second-block-carousel-container">
            <Image
              className="project-page-second-block-carousel-image"
              src={project?.mainImage?.asset?.url}
              alt=""
              fill
            />
          </div>
        </div>
      </div>
      <div className="project-page-third-block-container">
        <p>{project.description?.[1]?.children?.[0]?.text}</p>

        <div className="project-page-third-block-image-container">
          <Image
            className="project-page-third-block-image"
            src={project?.mainImage?.asset?.url}
            alt=""
            fill
          />
        </div>
      </div>
      <div className="project-page-fourth-block-container">
        <p>{project.description?.[2]?.children?.[0]?.text}</p>

        <div className="project-page-fourth-block-images-container">
          <div className="project-page-fourth-block-carousel-container">
            <Image
              className="project-page-fourth-block-carousel-image"
              src={project?.mainImage?.asset?.url}
              alt=""
              fill
            />
          </div>
          <div className="project-page-fourth-block-image-container">
            <Image
              className="project-page-fourth-block-image"
              src={project?.mainImage?.asset?.url}
              alt=""
              fill
            />
          </div>
        </div>
      </div>
      <div className="project-page-switch-page-container"></div>
    </div>
  );
};
