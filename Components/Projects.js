import styles from "../styles/Home.module.css";
import Doodl from "./Doodl.js";
import GetAway from "./GetAway.js";
export default function Projects() {
  return (
    <div className={styles.projects} id="Projects">
      <h2 className={styles.projectsTitle}>Projects:</h2>
      <div className={styles.projectsContainer}>
        <Doodl />
        <GetAway />
      </div>
    </div>
  );
}
