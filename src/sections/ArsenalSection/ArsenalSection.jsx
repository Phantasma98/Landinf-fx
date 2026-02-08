import { useState, useRef, useCallback } from "react";
import styles from "./index.module.css";

import PrimaryBtn from "@/components/ui/PrimaryBtn";
import SecondaryBtn from "@/components/ui/SecondaryBtn";
import ArrowLeftButton from "@/components/ui/ArrowLeftButton";
import ArrowRightButton from "@/components/ui/ArrowRightButton";
import { useModal } from "@/contexts/ModalContext";

const FADE_OUT_MS = 280;

const ArsenalSection = ({
  title,
  subtitle,
  items = [],
  primaryCta,
  secondaryCta,
}) => {
  const { openModal } = useModal();
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const isAnimating = useRef(false);

  const changeSlide = useCallback(
    (direction) => {
      if (items.length < 2 || isAnimating.current) return;
      isAnimating.current = true;

      setVisible(false);

      setTimeout(() => {
        setActiveIndex((prev) => {
          if (direction === "prev") {
            return prev > 0 ? prev - 1 : items.length - 1;
          }
          return prev < items.length - 1 ? prev + 1 : 0;
        });
        setVisible(true);
        isAnimating.current = false;
      }, FADE_OUT_MS);
    },
    [items.length],
  );

  const handlePrev = () => changeSlide("prev");
  const handleNext = () => changeSlide("next");

  const activeItem = items[activeIndex] || {};

  return (
    <section className={`${styles.arsenalMain} full-bleed`}>
      <div className={`${styles.arsenalSection} layout-1250 reveal-horizontal`}>
        <div className={`${styles.arsenalHeader} content-row`}>
          <h2 className={`${styles.arsenalTitle} col-left font-title-l title-l-m section-title`}>
            {title}
          </h2>
          <p className={`${styles.arsenalSubtitle} col-right font-text-l-s`}>
            {subtitle}
          </p>
        </div>
        {activeItem.image ? (
          <div className={`${styles.arsenalImage} slide-media ${visible ? 'slide-visible' : 'slide-hidden'}`}>
            <img
              src={activeItem.image}
              alt={activeItem.imageAlt || activeItem.title || "Arsenal"}
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : null}
        <div className={styles.textCarouselSection}>
          <div className={styles.textCarouselTitle}>
            <div className={styles.textHeading}>
              <h3
                className={`font-title-l title-l-s section-title ${visible ? 'slide-visible' : 'slide-hidden'}`}
              >
                {activeItem.title}
              </h3>
            </div>
            <div className={styles.textCarouselTitleButtonBlock}>
              <ArrowLeftButton onClick={handlePrev} />
              <ArrowRightButton onClick={handleNext} />
            </div>
          </div>
          <div className={styles.textBody}>
            <p
              className={`${styles.sectionTitleText} font-text-l-s ${visible ? 'slide-visible' : 'slide-hidden'}`}
            >
              {activeItem.description}
            </p>
          </div>
          <div className={styles.arsenalButtons}>
            {primaryCta ? (
              <PrimaryBtn
                text={primaryCta.text}
                href={primaryCta.href}
                onClick={primaryCta.href ? undefined : openModal}
              />
            ) : null}
            {secondaryCta ? (
              <SecondaryBtn text={secondaryCta.text} href={secondaryCta.href} />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArsenalSection;
