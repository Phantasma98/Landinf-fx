import Image from "next/image";

import styles from "./index.module.css";

import PrimaryBtn from "@/components/elements/PrimaryBtn";
import SecondaryBtn from "@/components/elements/SecondaryBtn";

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

  const content = {
    heroMeta: "про фенікс",
    heroTitle1: "крила, що",
    heroTitle2: "спепеляють",
    PrimaryBtn: "Приєднатися",
    SecondaryBtn: "Підтримати",
  };
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
          <p className={`${styles.heroMeta} font-subtitle-l `}>
            {content.heroMeta}
          </p>
          <h1
            className={`${styles.heroTitle} font-title-${screenSize} title-${screenSize}-l`}
          >
            {content.heroTitle1}
            <br />
            {content.heroTitle2}
          </h1>
          <div className={styles.heroActions}>
            <PrimaryBtn text={content.PrimaryBtn} href={"/vacancies"} />
            <SecondaryBtn text={content.SecondaryBtn} href={"/#support"} />
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
