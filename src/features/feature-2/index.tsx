 React, { useState from 'react';
import { Task } from '../types/index';
import { Button } from '../../components/ui/Button';

const Feature2: React.FC () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task null>(null);

  const handleEdit = (task: Task) => {
    setEditingTask(task);
  };

  const handleSave = (task: Task) => {
    const updatedTasks = tasks.map((t) => (t.id === task.id ? task : t));
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          {editingTask && editingTask.id === task.id ? (
            <form>
              <label>
                Título:
               input
                  type="text"
                  value={editingTask.title}
 onChange={(e)                    setEditingTask({
                      ...editingTask,
                      title: e.target.value,
                    })
                  }
                  aria-label="Título da t"
                />
              </label>
              <label>
                Descrição:
                <textarea
                  value={editingTask.description}
                  onChange={(e) =>
                    setEditingTask({
                      ...editingTask,
                     : e.target.value,
                    })
                  }
                  aria-label="Descrição da tarefa"
                />
              </label>
              <Button label="Salvar" onClick={() => handleSave(editingTask)} />
            </form>
          ) : (
            <div>
              <h2>{task.title}</h2              <p>{task.description}</p>
              <Button label="Editar" onClick={() => handleEdit(task)} />
            </div>
                 </div>
      ))}
    </div>
  );
};

export default Feature2;