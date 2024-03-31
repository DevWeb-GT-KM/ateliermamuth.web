import { SanityDocument } from "next-sanity";
import Link from "next/link";

type ProjectsListingProps = {
  projects: SanityDocument[];
};

export const ProjectsListing: React.FC<ProjectsListingProps> = ({
  projects,
}) => {
  return (
    <div className="projects-listing-container">
      {projects.length > 0 ? (
        projects.map((project) => (
          <Link
            className="project-listing-item"
            key={project._id}
            href={
              project.language === "fr"
                ? `projets/${project.slug.current}`
                : `projects/${project.slug.current}`
            }
          >
            <h2>{project.name}</h2>
          </Link>
        ))
      ) : (
        <p className="projects-listing-none">No projects found</p>
      )}
    </div>
  );
};
