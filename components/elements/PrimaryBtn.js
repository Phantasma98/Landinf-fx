import { useRouter } from "next/navigation";
import styles from "./primaryBtn.module.css";

const PrimaryBtn = (props) => {
  const { text, href } = props;
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };
  return (
    <button
      className={styles.component}
      onClick={handleClick}
      type={props.type}
    >
      <div className={styles.container}>
        <b className={`${styles.text} font-button-l `}>{text}</b>
      </div>
    </button>
  );
};

export default PrimaryBtn;
