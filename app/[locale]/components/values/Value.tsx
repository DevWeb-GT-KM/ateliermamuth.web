"use client";
import "./value.scss";
import { motion } from "framer-motion";

type ValueProps = {
  data: string;
  delay: number;
};

export const Value: React.FC<ValueProps> = ({ data, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.7,
        delay: delay,
      }}
      className="home-page-value-container"
    >
      <p className="home-page-value-text">{data}</p>
    </motion.div>
  );
};
