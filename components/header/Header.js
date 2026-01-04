import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";

import SecondaryBtn from "../SecondaryBtn";

const Header = () => {
  const phoenixLogo = "/images/Logo_phoenix_top.svg";

  const navItems = [
    { text: "Про Фенікс", href: process.env.NEXT_PUBLIC_MAIN_URL + "#about" },
    { text: "Вакансії", href: process.env.NEXT_PUBLIC_MAIN_URL + "#jobs" },
    {
      text: "Контракт 18-24",
      href: process.env.NEXT_PUBLIC_MAIN_URL + "#contract",
    },
    { text: "Контакти", href: process.env.NEXT_PUBLIC_MAIN_URL + "#contact" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.frameParent}>
        <div className={styles.layer1Parent}>
          <Link href={process.env.NEXT_PUBLIC_MAIN_URL + "#home"}>
            <Image
              className={styles.layer1Icon}
              src={phoenixLogo}
              width={237}
              height={55}
              sizes="100vw"
              alt="icon"
            />
          </Link>
        </div>
        <div className={styles.navList}>
          {navItems.map((item, idx) => (
            <div key={idx} className={styles.item}>
              <a href={item.href} className={styles.link2}>
                {item.text}
              </a>
            </div>
          ))}
        </div>
        <SecondaryBtn
          text={"приєднатися"}
          size={"m"}
          href={process.env.NEXT_PUBLIC_MAIN_URL + "#jobs"}
        />
      </div>
    </div>
  );
};

export default Header;
