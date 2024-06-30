"use client";
import "./projectArchived.scss";

import { useState } from "react";
import AnimateHeight from "react-animate-height";

import Image from "next/image";
import close from "../../../common/assets/images/projectsPage/closeButton.svg";
import HorizontalSlider from "./HorizontalSlider";

type ProjectArchivedProps = {
  data: any;
};

export const ProjectArchived: React.FC<ProjectArchivedProps> = ({ data }) => {
  const [height, setHeight] = useState<number | "auto">(0);

  const getProjectTypes = (projectTypes: string[]) => {
    let projectTypesResult: string = "";

    projectTypes.map((projectType: string, index: number) => {
      if (index < projectTypes.length - 1) {
        projectTypesResult += projectType + ", ";
      } else {
        projectTypesResult += projectType;
      }
    });

    return projectTypesResult;
  };

  return (
    <div className="projects-page-project-archived-container">
      <div
        className={`projects-page-project-archived-header ${
          height == "auto" ? "project-archived-open" : ""
        }`}
        onClick={() => setHeight(height == "auto" ? 0 : "auto")}
      >
        <p className="projects-page-project-archived-name">{data.name}</p>
        <p className="projects-page-project-archived-project-types">
          {getProjectTypes(data.projectTypes)}
        </p>
        <p className="projects-page-project-archived-completion-year">
          {data.completionYear}
        </p>
        <p className="projects-page-project-archived-location">
          {data.location}
        </p>
        <div className="projects-page-project-archived-image-container">
          {height == "auto" && (
            <Image
              className="projects-page-project-archived-close-image"
              src={close}
              alt="plus"
              width={14}
              unoptimized
            />
          )}
        </div>
      </div>
      <AnimateHeight duration={1000} height={height}>
        <HorizontalSlider images={data.images} />
      </AnimateHeight>
    </div>
  );
};
