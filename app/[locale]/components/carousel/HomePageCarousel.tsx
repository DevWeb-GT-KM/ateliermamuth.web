"use client";

import "./homePageCarousel.scss";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { isMobile } from "react-device-detect";

import { CarouselIndex } from "@/common/components/images/carousel/CarouselIndex";
import { ProjectInformation } from "./ProjectInformation";
import { SANITY_IMAGE_FORMAT } from "@/common/components/images/sanityImageBuilderConfig";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../sanity/lib/client";
import { getImageSource } from "@/common/helpers/ImageHelper";

const builder = imageUrlBuilder(client);

type CarouselProps = {
  data: any[];
};

export const HomePageCarousel: React.FC<CarouselProps> = ({ data }) => {
  const MILLISECONDS_IMAGE_CHANGE = 8000;

  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const maxIndex = data[0].carousel.length;

  const [isLoaded, setIsLoaded] = useState(false);
  const [images, setImages] = useState<any[]>([]);

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
      return () => clearInterval(interval);
    }
  }, [currentIndex]);

  useEffect(() => {
    const promises = data[0].carousel.map((image: any) => {
      return fetch(
        getImageSource(
          isMobile ? image.mainImageMobile : image.mainImage,
          builder,
          {
            size: {
              width: isMobile ? 1080 : 2560,
              height: isMobile ? 1920 : 1440,
            },
            quality: 90,
            format: SANITY_IMAGE_FORMAT.Jpg,
          }
        ),
        { cache: "force-cache" }
      );
    });

    Promise.all(promises)
      .then((responses) =>
        Promise.all(responses.map((response) => response.blob()))
      )
      .then((blobs) => {
        const imageUrls = blobs.map((blob) => URL.createObjectURL(blob));
        setImages(imageUrls);
        setIsLoaded(true);
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const getInformationIndex = () => {
    if (currentIndex == images.length + 1) {
      return 0;
    } else if (currentIndex == images.length) {
      return images.length - 1;
    } else if (currentIndex == 0) {
      return images.length - 1;
    } else {
      return currentIndex - 1;
    }
  };

  const changeIndexWithDot = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index + 1);
  };

  return (
    <>
      {!isLoaded ? (
        <div className="home-page-loader"></div>
      ) : (
        <section className="home-page-carousel-container" {...swipeHandlers}>
          <div className="shapes" />
          <div
            className="background-slider"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? "transform 1s ease-in-out" : "none",
            }}
          >
            <div
              className="background-slide"
              style={{
                backgroundImage: `url(${images[maxIndex - 1]})`,
              }}
            ></div>

            {images.map((image, index) => (
              <div
                key={index}
                className="background-slide"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}

            <div
              className="background-slide"
              style={{ backgroundImage: `url(${images[0]})` }}
            ></div>
          </div>

          <ProjectInformation
            data={data}
            currentIndex={getInformationIndex()}
          />
          <CarouselIndex
            carouselLength={maxIndex}
            activeIndex={
              currentIndex === 0
                ? maxIndex - 1
                : currentIndex === maxIndex + 1
                  ? 0
                  : currentIndex - 1
            }
            setActiveIndex={(newIndex) => changeIndexWithDot(newIndex)}
          />
        </section>
      )}
    </>
  );
};
