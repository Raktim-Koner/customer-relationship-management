import React from 'react'
import TaskName from '../Components/TaskPage/TaskName'
import TaskSearch from '../Components/TaskPage/TaskSearch'
import TaskFilter from '../Components/TaskPage/TaskFilter'
import TaskEntry from '../Components/TaskPage/TaskEntry'
import TaskTable from '../Components/TaskPage/TaskTable'


const Task = () => {
  return (
    <div>
      <TaskName/>
      <div className='flex ml-4 mt-8'>
        <TaskSearch/>
        <TaskFilter/>
        <TaskEntry/>
      </div>
        <TaskTable/>
    </div>
  )
}

export default Task
