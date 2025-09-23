import React, { useState } from 'react';
import AccountsName from '../Components/AccountsPage/AccountsName';
import AccountsSearch from '../Components/AccountsPage/AccountsSearch';
import AccountsFilter from '../Components/AccountsPage/AccountsFilter';
import AccountsTable from '../Components/AccountsPage/AccountsTable';
import AccountsForm from '../Components/AccountsPage/AccountsForm';

const Accounts = () => {
  const [isModelFlag, setIsModelFlag] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const handleAccountAdded = () => {
    setRefreshFlag(!refreshFlag); // refresh table
    setIsModelFlag(false);        // close form
  };

  return (
    <div>
      <AccountsName />
      <div className='flex ml-4 mt-8'>
        <AccountsSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <AccountsFilter statusFilter={statusFilter} setStatusFilter={setStatusFilter}/>
        <button
          className="w-32 px-4 py-2 ml-3 bg-blue-950 text-white rounded-xl font-sans font-bold"
          onClick={() => setIsModelFlag(true)}
        >
          + New Entry
        </button>
      </div>

      {isModelFlag && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
          <AccountsForm 
            onClose={() => setIsModelFlag(false)} 
            onAccountAdded={handleAccountAdded} 
          />
        </div>
      )}

      <AccountsTable 
        refreshFlag={refreshFlag} 
        searchTerm={searchTerm}
        statusFilter={statusFilter}/>
    </div>
  );
};

export default Accounts;
