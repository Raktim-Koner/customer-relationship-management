import React, { useState } from 'react';
import DealName from '../Components/DealPage/DealName';
import DealSearch from '../Components/DealPage/DealSearch';
import DealFilter from '../Components/DealPage/DealFilter';
import DealTable from '../Components/DealPage/DealTable';
import DealForm from '../Components/DealPage/DealForm';

const Deal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const handleAddDeal = () => {
    setIsModalOpen(false);
    setRefreshFlag(!refreshFlag); // refresh table after adding
  };

  const handleFormClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <DealName />
      <div className="flex ml-4 mt-8">
        <DealSearch />
        <DealFilter />
        <button
          className="w-32 px-4 py-2 ml-3 bg-blue-950 text-white rounded-xl font-sans font-bold hover:bg-blue-900"
          onClick={() => setIsModalOpen(true)}
        >
          + New Entry
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
          <DealForm onSubmitSuccess={handleAddDeal} onClose={handleFormClose} />
        </div>
      )}

      <DealTable refreshFlag={refreshFlag} />
    </div>
  );
};

export default Deal;
