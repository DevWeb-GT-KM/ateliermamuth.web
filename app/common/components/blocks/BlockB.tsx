"use client";
import "./blockB.scss";
import React from "react";
import { PortableText } from "@portabletext/react";

import { Carousel } from "../images/carousel/Carousel";
import { IMAGE_DEFAULT_QUALITY, IMAGE_DEFAULT_FORMAT, IMAGE_SIZES } from "../images/sanityImageBuilderConfig";
import { BottomToTopSlider } from "../animations/BottomToTopSlider";

type BlockBProps = {
  data: any;
  isAnimationDesactivated?: boolean;
};

export const BlockB: React.FC<BlockBProps> = ({
  data,
  isAnimationDesactivated,
}) => {
  return (
    <div className="block-b-container">
      <BottomToTopSlider isDesactivated={isAnimationDesactivated}>
        <div className="block-b-portable-text-container">
          <PortableText value={data.text} />
        </div>
      </BottomToTopSlider>

      <BottomToTopSlider isDesactivated={isAnimationDesactivated}>
        <div className="block-b-images">
          <Carousel
            images={data.block.images}
            imageBuilderConfig={{
              format: IMAGE_DEFAULT_FORMAT,
              quality: IMAGE_DEFAULT_QUALITY,
              size: IMAGE_SIZES.FULL_HD_LANDSCAPE,
            }}
          />
        </div>
      </BottomToTopSlider>
    </div>
  );
};
