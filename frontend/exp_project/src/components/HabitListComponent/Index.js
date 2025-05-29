// src/components/HabitList.jsx
import React, { useState, useEffect } from 'react';
import CardComponent from '../CardComponent';
import styles from './HabitList.module.css';

export default function HabitList({ userId }) {
  const [habitIds, setHabitIds] = useState([]);

  useEffect(() => {
    async function fetchHabits() {
      try {
        const res = await fetch(`/api/users/${userId}/habits`);
        const data = await res.json(); 
        setHabitIds(data.map(h => h.id));
      } catch (err) {
        console.error(err);
      }
    }
    fetchHabits();
  }, [userId]);

  return (
    <div className={styles.grid}>
      {habitIds.map(id => (
        <CardComponent key={id} habitId={id} userId={userId} />
      ))}
    </div>
  );
}
