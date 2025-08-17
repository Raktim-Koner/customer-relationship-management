import React, { useEffect, useState } from 'react';
import Taskicon from '../../Assets/Taskicon.png';

const API_URL = "https://api.jsonbin.io/v3/b/688f8e46f7e7a370d1f2ec3c";
const API_KEY = "$2a$10$G/HlnQAYpisDw2MDqTuJqefIWbRD3NM39enboXGgbNomTtQZiSmYG";

const TotalProject = () => {
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        "X-Master-Key": API_KEY
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.record) {
          // Extract unique projectIds
          const uniqueIds = new Set(data.record.map(project => project.projectId));
          setProjectCount(uniqueIds.size);
        }
      })
      .catch(err => {
        console.error("Error fetching projects:", err);
      });
  }, []);

  return (
    <div className='h-16 w-40 ml-[9rem] border-2 border-black flex items-center'>
      <img src={Taskicon} className='h-14 pt-[.14rem] pl-[.2rem]' alt="Task Icon" />
      <div>
        <h1 className='font-semibold ml-3'>Projects</h1>
        <p className='ml-3 font-semibold'>{projectCount}</p>
      </div>
    </div>
  );
};

export default TotalProject;
