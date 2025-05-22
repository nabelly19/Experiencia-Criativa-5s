import React from 'react';
import styles from "./styles.module.css"

import brainIcon from "../../assets/HeadIcon.svg"
import leftbubble from "../../assets/WhatsappMessage1.svg"
import rightbubble from "../../assets/WhatsappMessage2.svg"
import leftbubble2 from "../../assets/WhatsappMessage3.svg"


export default function ChatCard() {
    return (
      <>
      <div className={styles.chatWrapper}>
        <div className={styles.chatCard}>
              <div className={`${styles.bubble} ${styles.left}`}>
                <img src={leftbubble} className={styles.svg1} alt="Bubble" />
              </div>
  
              <div className={`${styles.bubble} ${styles.right}`}>
                <img src={rightbubble} className={styles.svg} alt="Bubble" />
              </div>
  
              <div className={`${styles.bubble} ${styles.left}`}>
                <img src={leftbubble2} className={styles.svg} alt="Bubble" />
              </div>
  
            </div>
          </div>
      </>
    );
  }