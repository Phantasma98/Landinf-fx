import { Link } from "react-router-dom";
import styles from "./ArrowButton.module.css";

export default function ArrowButton({ link }) {
  return (
    <Link to={link || "#"} className={styles.arrow}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-1.88032e-05 12.8724L10.448 2.42432L0.836684 2.42431L0.858132 2.125e-05L14.5886 5.54868e-06L14.5886 13.7305L12.1643 13.752L12.1644 4.14063L1.71629 14.5887L-1.88032e-05 12.8724Z"
          fill="currentColor"
        />
      </svg>
    </Link>
  );
}
