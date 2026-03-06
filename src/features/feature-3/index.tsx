import React, { useState } from 'react';
import { Task } from '../types/index';
import { Button } from '../../components/ui/Button';

const Feature3: React.FC = () => {
  const [, setTasks] = useState<Task[]>([]);
 const [completedTask, setCompletedTask] = useState<Task | null>(null);

  const handleToggleCompleted = (: Task) => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? {t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <ptask.description}</p>
          <Button
            label={task.completed ? 'Desmarcar como concluída' : 'Marcar como concluída'}
            onClick={() => handleToggleCompleted(task)}
          />
        </div>
      ))}
    </div>
  );
};

export default Feature3;