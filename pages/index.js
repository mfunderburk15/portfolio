import styles from "../styles/Home.module.css";
import Intro from "../Components/intro.js";
import Header from "../Components/Header.js";
import AboutMe from "../Components/AboutMe.js";
import Skills from "../Components/Skills.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Intro />
      <AboutMe />
      <Skills />
    </div>
  );
}
