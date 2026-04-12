"use client";
import React, { useRef } from "react";
import "./horizontalSlider.scss";

import { SanityImageWrapper } from "@/common/components/images/SanityImageWrapper";
import { IMAGE_DEFAULT_QUALITY, IMAGE_DEFAULT_FORMAT, IMAGE_SIZES } from "@/common/components/images/sanityImageBuilderConfig";

interface SliderProps {
  images: any[];
}

const HorizontalSlider: React.FC<SliderProps> = ({ images }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const startX =
      "touches" in e
        ? e.touches[0].pageX - slider.offsetLeft
        : e.pageX - slider.offsetLeft;
    const scrollLeft = slider.scrollLeft;

    const handleDragMove = (moveEvent: MouseEvent | TouchEvent) => {
      const x =
        "touches" in moveEvent
          ? moveEvent.touches[0].pageX - slider.offsetLeft
          : (moveEvent as MouseEvent).pageX - slider.offsetLeft;
      const walk = (x - startX) * 1;
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleDragEnd = () => {
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("touchend", handleDragEnd);
    };

    window.addEventListener("mousemove", handleDragMove);
    window.addEventListener("mouseup", handleDragEnd);
    window.addEventListener("touchmove", handleDragMove);
    window.addEventListener("touchend", handleDragEnd);
  };

  return (
    <div
      className="projects-page-project-archived-images"
      ref={sliderRef}
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
    >
      {images.map((item: any, index: number) => {
        return (
          <SanityImageWrapper
            key={index}
            sanityImage={item.img}
            imageBuilderConfig={{
              format: IMAGE_DEFAULT_FORMAT,
              quality: IMAGE_DEFAULT_QUALITY,
              size: {
                width: 960,
                height: 540,
              },
            }}
          />
        );
      })}
    </div>
  );
};

export default HorizontalSlider;
