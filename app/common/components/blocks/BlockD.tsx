import "./blockD.scss";
import React from "react";
import { PortableText } from "@portabletext/react";
import { BottomToTopSlider } from "../animations/BottomToTopSlider";

type BlockDProps = {
  data: any;
};

export const BlockD: React.FC<BlockDProps> = ({ data }) => {
  return (
    <div className="block-d-container">
      <BottomToTopSlider>
        <div className="block-d-portable-text-container">
          <PortableText value={data.text} />
        </div>
      </BottomToTopSlider>
    </div>
  );
};
