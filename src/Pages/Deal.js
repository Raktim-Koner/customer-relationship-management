import React, { useState } from 'react';
import DealName from '../Components/DealPage/DealName'
import DealSearch from '../Components/DealPage/DealSearch'
import DealFilter from '../Components/DealPage/DealFilter'
import DealTable from '../Components/DealPage/DealTable'

const Deal = () => {
  const [isModelFlag, setIsModelFlag] = useState(false);
  
    const handleAddProject = (formData) => {
      console.log("New Task Data: ", formData);
      setIsModelFlag(false);
    };
  return (
    <div>
      <DealName/>
      <div className='flex ml-4 mt-8'>
        <DealSearch/>
        <DealFilter/>
        <button
          className="w-32 px-4 py-2 ml-3 bg-blue-950 text-white rounded-xl font-sans font-bold"  // change the button color and design 
          onClick={() => setIsModelFlag(true)}
        >
          + New Entry
        </button>
        

      </div>
      <DealTable/>
    </div>
  )
}

export default Deal