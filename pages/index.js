import styles from "../styles/Home.module.css";
import Intro from "../Components/intro.js";
import Header from "../Components/Header.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Intro />
    </div>
  );
}
