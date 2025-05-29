import React from "react";
import styles from "./styles.module.css";
import { Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

// export default function CardComponent({ habitId, userId }) {
export default function CardComponent({ habit }) {
  // const [habit, setHabit] = useState(null);
  // const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // useEffect(() => {
  //   async function fetchHabit() {
  //     try {
  //       const res = await fetch(`/api/users/${userId}/habits/${habitId}`);
  //       if (!res.ok) throw new Error('Erro ao buscar hábito');
  //       const data = await res.json();
  //       setHabit(data);
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchHabit();
  // }, [userId, habitId]);

  // if (loading) {
  //   return (
  //     <div className={`${styles.card} d-flex justify-content-center align-items-center`}>
  //       <Spinner animation="border" variant="light" />
  //     </div>
  //   );
  // }
  // if (!habit) return null;

  return (
    // <div className={`${styles.card}`}>
    //   <h5 className={styles.title}>{habit.title}</h5>
    //   <p className={styles.description}>{habit.description}</p>
    //   <Button
    //     className={styles.button}
    //     onClick={() => navigate(`/habits/${habitId}`)}
    //   >
    //     Ver detalhes
    //   </Button>
    // </div>

    <div className={styles.card}>
      <h5 className={styles.title}>{habit.title}</h5>
      <p className={styles.description}>{habit.description}</p>
      <Button
        className={styles.button}
        onClick={() => navigate(`/habits/${habit.id}`)}
      >
        VER DETALHES
      </Button>
    </div>
  );
}