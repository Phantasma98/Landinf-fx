import Image from "next/image";

import styles from "./index.module.css";

const Commander = () => {
  const commanderImage = "/images/oleksiuyk2.png";

  const content = {
    commanderTitle1: "КОМАНДИР",
    commanderTitle2: "герой України",
    commanderTitle3: "полковник",
    commanderTitle4: "Дмитро Олексюк",
    commanderAwardsTitle: "нагороди",
    commanderAwardsText1:
      "Звання Герой України з врученням ордена «Золота Зірка»",
    commanderAwardsText2: "Орден Богдана Хмельницького II ступеня",
    commanderAwardsText3: "Медаль «За військову службу Україні»",
    commanderBio1:
      "У 2013 році закінчив Національну Академію ДПСУ імені Богдана Хмельницького та розпочав службу на відділі прикордонної служби «Мілове» Луганського прикордонного загону.",
    commanderBio2:
      "24 лютого 2022 року зустрів на посаді начальника відділу прикордонної служби «Золоте» Сіверськодонецького району на Луганщині. Разом з підлеглими гідно зустрів ворога, мужньо та самовіддано здійснював керівництво перегрупуванням підпорядкованих сил та засобів.",
    commanderBio3:
      "Лютий - липень 2022 року очолював підрозділ та виконував найскладніші завдання з оборони населених пунктів Кремінна, Лиман, Святогірськ, Городичне, Тетянівка Донецької та Луганської областей.",
    commanderBio4: (
      <div>
        У грудні 2022 року - сформував та очолив новостворене бойове з’єднання
        Луганського прикордонного загону ДПСУ, яке почало виконувати бойові
        завдання на Бахмутському напрямку. Завдяки ефективному управлінню
        злагоджено працювали розрахунки СПГ-9, 120-мм мінометів, ПЗРК, БПЛА,
        АГС-17. <br />
        <br />У січні 2024 року очолив 2-гу комендатуру швидкого реагування
        «Фенікс», яка продовжувала стримувати ворога на Бахмутському напрямку.
        Підрозділу вдалось ліквідувати РЛС «Зоопарк-1», танки Т-90М «Прорив» та
        багато інших цілей. <br />
        <br /> Станом на початок 2026 року полковник активно займається
        впровадженням нових форматів та технологій з метою підвищення
        ефективності та результативності підрозділу.
      </div>
    ),
  };

  return (
    <section className={styles.commanderSection}>
      <div className={styles.commanderBlock}>
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
            </div>
            <div className={styles.commanderAwards}>
              <div
                className={`${styles.commanderAwardsTitle} font-headline-l headline-l-m`}
              >
                {content.commanderAwardsTitle}
              </div>
              <div className={`${styles.commanderAwardsText} font-text-l-m`}>
                {content.commanderAwardsText1}
              </div>
              <div className={`${styles.commanderAwardsText} font-text-l-m`}>
                {content.commanderAwardsText2}
              </div>
              <div className={`${styles.commanderAwardsText} font-text-l-m`}>
                {content.commanderAwardsText3}
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
          {content.commanderBio1}
          <br />
          <br />
          {content.commanderBio2} <br />
          <br />
          {content.commanderBio3}
          <br />
          <br /> {content.commanderBio4}
        </div>
      </div>
    </section>
  );
};

export default Commander;
