import React, { useState } from 'react';
import TaskName from '../Components/TaskPage/TaskName'
import TaskSearch from '../Components/TaskPage/TaskSearch'
import TaskFilter from '../Components/TaskPage/TaskFilter'
import TaskEntry from '../Components/TaskPage/TaskEntry'
import TaskTable from '../Components/TaskPage/TaskTable'
import TaskForm from '../Components/TaskPage/TaskForm'


const Task = () => {
  const [isModelFlag, setIsModelFlag] = useState(false);

  const handleAddProject = (formData) => {
    console.log("New Task Data: ", formData);
    setIsModelFlag(false);
  };

  const handleFormClose = () => {
    setIsModelFlag(false); 
  };
  return (
    <div>
      <TaskName/>
      <div className='flex ml-4 mt-8'>
        <TaskSearch/>
        <TaskFilter/>
        <button
          className="w-32 px-4 py-2 ml-3 bg-blue-900 text-white rounded-full font-sans font-bold"
          onClick={() => setIsModelFlag(true)}>
          + New Entry
        </button>
      </div>

      {isModelFlag && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
          <TaskForm onSubmit={handleAddProject} onClose={handleFormClose} />
        </div>
      )}
        <TaskTable/>
    </div>
  )
}

export default Task
