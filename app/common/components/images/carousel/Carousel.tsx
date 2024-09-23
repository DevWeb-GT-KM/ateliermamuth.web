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

  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [loadedImages, setLoadedImages] = useState<any[]>([]);
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);

  const [maxIndex, setMaxIndex] = useState<number>(0);

  const handleIndexChange = (nextIndex: number) => {
    if (nextIndex > maxIndex) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 1000);
      return maxIndex + 1;
    } else if (nextIndex < 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(maxIndex);
      }, 1000);
      return 0;
    }
    setIsTransitioning(true);
    return nextIndex;
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentIndex((prevIndex) => handleIndexChange(prevIndex + 1));
      setIsTransitioning(true);
    },
    onSwipedRight: () => {
      setCurrentIndex((prevIndex) => handleIndexChange(prevIndex - 1));
      setIsTransitioning(true);
    },
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
        setMaxIndex(imagesWithBlob.length);
        setAreImagesLoaded(true);
      })
      .catch((error) => console.error("Error fetching image:", error));
  }, []);

  const test2 = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index + 1);
  };
  return (
    <>
      {areImagesLoaded ? (
        loadedImages.length > 1 ? (
          <div className="carousel-container">
            <div
              {...swipeHandlers}
              className="background-slider"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: isTransitioning
                  ? "transform 1s ease-in-out"
                  : "none",
              }}
            >
              <div className="background-slide">
                <SanityImageWrapper
                  sanityImage={loadedImages[maxIndex - 1].img}
                  imageBuilderConfig={imageBuilderConfig}
                />
              </div>

              {loadedImages.map((image, index) => (
                <div key={index} className="background-slide">
                  <SanityImageWrapper
                    sanityImage={image.img}
                    imageBuilderConfig={imageBuilderConfig}
                  />
                </div>
              ))}

              <div className="background-slide">
                <SanityImageWrapper
                  sanityImage={loadedImages[0].img}
                  imageBuilderConfig={imageBuilderConfig}
                />
              </div>
            </div>
            <CarouselIndex
              carouselLength={images.length}
              activeIndex={
                currentIndex === 0
                  ? images.length - 1
                  : currentIndex === images.length + 1
                    ? 0
                    : currentIndex - 1
              }
              setActiveIndex={(newIndex) => test2(newIndex)}
            />
          </div>
        ) : (
          <div className="static-image">
            <SanityImageWrapper
              sanityImage={loadedImages[0].img}
              imageBuilderConfig={imageBuilderConfig}
            />
          </div>
        )
      ) : (
        <></>
      )}
    </>
  );
};
