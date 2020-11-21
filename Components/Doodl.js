import styles from "../styles/Home.module.css";
export default function Doodl() {
  return (
    <a href="http://doodlit.me">
      <div className={styles.des}>
        <img src="/doodl.png" className={styles.desImg} />
        <div className={styles.desCon}>
          <p className={styles.desTitle}>Fun Drawing Game</p>
          <p className={styles.desPro}>Personal Project</p>
        </div>
      </div>
    </a>
  );
}
