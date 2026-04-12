import "./blockA.scss";
import React from "react";
import { PortableText } from "@portabletext/react";

import { IMAGE_DEFAULT_QUALITY, IMAGE_DEFAULT_FORMAT, IMAGE_SIZES } from "../images/sanityImageBuilderConfig";
import { Carousel } from "../images/carousel/Carousel";
import { BottomToTopSlider } from "../animations/BottomToTopSlider";

type BlockAProps = {
  data: any;
  isAnimationDesactivated?: boolean;
};

export const BlockA: React.FC<BlockAProps> = ({
  data,
  isAnimationDesactivated,
}) => {
  return (
    <div className="block-a-container">
      <BottomToTopSlider isDesactivated={isAnimationDesactivated}>
        <div className="block-a-portable-text-container">
          <PortableText value={data.text} />
        </div>
      </BottomToTopSlider>

      <BottomToTopSlider isDesactivated={isAnimationDesactivated}>
        <div className={`block-a-images-container${data.reverse ? " reversed" : ""}`}>
          <div className="block-a-images-left">
            <Carousel
              images={data.leftBlock.images}
              imageBuilderConfig={{
                format: IMAGE_DEFAULT_FORMAT,
                quality: IMAGE_DEFAULT_QUALITY,
                size: IMAGE_SIZES.FULL_HD_LANDSCAPE,
              }}
            />
          </div>

          <div className="block-a-images-right">
            <Carousel
              images={data.rightBlock.images}
              imageBuilderConfig={{
                format: IMAGE_DEFAULT_FORMAT,
                quality: IMAGE_DEFAULT_QUALITY,
                size: IMAGE_SIZES.FULL_HD_PORTRAIT,
              }}
            />
          </div>
        </div>
      </BottomToTopSlider>
    </div>
  );
};
