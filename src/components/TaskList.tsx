import React, { useState } from 'react';
import { useTasks } from '../contexts/TasksContext';
import TaskFilter, { type Filter } from './TaskFilter';

const TaskList: React.FC = () => {
  const { tasks, toggleTask, clearDone } = useTasks();
  const [filter, setFilter] = useState<Filter>('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.done;
    if (filter === 'done') return task.done;
    return true;
  });

  const activeCount = tasks.filter((task) => !task.done).length;

  const getEmptyMessage = () => {
    if (filter === 'all') return 'No tasks';
    if (filter === 'active') return 'No active tasks';
    if (filter === 'done') return 'No completed tasks';
    return null;
  };

  return (
    <div className="tasks-wrapper">
      <TaskFilter filter={filter} setFilter={setFilter} clearDone={clearDone} />

      <p className="active-count">Active tasks: {activeCount}</p>

      {filteredTasks.length === 0 ? (
        <p className="empty-message">{getEmptyMessage()}</p>
      ) : (
        <ul className="task-list">
          {filteredTasks
            .sort((a, b) => Number(a.done) - Number(b.done))
            .map((task) => (
              <li
                key={task.id}
                className={`task ${task.done ? 'done' : ''}`}
                onClick={() => toggleTask(task.id)}
              >
                {task.done ? '✅' : '⚪'} {task.title}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
