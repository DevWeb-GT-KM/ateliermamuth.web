"use client";
import "./service.scss";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import plus from "../../../common/assets/images/homePage/services/servicePlus.svg";
import minus from "../../../common/assets/images/homePage/services/serviceMinus.svg";

type ServiceProps = {
  data: any;
};

export const Service: React.FC<ServiceProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openContentHeight, setOpenContentHeight] = useState<number>(0);
  const CLOSE_CONTENT_HEIGHT = 0;

  const contentRef = useRef<HTMLDivElement>(null);
  const test = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setOpenContentHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded]);

  return (
    <div
      ref={contentRef}
      className={"home-page-service-container"}
      onClick={() => setIsExpanded((prev) => !prev)}
      style={{
        height: isExpanded ? openContentHeight : CLOSE_CONTENT_HEIGHT,
      }}
    >
      <div className="home-page-service-header">
        <h1 className="home-page-service-title">{data.name}</h1>
        {/* TODO - regarder pour le sizing de l'image */}
        <Image
          className="home-page-service-plus-img"
          src={isExpanded ? minus : plus}
          alt="plus"
          width={30}
        />
      </div>
      <div className="home-page-service-body">
        <div className="home-page-service-description-container">
          <p className="home-page-service-description">{data.description}</p>
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
      </div>
    </div>
  );
};
