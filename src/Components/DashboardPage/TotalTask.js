import React, { useEffect, useState } from 'react';
import Taskicon from '../../Assets/Taskicon.png';

const API_URL = "https://api.jsonbin.io/v3/b/689054c6ae596e708fc11988";
const API_KEY = "$2a$10$G/HlnQAYpisDw2MDqTuJqefIWbRD3NM39enboXGgbNomTtQZiSmYG";

const TotalTask = () => {
  const [taskCount, setTaskCount] = useState(0);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        "X-Master-Key": API_KEY
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.record) {
          // Extract unique taskIds
          const uniqueIds = new Set(data.record.map(task => task.taskId));
          setTaskCount(uniqueIds.size);
        }
      })
      .catch(err => {
        console.error("Error fetching tasks:", err);
      });
  }, []);

  return (
    <div className='h-16 w-40 ml-[9rem] border-2 border-black flex items-center'>
      <img src={Taskicon} className='h-14 pt-[.14rem] pl-[.2rem] ' alt="Task Icon" />
      <div>
        <h1 className='font-semibold ml-3'>Task</h1>
        <p className='ml-3 font-bold'>{taskCount}</p>
      </div>
    </div>
  );
};

export default TotalTask;
