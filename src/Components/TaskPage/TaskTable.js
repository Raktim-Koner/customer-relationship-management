import React from 'react'
import tasks from "../../Data file/tasks.json"

const TaskTable = () => {
  return (
    <div className="mt-16 rounded-lg border border-gray-300 border-b-0 h-64 overflow-y-auto">
      <table className="min-w-full text-center font-sans">
        <thead className="bg-cyan-100 sticky top-0 z-10">
          <tr>
            <th className="px-4 py-3 text-blue-900 font-bold border border-r-black">Task ID</th>
            <th className="px-4 py-3 text-blue-900 font-bold border border-r-black">Task Name</th>
            <th className="px-4 py-3 text-blue-900 font-bold border border-r-black">Assign To</th>
            <th className="px-4 py-3 text-blue-900 font-bold border border-r-black">Priority</th>
            <th className="px-4 py-3 text-blue-900 font-bold border border-r-black">Status</th>
            <th className="px-4 py-3 text-blue-900 font-bold border">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-cyan-50' : 'bg-cyan-100'}
            >
              <td className="px-4 py-2 border border-r-black">{task.taskId}</td>
              <td className="px-4 py-2 border border-r-black">{task.taskName}</td>
              <td className="px-4 py-2 border border-r-black">{task.assignTo}</td>
              <td className="px-4 py-2 border border-r-black">{task.priority}</td>
              <td className="px-4 py-2 border border-r-black">{task.status}</td>
              <td className="px-4 py-2 border">{task.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TaskTable
