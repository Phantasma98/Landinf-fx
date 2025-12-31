import { useRouter } from "next/navigation";
import styles from "./secondaryBtn.module.css";

const SecondaryBtn = (props) => {
  const { text, size, href } = props;
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <button
      className={size === "m" ? styles.component2m : styles.component2l}
      onClick={handleClick}
    >
      <div className={styles.container2}>
        <b className={styles.text}>{text}</b>
      </div>
    </button>
  );
};

export default SecondaryBtn;
