import React from 'react'

const ReportTable = () => {
  return (
    <div>
      <div className="mt-16 rounded-lg border border-gray-300 border-b-0 h-64 overflow-y-auto">

        <table className="min-w-full text-center font-sans">
          <thead className="bg-cyan-100 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 text-blue-900 font-bold border border-r-black">SL NO.</th>
              <th className="px-4 py-3 text-blue-900 font-bold border border-r-black">Project ID</th>
              <th className="px-4 py-3 text-blue-900 font-bold border border-r-black">Project Name</th>
              <th className="px-4 py-3 text-blue-900 font-bold border border-r-black">View/Download</th>
              <th className="px-4 py-3 text-blue-900 font-bold border border-r-black">Remove</th>
              
            </tr>
          </thead>
          <tbody className="bg-cyan-50">
            <tr>
              <td className="px-4 py-2 border border-r-black">R101</td>
              <td className="px-4 py-2 border border-r-black">T101</td>
              <td className="px-4 py-2 border border-r-black">CRM</td>
              <td className="px-4 py-2 border border-r-black">View</td>
              <td className="px-4 py-2 border border-r-black">Remove</td>
              
            </tr>
          </tbody>

          {/* //here */}
          
          {/* //here */}

        </table>

    </div>
    </div>
  )
}

export default ReportTable
