import React from 'react'
import DocumentCard from './DocumentCard'

const DocumentParaThree = () => {
  const topics = [
    "Create & manage projects",
    "Track and update deals",
    "Assign and monitor tasks",
    "Customize your dashboard",
    "Generate and share reports",
    "Manage user roles & permissions",
    "Import and export data",
    "CRM tips & shortcuts",
    "Search and filter records",
    "Set project milestones",
    "Update deal stages",
    "View task deadlines & priorities",
    "Add and manage contacts",
    "Use calendar & reminders",
    "Collaborate with team members",
    "Attach files & documents",
    "View activity logs",
    "Manage sales pipeline",
    "Create recurring tasks",
    "Analyze performance metrics",
  ];

  return (
    <div>
      <DocumentCard>
        <ul className="list-disc list-inside text-black font-serif space-y-1">
          {topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </DocumentCard>
    </div>
  )
}

export default DocumentParaThree
