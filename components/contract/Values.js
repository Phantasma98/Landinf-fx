import Image from "next/image";

import styles from "./index.module.css";

const Values = () => {
  const valuesImage = "/images/Values.png";

  const values = [
    {
      style: styles.valueItem1,
      title: "контракт на 1 000 000 грн",
      description:
        "200 000 грн одразу при підписанні контракту, та 800 000 грн виплат двома частинами на час дії контракту",
    },
    {
      style: styles.valueItem,
      title: "грошове забезпечення",
      description:
        "Зарплата + доплати за бойові завдання - до 120 000 грн на місяць",
    },
    {
      style: styles.valueItem2,
      title: "Медичне забезпечення",
      description:
        "Медичні послуги в тому числі стоматологія та зубопротезування",
    },
    {
      style: styles.valueItem1,
      title: "безкоштовна освіта",
      description:
        "Навчання у закладах освіти у межах квот за кошти держави, після закінчення контракту",
    },
    {
      style: styles.valueItem,
      title: "Компенсація житла",
      description: "Компенсація витрат на оренду житла протягом служби",
    },
    {
      style: styles.valueItem2,
      title: "Право на відстрочку",
      description:
        "Право на відстрочку від призову на 1 рік після виконання умов контракту",
    },
    {
      style: styles.valueItem1,
      title: "іпотека під 0%",
      description:
        "Можливість залучення іпотеки 0.0% річних після закінчення контракту («єОселя»)",
    },
    {
      style: styles.valueItem,
      title: "соціальний пакет",
      description:
        "Безкоштовний проїзд в громадському транспорті та пільги на комунальні послуги",
    },
    {
      style: styles.valueItem2,
      title: "Виїзд за кордон",
      description:
        "Право вільного виїзду за кордон після виконання умов контракту",
    },
  ];

  return (
    <section className={styles.valuesMain}>
      <div className={styles.valuesSection}>
        <div className={styles.valuesHeader}>
          <h2 className={`${styles.sectionTitle} font-title-l title-l-m `}>
            що ти отримаєш?
          </h2>
          <p className={`${styles.valuesSubtitle} font-text-l-s `}></p>
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
              <h3 className="font-headline-l headline-l-m">{value.title}</h3>
              <p className="font-text-l-s">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
