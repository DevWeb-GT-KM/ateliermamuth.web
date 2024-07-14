"use client";
import "./blockB.scss";
import React from "react";
import { PortableText } from "@portabletext/react";

import { Carousel } from "../images/carousel/Carousel";
import { SANITY_IMAGE_FORMAT } from "../images/sanityImageBuilderConfig";
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
              format: SANITY_IMAGE_FORMAT.Jpg,
              quality: 80,
              size: {
                width: 1920,
                height: 1080,
              },
            }}
          />
        </div>
      </BottomToTopSlider>
    </div>
  );
};
