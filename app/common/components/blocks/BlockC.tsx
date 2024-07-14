import "./blockC.scss";
import React from "react";
import { PortableText } from "@portabletext/react";

import { Carousel } from "../images/carousel/Carousel";
import { SANITY_IMAGE_FORMAT } from "../images/sanityImageBuilderConfig";
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
                format: SANITY_IMAGE_FORMAT.Jpg,
                quality: 80,
                size: {
                  width: 1000,
                  height: 1000,
                },
              }}
            />
          </div>
          <div className="block-c-images-right">
            <Carousel
              images={data.rightBlock.images}
              imageBuilderConfig={{
                format: SANITY_IMAGE_FORMAT.Jpg,
                quality: 80,
                size: {
                  width: 1000,
                  height: 1000,
                },
              }}
            />
          </div>
        </div>
      </BottomToTopSlider>
    </div>
  );
};
