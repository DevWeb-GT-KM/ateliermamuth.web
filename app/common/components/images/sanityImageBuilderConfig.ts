type SanityImageSize = {
  width: number;
  height: number;
};

export enum SANITY_IMAGE_FORMAT {
  Jpg = "jpg",
  Pjpg = "pjpg",
  Png = "png",
  WebP = "webp",
}

export type SanityImageBuilderConfig = {
  size: SanityImageSize;
  quality: number;
  format: SANITY_IMAGE_FORMAT;
};
