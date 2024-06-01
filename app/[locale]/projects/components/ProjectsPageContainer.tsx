import { Project } from "@/common/components/Project";
import "./projectsPageContainer.scss";
import { ProjectArchived } from "./ProjectArchived";

type ProjectsPageContainerProps = {
  data: any;
};

export const ProjectsPageContainer: React.FC<ProjectsPageContainerProps> = ({
  data,
}) => {
  return (
    <div className="projects-page-container">
      <div className="projects-page-header">
        <h1 className="projects-page-title">{data.pageTitle}</h1>
      </div>
      <div className="projects-page-content">
        <div className="projects-page-primary-projects">
          {data.projects
            .filter((project: any) => project.type == "primary")
            .map((project: any, index: number) => {
              return <Project key={index} data={project} />;
            })}
        </div>
        <div className="projects-page-secondary-projects">
          {data.projects
            .filter((project: any) => project.type == "secondary")
            .map((project: any, index: number) => {
              return <Project isSecondaryProject key={index} data={project} />;
            })}
        </div>
        <div className="projects-page-archives">
          <h1 className="projects-page-archives-title">
            {data.archiveSectionTitle}
          </h1>
          {data.projectsArchived.map((projectArchived: any, index: number) => {
            return <ProjectArchived key={index} data={projectArchived} />;
          })}
        </div>
      </div>
    </div>
  );
};
