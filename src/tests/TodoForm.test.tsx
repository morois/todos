import { render, screen } from '@testing-library/react';
import TodoForm from '../components/todoForm';
import { TaskProvider } from '../contexts/TasksContext';

test('рендерится форма TodoForm', () => {
  render(
    <TaskProvider>
      <TodoForm />
    </TaskProvider>
  );

  const input = screen.getByRole('textbox'); 
  expect(input).toBeInTheDocument();
});
