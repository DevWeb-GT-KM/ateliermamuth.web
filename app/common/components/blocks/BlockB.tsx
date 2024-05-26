import "./blockB.scss";
import React from "react";
import { PortableText } from "@portabletext/react";

import { Carousel } from "../images/carousel/Carousel";
import { SANITY_IMAGE_FORMAT } from "../images/sanityImageBuilderConfig";

type BlockBProps = {
  data: any;
};

export const BlockB: React.FC<BlockBProps> = ({ data }) => {
  return (
    <div className="block-b-container">
      <div className="block-b-portable-text-container">
        <PortableText value={data.text} />
      </div>

      <div className="block-b-images">
        <Carousel
          images={data.block.images}
          imageBuilderConfig={{
            format: SANITY_IMAGE_FORMAT.Jpg,
            quality: 80,
            size: {
              width: 2560,
              height: 1440,
            },
          }}
        />
      </div>
    </div>
  );
};
