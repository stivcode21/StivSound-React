import styles from "./TopBar.module.css";

const TopBar = ({ name }) => {
  return (
    <div className={styles.playerBar}>
      <div className={styles.parallelLines}>
        <div></div>
        <div></div>
      </div>
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.parallelLines}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default TopBar;
