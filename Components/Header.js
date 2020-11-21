import styles from "../styles/Home.module.css";
export default function Header() {
  return (
    <div className={styles.nav}>
      <div></div>
      <div className={styles.navLinks}>
        <a href="#aboutMe">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#Projects">Projects</a>
        <a href="#ContactMe">Contact Me</a>
      </div>
    </div>
  );
}
