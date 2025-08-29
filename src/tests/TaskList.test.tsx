import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from '../components/TaskList';
import { TaskProvider } from '../contexts/TasksContext';
import TodoForm from '../components/todoForm';

test('задача меняет состояние done при клике', () => {
  render(
    <TaskProvider>
      <TodoForm />
      <TaskList />
    </TaskProvider>
  );

  const input = screen.getByPlaceholderText(/enter a task/i);
  const addButton = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: 'Task 1' } });
  fireEvent.click(addButton);

  const taskItem = screen.getByText(/task 1/i);

  fireEvent.click(taskItem);

  expect(taskItem).toHaveClass('done');
});
