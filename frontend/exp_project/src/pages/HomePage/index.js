import React from "react";
import styles from "./styles.module.css";

// components
import WaveBackground from "../../components/WaveComponent";
import IntroCard from "../../components/IntroCardComponent";
import Footer from "../../components/FooterComponent";
import ChatCard from "../../components/ChatCardComponent";
import ButtonWppComponent from "../../components/ButtonWppComponent";

// assets
import brainIcon from "../../assets/HeadIcon.svg";

export default function HomePage() {
  return (
    <>
      <main>
        <section className={styles.section1}>
          <div className={styles.cardContainer}>
            <IntroCard />
          </div>
        </section>

        <section className={styles.section2}>
          <div className={styles.chatCardWithIcon}>
            <div className={styles.HeadIconContainer}>
              <img
                src={brainIcon}
                alt="Brain Icon"
                className={styles.chatIcon}
              />
            </div>
            <ChatCard style={{ flex: "1" }} />
          </div>
        </section>

        {/* <div className={styles.waveContainer}>
          <WaveBackground />
        </div> */}
      </main>
      <div className={styles.secondArea}>
        <WaveBackground/>
        <div className={styles.buttonContainer}>
          <h3 className={styles.pageTitle}>Seu novo assistente pessoal de IA</h3>
          <ButtonWppComponent/>
        </div>
      </div>
      <Footer />
    </>
  );
}
