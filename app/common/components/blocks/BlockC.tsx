import "./blockC.scss";
import React from "react";
import { PortableText } from "@portabletext/react";

import { Carousel } from "../images/carousel/Carousel";
import { IMAGE_DEFAULT_QUALITY, IMAGE_DEFAULT_FORMAT, IMAGE_SIZES } from "../images/sanityImageBuilderConfig";
import { BottomToTopSlider } from "../animations/BottomToTopSlider";

type BlockCProps = {
  data: any;
  isAnimationDesactivated?: boolean;
};

export const BlockC: React.FC<BlockCProps> = ({
  data,
  isAnimationDesactivated,
}) => {
  return (
    <div className="block-c-container">
      <BottomToTopSlider isDesactivated={isAnimationDesactivated}>
        <div className="block-c-portable-text-container">
          <PortableText value={data.text} />
        </div>
      </BottomToTopSlider>

      <BottomToTopSlider isDesactivated={isAnimationDesactivated}>
        <div className="block-c-images-container">
          <div className="block-c-images-left">
            <Carousel
              images={data.leftBlock.images}
              imageBuilderConfig={{
                format: IMAGE_DEFAULT_FORMAT,
                quality: IMAGE_DEFAULT_QUALITY,
                size: IMAGE_SIZES.FULL_HD_SQUARE,
              }}
            />
          </div>
          <div className="block-c-images-right">
            <Carousel
              images={data.rightBlock.images}
              imageBuilderConfig={{
                format: IMAGE_DEFAULT_FORMAT,
                quality: IMAGE_DEFAULT_QUALITY,
                size: IMAGE_SIZES.FULL_HD_SQUARE,
              }}
            />
          </div>
        </div>
      </BottomToTopSlider>
    </div>
  );
};
