import Image from "next/image";

import styles from "./index.module.css";
import ArrowLeftButton from "@/components/elements/ArrowLeftButton";
import ArrowRightButton from "../elements/ArrowRightButton";

const About = () => {
  const arrowLeft = "/images/Arrow_left.svg";
  const arrowRight = "/images/Arrow_right.svg";

  const aboutImages = [
    "/images/1_carusel.png",
    "/images/2_carusel.png",
    "/images/3_carusel.png",
  ];

  const statItems = [
    {
      title: " 2022: ПЕРШИЙ РІК ПОВНОМАСШТАБНОЇ ВІЙНИ",
      text: "обовʼязкова посилена підготовка",
    },
    { title: "12 місяців", text: "обовʼязкова участь в бойових діях" },
  ];

  const content = {
    aboutTitle: "історія",
    aboutDescription:
      "Бойовий шлях трансформації від піхотного відділу прикордонної служби до одного з ключових елементів системи безпілотних сил України.",
    aboutText1:
      "Підрозділ «Фенікс» виріс з піхотного відділу прикордонної служби (спеціального типу) другої прикордонної комендатури швидкого реагування 3-го Луганського прикордонного загону.",
    aboutText2:
      "24 лютого 2022-го повномасштабне вторгнення підрозділ зустрів на крайніх позиціях сходу України - там, де кордон перетинали першими. Перший рік пройшов через низку оборонних боїв: Кремінна, Рубіжне, Попасна, Лиман, Святогірськ. Кожне місто додавало досвіду, кожен бій - нових уроків.",
    aboutText3:
      "У грудні 2022-го підрозділ зайшов на оборону Бахмута, який на той час був одним з найгарячіших районів фронту. Під час Бахмутської кампанії знищили сотні вагнерівців. Побратим «Гудзон» з ПТРК «Stinger» збив два ворожі Су-25 - рідкісний успіх для піхотного підрозділу.",
    aboutText4:
      "Але головне, що дав Бахмут - це народження нового напрямку - саме там було сформовано перші екіпажі БПЛА мультироторного типу для скидів по ворожій піхоті. Тоді ще ніхто не міг передбачити, що це стане основою майбутньої трансформації підрозділу.",
  };

  return (
    <>
      <section id="aboutAbout" className={styles.sectionMain}>
        <section className={styles.aboutSection}>
          <div className={styles.aboutHeader}>
            <h2 className={`${styles.sectionTitle} font-title-l title-l-m `}>
              {content.aboutTitle}
            </h2>
            <div className={styles.aboutText}>
              <p className={`${styles.aboutDescription} font-text-l-s`}>
                {content.aboutDescription}
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.carousel}>
            {aboutImages.map((img, idx) => (
              <div key={idx} className={styles.carouselItem}>
                <Image
                  src={img}
                  alt={`About ${idx + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Text Carousel Section */}
        <section className={styles.textCarouselSection}>
          <div className={styles.textCarouselItem}>
            <div className={styles.textCarouselTitle}>
              <h3 className="font-headline-l headline-l-m ">
                {statItems[0].title}
              </h3>
              <div className={styles.textCarouselTitleButtonBlock}>
                <ArrowLeftButton />

                <ArrowRightButton />
              </div>
            </div>
            <p className={`${styles.sectionTitleText} font-text-l-s `}>
              {content.aboutText1}
              <br /> <br />
              {content.aboutText2} <br /> <br />
              {content.aboutText3} <br /> <br />
              {content.aboutText4}
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
