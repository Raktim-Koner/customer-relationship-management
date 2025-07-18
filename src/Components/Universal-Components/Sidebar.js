import React from 'react';

const Sidebar = () => {
  return (
    <div
      className="flex items-start h-[42.6rem] w-1/6 px-4 py-6"
      style={{ background: 'linear-gradient(to bottom, #FDFDFD, #B0E0E6)' }}
    >
      <ul className="mt-24 font-bold text-justify">
        <li className='mb-10'>DASHBOARD</li>
        <li className='mb-10'>DEAL MANAGEMENT</li>
        <li className='mb-10'>PROJECT MANAGEMENT</li>
        <li className='mb-10'>TASK MANAGEMENT</li>
        <li className='mb-10'>ACCOUNTS</li>
        <li className='mb-10'>REPORT</li>
        <li className='mb-10'>SERVICES AND SUPPORT</li>
        
      </ul>
    </div>
  );
};

export default Sidebar;

