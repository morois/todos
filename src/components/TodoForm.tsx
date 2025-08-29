import { useState, type FormEvent } from 'react';
import { useTasks } from '../contexts/TasksContext';

const TodoForm = () => {
  const [textTodo, setTextTodo] = useState('');
  const { addTasks } = useTasks();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const trimmed = textTodo.trim();
    if (!trimmed) return;
    addTasks(trimmed);
    setTextTodo('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={textTodo}
        onChange={(e) => setTextTodo(e.target.value)}
      />
      <button className="add-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
