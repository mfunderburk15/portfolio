import styles from "../styles/Home.module.css";
export default function AboutMe() {
  return (
    <div className={styles.aboutMe}>
      <h2 className={styles.aboutTitle}>About Me:</h2>
      <div className={styles.aboutInfo}>
        <img className={styles.aboutImg} src="/portfolio.jpg" />
        <p className={styles.aboutDes}>
          Lorem ipsum dolor sit amizzle, shizzle my nizzle crocodizzle
          adipiscing elit. Nullam sapizzle velizzle, tellivizzle volutpizzle,
          suscipizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle,
          gravida bow wow wow, hizzle. Pellentesque izzle tortor. Sizzle eros.
          Doggy izzle dolizzle dapibus turpis sure own yo'. Maurizzle doggy
          black the bizzle turpis. Pimpin' izzle gangster. Pellentesque eleifend
          rhoncizzle shut the shizzle up. Check out this bow wow wow ass platea
          dictumst. Doggy fizzle. Fizzle tellus that's the shizzle, pretizzle
          eu, mattizzle izzle, eleifend vitae, nunc. You son of a bizzle
          tellivizzle. Integizzle crackalackin shiznit sizzle shizzle my nizzle
          crocodizzle.
        </p>
      </div>
    </div>
  );
}
