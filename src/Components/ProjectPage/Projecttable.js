import React from 'react'
import projects from "../../Data file/projects.json"

const Projecttable = () => {
  return (
    <div className="mt-16  border border-gray-300 border-b-0 h-64 overflow-y-auto">
      <table className="min-w-full text-center font-sans ">
        <thead className="bg-cyan-100 sticky top-0 z-10">
          <tr>
            {/* change the text color and give the border  */}
            <th className="px-4 py-3 text-blue-950 font-bold border border-black border-l-0">Deal ID</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Project ID</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Project Name</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Assign To</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Status</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-cyan-50' : 'bg-cyan-100'} 
            >
              {/* give the border */}
              <td className="px-4 py-2 border border-black border-l-0">{project.dealId}</td>
              <td className="px-4 py-2 border border-black">{project.projectId}</td>
              <td className="px-4 py-2 border border-black">{project.projectName}</td>
              <td className="px-4 py-2 border border-black">{project.assignTo}</td>
              <td className="px-4 py-2 border border-black">{project.status}</td>
              <td className="px-4 py-2 border border-black">{project.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Projecttable
