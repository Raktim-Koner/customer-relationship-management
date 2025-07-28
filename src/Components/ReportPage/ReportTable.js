import React from 'react'
import reports from "../../Data file/reports.json"

const ReportTable = () => {
  return (
    <div>
      <div className="mt-16 rounded-lg border border-gray-300 border-b-0 h-64 overflow-y-auto">
        <table className="min-w-full text-center font-sans">
          <thead className="bg-cyan-100 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 text-blue-950 font-bold border border-black border-l-0">SL NO.</th>
              <th className="px-4 py-3 text-blue-950 font-bold border border-black">Project ID</th>
              <th className="px-4 py-3 text-blue-950 font-bold border border-black">Project Name</th>
              <th className="px-4 py-3 text-blue-950 font-bold border border-black">View/Download</th>
              <th className="px-4 py-3 text-blue-950 font-bold border border-black">Remove</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-cyan-50' : 'bg-cyan-100'}
              >
                <td className="px-4 py-2 border border-black border-l-0">{report.slNo}</td>
                <td className="px-4 py-2 border border-black">{report.projectId}</td>
                <td className="px-4 py-2 border border-black">{report.projectName}</td>
                <td className="px-4 py-2 border border-black">{report.viewDownload}</td>
                <td className="px-4 py-2 border border-black" >{report.remove}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ReportTable