"use client";

import { motion } from "framer-motion";

export type BottomToTopSliderProps = {
  children: React.ReactNode;
  trigger?: number | "all" | "some";
};

export const BottomToTopSlider: React.FC<BottomToTopSliderProps> = ({
  children,
  trigger,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, paddingTop: 40 }}
      whileInView={{ paddingTop: 0, opacity: 1 }}
      viewport={{ once: true, amount: trigger ? trigger : 0.5 }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};
