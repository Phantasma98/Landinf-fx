import styles from "./teamBtn.module.css";

const TeamBtn = (props) => {
  const { text } = props;
  return (
    <div className={styles.container}>
      <div className={styles.component2}>
        <div className={styles.container2}>
          <b className={styles.text}>{text}</b>
        </div>
      </div>
    </div>
  );
};

export default TeamBtn;
