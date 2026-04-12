"use client";
import "./question.scss";

import { useState } from "react";
import AnimateHeight from "react-animate-height";

import { PortableText } from "@portabletext/react";
import { PlusMinusToggle } from "@/common/components/PlusMinusToggle";

type QuestionProps = {
  data: any;
};

export const Question: React.FC<QuestionProps> = ({ data }) => {
  const [height, setHeight] = useState<number | "auto">(0);

  return (
    <div className="faq-page-question-container">
      <div
        className="faq-page-question-header"
        onClick={() => setHeight(height == "auto" ? 0 : "auto")}
      >
        <h2 className="faq-page-question-question">{data.question}</h2>
        <PlusMinusToggle
          isOpen={height === "auto"}
          className="faq-page-question-plus-img"
        />
      </div>
      <AnimateHeight duration={1000} height={height}>
        <div className="faq-page-question-answer-rich-text">
          <PortableText value={data.answer} />
        </div>
      </AnimateHeight>
    </div>
  );
};
