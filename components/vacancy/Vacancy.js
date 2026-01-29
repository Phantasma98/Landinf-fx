import styles from "./index.module.css";

import Image from "next/image";
import PrimaryBtn from "../PrimaryBtn";

const SectionVacancy = () => {
  const video1 = "/images/Video1.png";

  return (
    <section id="vacancy" className={styles.main}>
      <div className={styles.section}>
        <div className={`${styles.title} font-title-l title-l-m `}>
          Інженер мережевих інтеграцій
        </div>
        <div className={styles.block}>
          <div
            className={`${styles.blockHeader} font-headline-l headline-l-m `}
          >
            обовʼязки
          </div>
          <div className={`${styles.blockText} font-text-l-s `}>
            <ul>
              <li>
                налаштування локальних мереж (LAN) та бездротових мостів на
                пунктах керування для передачі відеопотоків та даних телеметрії
                в режимі реального часу
              </li>
              <li>
                налаштування та обслуговування супутникового зв&apos;язку
                (Starlink), радіомостів (Ubiquiti, Mikrotik) та їхня інтеграція
                в єдину мережу підрозділу
              </li>{" "}
              <li>
                налаштування локальних мереж (LAN) та бездротових мостів на
                пунктах керування для передачі відеопотоків та даних телеметрії
                в режимі реального часу
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.block}>
          <div
            className={`${styles.blockHeader} font-headline-l headline-l-m `}
          >
            вимоги
          </div>
          <div className={`${styles.blockText} font-text-l-s `}>
            <ul>
              <li>
                налаштування локальних мереж (LAN) та бездротових мостів на
                пунктах керування для передачі відеопотоків та даних телеметрії
                в режимі реального часу
              </li>
              <li>
                налаштування та обслуговування супутникового зв&apos;язку
                (Starlink), радіомостів (Ubiquiti, Mikrotik) та їхня інтеграція
                в єдину мережу підрозділу
              </li>{" "}
              <li>
                налаштування локальних мереж (LAN) та бездротових мостів на
                пунктах керування для передачі відеопотоків та даних телеметрії
                в режимі реального часу
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.block}>
          <div
            className={`${styles.blockHeader} font-headline-l headline-l-m `}
          >
            умови
          </div>
          <div className={`${styles.blockText} font-text-l-s `}>
            <ul>
              <li>
                налаштування локальних мереж (LAN) та бездротових мостів на
                пунктах керування для передачі відеопотоків та даних телеметрії
                в режимі реального часу
              </li>
              <li>
                налаштування та обслуговування супутникового зв&apos;язку
                (Starlink), радіомостів (Ubiquiti, Mikrotik) та їхня інтеграція
                в єдину мережу підрозділу
              </li>{" "}
              <li>
                налаштування локальних мереж (LAN) та бездротових мостів на
                пунктах керування для передачі відеопотоків та даних телеметрії
                в режимі реального часу
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.teamButton}>
          <PrimaryBtn text={"приєднатись до команди"} />
        </div>
      </div>
    </section>
  );
};

export default SectionVacancy;
