import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";

import SecondaryBtn from "@/components/elements/SecondaryBtn";
import Dropdown from "../elements/dropdown/Dropdown";

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
  const content = { SecondaryBtn: "приєднатися" };

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
              alt="logo"
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
        <div className={styles.langButtonContainer}>
          <div className={styles.langContainer}>
            <Dropdown />
          </div>
          <SecondaryBtn
            text={content.SecondaryBtn}
            size={"m"}
            href={"/vacancies"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
