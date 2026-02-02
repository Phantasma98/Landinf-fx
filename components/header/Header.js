import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";

import SecondaryBtn from "../elements/SecondaryBtn";

const Header = () => {
  const phoenixLogo = "/images/Logo_phoenix_top.svg";

  const navItems = [
    { text: "Про Фенікс", href: "/about" },
    { text: "Вакансії", href: "/vacancies" },
    {
      text: "Контракт 18-24",
      href: "/contract",
    },
    { text: "Контакти", href: "/contacts" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.frameParent}>
        <div className={styles.layer1Parent}>
          <Link href={"/#main"}>
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
        <SecondaryBtn text={"приєднатися"} size={"m"} href={"/#jobs"} />
      </div>
    </div>
  );
};

export default Header;
