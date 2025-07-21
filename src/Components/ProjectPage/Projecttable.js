import React from 'react'

const Projecttable = () => {
  return (
    <div className="mt-16 rounded-lg border border-gray-300 border-b-0 h-64 overflow-y-auto">

        <table className="min-w-full text-center font-sans">
          <thead className="bg-cyan-100 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 text-blue-900 font-bold border border-r-black">Deal ID</th>
              <th className="px-4 py-3 text-blue-900 font-bold border border-r-black">Project ID</th>
              <th className="px-4 py-3 text-blue-900 font-bold border border-r-black">Project Name</th>
              <th className="px-4 py-3 text-blue-900 font-bold border border-r-black">Assign To</th>
              <th className="px-4 py-3 text-blue-900 font-bold border border-r-black">Status</th>
              <th className="px-4 py-3 text-blue-900 font-bold border">Due Date</th>
            </tr>
          </thead>
          <tbody className="bg-cyan-50">
            <tr>
              <td className="px-4 py-2 border border-r-black">101</td>
              <td className="px-4 py-2 border border-r-black">PR101</td>
              <td className="px-4 py-2 border border-r-black">CRM</td>
              <td className="px-4 py-2 border border-r-black">John Doe</td>
              <td className="px-4 py-2 border border-r-black">In Progress</td>
              <td className="px-4 py-2 border">2025-08-10</td>
            </tr>
          </tbody>

          {/* //here */}
          {/* <tbody className="bg-cyan-100">
            <tr>
              <td className="px-4 py-2 border border-r-black">001</td>
              <td className="px-4 py-2 border border-r-black">P-1001</td>
              <td className="px-4 py-2 border border-r-black">Website Redesign</td>
              <td className="px-4 py-2 border border-r-black">John Doe</td>
              <td className="px-4 py-2 border border-r-black">In Progress</td>
              <td className="px-4 py-2 border">2025-08-10</td>
            </tr>
          </tbody>
          <tbody className="bg-cyan-50">
            <tr>
              <td className="px-4 py-2 border border-r-black">001</td>
              <td className="px-4 py-2 border border-r-black">P-1001</td>
              <td className="px-4 py-2 border border-r-black">Website Redesign</td>
              <td className="px-4 py-2 border border-r-black">John Doe</td>
              <td className="px-4 py-2 border border-r-black">In Progress</td>
              <td className="px-4 py-2 border">2025-08-10</td>
            </tr>
          </tbody>
          <tbody className="bg-cyan-100">
            <tr>
              <td className="px-4 py-2 border border-r-black">001</td>
              <td className="px-4 py-2 border border-r-black">P-1001</td>
              <td className="px-4 py-2 border border-r-black">Website Redesign</td>
              <td className="px-4 py-2 border border-r-black">John Doe</td>
              <td className="px-4 py-2 border border-r-black">In Progress</td>
              <td className="px-4 py-2 border">2025-08-10</td>
            </tr>
          </tbody>
          <tbody className="bg-cyan-50">
            <tr>
              <td className="px-4 py-2 border border-r-black">001</td>
              <td className="px-4 py-2 border border-r-black">P-1001</td>
              <td className="px-4 py-2 border border-r-black">Website Redesign</td>
              <td className="px-4 py-2 border border-r-black">John Doe</td>
              <td className="px-4 py-2 border border-r-black">In Progress</td>
              <td className="px-4 py-2 border">2025-08-10</td>
            </tr>
          </tbody>
          <tbody className="bg-cyan-100">
            <tr>
              <td className="px-4 py-2 border border-r-black">001</td>
              <td className="px-4 py-2 border border-r-black">P-1001</td>
              <td className="px-4 py-2 border border-r-black">Website Redesign</td>
              <td className="px-4 py-2 border border-r-black">John Doe</td>
              <td className="px-4 py-2 border border-r-black">In Progress</td>
              <td className="px-4 py-2 border">2025-08-10</td>
            </tr>
          </tbody> */}
          {/* //here */}

        </table>

    </div>
  )
}

export default Projecttable
