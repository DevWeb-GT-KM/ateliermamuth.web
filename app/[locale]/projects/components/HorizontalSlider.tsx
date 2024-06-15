"use client";
import React, { useRef } from "react";
import "./horizontalSlider.scss";

import { client } from "../../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageWrapper } from "@/common/components/images/SanityImageWrapper";
import { SANITY_IMAGE_FORMAT } from "@/common/components/images/sanityImageBuilderConfig";

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
      {/* {images.map((image: any, index: number) => {
        return (
          <SanityImageWrapper
            key={index}
            sanityImage={image}
            imageBuilderConfig={{
              format: SANITY_IMAGE_FORMAT.Jpg,
              quality: 90,
              size: {
                width: 1920,
                height: 1080,
              },
            }}
          />
        );
      })} */}
    </div>
  );
};

export default HorizontalSlider;
