import Image from "next/image";

import styles from "./index.module.css";

const Values = () => {
  const valuesImage = "/images/Values.png";

  const values = [
    {
      style: styles.valueItem1,
      title: "Радикальна Чесність",
      description:
        "Ми не боїмось казати правду. Якщо існує проблема - про неї кажуть вголос миттєво. Ініціатива не карається, а заохочується. Брехня в команді наш червоний прапор.",
    },
    {
      style: styles.valueItem2,
      title: "культ результату",
      description:
        "Якщо нам треба порушити застарілу інструкцію, щоб покращити результативність і оптимізувати процеси - ми це робимо.",
    },
    {
      style: styles.valueItem,
      title: "Анти-Застій",
      description:
        "Ми - як військовий стартап. Ми вчимося щодня. Якщо ти не розвиваєшся, команда шукає тобі заміну. Ми даємо драйв, ти даєш динаміку.",
    },
    {
      style: styles.valueItem,
      title: "Екосистема Важливості",
      description:
        "Пілот дрона - це вершина нашої екосистеми, але без ідеального забезпечення він просто не може літати. Ми цінуємо «механіків» так само як «гонщиків».",
    },
    {
      style: styles.valueItem,
      title: "Спеціалізація Піт-стоп",
      description:
        "У гонці механік не сідає за кермо, а пілот не крутить гайки. Ми гарантуємо: ти будеш займатися тим, у чому ти найефективніший.",
    },
    {
      style: styles.valueItem,
      title: "Принцип Телеметрії",
      description:
        "Ми керуємось даними, а не емоціями. Ми ведемо війну спираючись на стріми, дані розвідки та аналітику. Немає даних - немає наказу.",
    },
  ];

  return (
    <section className={styles.valuesMain}>
      <div className={styles.valuesSection}>
        <div className={styles.valuesHeader}>
          <h2 className={styles.sectionTitle}>цінності</h2>
          <p className={styles.valuesSubtitle}>
            Фенікс - сучасний підрозділ з культурою та динамікою команди
            Формули-1. Ключова цінність - збереження життя наших бійців.
          </p>
        </div>
        {valuesImage && (
          <div className={styles.valuesImage}>
            <Image
              src={valuesImage}
              alt="Values"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
        <div className={styles.valuesGrid}>
          {values.map((value, idx) => (
            <div key={idx} className={value.style}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
