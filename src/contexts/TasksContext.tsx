import React, {
  createContext,
  useMemo,
  useState,
  type ReactNode,
  useContext,
  useEffect,
} from 'react';

export interface Task {
  id: string;
  title: string;
  done: boolean;
}

interface TaskContextType {
  tasks: Task[];
  addTasks: (title: string) => void;
  toggleTask: (id: string) => void;
  clearDone: () => void;
}

export const TaskContext = createContext<TaskContextType | null>(null);

export const useTasks = () => useContext(TaskContext)!;

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTasks = (title: string) => {
    const newTask: Task = {
      title,
      id: crypto.randomUUID(),
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const clearDone = () => {
    setTasks((prev) => prev.filter((task) => !task.done));
  };

  const value = useMemo(
    () => ({ tasks, addTasks, toggleTask, clearDone }),
    [tasks]
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
