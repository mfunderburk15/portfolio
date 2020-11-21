import styles from "../styles/Home.module.css";
export default function ContactMe() {
  return (
    <div id="ContactMe" className={styles.contactMe}>
      <h2 className={styles.contactTitle}>Contact Me:</h2>
      <div className={styles.contactContainer}>
        <p>
          Email:
          <a href="mailto:masen.funderburk@gmail.com">
            <span> masen.funderburk@gmail.com</span>
          </a>
        </p>
        <div className={styles.contactIconContainer}>
          <a href="https://github.com/mfunderburk15">
            <img className={styles.contactIcon} src="/github-original.svg" />
          </a>
          <a href="https://www.linkedin.com/in/masen-funderburk-909aba1ab/">
            <img className={styles.contactIcon} src="/linkedin-plain.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}
