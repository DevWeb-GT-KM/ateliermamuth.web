import { SanityDocument } from "next-sanity";

import { Link } from "@/../navigation";

type ProjectsListingProps = {
  projects: SanityDocument[];
};

export const ProjectsListing: React.FC<ProjectsListingProps> = ({
  projects,
}) => {
  return (
    <div>
      {projects.length > 0 ? (
        projects.map((project) => (
          <Link
            style={{ display: "block", margin: "20px" }}
            key={project._id}
            href={{
              pathname: "/projects/[slug]",
              params: { slug: project.slug.current },
            }}
          >
            {project.name}
          </Link>
        ))
      ) : (
        <p className="projects-listing-none">No projects found</p>
      )}
    </div>
  );
};
