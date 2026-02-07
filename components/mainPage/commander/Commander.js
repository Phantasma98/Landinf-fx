import Image from "next/image";

import styles from "./index.module.css";
import PrimaryBtn from "../../elements/PrimaryBtn";

const Commander = () => {
  const commanderImage = "/images/oleksiuyk.png";

  const content = {
    commanderTitle1: "КОМАНДИР",
    commanderTitle2: "герой України",
    commanderTitle3: "полковник",
    commanderTitle4: "Дмитро Олексюк",
    commanderText:
      "перетворюємо службу на високотехнологічну роботу, де цивільний інтелект та навички конвертуються в загальний результат.",
    PrimaryBtn: "дізнатись більше про фенікс",
  };

  return (
    <section className={styles.commanderSection}>
      <div className={styles.commanderContent}>
        <div className={styles.commanderText}>
          <h2 className={`${styles.sectionTitle} font-title-l title-l-m`}>
            {content.commanderTitle1}
          </h2>
          <div className={styles.commanderInfo}>
            <div className={styles.commanderTitleBlock}>
              <p className={`${styles.commanderTitle} font-text-l-l `}>
                {content.commanderTitle2}
              </p>
              <p className={`${styles.commanderRank} font-text-l-m`}>
                {content.commanderTitle3} <br />
                {content.commanderTitle4}
              </p>
            </div>

            <div className={styles.commanderQuote}>
              <p className=" font-headline-l headline-l-m">
                “{content.commanderText}”
              </p>
            </div>
            <div className={styles.commanderButton}>
              <PrimaryBtn text={content.PrimaryBtn} href={"/about"} />
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
