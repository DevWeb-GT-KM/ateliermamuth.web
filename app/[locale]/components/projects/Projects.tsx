import { Project } from "./Project";
import "./projects.scss";

type ProjectsProps = {
  data: any[];
};

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <div className="home-page-projects-container">
      <div className="home-page-projects-header">
        <h1 className="home-page-projects-title">
          {data[0].projects.pageTitle}
        </h1>
      </div>
      <div className="home-page-projects-body">
        {data[0].projects.projects.map((project: any, index: number) => {
          return <Project key={index} data={project} />;
        })}
        <h1 className="home-page-projects-see-more-title">
          Voir toutes nos réalisations
        </h1>
      </div>
    </div>
  );
};
