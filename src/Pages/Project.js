import React, { useState } from 'react';
import Projectsearch from '../Components/ProjectPage/Projectsearch';
import Projectfilter from '../Components/ProjectPage/Projectfilter';
import Projecttable from '../Components/ProjectPage/Projecttable';
import ProjectName from '../Components/ProjectPage/ProjectName';
import ProjectFotm from '../Components/ProjectPage/ProjectForm';

const Project = () => {
  const [isModelFlag, setIsModelFlag] = useState(false);

  const handleAddProject = (formData) => {
    console.log("New Project Data: ", formData);
    setIsModelFlag(false);
  };

  const handleFormClose = () => {
    setIsModelFlag(false); 
  };

  return (
    <div>
      <ProjectName/>
      <div className='flex ml-4 mt-8'>
        <Projectsearch />
        <Projectfilter />
        <button
          className="w-32 px-4 py-2 ml-3 bg-blue-950 text-white rounded-xl font-sans font-bold"  // change the button color and design 
          onClick={() => setIsModelFlag(true)}
        >
          + New Entry
        </button>
      </div>

      {isModelFlag && (
  <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
    <ProjectFotm onSubmit={handleAddProject} onClose={handleFormClose} />
  </div>
)}


      <Projecttable />
    </div>
  );
};

export default Project;
