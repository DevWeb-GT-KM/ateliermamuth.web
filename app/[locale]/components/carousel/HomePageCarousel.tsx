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

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [maxIndex] = useState<number>(data[0].carousel.length - 1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [images, setImages] = useState<any[]>([]);
  const [currentIteration, setCurrentIteration] = useState<number>(0);

  const handleIndexChange = (nextIndex: number): number => {
    if (nextIndex < 0) {
      return maxIndex;
    } else if (nextIndex > maxIndex) {
      setCurrentIteration(currentIteration + maxIndex + 1);
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

  useEffect(() => {
    let promises = [];

    promises = data[0].carousel.map((image: any) => {
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
      .then((responses) => {
        return Promise.all(responses.map((response) => response.blob()));
      })
      .then((blobs) => {
        const imageUrls = blobs.map((blob) => URL.createObjectURL(blob));
        setImages([
          ...imageUrls,
          ...imageUrls,
          ...imageUrls,
          ...imageUrls,
          ...imageUrls,
          ...imageUrls,
          ...imageUrls,
          ...imageUrls,
          ...imageUrls,
          ...imageUrls,
        ]);

        setIsLoaded(true);
      })
      .catch((error) => console.error("Error fetching image:", error));
  }, []);

  return (
    <>
      {!isLoaded ? (
        <div className="home-page-loader"></div>
      ) : (
        <section className="home-page-carousel-container">
          <div
            className="background-slider"
            style={{
              transform: `translateX(-${(currentIndex + currentIteration) * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="background-slide"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
          </div>
          <ProjectInformation data={data} currentIndex={currentIndex} />
          <CarouselIndex
            carouselLength={data[0].carousel.length}
            activeIndex={currentIndex}
            setActiveIndex={setCurrentIndex}
          />
        </section>
      )}
    </>
  );
};
