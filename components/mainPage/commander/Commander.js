import Image from "next/image";

import styles from "./index.module.css";
import PrimaryBtn from "../../elements/PrimaryBtn";

const Commander = () => {
  const commanderImage = "/images/oleksiuyk.png";
  return (
    <section className={styles.commanderSection}>
      <div className={styles.commanderContent}>
        <div className={styles.commanderText}>
          <h2 className={`${styles.sectionTitle} font-title-l title-l-m`}>
            КОМАНДИР
          </h2>
          <div className={styles.commanderInfo}>
            <div className={styles.commanderTitleBlock}>
              <p className={`${styles.commanderTitle} font-text-l-l `}>
                герой України
              </p>
              <p className={`${styles.commanderRank} font-text-l-m`}>
                полковник <br />
                Дмитро Олексюк
              </p>
            </div>

            <div className={styles.commanderQuote}>
              <p className=" font-headline-l headline-l-m">
                &ldquo;перетворюємо службу на високотехнологічну роботу, де
                цивільний інтелект та навички конвертуються в загальний
                результат.&rdquo;
              </p>
            </div>
            <div className={styles.commanderButton}>
              <PrimaryBtn text={"дізнатись більше про фенікс"} />
            </div>
          </div>
        </div>
        <div className={styles.commanderImage}>
          <Image
            src={commanderImage}
            alt="Commander Dmitro Oleksiuk"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Commander;
