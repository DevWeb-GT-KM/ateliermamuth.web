"use client";

import "./condensedDots.scss";

type CondensedDotsProps = {
  count: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const VISIBLE = 5;

function getDotSize(
  dotIndex: number,
  activeIndex: number,
  windowStart: number,
  count: number
): "active" | "adjacent" | "edge" | "normal" {
  if (dotIndex === activeIndex) return "active";

  const posInWindow = dotIndex - windowStart;
  const isAtWindowEdge = posInWindow === 0 || posInWindow === VISIBLE - 1;
  const hasMoreBeyond =
    (posInWindow === 0 && windowStart > 0) ||
    (posInWindow === VISIBLE - 1 && windowStart + VISIBLE < count);

  if (isAtWindowEdge && hasMoreBeyond) return "edge";

  const dist = Math.abs(dotIndex - activeIndex);
  if (dist === 1) return "adjacent";
  return "normal";
}

export const CondensedDots: React.FC<CondensedDotsProps> = ({
  count,
  activeIndex,
  setActiveIndex,
}) => {
  if (count <= 1) return null;

  const useCondensed = count > VISIBLE;

  const windowStart = useCondensed
    ? Math.min(
        Math.max(0, activeIndex - Math.floor(VISIBLE / 2)),
        count - VISIBLE
      )
    : 0;

  const visibleIndices = useCondensed
    ? Array.from({ length: VISIBLE }, (_, i) => windowStart + i)
    : Array.from({ length: count }, (_, i) => i);

  return (
    <div className="condensed-dots">
      {visibleIndices.map((dotIndex) => {
        const size = useCondensed
          ? getDotSize(dotIndex, activeIndex, windowStart, count)
          : dotIndex === activeIndex
            ? "active"
            : "normal";

        return (
          <button
            key={dotIndex}
            className={`condensed-dot condensed-dot--${size}`}
            onClick={() => setActiveIndex(dotIndex)}
            aria-label={`Avis ${dotIndex + 1}`}
          />
        );
      })}
    </div>
  );
};
