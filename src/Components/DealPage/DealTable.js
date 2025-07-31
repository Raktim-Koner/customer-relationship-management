import React from 'react'
import deals from '../../Data file/deals.json'

const DealTable = () => {
  return (
     <div className="mt-16  border border-gray-300 border-b-0 h-64 overflow-y-auto">
      <table className="min-w-full text-center font-sans ">
        <thead className="bg-cyan-100 sticky top-0 z-10">
          <tr>
            {/* change the text color and give the border  */}
            <th className="px-4 py-3 text-blue-950 font-bold border border-black border-l-0">Deal ID</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Deal Name</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Company</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Amount To</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Status To</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Action</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black border-r-0">Close Date</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-cyan-50' : 'bg-cyan-100'} 
            >
              {/* give the border */}
              <td className="px-4 py-2 border border-black border-l-0">{deal.dealId}</td>
              <td className="px-4 py-2 border border-black">{deal.dealName}</td>
              <td className="px-4 py-2 border border-black">{deal.company}</td>
              <td className="px-4 py-2 border border-black">{deal.amount}</td>
              <td className="px-4 py-2 border border-black">{deal.status}</td>
              <td className="px-4 py-2 border border-black">{deal.action}</td>
              <td className="px-4 py-2 border border-black border-r-0">{deal.closeDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DealTable
