"use client";

import { useEffect, useRef, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import "./reviews.scss";

const REVIEWS = [
  {
    name: "Marie Tremblay",
    review:
      "Une équipe incroyablement talentueuse et à l'écoute. Le résultat final a dépassé toutes nos attentes. Nous recommandons vivement Atelier Mamuth.",
    stars: 5,
  },
  {
    name: "Jean-Philippe Côté",
    review:
      "Professionnalisme exemplaire du début à la fin. Atelier Mamuth a su transformer notre vision en réalité avec beaucoup de créativité et de rigueur.",
    stars: 5,
  },
  {
    name: "Sophie Bergeron",
    review:
      "Collaboration fluide et résultat magnifique. L'équipe comprend vraiment les besoins de ses clients et livre un travail de qualité remarquable.",
    stars: 5,
  },
  {
    name: "Alexandre Dubois",
    review:
      "Excellent travail, délais respectés et communication impeccable tout au long du projet. Je ferai certainement appel à eux de nouveau.",
    stars: 5,
  },
  {
    name: "Camille Lavoie",
    review:
      "Une expérience de travail enrichissante. L'équipe est passionnée et ça se voit dans le résultat final. Très satisfaite de la collaboration.",
    stars: 5,
  },
];

const COUNT = REVIEWS.length;
// 2 clones per side so the partial neighbour card is always visible during transition
// Layout: [R3, R4,  R0, R1, R2, R3, R4,  R0, R1]
//          ↑ clones start ↑  ↑ real cards ↑  ↑ clones end ↑
const CLONES = 2;
const EXTENDED = [
  ...REVIEWS.slice(COUNT - CLONES),
  ...REVIEWS,
  ...REVIEWS.slice(0, CLONES),
];
const START = CLONES; // index of first real card

export const Reviews: React.FC = () => {
  const [index, setIndex] = useState(START);
  const [noTransition, setNoTransition] = useState(false);
  const jumpTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearJumpTimer = () => {
    if (jumpTimer.current) {
      clearTimeout(jumpTimer.current);
      jumpTimer.current = null;
    }
  };

  // Auto-advance every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // After transition to a clone, silently jump to the matching real card
  useEffect(() => {
    clearJumpTimer();

    if (index === COUNT + CLONES) {
      // Reached clone of first real card → jump back to first real card
      jumpTimer.current = setTimeout(() => {
        setNoTransition(true);
        setIndex(CLONES);
      }, 660);
    } else if (index === CLONES - 1) {
      // Reached clone of last real card → jump forward to last real card
      jumpTimer.current = setTimeout(() => {
        setNoTransition(true);
        setIndex(COUNT + CLONES - 1);
      }, 660);
    }

    return clearJumpTimer;
  }, [index]);

  // Re-enable transition on the next two animation frames after silent jump
  useEffect(() => {
    if (!noTransition) return;
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setNoTransition(false));
    });
    return () => cancelAnimationFrame(raf);
  }, [noTransition]);

  // Map extended index back to a real 0-based dot index
  const dotIndex = (index - CLONES + COUNT) % COUNT;

  const handleDotClick = (realIndex: number) => {
    clearJumpTimer();
    setNoTransition(false);
    setIndex(realIndex + CLONES);
  };

  return (
    <section className="home-page-reviews-container">
      <div className="home-page-reviews-header">
        <h2 className="home-page-reviews-title">Ce qu&apos;ils disent</h2>
      </div>
      <div className="home-page-reviews-track-wrapper">
        <div
          className={`home-page-reviews-track${noTransition ? " no-transition" : ""}`}
          style={{ "--active-index": index } as React.CSSProperties}
        >
          {EXTENDED.map((review, i) => (
            <ReviewCard key={i} data={review} />
          ))}
        </div>
      </div>
      <div className="home-page-reviews-dots">
        {REVIEWS.map((_, i) => (
          <button
            key={i}
            className={`home-page-reviews-dot${i === dotIndex ? " active" : ""}`}
            onClick={() => handleDotClick(i)}
            aria-label={`Avis ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
