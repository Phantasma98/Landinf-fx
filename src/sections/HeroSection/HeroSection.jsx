import { useEffect } from "react";
import styles from "./index.module.css";
import PrimaryBtn from "@/components/ui/PrimaryBtn";
import SecondaryBtn from "@/components/ui/SecondaryBtn";
import SocialLinks from "@/components/ui/SocialLinks";
import { useModal } from "@/contexts/ModalContext";

const MODAL_CTA_TEXTS = [
  "долучитись",
  "приєднатися",
  "стати частиною команди",
  "відправити заявку",
];

export default function HeroSection({
  backgroundImage,
  backgroundAlt,
  meta,
  title,
  primaryAction,
  secondaryAction,
  socials,
}) {
  const { openModal } = useModal();
  const heroSocials = Array.isArray(socials) ? socials : socials?.items;
  const primaryActionText = (primaryAction?.text || "").toLowerCase();
  const shouldOpenModalFromPrimary = MODAL_CTA_TEXTS.some((value) =>
    primaryActionText.includes(value)
  );

  useEffect(() => {
    if (!backgroundImage) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = backgroundImage;
    link.fetchPriority = "high";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, [backgroundImage]);

  return (
    <section
      id="home"
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      role="img"
      aria-label={backgroundAlt || (typeof title === "string" ? title : "Hero Background")}
    >
      <div className={styles.frameParent}>
        <div className={styles.heroContent}>
          <p className={`${styles.heroMeta} font-subtitle-l`}>{meta}</p>
          <h1 className={`${styles.heroTitle} font-title-l title-l-l`}>
            {title}
          </h1>
          <div className={styles.heroActions}>
            {primaryAction ? (
              <PrimaryBtn
                text={primaryAction.text}
                href={shouldOpenModalFromPrimary ? undefined : primaryAction.href}
                onClick={shouldOpenModalFromPrimary ? openModal : undefined}
              />
            ) : null}
            {secondaryAction ? (
              <SecondaryBtn
                text={secondaryAction.text}
                href={secondaryAction.href}
              />
            ) : null}
          </div>
        </div>
        {socials && <SocialLinks className={styles.containerSocials} socials={heroSocials} />}
      </div>
    </section>
  );
}
