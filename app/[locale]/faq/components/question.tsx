"use client";
import "./question.scss";

import { useState } from "react";
import AnimateHeight from "react-animate-height";

import Image from "next/image";
import plus from "../../../common/assets/images/homePage/services/servicePlus.svg";
import minus from "../../../common/assets/images/homePage/services/serviceMinus.svg";
import { PortableText } from "@portabletext/react";

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
        <h1 className="faq-page-question-question">{data.question}</h1>
        <Image
          className="faq-page-question-plus-img"
          src={height == "auto" ? minus : plus}
          alt="plus"
          width={30}
          unoptimized
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
