import "./blockD.scss";
import React from "react";
import { PortableText } from "@portabletext/react";
import { BottomToTopSlider } from "../animations/BottomToTopSlider";

type BlockDProps = {
  data: any;
  isAnimationDesactivated?: boolean;
};

export const BlockD: React.FC<BlockDProps> = ({
  data,
  isAnimationDesactivated,
}) => {
  return (
    <div className="block-d-container">
      <BottomToTopSlider isDesactivated={isAnimationDesactivated}>
        <div className="block-d-portable-text-container">
          <PortableText value={data.text} />
        </div>
      </BottomToTopSlider>
    </div>
  );
};
