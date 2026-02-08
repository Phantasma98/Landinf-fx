import styles from "./index.module.css";
import StatItem from "@/components/ui/StatItem";
import useCountUp from "@/hooks/useCountUp";
import { formatNumberWithSpaces } from "@/utils/formatNumberWithSpaces";

function AnimatedAboutStatItem({ item, className }) {
  const numericTitle =
    typeof item.title === "string" && /^\d+$/.test(item.title.trim());
  const isNumeric = typeof item.value === "number" || numericTitle;
  const target = typeof item.value === "number" ? item.value : Number(item.title);

  const { ref, value } = useCountUp(isNumeric ? target : 0, {
    duration: 2000,
    decimals: item.decimals ?? 0,
  });

  const displayTitle = isNumeric
    ? `${item.prefix ?? ""}${formatNumberWithSpaces(value, item.decimals ?? 0)}${item.suffix ?? ""}`
    : item.title;

  return (
    <div ref={isNumeric ? ref : null}>
      <StatItem title={displayTitle} text={item.text} className={className} />
    </div>
  );
}

export default function AboutSection({
  id = "about",
  title,
  description,
  images = [],
  statsTop,
  stats,
  infiniteCarousel = true,
}) {
  const carouselImages = infiniteCarousel && images.length > 0
    ? [...images, ...images]
    : images;

  return (
    <section id={id} className={styles.sectionMain}>
      <div className="layout-1250">
        <div className={styles.headerRow}>
          <h2 className={`${styles.headerTitle} font-title-l title-l-m section-title`}>
            {title}
          </h2>
          <p className={`${styles.description} font-text-l-s`}>
            {description}
          </p>
        </div>
      </div>

      {carouselImages.length > 0 && (
        <div className={infiniteCarousel ? `${styles.carouselWrapper} full-bleed` : styles.staticImagesWrapper}>
          <div className={infiniteCarousel ? styles.carouselTrack : styles.staticImagesTrack}>
            {carouselImages.map((img, idx) => {
              const imageData =
                typeof img === "string"
                  ? { src: img, alt: `About ${(idx % Math.max(images.length, 1)) + 1}` }
                  : img;
              const imageIndex = images.length > 0 ? (idx % images.length) + 1 : idx + 1;
              return (
                <div key={idx} className={styles.carouselItem}>
                  <img
                    src={imageData.src}
                    alt={imageData.alt || `About ${imageIndex}`}
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

      <div className="layout-1250">
        <div className={styles.statsRow}>
          {statsTop && (
            <StatItem
              title={statsTop.title}
              text={statsTop.text}
              className={styles.statItemTop}
            />
          )}
          <div className={styles.statsContainer}>
            {stats?.map((item, idx) => (
              <AnimatedAboutStatItem
                key={idx}
                item={item}
                className={styles.statItem}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
