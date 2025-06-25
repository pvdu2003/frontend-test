import React, { useState } from "react";
import styles from "./Slider.module.css";

interface SliderProps {
  children: React.ReactNode[];
  showDots?: boolean;
  loop?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  children,
  showDots = true,
  loop = true,
}) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => {
      const next = prev + 1;
      return next >= children.length ? (loop ? 0 : prev) : next;
    });
  };

  const prevSlide = () => {
    setCurrent((prev) => {
      const prevIndex = prev - 1;
      return prevIndex < 0 ? (loop ? children.length - 1 : prev) : prevIndex;
    });
  };

  const prevIndex =
    current === 0 ? (loop ? children.length - 1 : -1) : current - 1;
  const nextIndex =
    current === children.length - 1 ? (loop ? 0 : -1) : current + 1;

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderContainer}>
        {prevIndex !== -1 && (
          <div
            className={`${styles.sideCard} ${styles.prev}`}
            onClick={prevSlide}
          >
            <div className={styles.cardContainer}>{children[prevIndex]}</div>
          </div>
        )}

        <div className={styles.mainCard}>{children[current]}</div>

        {nextIndex !== -1 && (
          <div
            className={`${styles.sideCard} ${styles.next}`}
            onClick={nextSlide}
          >
            <div className={styles.cardContainer}>{children[nextIndex]}</div>
          </div>
        )}
      </div>

      {showDots && (
        <div className={styles.dots}>
          {children.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === current ? styles.active : ""
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      )}

      <button className={styles.arrowLeft} onClick={prevSlide}>
        &lt;
      </button>
      <button className={styles.arrowRight} onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;
