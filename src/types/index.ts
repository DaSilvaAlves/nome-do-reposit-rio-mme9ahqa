interface Task {
  id: number;
  title: string;
  description: string;
  priority: string;
  completed: boolean;
}

interface TaskContext {
  tasks: Task[];
  createTask: (task: Task) => void;
  editTask: (id: number, task: Task) => void;
  deleteTask: (id: number) => void;
 Completed: (id: number) => void;
}

interface ButtonProps {
  label: string;
  onClick: () void;
}