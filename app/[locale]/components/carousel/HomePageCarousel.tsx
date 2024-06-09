"use client";

import "./homePageCarousel.scss";
import "./homePageCarouselShapes.scss";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useWindowSize } from "@react-hook/window-size";

import { CarouselIndex } from "@/common/components/images/carousel/CarouselIndex";
import { ProjectInformation } from "./ProjectInformation";
import { SANITY_IMAGE_FORMAT } from "@/common/components/images/sanityImageBuilderConfig";
import { SanityImageWrapper } from "@/common/components/images/SanityImageWrapper";

type CarouselProps = {
  data: any[];
};

export const HomePageCarousel: React.FC<CarouselProps> = ({ data }) => {
  const MILLISECONDS_IMAGE_CHANGE = 8000;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [maxIndex] = useState<number>(data[0].carousel.length - 1);
  const [width, height] = useWindowSize({
    wait: 1000,
    leading: true,
    initialWidth: 0,
    initialHeight: 0,
  });
  const [isReadyToRender, setIsReadyToRender] = useState<boolean>();

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
      setCurrentIndex((prevIndex) => handleIndexChange(prevIndex - 1)),
    onSwipedRight: () =>
      setCurrentIndex((prevIndex) => handleIndexChange(prevIndex + 1)),
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

  useEffect(() => {
    setIsReadyToRender(width != 0 && height != 0);
  }, []);

  return (
    <div {...swipeHandlers} className="home-page-carousel-container">
      {isReadyToRender ? (
        <>
          <div className="home-page-caroussel-shapes"></div>
          <SanityImageWrapper
            sanityImage={data[0].carousel[currentIndex].mainImage}
            imageBuilderConfig={{
              format: SANITY_IMAGE_FORMAT.Jpg,
              quality: 100,
              size: {
                width: width,
                height: height,
              },
            }}
          />
        </>
      ) : (
        <div className="home-page-carousel-image-placeholder"></div>
      )}
      <ProjectInformation data={data} currentIndex={currentIndex} />
      <CarouselIndex
        carouselLength={data[0].carousel.length}
        activeIndex={currentIndex}
        setActiveIndex={setCurrentIndex}
      />
    </div>
  );
};
