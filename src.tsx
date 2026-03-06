import React, { useState, } from 'react';
import { TaskContext } from './types/index';
import Feature1 from './features/feature-1/index';
import Feature2 from './features/feature-2/index';
import Feature3 from './features/feature-3/index';

const App: React.FC = () => {
  const [tasks, setTasks] =<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://example.com/tasks');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, []);

  const createTask = (task: Task) => {
    setTasks((prevTasks) =>prevTasks, task]);
  };

  const editTask = (id: number, task: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === id ? task : t))
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== id));
  };

  const toggleCompleted = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === id ? { ...t,: !t.completed } : t
         );
  };

  if (loading) {
    return <div className="loading-state">Carregando...</div>;
  }

  if (error) {
    return <div className="error-state">Erro: {error.message}</div>;
  }

  return (
    <Task.Provider
      value={{
        tasks,
        createTask,
        editTask,
        deleteTask,
        toggleCompleted,
      }}
    >
      <Feature1 />
      <Feature2 />
      <Feature3 />
    </TaskContext.Provider>
  );
};

export default App;