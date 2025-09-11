import styles from "./TopBar.module.css";

const TopBar = ({ name }) => {
  return (
    <header className={styles.playerBar}>
      <div className={styles.parallelLines}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
      </div>
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.parallelLines}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
      </div>
    </header>
  );
};

export default TopBar;
