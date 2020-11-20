import styles from "../styles/Home.module.css";
export default function Intro() {
  return (
    <div className={styles.skills} id="skills">
      <h2 className={styles.skillTitle}>Skills:</h2>
      <div className={styles.skillContainer}>
        <img className={styles.skill} src="/html5-original-wordmark.svg" />
        <img className={styles.skill} src="/css3-original-wordmark.svg" />
        <img className={styles.skill} src="/javascript-original.svg" />
        <img className={styles.skill} src="/react-original-wordmark.svg" />
        <img className={styles.skill} src="nodejs-plain-wordmark.svg" />
        <img className={styles.skill} src="/postgresql-plain-wordmark.svg" />
        <img
          className={styles.skill}
          src="amazonwebservices-plain-wordmark.svg"
        />
        <img className={styles.skill} src="heroku-plain-wordmark.svg" />
      </div>
    </div>
  );
}
