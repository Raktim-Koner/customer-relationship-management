import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div
      className="flex items-start h-[42.6rem] w-1/6 px-4 py-6"
      style={{ background: 'linear-gradient(to bottom, #FDFDFD, #B0E0E6)' }}
    >
      <ul className="mt-24 font-bold text-justify">
        <li className='mb-10'><Link to="/dashboard"> DASHBOARD</Link></li>
        <li className='mb-10'><Link to="/deal"> DEAL MANAGEMENT</Link></li>
        <li className='mb-10'><Link to="/project"> PROJECT MANAGEMENT</Link></li>
        <li className='mb-10'><Link to="/task"> TASK MANAGEMENT</Link></li>
        <li className='mb-10'><Link to="/accounts"> ACCOUNTS</Link></li>
        <li className='mb-10'><Link to="/report"> REPORT</Link></li>
        <li className='mb-10'><Link to="/services"> SERVICES AND SUPPORT</Link></li>
        
      </ul>
    </div>
  );
};

export default Sidebar;

