"use client";
import { Employee } from "./Employee";
import "./aboutUsPageContainer.scss";

import { PortableText } from "@portabletext/react";
import { Publications } from "./publications/Publications";
import { motion } from "framer-motion";
import { SanityImageWrapper } from "@/common/components/images/SanityImageWrapper";
import { SANITY_IMAGE_FORMAT } from "@/common/components/images/sanityImageBuilderConfig";

export type AboutUsPageContainerProps = {
  data: any;
};

export const AboutUsPageContainer: React.FC<AboutUsPageContainerProps> = ({
  data,
}) => {
  return (
    <div className="about-us-page-container">
      <div className="about-us-page-header">
        <h1 className="about-us-page-title">{data[0].pageTitle}</h1>
      </div>
      <div className="about-us-page-description-section">
        <motion.p
          initial={{ opacity: 0, paddingTop: 30 }}
          whileInView={{ paddingTop: 0.5, opacity: 1 }}
          viewport={{ once: true, amount: "all" }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="about-us-page-small-description"
        >
          {data[0].shortDescription}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, gap: "10vw" }}
          whileInView={{ opacity: 1, gap: "9vw" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          className="about-us-page-description"
        >
          <motion.div
            initial={{ opacity: 0, paddingTop: 30 }}
            whileInView={{ paddingTop: 0.5, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="about-us-page-description-rich-text"
          >
            <PortableText value={data[0].description} />
          </motion.div>
          <div className="test">
            <SanityImageWrapper
              sanityImage={data[0]?.img}
              imageBuilderConfig={{
                size: {
                  width: 1920,
                  height: 1080,
                },
                format: SANITY_IMAGE_FORMAT.Jpg,
                quality: 70,
              }}
            />
          </div>
        </motion.div>
      </div>
      <div className="about-us-page-employee-section">
        {data[0].employees.map((employee: any, index: number) => {
          return <Employee key={index} data={employee} />;
        })}
      </div>
      <Publications data={data[0].publications} />
    </div>
  );
};
