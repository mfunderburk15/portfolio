import styles from "../styles/Home.module.css";
export default function AboutMe() {
  return (
    <div className={styles.aboutMe} id="aboutMe">
      <h2 className={styles.aboutTitle}>About Me:</h2>
      <div className={styles.aboutInfo}>
        <img className={styles.aboutImg} src="/portfolio.jpg" />
        <div className={styles.aboutCon}>
          <p className={styles.aboutDes}>
            Hello, I'm Masen Funderburk, a Dallas based full-stack web
            developer.
          </p>
          <p className={styles.aboutBod}>
            I recently graduated from DevMountain's program and am looking
            forward to continue my growth toward learning new technologies, and
            working in a high matrixed development environment. I currently have
            a diverse skill range from web development, to using various AWS
            cloud technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
