import "./sanityImageWrapper.scss";

import { useMemo } from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

import { client } from "@/../sanity/lib/client";
import { SanityImageBuilderConfig } from "./sanityImageBuilderConfig";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

type SanityImageWrapperProps = {
  sanityImage: any;
  imageBuilderConfig: SanityImageBuilderConfig;
  children?: React.ReactNode;
};

export const SanityImageWrapper: React.FC<SanityImageWrapperProps> = ({
  sanityImage,
  imageBuilderConfig,
  children,
}) => {
  const getImageSource = () => {
    let imageSource = urlFor(sanityImage)
      .format(imageBuilderConfig.format)
      .fit(
        imageBuilderConfig.size?.width && imageBuilderConfig.size?.height
          ? "crop"
          : "clip"
      )
      .quality(imageBuilderConfig.quality);

    if (imageBuilderConfig.size?.width) {
      imageSource = imageSource.width(imageBuilderConfig.size.width);
    }

    if (imageBuilderConfig.size?.height) {
      imageSource = imageSource.height(imageBuilderConfig.size.height);
    }

    if (sanityImage.hotspot) {
      imageSource = imageSource
        .focalPoint(sanityImage.hotspot.x, sanityImage.hotspot.y)
        .crop("focalpoint");
    }

    return imageSource.url();
  };

  const imageSource = useMemo<string>(
    () => getImageSource(),
    [sanityImage, imageBuilderConfig]
  );

  return (
    <div className="sanity-image-wrapper-container">
      <Image
        className="sanity-image"
        src={imageSource}
        fill
        placeholder="blur"
        blurDataURL={sanityImage.asset.metadata.lqip}
        alt={sanityImage.alt}
      />
      {children}
    </div>
  );
};
