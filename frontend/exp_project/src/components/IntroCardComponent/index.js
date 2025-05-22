import React from 'react';
import styles from './styles.module.css';
import logo from '../../assets/logo_SOPRO.svg'

export default function IntroCard() {
  return (
    <div className={styles.card}>
      <div className={styles.titleContainer}>
      <span><img src={logo} className={styles.logo} /></span> 
      <h1 className={styles.title}>
          <span className={styles.subtitle}>- Um novo ar para a sua rotina</span>
      </h1>
      </div>
      <p className={styles.text}>
        Sua nova rotina começa aqui. Defina metas, crie hábitos saudáveis e acompanhe sua evolução. <br/>
          <br/>
        Aproveite todas as ferramentas que deste Sistema de Organização e Planejamento para Redesenhar Objetivos. <br/>
      </p>
    </div>
  );
}