import "./projectPageContainer.scss";

import { SanityDocument } from "next-sanity";

type ProjectPageContainerProps = {
  project: SanityDocument;
};

export const ProjectPageContainer: React.FC<ProjectPageContainerProps> = ({
  project,
}) => {
  return (
    <div className="product-page-container">
      <h1 className="product-page-title">{project.name}</h1>
      <div className="product-page-first-block-container"></div>
      <div className="product-page-second-block-container"></div>
      <div className="product-page-third-block-container"></div>
      <div className="product-page-fourth-block-container"></div>
      <div className="product-page-switch-page-container"></div>
    </div>
  );
};
