import styles from "./index.module.css";
import PrimaryBtn from "@/components/ui/PrimaryBtn";

const CommanderSection = ({
  title = "КОМАНДИР",
  roleTitle = "ГЕРОЙ УКРАЇНИ",
  rank = "ПОЛКОВНИК",
  name = "ДМИТРО ОЛЕКСЮК",
  image,
  imageAlt = "Commander",
  quote,
  button,
  awardsTitle,
  awards = [],
  bio,
}) => {
  return (
    <section className={styles.commanderMain}>
      <div className={`${styles.commanderSection} layout-1250`}>
        <div className={`${styles.commanderContent} content-row`}>
          <div className={`${styles.commanderText} col-left`}>
            <h2 className={`${styles.sectionTitle} font-title-l title-l-m section-title`}>
              {title}
            </h2>
            <div className={styles.commanderInfo}>
              <div className={styles.commanderTitleBlock}>
                <p className={`${styles.commanderTitle} font-headline-l headline-l-s`}>
                  {roleTitle}
                </p>
                <p className={`${styles.commanderRank} font-text-l-m`}>
                  {rank}
                  <br />
                  {name}
                </p>
              </div>

              {quote && (
                <div className={styles.commanderQuote}>
                  <p className="font-headline-l headline-l-m">{quote}</p>
                </div>
              )}

              {button && (
                <PrimaryBtn text={button.text} href={button.href} />
              )}
            </div>

            {(awardsTitle || awards.length > 0) && (
              <div className={styles.commanderAwards}>
                {awardsTitle && (
                  <div className={`${styles.commanderAwardsTitle} font-headline-l headline-l-m`}>
                    {awardsTitle}
                  </div>
                )}
                {awards.map((item, idx) => (
                  <div
                    key={`${item}-${idx}`}
                    className={`${styles.commanderAwardsText} font-text-l-m`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={`${styles.commanderImage} col-right`}>
            <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
          </div>
        </div>

        {bio && (
          <div className={`${styles.commanderBio} font-text-l-s`}>{bio}</div>
        )}
      </div>
    </section>
  );
};

export default CommanderSection;
