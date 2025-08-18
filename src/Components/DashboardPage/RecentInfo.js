import React from 'react'

const RecentInfo = () => {
  const activities = [
    "Meeting scheduled with a client",
    "Followed up with a potential lead",
    "New deal added to the system",
    "Contract sent for review",
    "Customer feedback updated",
    "Demo session scheduled",
    "Client call arranged",
    "Updated customer contact details",
    "Task assigned to sales team",
    "Follow-up email sent"
  ];

  return (
    <div className="h-56 w-[35rem] ml-24 bg-slate-50 p-4">
      <h2 className="text-lg font-bold mb-3">Recent Activities</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 h-40 font-sans overflow-y-auto pr-2">
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  )
}

export default RecentInfo
