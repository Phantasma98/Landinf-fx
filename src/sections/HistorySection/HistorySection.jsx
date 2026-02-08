import { useMemo, useState, useRef, useCallback } from "react";
import styles from "./index.module.css";
import ArrowLeftButton from "@/components/ui/ArrowLeftButton";
import ArrowRightButton from "@/components/ui/ArrowRightButton";

const FADE_OUT_MS = 280;

export default function HistorySection({ title, description, images = [], years = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const isAnimating = useRef(false);

  const carouselImages = useMemo(
    () => (images.length > 0 ? [...images, ...images] : []),
    [images]
  );

  const changeSlide = useCallback(
    (direction) => {
      if (years.length < 2 || isAnimating.current) return;
      isAnimating.current = true;

      setVisible(false);

      setTimeout(() => {
        setActiveIndex((prev) => {
          if (direction === "prev") {
            return prev > 0 ? prev - 1 : years.length - 1;
          }
          return prev < years.length - 1 ? prev + 1 : 0;
        });
        setVisible(true);
        isAnimating.current = false;
      }, FADE_OUT_MS);
    },
    [years.length],
  );

  const handlePrev = () => changeSlide("prev");
  const handleNext = () => changeSlide("next");

  const activeYear = years[activeIndex];
  const slideCls = visible ? 'slide-visible' : 'slide-hidden';

  return (
    <section className={styles.historyMain}>
      <div className="layout-1250">
        <div className={`${styles.header} content-row`}>
          <h2 className="col-left font-title-l title-l-m section-title">{title}</h2>
          {description && (
            <p className={`col-right ${styles.description} font-text-l-s`}>{description}</p>
          )}
        </div>
      </div>

      {carouselImages.length > 0 && (
        <div className={`${styles.carouselWrapper} full-bleed`}>
          <div className={styles.carouselTrack}>
            {carouselImages.map((img, idx) => {
              const imageData =
                typeof img === "string"
                  ? { src: img, alt: `History ${(idx % Math.max(images.length, 1)) + 1}` }
                  : img;
              return (
                <div
                  key={`${typeof img === "string" ? img : img?.src}-${idx}`}
                  className={styles.carouselItem}
                >
                  <img
                    src={imageData.src}
                    alt={imageData.alt || `History ${(idx % Math.max(images.length, 1)) + 1}`}
                    loading="eager"
                    fetchPriority={idx < images.length ? "high" : "auto"}
                    decoding="async"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeYear && (
        <div className="layout-1250">
          <div className={styles.timeline}>
            <div className={styles.timelineHeader}>
              <h3
                className={`font-headline-l headline-l-m section-title ${slideCls}`}
              >
                {activeYear.year}: {activeYear.title}
              </h3>
              <div className={styles.controls}>
                <ArrowLeftButton onClick={handlePrev} />
                <ArrowRightButton onClick={handleNext} />
              </div>
            </div>
            <div className={styles.yearContent}>
              {activeYear.paragraphs?.map((paragraph, idx) => (
                <p key={idx} className={`${styles.paragraph} font-text-l-s ${slideCls}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
