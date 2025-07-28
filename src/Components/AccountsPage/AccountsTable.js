import React from 'react'
import accounts from "../../Data file/accounts.json"

const AccountsTable = () => {
  return (
    <div>
      <div className="mt-16 border border-gray-300 border-b-0 h-64 overflow-y-auto">
        <table className="min-w-full text-center font-sans">
          <thead className="bg-cyan-100 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 text-blue-950 font-bold border border-black border-l-0">Account ID</th>
              <th className="px-4 py-3 text-blue-950 font-bold border border-black ">Company</th>
              <th className="px-4 py-3 text-blue-950 font-bold border border-black ">Industry Name</th>
              <th className="px-4 py-3 text-blue-950 font-bold border border-black ">Location</th>
              <th className="px-4 py-3 text-blue-950 font-bold border border-black border-r-0">Status</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-cyan-50' : 'bg-cyan-100'}
              >
                <td className="px-4 py-2 border border-black border-l-0">{account.accountId}</td>
                <td className="px-4 py-2 border border-black ">{account.company}</td>
                <td className="px-4 py-2 border border-black ">{account.industryName}</td>
                <td className="px-4 py-2 border border-black">{account.location}</td>
                <td className="px-4 py-2 border border-black border-r-0">{account.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AccountsTable
