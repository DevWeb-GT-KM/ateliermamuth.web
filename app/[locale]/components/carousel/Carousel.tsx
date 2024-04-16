"use client";
import "./carousel.scss";

import { useEffect, useState } from "react";
import { client } from "@/../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { CarouselIndex } from "./CarouselIndex";
import { ProjectInformation } from "./ProjectInformation";
import shapeA from "../../../common/assets/images/homePage/carousel/shapeA.svg";
import shapeB from "../../../common/assets/images/homePage/carousel/shapeB.svg";
import shapeC from "../../../common/assets/images/homePage/carousel/shapeC.svg";

type CarouselProps = {
  data: any[];
};

export const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const MILLISECONDS_IMAGE_CHANGE = 8000;
  const builder = imageUrlBuilder(client);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex < data[0].carousel.length - 1 ? prevIndex + 1 : 0
        ),
      MILLISECONDS_IMAGE_CHANGE
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="carousel-container"
      style={{
        backgroundImage: `url(${builder
          .image(data[0].carousel[currentIndex].mainImage.asset.url)
          .url()})`,
      }}
    >
      <Image
        className="carousel-shape carousel-shape-a"
        src={shapeA}
        alt="test"
      />
      <Image
        className="carousel-shape carousel-shape-b"
        src={shapeB}
        alt="test"
      />
      <Image
        className="carousel-shape carousel-shape-c"
        src={shapeC}
        alt="test"
      />
      <ProjectInformation data={data} currentIndex={currentIndex} />
      <CarouselIndex
        carouselLength={data[0].carousel.length}
        activeIndex={currentIndex}
      />
    </div>
  );
};
