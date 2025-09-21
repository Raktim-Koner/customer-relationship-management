import React, { useState } from "react";
import filter from "../../Assets/filter.png.png";

const DealFilter = ({ setDateFilter, setStatusFilter }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");

  const handleApply = () => {
    setDateFilter({ start: startDate, end: endDate });
    setStatusFilter(status);
    setShowFilter(false);
  };

  const handleReset = () => {
    setStartDate("");
    setEndDate("");
    setStatus("");
    setDateFilter({ start: null, end: null });
    setStatusFilter("");
    setShowFilter(false);
  };

  return (
    <div className="relative items-center mt-1 ml-[35rem]">
      <img
        src={filter}
        alt="Filter"
        className="h-8 w-7 cursor-pointer"
        onClick={() => setShowFilter(!showFilter)}
      />

      {showFilter && (
        <div className="absolute top-10 right-0 bg-white shadow-lg rounded-lg p-4 w-64 z-50">
          <button
            onClick={() => setShowFilter(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-black"
          >
            ✕
          </button>

          <label className="block mb-2 text-sm font-medium">Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border rounded w-full mb-3 px-2 py-1"
          />

          <label className="block mb-2 text-sm font-medium">End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border rounded w-full mb-3 px-2 py-1"
          />

          <label className="block mb-2 text-sm font-medium">Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded w-full mb-3 px-2 py-1"
          >
            <option value="">All</option>
            <option value="New">New</option>
            <option value="Running">Running</option>
            <option value="Reject">Reject</option>
          </select>

          <div className="flex justify-between">
            <button
              onClick={handleApply}
              className="px-4 py-1 bg-blue-600 text-white rounded-lg"
            >
              Done
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-1 bg-gray-400 text-white rounded-lg"
            >
              Refresh
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DealFilter;
