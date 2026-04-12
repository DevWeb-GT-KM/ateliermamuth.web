"use client";
import "./project.scss";

import { SanityImageWrapper } from "./images/SanityImageWrapper";
import { IMAGE_DEFAULT_QUALITY, IMAGE_DEFAULT_FORMAT, IMAGE_SIZES } from "./images/sanityImageBuilderConfig";
import { Link } from "@/../navigation";
import { motion } from "framer-motion";
import { extractFirstSentence } from "../helpers/TextHelper";

type ProjectProps = {
  data: any;
  isSecondaryProject?: boolean;
};

export const Project: React.FC<ProjectProps> = ({
  data,
  isSecondaryProject,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, paddingTop: 50 }}
      whileInView={{ opacity: 1, paddingTop: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.3,
      }}
      className="project-container"
    >
      <Link
        href={{
          pathname: "/projects/[slug]",
          params: { slug: data.slug.current },
        }}
      >
        <SanityImageWrapper
          effectOnHover={true}
          sanityImage={data.mainImage}
          imageBuilderConfig={{
            format: IMAGE_DEFAULT_FORMAT,
            quality: IMAGE_DEFAULT_QUALITY,
            size: IMAGE_SIZES.FULL_HD_LANDSCAPE,
          }}
        />
        <div className="project-description">
          <p className="project-description-title">{data.name}</p>
          <p
            className="project-description-description"
            dangerouslySetInnerHTML={{
              __html: extractFirstSentence(data.shortDescription),
            }}
          ></p>
          {!isSecondaryProject && (
            <div className="project-description-project-types">
              {data.projectTypes.map((projectType: any, index: number) => {
                return (
                  <div key={index} className="project-description-project-type">
                    {projectType}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};
