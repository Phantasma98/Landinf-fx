import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";

const ArrowButton = ({ link }) => {
  const arrow = "/images/Arrow45.svg";

  if (link) {
    return (
      <Link href={link} className={styles.arrowButton}>
        <Image
          src={arrow}
          alt="arrow"
          width={54}
          height={54}
          className={styles.arrowImage}
        />
      </Link>
    );
  }

  return (
    <button className={styles.arrowButton}>
      <Image
        src={arrow}
        alt="arrow"
        width={54}
        height={54}
        className={styles.arrowImage}
      />
    </button>
  );
};

export default ArrowButton;
