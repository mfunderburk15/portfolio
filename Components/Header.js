import styles from "../styles/Home.module.css";
export default function Header() {
  return (
    <div className={styles.nav}>
      <div></div>
      <div className={styles.navLinks}>
        <a href="#aboutMe">About Me</a>
        <a href="#skills">Skills</a>
        <a>Projects</a>
        <a>Contact Me</a>
      </div>
    </div>
  );
}
