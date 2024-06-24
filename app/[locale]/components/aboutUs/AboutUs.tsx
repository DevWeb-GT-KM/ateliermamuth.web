"use client";
import "./aboutUs.scss";

import { Link } from "@/../navigation";
import { motion } from "framer-motion";

type AboutUsProps = {
  data: any[];
};

export const AboutUs: React.FC<AboutUsProps> = ({ data }) => {
  return (
    <div className="home-page-about-us-container">
      <div className="home-page-about-us-header">
        <h2 className="about-us-title">À propos</h2>
      </div>
      <motion.div
        initial={{ opacity: 0, paddingTop: 40 }}
        whileInView={{ paddingTop: 0, opacity: 1 }}
        viewport={{ amount: "all", once: true }}
        transition={{
          duration: 0.5,
        }}
        className="home-page-about-us-body"
      >
        <p className="home-page-about-us-description">
          {data[0].aboutUs.shortDescription}
        </p>
        <Link className="home-page-about-us-link" href={"/about-us"}>
          en savoir plus
        </Link>
      </motion.div>
    </div>
  );
};
