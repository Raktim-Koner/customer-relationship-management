import React, { useState } from 'react';
import Projectsearch from '../Components/ProjectPage/Projectsearch';
import Projectfilter from '../Components/ProjectPage/Projectfilter';
import Projecttable from '../Components/ProjectPage/Projecttable';
import ProjectName from '../Components/ProjectPage/ProjectName';
import ProjectForm from '../Components/ProjectPage/ProjectForm';

const Project = () => {
  const [isModelFlag, setIsModelFlag] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");   // 🔹 search state
  const [dateFilter, setDateFilter] = useState({ start: null, end: null });
  const [statusFilter, setStatusFilter] = useState(""); // 🔹 new status state

  const handleProjectAdded = () => {
    setRefreshFlag(!refreshFlag); 
    setIsModelFlag(false);        
  };

  return (
    <div>
      <ProjectName />
      <div className='flex ml-4 mt-8'>
        <Projectsearch setSearchTerm={setSearchTerm} /> 
        <Projectfilter setDateFilter={setDateFilter} setStatusFilter={setStatusFilter} /> 
        <button
          className="w-32 px-4 py-2 ml-3 bg-blue-950 text-white rounded-xl font-sans font-bold"
          onClick={() => setIsModelFlag(true)}
        >
          + New Entry
        </button>
      </div>

      {isModelFlag && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
          <ProjectForm
            onClose={() => setIsModelFlag(false)}
            onProjectAdded={handleProjectAdded}
          />
        </div>
      )}

      <Projecttable 
        refreshFlag={refreshFlag} 
        searchTerm={searchTerm} 
        dateFilter={dateFilter} 
        statusFilter={statusFilter}   // 🔹 pass status filter
      /> 
    </div>
  );
};

export default Project;
