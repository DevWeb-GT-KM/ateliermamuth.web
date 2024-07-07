import "./blockA.scss";
import React from "react";
import { PortableText } from "@portabletext/react";

import { SANITY_IMAGE_FORMAT } from "../images/sanityImageBuilderConfig";
import { Carousel } from "../images/carousel/Carousel";
import { BottomToTopSlider } from "../animations/BottomToTopSlider";

type BlockAProps = {
  data: any;
};

export const BlockA: React.FC<BlockAProps> = ({ data }) => {
  return (
    <div className="block-a-container">
      <BottomToTopSlider>
        <div className="block-a-portable-text-container">
          <PortableText value={data.text} />
        </div>
      </BottomToTopSlider>
      <BottomToTopSlider>
        <div className="block-a-images-container">
          <div className="block-a-images-left">
            <Carousel
              images={data.leftBlock.images}
              imageBuilderConfig={{
                format: SANITY_IMAGE_FORMAT.Jpg,
                quality: 95,
                size: {
                  width: 2560,
                  height: 1440,
                },
              }}
            />
          </div>
          <div className="block-a-images-right">
            <Carousel
              images={data.rightBlock.images}
              imageBuilderConfig={{
                format: SANITY_IMAGE_FORMAT.Jpg,
                quality: 95,
                size: {
                  width: 810,
                  height: 1440,
                },
              }}
            />
          </div>
        </div>
      </BottomToTopSlider>
    </div>
  );
};
