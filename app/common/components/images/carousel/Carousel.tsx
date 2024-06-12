"use client";

import "./carousel.scss";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import { CarouselIndex } from "./CarouselIndex";
import { SanityImageWrapper } from "../SanityImageWrapper";
import { SanityImageBuilderConfig } from "../sanityImageBuilderConfig";

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
  const [maxIndex] = useState<number>(images.length - 1);

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
  }, [currentIndex]);

  return (
    <>
      {maxIndex > 0 ? (
        <div {...swipeHandlers} style={{ width: "100%" }}>
          <SanityImageWrapper
            sanityImage={images[currentIndex].img}
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
          sanityImage={images[0].img}
          imageBuilderConfig={imageBuilderConfig}
        />
      )}
    </>
  );
};
