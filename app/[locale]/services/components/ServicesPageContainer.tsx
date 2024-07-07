"use client";
import "./ServicesPageContainer.scss";

import { ServicesListing } from "./ServicesListing";
import { motion } from "framer-motion";
import { Link } from "@/../navigation";

export type ServicesPageContainerProps = {
  data: any;
};

export const ServicesPageContainer: React.FC<ServicesPageContainerProps> = ({
  data,
}) => {
  return (
    <div className="services-page-container">
      <div className="services-page-header">
        <h1 className="services-page-header-title">{data?.[0]?.pageTitle}</h1>
      </div>
      <div className="services-page-content">
        <motion.div
          initial={{ opacity: 0, paddingTop: 30 }}
          whileInView={{ paddingTop: 0.5, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="services-page-content-description-container"
        >
          {data?.[0]?.description?.map((descriptionParagraph: any) => (
            <p
              key={descriptionParagraph._key}
              className="services-page-content-description-block"
            >
              {descriptionParagraph?.children?.[0]?.text}
            </p>
          ))}
        </motion.div>
        <ServicesListing services={data?.[0]?.services} />
        <section className="services-page-projects-container">
          <h2 className="services-page-projects-title">
            {data?.[0]?.projectSectionTitle}
          </h2>
          <Link className="services-page-projects-link" href={"/projects"}>
            en savoir plus
          </Link>
        </section>
      </div>
    </div>
  );
};
