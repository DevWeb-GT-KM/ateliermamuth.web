import "./sanityImageWrapper.scss";

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
  effectOnHover?: boolean;
};

export const SanityImageWrapper: React.FC<SanityImageWrapperProps> = ({
  sanityImage,
  imageBuilderConfig,
  children,
  effectOnHover,
}) => {
  const getImageSource = () => {
    let imageSource = urlFor(sanityImage)
      .format(imageBuilderConfig.format)
      .fit("crop")
      .quality(imageBuilderConfig.quality)
      .size(imageBuilderConfig.size.width, imageBuilderConfig.size.height);

    if (sanityImage.hotspot) {
      imageSource = imageSource
        .focalPoint(sanityImage.hotspot.x, sanityImage.hotspot.y)
        .crop("focalpoint");
    }

    return imageSource.url();
  };

  return (
    <div className="sanity-image-wrapper-container">
      <Image
        className={`sanity-image ${effectOnHover ? "sanity-image-hover-effect" : ""}`}
        src={getImageSource()}
        placeholder={sanityImage.asset.metadata?.lqip ? "blur" : "empty"}
        blurDataURL={sanityImage.asset.metadata?.lqip}
        alt={sanityImage.alt}
        width={imageBuilderConfig.size.width}
        height={imageBuilderConfig.size.height}
        quality={imageBuilderConfig.quality}
        unoptimized
      />
      {children}
    </div>
  );
};
