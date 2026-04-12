import { Project } from "@/common/components/Project";
import "./projectsPageContainer.scss";
import { ProjectArchived } from "./ProjectArchived";

type ProjectsPageContainerProps = {
  data: any;
  typeFilter?: string | null;
};

export const ProjectsPageContainer: React.FC<ProjectsPageContainerProps> = ({ data, typeFilter }) => {
  const isFiltered = !!typeFilter;

  const pageTitleMap: Record<string, string> = {
    commercial: "Projets commerciaux",
    residentiel: "Projets résidentiels",
  };
  const pageTitle = typeFilter ? (pageTitleMap[typeFilter] ?? data.pageTitle) : data.pageTitle;

  const primaryProjects = data.projects.filter((project: any) => {
    if (isFiltered) {
      return project.type === "primary" && project.type2 === typeFilter;
    }
    return project.type === "primary";
  });

  const secondaryProjects = isFiltered ? [] : data.projects.filter((project: any) => project.type === "secondary");

  return (
    <div className="projects-page-container">
      <div className="projects-page-header">
        <h1 className="projects-page-title">{pageTitle}</h1>
      </div>
      <div className="projects-page-content">
        <div className="projects-page-primary-projects">
          {primaryProjects.map((project: any, index: number) => (
            <Project key={index} data={project} />
          ))}
        </div>
        {!isFiltered && (
          <>
            <div className="projects-page-secondary-projects">
              {secondaryProjects.map((project: any, index: number) => (
                <Project isSecondaryProject key={index} data={project} />
              ))}
            </div>
            <div className="projects-page-archives">
              <h2 className="projects-page-archives-title">{data.archiveSectionTitle}</h2>
              {data.projectsArchived.map((projectArchived: any, index: number) => (
                <ProjectArchived key={index} data={projectArchived} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
