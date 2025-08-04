import React, { useState } from 'react';
import Projectsearch from '../Components/ProjectPage/Projectsearch';
import Projectfilter from '../Components/ProjectPage/Projectfilter';
import Projecttable from '../Components/ProjectPage/Projecttable';
import ProjectName from '../Components/ProjectPage/ProjectName';
import ProjectForm from '../Components/ProjectPage/ProjectForm';

const Project = () => {
  const [isModelFlag, setIsModelFlag] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const handleProjectAdded = () => {
    setRefreshFlag(!refreshFlag); // toggle refresh
    setIsModelFlag(false);        // close modal
  };

  return (
    <div>
      <ProjectName />
      <div className='flex ml-4 mt-8'>
        <Projectsearch />
        <Projectfilter />
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

      <Projecttable refreshFlag={refreshFlag} />
    </div>
  );
};

export default Project;
