"use client";

import "./carousel.scss";
import { useEffect, useMemo, useState } from "react";
import { useSwipeable } from "react-swipeable";
import imageUrlBuilder from "@sanity/image-url";

import { CarouselIndex } from "./CarouselIndex";
import { SanityImageWrapper } from "../SanityImageWrapper";
import { SanityImageBuilderConfig } from "../sanityImageBuilderConfig";
import { client } from "@/../sanity/lib/client";
import { getImageSource } from "@/common/helpers/ImageHelper";

const builder = imageUrlBuilder(client);

type CarouselProps = {
  images: any[];
  imageBuilderConfig: SanityImageBuilderConfig;
};

export const Carousel: React.FC<CarouselProps> = ({
  images,
  imageBuilderConfig,
}) => {
  const MILLISECONDS_IMAGE_CHANGE = 8000;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loadedImages, setLoadedImages] = useState<any[]>([]);
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);
  const maxIndex = useMemo<number>(
    () => loadedImages.length - 1,
    [loadedImages.length]
  );

  const handleIndexChange = (nextIndex: number): number => {
    if (nextIndex < 0) {
      return maxIndex;
    } else if (nextIndex > maxIndex) {
      return 0;
    } else {
      return nextIndex;
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prevIndex) => handleIndexChange(prevIndex + 1)),
    onSwipedRight: () =>
      setCurrentIndex((prevIndex) => handleIndexChange(prevIndex - 1)),
    preventScrollOnSwipe: true,
  });

  useEffect(() => {
    if (maxIndex > 0) {
      const interval = setInterval(
        () => setCurrentIndex((prevIndex) => handleIndexChange(prevIndex + 1)),
        MILLISECONDS_IMAGE_CHANGE
      );

      return () => {
        clearInterval(interval);
      };
    }
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    let promises = [];

    promises = images.map((image: any) => {
      return fetch(getImageSource(image.img, builder, imageBuilderConfig), {
        cache: "force-cache",
      });
    });

    Promise.all(promises)
      .then((responses) => {
        return Promise.all(responses.map((response) => response.blob()));
      })
      .then((blobs) => {
        const imagesWithBlob = blobs.map((blob, index) => ({
          img: {
            ...images[index].img,
            blob: URL.createObjectURL(blob),
          },
        }));
        setLoadedImages(imagesWithBlob);
        setAreImagesLoaded(true);
      })
      .catch((error) => console.error("Error fetching image:", error));
  }, []);

  return (
    <>
      {areImagesLoaded ? (
        maxIndex > 0 ? (
          <div {...swipeHandlers} style={{ width: "100%" }}>
            <SanityImageWrapper
              sanityImage={loadedImages[currentIndex].img}
              imageBuilderConfig={imageBuilderConfig}
            >
              <CarouselIndex
                carouselLength={images.length}
                activeIndex={currentIndex}
                setActiveIndex={setCurrentIndex}
              />
            </SanityImageWrapper>
          </div>
        ) : (
          <SanityImageWrapper
            sanityImage={loadedImages[0].img}
            imageBuilderConfig={imageBuilderConfig}
          />
        )
      ) : (
        <></>
      )}
    </>
  );
};
