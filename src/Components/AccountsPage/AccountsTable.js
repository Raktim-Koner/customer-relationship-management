import React from 'react'

const AccountsTable = () => {
  return (
    <div>
      <div className="mt-16 rounded-lg border border-gray-300 border-b-0 h-64 overflow-y-auto">

        <table className="min-w-full text-center font-sans">
          <thead className="bg-cyan-100 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 text-blue-900 font-bold border border-r-black">Account ID</th>
              <th className="px-4 py-3 text-blue-900 font-bold border border-r-black">Company</th>
              <th className="px-4 py-3 text-blue-900 font-bold border border-r-black">Industry Name</th>
              <th className="px-4 py-3 text-blue-900 font-bold border border-r-black">Location</th>
              <th className="px-4 py-3 text-blue-900 font-bold border border-r-black">Status</th>
              
            </tr>
          </thead>
          <tbody className="bg-cyan-50">
            <tr>
              <td className="px-4 py-2 border border-r-black">101</td>
              <td className="px-4 py-2 border border-r-black"></td>
              <td className="px-4 py-2 border border-r-black"></td>
              <td className="px-4 py-2 border border-r-black">Pune</td>
              <td className="px-4 py-2 border border-r-black">Done</td>
              
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
              
            </tr>
          </tbody>
          <tbody className="bg-cyan-50">
            <tr>
              <td className="px-4 py-2 border border-r-black">001</td>
              <td className="px-4 py-2 border border-r-black">P-1001</td>
              <td className="px-4 py-2 border border-r-black">Website Redesign</td>
              <td className="px-4 py-2 border border-r-black">John Doe</td>
              <td className="px-4 py-2 border border-r-black">In Progress</td>
              
            </tr>
          </tbody>
          <tbody className="bg-cyan-100">
            <tr>
              <td className="px-4 py-2 border border-r-black">001</td>
              <td className="px-4 py-2 border border-r-black">P-1001</td>
              <td className="px-4 py-2 border border-r-black">Website Redesign</td>
              <td className="px-4 py-2 border border-r-black">John Doe</td>
              <td className="px-4 py-2 border border-r-black">In Progress</td>
              
            </tr>
          </tbody>
          <tbody className="bg-cyan-50">
            <tr>
              <td className="px-4 py-2 border border-r-black">001</td>
              <td className="px-4 py-2 border border-r-black">P-1001</td>
              <td className="px-4 py-2 border border-r-black">Website Redesign</td>
              <td className="px-4 py-2 border border-r-black">John Doe</td>
              <td className="px-4 py-2 border border-r-black">In Progress</td>
             
            </tr>
          </tbody>
          <tbody className="bg-cyan-100">
            <tr>
              <td className="px-4 py-2 border border-r-black">001</td>
              <td className="px-4 py-2 border border-r-black">P-1001</td>
              <td className="px-4 py-2 border border-r-black">Website Redesign</td>
              <td className="px-4 py-2 border border-r-black">John Doe</td>
              <td className="px-4 py-2 border border-r-black">In Progress</td>
              
            </tr>
          </tbody> */}
          {/* //here */}

        </table>

    </div>
    </div>
  )
}

export default AccountsTable
