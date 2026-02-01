import Image from "next/image";

import styles from "./index.module.css";
import PrimaryBtn from "@/components/elements/PrimaryBtn";

const Commander = () => {
  const commanderImage = "/images/oleksiuyk2.png";
  return (
    <section className={styles.commanderSection}>
      <div className={styles.commanderBlock}>
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
            </div>
            <div className={styles.commanderAwards}>
              <div
                className={`${styles.commanderAwardsTitle} font-headline-l headline-l-m`}
              >
                нагороди
              </div>
              <div className={`${styles.commanderAwardsText} font-text-l-m`}>
                Звання Герой України з врученням ордена «Золота Зірка»
              </div>
              <div className={`${styles.commanderAwardsText} font-text-l-m`}>
                Орден Богдана Хмельницького II ступеня
              </div>
              <div className={`${styles.commanderAwardsText} font-text-l-m`}>
                Медаль «За військову службу Україні» 
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
        <div className={`${styles.commanderBio} font-text-l-s`}>
          У 2013 році закінчив Національну Академію ДПСУ імені Богдана
          Хмельницького та розпочав службу на відділі прикордонної служби
          «Мілове» Луганського прикордонного загону.
          <br />
          <br />
          24 лютого 2022 року зустрів на посаді начальника відділу прикордонної
          служби «Золоте» Сіверськодонецького району на Луганщині. Разом з
          підлеглими гідно зустрів ворога, мужньо та самовіддано здійснював
          керівництво перегрупуванням підпорядкованих сил та засобів. <br />
          <br /> Лютий - липень 2022 року очолював підрозділ та виконував
          найскладніші завдання з оборони населених пунктів Кремінна, Лиман,
          Святогірськ, Городичне, Тетянівка Донецької та Луганської областей.{" "}
          <br />
          <br />У грудні 2022 року - сформував та очолив новостворене бойове
          з’єднання Луганського прикордонного загону ДПСУ, яке почало виконувати
          бойові завдання на Бахмутському напрямку. Завдяки ефективному
          управлінню злагоджено працювали розрахунки СПГ-9, 120-мм мінометів,
          ПЗРК, БПЛА, АГС-17. <br />
          <br />У січні 2024 року очолив 2-гу комендатуру швидкого реагування
          «Фенікс», яка продовжувала стримувати ворога на Бахмутському напрямку.
          Підрозділу вдалось ліквідувати РЛС «Зоопарк-1», танки Т-90М «Прорив»
          та багато інших цілей. <br />
          <br /> Станом на початок 2026 року полковник активно займається
          впровадженням нових форматів та технологій з метою підвищення
          ефективності та результативності підрозділу.
        </div>
      </div>
    </section>
  );
};

export default Commander;
