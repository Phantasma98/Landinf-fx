import styles from "./primaryBtn.module.css";

const PrimaryBtn = (props) => {
  const { text } = props;
  return (
    <div className={styles.component2}>
      <div className={styles.container2}>
        <b className={styles.text}>{text}</b>
      </div>
    </div>
  );
};

export default PrimaryBtn;
