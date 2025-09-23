import React, { useState } from "react";
import ReportName from "../Components/ReportPage/ReportName";
import ReportSearch from "../Components/ReportPage/ReportSearch";
import ReportTable from "../Components/ReportPage/ReportTable";
import ReportForm from "../Components/ReportPage/ReportFrom";

const Report = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // ✅ search state

  // called after form submits
  const handleDataAdded = () => {
    setRefreshFlag(!refreshFlag); // toggle to trigger refresh
    setIsModalOpen(false);
  };

  return (
    <div>
      <ReportName />
      <div className="flex ml-4 mt-8">
        {/* ✅ Pass setSearchTerm down */}
        <ReportSearch setSearchTerm={setSearchTerm} />
        
        <button
          className="w-32 px-4 ml-[34.5rem]  mr-2 bg-blue-950 text-white rounded-xl font-sans font-bold"
          onClick={() => setIsModalOpen(true)}
        >
          + New Entry
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
          <ReportForm
            onClose={() => setIsModalOpen(false)}
            onSuccess={handleDataAdded}
          />
        </div>
      )}

      {/* ✅ Pass searchTerm into table */}
      <ReportTable refreshFlag={refreshFlag} searchTerm={searchTerm} />
    </div>
  );
};

export default Report;
