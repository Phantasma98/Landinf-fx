import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";

const ArrowButton = (props) => {
  const arrow = "/images/Arrow45.svg";

  if (props.link) {
    return (
      <Link
        href={props.link}
        className={
          props.buttonWhite ? styles.arrowButtonWhite : styles.arrowButton
        }
      >
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
    <button
      className={props.button ? styles.arrowButtonWhite : styles.arrowButton}
    >
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
