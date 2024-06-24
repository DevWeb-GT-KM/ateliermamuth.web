import { ImageUrlBuilder } from "sanity";
import { SanityImageBuilderConfig } from "../components/images/sanityImageBuilderConfig";

export const getImageSource = (
  image: any,
  imageBuilder: ImageUrlBuilder,
  imageBuilderConfig: SanityImageBuilderConfig
): string => {
  let imageSource = imageBuilder
    .image(image)
    .format(imageBuilderConfig.format)
    .fit("crop")
    .quality(imageBuilderConfig.quality)
    .size(imageBuilderConfig.size.width, imageBuilderConfig.size.height);

  if (image.hotspot) {
    imageSource = imageSource
      .focalPoint(image.hotspot.x, image.hotspot.y)
      .crop("focalpoint");
  }

  return imageSource.url();
};
