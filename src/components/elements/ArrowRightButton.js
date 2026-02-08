import { Link } from "react-router-dom";

import styles from "./index.module.css";

const ArrowRightButton = ({ link }) => {
  const arrow = "/images/Arrow_right.svg";

  if (link) {
    return (
      <Link to={link} className={styles.arrowButton}>
        <img
          src={arrow}
          alt="arrow"
          width={19.42}
          height={19.42}
          className={styles.arrowImage}
        />
      </Link>
    );
  }

  return (
    <button className={styles.arrowButton}>
      <img
        src={arrow}
        alt="arrow"
        width={19.42}
        height={19.42}
        className={styles.arrowImage}
      />
    </button>
  );
};

export default ArrowRightButton;
