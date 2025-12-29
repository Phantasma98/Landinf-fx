import styles from "./secondaryBtn.module.css";

const SecondaryBtn = (props) => {
  const { text, size } = props;
  return (
    <div className={size === "m" ? styles.component2m : styles.component2l}>
      <div className={styles.container2}>
        <b className={styles.text}>{text}</b>
      </div>
    </div>
  );
};

export default SecondaryBtn;
