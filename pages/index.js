import styles from "../styles/Home.module.css";
import Intro from "../Components/intro.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Intro />
    </div>
  );
}
