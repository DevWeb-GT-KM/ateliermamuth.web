import "./sanityImageWrapper.scss";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

import { client } from "@/../sanity/lib/client";
import { SanityImageBuilderConfig } from "./sanityImageBuilderConfig";
import { getImageSource } from "@/common/helpers/ImageHelper";

const builder = imageUrlBuilder(client);

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
  return (
    <div className="sanity-image-wrapper-container">
      <Image
        className={`sanity-image ${effectOnHover ? "sanity-image-hover-effect" : ""}`}
        src={
          sanityImage?.blob ??
          getImageSource(sanityImage, builder, imageBuilderConfig)
        }
        placeholder={sanityImage?.asset?.metadata?.lqip ? "blur" : "empty"}
        blurDataURL={sanityImage?.asset?.metadata?.lqip}
        alt={sanityImage?.alt}
        width={imageBuilderConfig.size.width}
        height={imageBuilderConfig.size.height}
        quality={imageBuilderConfig.quality}
        unoptimized
      />
      {children}
    </div>
  );
};
