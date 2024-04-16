import { SanityDocument } from "next-sanity";

type ProjectProps = {
  project: SanityDocument;
};

export const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div>
      <h1>Project: {project.name}</h1>
    </div>
  );
};
