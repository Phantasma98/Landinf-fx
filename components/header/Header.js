import Image from "next/image";

import styles from "./index.module.css";

import SecondaryBtn from "../SecondaryBtn";

const Header = () => {
  const phoenixLogo = "/images/Logo_phoenix.svg";
  return (
    <div className={styles.container}>
      <div className={styles.frameParent}>
        <div className={styles.layer1Parent}>
          <Image
            className={styles.layer1Icon}
            src={phoenixLogo}
            width={40}
            height={55}
            sizes="100vw"
            alt="icon"
          />
          <div className={styles.link}>
            <div className={styles.div}>фенікс</div>
          </div>
        </div>
        <div className={styles.navList}>
          <div className={styles.item}>
            <a href="#about" className={styles.link2}>
              Про Фенікс
            </a>
          </div>
          <div className={styles.item}>
            <a href="#jobs" className={styles.link2}>
              Вакансії
            </a>
          </div>
          <div className={styles.item3}>
            <a href="#contract" className={styles.link2}>
              Контракт 18-24
            </a>
          </div>
          <div className={styles.item3}>
            <a href="#contact" className={styles.link2}>
              Контакти
            </a>
          </div>
        </div>
        <SecondaryBtn text={"приєднатися"} size={"m"} href={"#jobs"} />
      </div>
    </div>
  );
};

export default Header;
