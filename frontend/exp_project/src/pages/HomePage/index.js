import React from 'react';
import styles from "./styles.module.css"

// components
import WaveBackground from '../../components/WaveComponent';
import IntroCard from '../../components/IntroCardComponent';
import Footer from '../../components/FooterComponent';

export default function HomePage() {
    return (
        <>
            <main>
                <section className={styles.section1}>
                    <div className={styles.cardContainer}>
                        <IntroCard />
                    </div>
                    <div className={styles.waveContainer}>
                        <WaveBackground />
                    </div>
                </section>

                <section className={styles.section2}>
                    {/* Conteúdo aqui */}
                </section>
            </main>

            <WaveBackground />
            <Footer />

        </>
    );
}