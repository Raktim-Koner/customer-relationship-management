import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  // Function to check if the current path matches the link
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Function to get the appropriate classes for each link
  const getLinkClasses = (path) => {
    const baseClasses = "block px-4 py-2 rounded-lg   hover:bg-green-100";
    const activeClasses = "bg-green-600 text-white shadow-lg";
    const inactiveClasses = "text-gray-700 hover:text-green-600";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  return (
    <div
      className="items-start h-[42.6rem] w-1/6 px-4 py-6"
      style={{ background: 'linear-gradient(to bottom, #FDFDFD, #B0E0E6)' }}
    >
      <ul className="mt-24 font-bold text-justify space-y-4">
        <li>
          <Link to="/dashboard" className={getLinkClasses("/dashboard")}>
            DASHBOARD
          </Link>
        </li>
        <li>
          <Link to="/deal" className={getLinkClasses("/deal")}>
            DEAL MANAGEMENT
          </Link>
        </li>
        <li>
          <Link to="/project" className={getLinkClasses("/project")}>
            PROJECT MANAGEMENT
          </Link>
        </li>
        <li>
          <Link to="/task" className={getLinkClasses("/task")}>
            TASK MANAGEMENT
          </Link>
        </li>
        <li>
          <Link to="/accounts" className={getLinkClasses("/accounts")}>
            ACCOUNTS
          </Link>
        </li>
        <li>
          <Link to="/report" className={getLinkClasses("/report")}>
            REPORT
          </Link>
        </li>
        <li>
          <Link to="/services" className={getLinkClasses("/services")}>
            SERVICES AND SUPPORT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

