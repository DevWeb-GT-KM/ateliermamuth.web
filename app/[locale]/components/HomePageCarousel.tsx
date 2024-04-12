"use client";
import "./HomePageCarousel.scss";

import { client } from "@/../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from "react";

type HomePageCarouselProps = {
  data: any[];
};

export const HomePageCarousel: React.FC<HomePageCarouselProps> = ({ data }) => {
  const MILLISECONDS_IMAGE_CHANGE = 4000;
  const builder = imageUrlBuilder(client);

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentImageIndex((prevIndex) =>
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
      className="home-page-carousel-container"
      style={{
        backgroundImage: `url(${builder
          .image(
            data[0].carousel[currentImageIndex].homePageCarouselPicture.asset
              .url
          )
          .url()})`,
      }}
    >
      <div className="home-page-carousel-project-info-container"></div>
    </div>
  );
};
