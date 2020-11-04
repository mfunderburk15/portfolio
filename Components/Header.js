import styles from "../styles/Home.module.css";
export default function Header() {
  return (
    <div className={styles.nav}>
      <div></div>
      <div className={styles.navLinks}>
        <a>About Me</a>
        <a>Skills</a>
        <a>Projects</a>
        <a>Contact Me</a>
      </div>
    </div>
  );
}