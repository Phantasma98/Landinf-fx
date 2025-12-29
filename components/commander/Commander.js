import Image from "next/image";

import styles from "./index.module.css";
import PrimaryBtn from "../PrimaryBtn";

const Commander = () => {
  const commanderImage = "/images/oleksiuyk.png";
  return (
    <section className={styles.commanderSection}>
      <div className={styles.commanderContent}>
        <div className={styles.commanderText}>
          <h2 className={styles.sectionTitle}>КОМАНДИР</h2>
          <div className={styles.commanderInfo}>
            <div className={styles.commanderTitleBlock}>
              <p className={styles.commanderTitle}>герой України</p>
              <p className={styles.commanderRank}>полковник</p>
              <p className={styles.commanderName}>Дмитро Олексюк</p>
            </div>

            <div className={styles.commanderQuote}>
              <p>
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
