import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.intro}>
          <h1 className={styles.introName}>Masen Funderburk</h1>
          <p className={styles.introTitle}>Full Stack Web Developer</p>
        </div>
        <img src="/Masen.png" />
      </div>
    </div>
  );
}
