import "./blockC.scss";
import React from "react";
import { PortableText } from "@portabletext/react";

import { Carousel } from "../images/carousel/Carousel";
import { SANITY_IMAGE_FORMAT } from "../images/sanityImageBuilderConfig";

type BlockCProps = {
  data: any;
};

export const BlockC: React.FC<BlockCProps> = ({ data }) => {
  return (
    <div className="block-c-container">
      <div className="block-c-portable-text-container">
        <PortableText value={data.text} />
      </div>

      <div className="block-c-images-container">
        <div className="block-c-images-left">
          <Carousel
            images={data.leftBlock.images}
            imageBuilderConfig={{
              format: SANITY_IMAGE_FORMAT.Jpg,
              quality: 90,
              size: {
                width: 2000,
                height: 2000,
              },
            }}
          />
        </div>
        <div className="block-c-images-right">
          <Carousel
            images={data.rightBlock.images}
            imageBuilderConfig={{
              format: SANITY_IMAGE_FORMAT.Jpg,
              quality: 90,
              size: {
                width: 2000,
                height: 2000,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
