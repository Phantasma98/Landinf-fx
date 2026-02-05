import Image from "next/image";

import styles from "./index.module.css";

import PrimaryBtn from "@/components/elements/PrimaryBtn";

const Hero = () => {
  const heroImage = "/images/About_hero_image.png";

  const socialArray = [
    { icon: "/images/InstaIcon.svg" },
    { icon: "/images/TelegramIcon.svg" },
    { icon: "/images/FacebookIcon.svg" },
    { icon: "/images/YoutubeIcon.svg" },
    { icon: "/images/TiktokIcon.svg" },
    { icon: "/images/ExIcon.svg" },
    ,
  ];
  const screenSize = "l";
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBackground}>
        <Image
          src={heroImage}
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.heroContent}>
          <p className={`${styles.heroMeta} font-subtitle-l `}>помилка 404</p>
          <h1
            className={`${styles.heroTitle} font-title-${screenSize} title-${screenSize}-l`}
          >
            сторінку не <br />
            знайдено
          </h1>
          <div className={styles.heroActions}>
            <PrimaryBtn text={"перейти на головну сторінку"} href={"/#main"} />
          </div>
        </div>
        <div className={styles.containerSocials}>
          {socialArray.map((soc, idx) => (
            <div key={idx} className={styles.component}>
              <Image
                src={soc.icon}
                width={26.7}
                height={26.5}
                sizes="100vw"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
