import Image from "next/image";

import styles from "./index.module.css";

const About = () => {
  const aboutImages = [
    "/images/1_carusel.png",
    "/images/2_carusel.png",
    "/images/3_carusel.png",
  ];
  return (
    <>
      <section id="about" className={styles.sectionMain}>
        <section className={styles.aboutSection}>
          <div className={styles.aboutHeader}>
            <h2 className={styles.sectionTitle}>про нас</h2>
            <div className={styles.aboutText}>
              <p className={styles.aboutDescription}>
                Фенікс - це найрезультативніший підрозділ ДПСУ.
              </p>
              <p className={styles.aboutDescription}>
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
            <h3>ТОП-2</h3>
            <p>В УГРУПОВАННІ СИЛ БЕЗПІЛОТНИХ СИСТЕМ</p>
          </div>
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <h3>126500</h3>
              <p>ВИЛЬОТІВ НА БОЙОВІ ЗАВДАННЯ</p>
            </div>
            <div className={styles.statItem}>
              <h3>26500</h3>
              <p>ПОШКОДЖЕНО ТА ЗНИЩЕНО ЦІЛЕЙ</p>
            </div>
            <div className={styles.statItem}>
              <h3>5130</h3>
              <p>ЗНИЩЕНО ОСОБОВОГО СКЛАДУ ВОРОГА</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
