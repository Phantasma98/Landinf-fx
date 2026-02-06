"use client";
import Image from "next/image";
import { useState } from "react";

import styles from "./index.module.css";

const Dropdown = () => {
  const arrowDown = "/images/LangArrowDown.svg";
  const arrowUp = "/images/LangArrowUp.svg";

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleMenu} className={`${styles.dropdownButton}  `}>
        <div className={` font-text-l-s `}>UA</div>
        <div>
          {isOpen ? (
            <Image
              className={styles.arrowImage}
              src={arrowUp}
              width={12}
              height={10}
              sizes="100vw"
              alt="arrow"
            />
          ) : (
            <Image
              className={styles.arrowImage}
              src={arrowDown}
              width={12}
              height={10}
              sizes="100vw"
              alt="arrow"
            />
          )}
        </div>
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {/* <a href="/account-settings" className={styles.dropdownItem}>
            UA
          </a>
          <div className={styles.divider}></div> */}
          <a href="/en/" className={`${styles.dropdownItem} font-text-l-s `}>
            EN
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
