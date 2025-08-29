import React from 'react';

type Filter = 'all' | 'active' | 'done';

interface TaskFilterProps {
  filter: Filter;
  setFilter: (filter: Filter) => void;
  clearDone: () => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({
  filter,
  setFilter,
  clearDone,
}) => {
  return (
    <div className="filters">
      <button
        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button
        className={`filter-btn ${filter === 'done' ? 'active' : ''}`}
        onClick={() => setFilter('done')}
      >
        Done
      </button>

      <button className="filter-btn clear-done" onClick={clearDone}>
        Clear Done
      </button>
    </div>
  );
};

export default TaskFilter;
export type { Filter };
