import Image from "next/image";

import styles from "./index.module.css";

import PrimaryBtn from "@/components/elements/PrimaryBtn";
import SecondaryBtn from "@/components/elements/SecondaryBtn";
import ArrowLeftButton from "../elements/ArrowLeftButton";
import ArrowRightButton from "../elements/ArrowRightButton";

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

  const content = {
    arsenalHeader: "озброєння",
    arsenalSubtitle:
      "Полк Фенікс має найефективніші засоби для ураження ворогу, розвідки та логістики: від FVP до БПЛА літакового типу та НРК.",
    textCarouselTitle: "FPV ДРОНИ",
    textCarouselItem:
      "FPV дрон - БПЛА, керування яким здійснюється від першої особи. Відеосигнал з дрону може передаватись через радіохвилі або через оптоволоконний кабель. FPV використовуються у ролі камікадзе з різними бойовими частинами або для скиду боєприпасів на противника.",
    PrimaryBtn: "долучитись до команди",
    SecondaryBtn: "переглянути вакансії",
  };

  return (
    <section className={styles.arsenalMain}>
      <div className={styles.arsenalSection}>
        <div className={styles.arsenalHeader}>
          <h2 className={`${styles.arsenalTitle} font-title-l title-l-m `}>
            {content.arsenalHeader}
          </h2>
          <p className={`${styles.arsenalSubtitle} font-text-l-s `}>
            {content.arsenalSubtitle}
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
        {/* Text Carousel Section */}
        <section className={styles.textCarouselSection}>
          <div className={styles.textCarouselItem}>
            <div className={styles.textCarouselTitle}>
              <h3 className="font-title-l title-l-s ">
                {content.textCarouselTitle}
              </h3>
              <div className={styles.textCarouselTitleButtonBlock}>
                <ArrowLeftButton />

                <ArrowRightButton />
              </div>
            </div>
            <p className={`${styles.sectionTitleText} font-text-l-s `}>
              {content.textCarouselItem}
            </p>
          </div>
        </section>
        <div className={styles.arsenalButtons}>
          <PrimaryBtn text={content.PrimaryBtn} href={"#jobs"} />
          <SecondaryBtn text={content.SecondaryBtn} href={"#jobs"} />
        </div>
      </div>
    </section>
  );
};

export default Arsenal;
