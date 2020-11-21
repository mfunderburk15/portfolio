import styles from "../styles/Home.module.css";
export default function GetAway() {
  return (
    <a href="https://getaway.dev">
      <div className={styles.des}>
        <img src="/GetAway.png" className={styles.desImg} />
        <div className={styles.desCon}>
          <p className={styles.desTitle}>Want to Get Away?</p>
          <p className={styles.desPro}>Group Project</p>
        </div>
      </div>
    </a>
  );
}
