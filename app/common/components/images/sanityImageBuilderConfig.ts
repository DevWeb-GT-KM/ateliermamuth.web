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

export const IMAGE_DEFAULT_QUALITY = 90;
export const IMAGE_DEFAULT_FORMAT = SANITY_IMAGE_FORMAT.WebP;

export const IMAGE_SIZES = {
  QHD_LANDSCAPE: { width: 2560, height: 1440 },
  FULL_HD_SQUARE: { width: 1920, height: 1920 },
  FULL_HD_LANDSCAPE: { width: 1920, height: 1080 },
  FULL_HD_PORTRAIT: { width: 1080, height: 1920 },
  HD_LANDSCAPE: { width: 1280, height: 720 },
  SQUARE_THUMBNAIL: { width: 500, height: 500 },
};
