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
      className={size === "m" ? styles.componentM : styles.componentL}
      onClick={handleClick}
    >
      <div className={styles.container}>
        <b className={`${styles.text} font-button-l `}>{text}</b>
      </div>
    </button>
  );
};

export default SecondaryBtn;
