import React, { useState } from 'react';
import ReportName from '../Components/ReportPage/ReportName';
import ReportSearch from '../Components/ReportPage/ReportSearch';
import ReportFilter from '../Components/ReportPage/ReportFilter';
import ReportTable from '../Components/ReportPage/ReportTable';
import ReportForm from '../Components/ReportPage/ReportFrom';

const Report = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddReport = (formData) => {
    console.log("New Report Data: ", formData);
    setIsModalOpen(false);
  };

  const handleFormClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <ReportName />
      <div className='flex ml-4 mt-8'>
        <ReportSearch />
        <ReportFilter />
        <button
          className="w-32 px-4 py-2 ml-3 bg-blue-950 text-white rounded-xl font-sans font-bold"
          onClick={() => setIsModalOpen(true)}
        >
          + New Entry
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
          <ReportForm onSubmit={handleAddReport} onClose={handleFormClose} /> 
        </div>
      )}

      <ReportTable />
    </div>
  );
};

export default Report;
