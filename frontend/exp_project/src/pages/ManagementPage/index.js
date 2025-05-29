import styles from "./styles.module.css";
import React from "react";

// components
import HabitList from "../../components/HabitListComponent/Index";
import WaveBackground from "../../components/WaveComponent/index";
import Footer from "../../components/FooterComponent";

export default function ManagementPage() {
  const userId = "123";

  return (
    <>
      <div className={styles.managementContainer}>
        <h2 className={styles.pageTitle}>Meus Hábitos</h2>
        {/* Aqui chamamos o HabitList, passando o userId */}
        <HabitList userId={userId} />
      </div>

      <div className={styles.waveContainer}>
        <WaveBackground />
      </div>

      <Footer/>
    </>
  );
}
