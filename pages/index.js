import styles from "../styles/Home.module.css";
import Intro from "../Components/intro.js";
import Header from "../Components/Header.js";
import AboutMe from "../Components/AboutMe.js";
import Skills from "../Components/Skills.js";
import Projects from "../Components/Projects.js";
import ContactMe from "../Components/ContactMe.js";
export default function Home() {
  return (
    <div>
      <head>
        <link rel="icon" href="/icon.png" />
        <title>Masen's Portfolio</title>
      </head>
      <div className={styles.container}>
        <Header />
        <Intro />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
}
