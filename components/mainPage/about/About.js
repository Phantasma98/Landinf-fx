import Image from "next/image";

import styles from "./index.module.css";

const About = () => {
  const aboutImages = [
    "/images/1_carusel.png",
    "/images/2_carusel.png",
    "/images/3_carusel.png",
  ];

  const statItems = [
    { title: "126500", text: "ВИЛЬОТІВ НА БОЙОВІ ЗАВДАННЯ" },
    { title: "26500", text: "ПОШКОДЖЕНО ТА ЗНИЩЕНО ЦІЛЕЙ" },
    { title: "5130", text: "ЗНИЩЕНО ОСОБОВОГО СКЛАДУ ВОРОГА" },
  ];
  return (
    <>
      <section id="about" className={styles.sectionMain}>
        <section className={styles.aboutSection}>
          <div className={styles.aboutHeader}>
            <h2 className={`${styles.sectionTitle} font-title-l title-l-m `}>
              про нас
            </h2>
            <div className={styles.aboutText}>
              <p className={`${styles.aboutDescription} font-text-l-s`}>
                Фенікс - це найрезультативніший підрозділ ДПСУ. <br />
                Ми створили власну екосистему безпілотних авіаційних систем, що
                забезпечує весь процес: від створення БК до нанесення нищівних
                ударів ворогу.
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
            <h3 className="font-title-l title-l-s ">ТОП-2</h3>
            <p className="font-subtitle-l ">
              В УГРУПОВАННІ СИЛ БЕЗПІЛОТНИХ СИСТЕМ
            </p>
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
