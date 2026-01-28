import styles from "./index.module.css";
import Image from "next/image";

const SectionDonations = () => {
  const video1 = "/images/Video1.png";

  return (
    <section id="donations" className={styles.main}>
      <div className={styles.section}>
        <div className={styles.block}>
          <div className={`${styles.titleHeader} font-title-l title-l-m `}>
            Закриті збори
          </div>
          <div className={`${styles.titleText} font-text-l-s `}>
            Кожен донат для нас неймовірно важливий. Всі зібрані кошти ми
            використовуємо за призначенням та конвертуємо їх в результат.
            Дякуємо за підтримку!
          </div>
        </div>
        <div className={styles.block}>
          <div className={`${styles.blockHeader}`}>
            <div
              className={`${styles.blockHeaderTitle} font-title-l title-l-s`}
            >
              збір на реб
            </div>
            <div className={`${styles.blockHeaderText} font-text-l-s`}>
              Збір на засоби радіоелектронної боротьби. Завдяки їм ми можемо
              забезпечити безпеку наших пілотів на позиціях.
            </div>
            <div
              className={`${styles.blockHeaderSum} font-headline-l headline-l-m`}
            >
              зібрано: 500 000 грн
            </div>
          </div>
          <div className={`${styles.blockImage}  `}>
            <Image
              src={video1}
              alt="video1"
              height={406}
              width={721}
              //   style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className={styles.block}>
          <div className={`${styles.blockHeader}`}>
            <div
              className={`${styles.blockHeaderTitle} font-title-l title-l-s`}
            >
              збір на реб
            </div>
            <div className={`${styles.blockHeaderText} font-text-l-s`}>
              Збір на засоби радіоелектронної боротьби. Завдяки їм ми можемо
              забезпечити безпеку наших пілотів на позиціях.
            </div>
            <div
              className={`${styles.blockHeaderSum} font-headline-l headline-l-m`}
            >
              зібрано: 500 000 грн
            </div>
          </div>
          <div className={`${styles.blockImage}  `}>
            <Image
              src={video1}
              alt="video1"
              height={406}
              width={721}
              //   style={{ objectFit: "cover" }}
            />
          </div>
        </div>{" "}
        <div className={styles.block}>
          <div className={`${styles.blockHeader}`}>
            <div
              className={`${styles.blockHeaderTitle} font-title-l title-l-s`}
            >
              збір на реб
            </div>
            <div className={`${styles.blockHeaderText} font-text-l-s`}>
              Збір на засоби радіоелектронної боротьби. Завдяки їм ми можемо
              забезпечити безпеку наших пілотів на позиціях.
            </div>
            <div
              className={`${styles.blockHeaderSum} font-headline-l headline-l-m`}
            >
              зібрано: 500 000 грн
            </div>
          </div>
          <div className={`${styles.blockImage}  `}>
            <Image
              src={video1}
              alt="video1"
              height={406}
              width={721}
              //   style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDonations;
