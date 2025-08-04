import React, { useState } from 'react';
import TaskName from '../Components/TaskPage/TaskName';
import TaskSearch from '../Components/TaskPage/TaskSearch';
import TaskFilter from '../Components/TaskPage/TaskFilter';
import TaskTable from '../Components/TaskPage/TaskTable';
import TaskForm from '../Components/TaskPage/TaskForm';

const Task = () => {
  const [isModelFlag, setIsModelFlag] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const handleTaskAdded = () => {
    setRefreshFlag(!refreshFlag); // toggle to refresh TaskTable
  };

  return (
    <div>
      <TaskName />
      <div className="flex ml-4 mt-8">
        <TaskSearch />
        <TaskFilter />
        <button
          className="w-32 px-4 py-2 ml-3 bg-blue-950 text-white rounded-xl font-sans font-bold"
          onClick={() => setIsModelFlag(true)}
        >
          + New Entry
        </button>
      </div>

      {isModelFlag && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
          <TaskForm
            onClose={() => setIsModelFlag(false)}
            onTaskAdded={handleTaskAdded}
          />
        </div>
      )}

      <TaskTable refreshFlag={refreshFlag} />
    </div>
  );
};

export default Task;
