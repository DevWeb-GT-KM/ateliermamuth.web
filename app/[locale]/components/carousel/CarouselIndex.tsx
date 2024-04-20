import "./carouselIndex.scss";
import _ from "lodash";

type CarouselIndexProps = {
  carouselLength: number;
  activeIndex: number;
};

export const CarouselIndex: React.FC<CarouselIndexProps> = ({
  carouselLength,
  activeIndex,
}) => {
  return (
    <div className="home-page-carousel-index-container">
      {_.times(carouselLength, (index) => (
        <div
          key={index}
          className={`home-page-carousel-index-dot ${
            activeIndex == index ? "home-page-carousel-index-dot-active" : ""
          }`}
        />
      ))}
    </div>
  );
};
