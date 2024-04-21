"use client";
import "./service.scss";

import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { Link } from "@/../navigation";

import Image from "next/image";
import plus from "../../../common/assets/images/homePage/services/servicePlus.svg";
import minus from "../../../common/assets/images/homePage/services/serviceMinus.svg";

type ServiceProps = {
  data: any;
};

export const Service: React.FC<ServiceProps> = ({ data }) => {
  const MIN_HEIGHT = window.innerWidth < 768 ? 64 : 104;
  const [height, setHeight] = useState<number | "auto">(MIN_HEIGHT);

  return (
    <AnimateHeight
      className={"home-page-service-container"}
      duration={1000}
      onClick={() => setHeight(height == "auto" ? MIN_HEIGHT : "auto")}
      height={height}
    >
      <div
        className="home-page-service-header"
        onClick={() => setHeight(height == "auto" ? MIN_HEIGHT : "auto")}
      >
        <h1 className="home-page-service-title">{data.name}</h1>
        <Image
          className="home-page-service-plus-img"
          src={height == "auto" ? minus : plus}
          alt="plus"
          width={30}
        />
      </div>
      <div className="home-page-service-body">
        <div className="home-page-service-description-container">
          <p className="home-page-service-description">{data.description}</p>
          <Link
            className="home-page-service-link"
            onClick={(e) => e.stopPropagation()}
            href={{
              pathname: "/services/[slug]",
              params: { slug: data?.slug?.current },
            }}
          >
            en savoir plus
          </Link>
        </div>
        <div className="home-page-service-project-types">
          {data.projectTypes.map((projectType: any, index: number) => {
            return (
              <h1 className={"home-page-service-project-type"} key={index}>
                {projectType}
              </h1>
            );
          })}
        </div>
      </div>
    </AnimateHeight>
  );
};
