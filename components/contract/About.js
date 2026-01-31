import Image from "next/image";

import styles from "./index.module.css";

const About = () => {
  const aboutImages = [
    "/images/1_carusel.png",
    "/images/2_carusel.png",
    "/images/3_carusel.png",
  ];

  const statItems = [
    { title: "4 місяці", text: "обовʼязкова посилена підготовка" },
    { title: "12 місяців", text: "обовʼязкова участь в бойових діях" },
  ];
  return (
    <>
      <section id="aboutContract" className={styles.sectionMain}>
        <section className={styles.aboutSection}>
          <div className={styles.aboutHeader}>
            <h2 className={`${styles.sectionTitle} font-title-l title-l-m `}>
              умови <br />
              контракту
            </h2>
            <div className={styles.aboutText}>
              <p className={`${styles.aboutDescription} font-text-l-s`}>
                Контракт 18-24: Дрони - це добровільна служба для громадян віком
                з 18 до 24 років, яка дозволяє за 2 роки отримати гідне
                фінансове забезпечення, соціальні гарантії та унікальний досвід,
                який неможливо здобути у цивільному житті.
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

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <div className={styles.statItemTop}>
            <h3 className="font-title-l title-l-s ">2 роки</h3>
            <p className="font-subtitle-l ">термін служби за контрактом</p>
          </div>
          <div className={styles.statsContainer}>
            {statItems.map((item, idx) => (
              <div key={idx} className={styles.statItem}>
                <h3 className="font-title-l title-l-s ">{item.title}</h3>
                <p className="font-subtitle-l ">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
