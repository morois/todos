import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TodoForm from './components/todoForm';
import { TaskProvider } from './contexts/TasksContext';

function App() {
  return (
    <TaskProvider>
      <Header />
      <TodoForm />
      <TaskList />
    </TaskProvider>
  );
}

export default App;
