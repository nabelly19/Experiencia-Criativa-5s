import React, { useState, useEffect } from 'react';
import CardComponent from '../CardComponent';
import styles from './styles.module.css';

export default function DataList({ userId }) {
  const [goals, setGoals] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const resGoals = await fetch(`${process.env.REACT_APP_API_URL}/users/${userId}/goals`);
        if (!resGoals.ok) throw new Error('Erro ao buscar metas');
        const dataGoals = await resGoals.json();
        setGoals(dataGoals);

        const resTasks = await fetch(`${process.env.REACT_APP_API_URL}/users/${userId}/tasks`);
        if (!resTasks.ok) throw new Error('Erro ao buscar tarefas');
        const dataTasks = await resTasks.json();
        setTasks(dataTasks);

        const resReminders = await fetch(`${process.env.REACT_APP_API_URL}/users/${userId}/reminders`);
        if (!resReminders.ok) throw new Error('Erro ao buscar lembretes');
        const dataReminders = await resReminders.json();
        setReminders(dataReminders);
      } catch (err) {
        console.error(err);
        window.alert(err);
      }
    }

    fetchData();
  }, [userId]);

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h2>Metas</h2>
        {goals.map(goal => (
          <CardComponent key={goal.id} data={goal} entity="goals" />
        ))}
      </div>
      <div className={styles.cardContainer}>
        <h2>Tarefas</h2>
        {tasks.map(task => (
          <CardComponent key={task.id} data={task} entity="tasks" />
        ))}
      </div>
      <div className={styles.cardContainer}>
        <h2>Lembretes</h2>
        {reminders.map(reminder => (
          <CardComponent key={reminder.id} data={reminder} entity="reminders" />
        ))}
      </div>
    </div>

    // <div className={styles.grid}>
    //   {MockHabits.map(habit => (
    //     <CardComponent key={habit.id} habit={habit} />
    //   ))}
    // </div>
  );
}
