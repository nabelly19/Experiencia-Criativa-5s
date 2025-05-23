// src/components/WaveBackground/index.jsx
import React from 'react';
import styles from './styles.module.css';

export default function WaveBackground() {
  return (
    <div className={styles.waveContainer}>
      <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className={styles.parallax}>
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(137, 192, 240, 0.6)" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(89, 175, 249, 0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(137, 192, 240, 0.3)" />
        </g>
      </svg>
    </div>
  );
}
