"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { CondensedDots } from "./CondensedDots";
import "./reviews.scss";

type Review = {
  name: string;
  comment: string;
  score: number;
};

type ReviewsProps = {
  data: {
    reviews?: {
      sectionTitle: string;
      reviews: Review[];
    };
  }[];
};

const CLONES = 2;

export const Reviews: React.FC<ReviewsProps> = ({ data }) => {
  const reviewsData = data[0]?.reviews;
  const items: Review[] = reviewsData?.reviews ?? [];
  const count = items.length;

  const extended = useMemo(
    () => [
      ...items.slice(count - CLONES),
      ...items,
      ...items.slice(0, CLONES),
    ],
    [items]
  );

  const [index, setIndex] = useState(CLONES);
  const [noTransition, setNoTransition] = useState(false);
  const [autoAdvanceKey, setAutoAdvanceKey] = useState(0);
  const jumpTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearJumpTimer = () => {
    if (jumpTimer.current) {
      clearTimeout(jumpTimer.current);
      jumpTimer.current = null;
    }
  };

  useEffect(() => {
    if (count === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [count, autoAdvanceKey]);

  useEffect(() => {
    clearJumpTimer();

    if (index === count + CLONES) {
      jumpTimer.current = setTimeout(() => {
        setNoTransition(true);
        setIndex(CLONES);
      }, 660);
    } else if (index === CLONES - 1) {
      jumpTimer.current = setTimeout(() => {
        setNoTransition(true);
        setIndex(count + CLONES - 1);
      }, 660);
    }

    return clearJumpTimer;
  }, [index, count]);

  useEffect(() => {
    if (!noTransition) return;
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setNoTransition(false));
    });
    return () => cancelAnimationFrame(raf);
  }, [noTransition]);

  const dotIndex = count > 0 ? (index - CLONES + count) % count : 0;

  const handleDotClick = (realIndex: number) => {
    clearJumpTimer();
    setNoTransition(false);
    setIndex(realIndex + CLONES);
    setAutoAdvanceKey((k) => k + 1);
  };

  if (count === 0) return null;

  return (
    <section className="home-page-reviews-container">
      <div className="home-page-reviews-header">
        <h2 className="home-page-reviews-title">
          {reviewsData?.sectionTitle}
        </h2>
      </div>
      <div className="home-page-reviews-track-wrapper">
        <div
          className={`home-page-reviews-track${noTransition ? " no-transition" : ""}`}
          style={{ "--active-index": index } as React.CSSProperties}
        >
          {extended.map((review, i) => (
            <ReviewCard
              key={i}
              data={review}
              onClick={i !== index ? () => {
                clearJumpTimer();
                setNoTransition(false);
                setIndex(i);
                setAutoAdvanceKey((k) => k + 1);
              } : undefined}
            />
          ))}
        </div>
      </div>
      <CondensedDots
        count={count}
        activeIndex={dotIndex}
        setActiveIndex={handleDotClick}
      />
    </section>
  );
};
