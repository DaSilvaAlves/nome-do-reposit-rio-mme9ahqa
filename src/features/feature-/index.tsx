import React, { useState from 'react';
import { Task } from '../types/index';
import { Button } from '../../components/ui/Button';

const Feature1: React.FC = () => {
  const [title, setTitle] = useState('');
  const [, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  const = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const task: Task = {
      id: Date.now(),
      title,
      description,
      priority,
      completed: false,
    };
    // Create task logic here
    console.log(task);
    setTitle('');
    setDescription('');
    setPriority('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Título:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle.target.value)}
         -label="Título da tarefa"
        />
      </label>
      <label>
        Descrição:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          aria-label="Descrição da tarefa"
        />
      </label>
      <label>
        Prioridade:
        <
          value={}
          onChange={(e) => setPriority(e.target.value)}
          aria-label="Prioridade da tarefa"
                 <option valueSelecione umaidade</option>
          <option value="alta">Alta</>
          <option value="média">Média</option>
          <option value="baixa">Baixa</option>
        </select>
      </label>
      <Button label="Criar tarefa" onClick={handleSubmit} />
    </form>
  );
};

export default Feature1;