import Image from "next/image";

import styles from "./index.module.css";

import PrimaryBtn from "@/components/elements/PrimaryBtn";
import SecondaryBtn from "@/components/elements/SecondaryBtn";

const Arsenal = () => {
  const arsenalImage = "/images/Arsenal_image.png";

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
  ];

  return (
    <section className={styles.arsenalMain}>
      <div className={styles.arsenalSection}>
        <div className={styles.arsenalHeader}>
          <h2 className={`${styles.arsenalTitle} font-title-l title-l-m `}>
            озброєння
          </h2>
          <p className={`${styles.arsenalSubtitle} font-text-l-s `}>
            Полк Фенікс має найефективніші засоби для ураження ворогу, розвідки
            та логістики: від FVP до БПЛА літакового типу та НРК.
          </p>
        </div>
        {arsenalImage && (
          <div className={styles.arsenalImage}>
            <Image
              src={arsenalImage}
              alt="Arsenal"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
        <div className={styles.arsenalGrid}>
          {values.map((value, idx) => (
            <div key={idx} className={value.style}>
              <h3 className="font-headline-l headline-l-m">{value.title}</h3>
              <p className="font-text-l-s">{value.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.arsenalButtons}>
          <PrimaryBtn text={"долучитись до команди"} href={"#jobs"} />
          <SecondaryBtn text={"переглянути вакансії"} href={"#jobs"} />
        </div>
      </div>
    </section>
  );
};

export default Arsenal;
