import React from "react";
import styles from "./styles.module.css";

// components
import WaveBackground from "../../components/WaveComponent";
import IntroCard from "../../components/IntroCardComponent";
import Footer from "../../components/FooterComponent";
import ChatCard from "../../components/ChatCardComponent";

export default function HomePage() {
  return (
    <>
      <main className={styles.mainWrapper}>

        <section className={styles.section1}>
          <div className={styles.cardContainer}>
            <IntroCard />
          </div>
        </section>

        <section className={styles.section2}>
          <ChatCard className={styles.chatCardContainer}/>
        </section>

        {/* <div className={styles.waveContainer}>
          <WaveBackground />
        </div> */}
      </main>
      <div className={styles.secondArea}>
        <WaveBackground />
      </div>
      <Footer />
    </>
  );
}
