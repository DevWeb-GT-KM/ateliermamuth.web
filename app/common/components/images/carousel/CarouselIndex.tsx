"use client";

import _ from "lodash";

type CarouselIndexProps = {
  carouselLength: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

export const CarouselIndex: React.FC<CarouselIndexProps> = ({
  carouselLength,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <div className="carousel-index-container">
      {_.times(carouselLength, (index) => (
        <div
          key={index}
          className={`carousel-index-dot ${
            activeIndex == index ? "carousel-index-dot-active" : ""
          }`}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};
