import React, { useState } from "react";
import filter from "../../Assets/filter.png.png";

const AccountsFilter = ({ statusFilter, setStatusFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (status) => {
    setStatusFilter(status);
    setIsOpen(false);
  };

  return (
    <div className="relative ml-[33.5rem]">
      {/* Filter Icon */}
      <img
        src={filter}
        alt="Filter"
        className="h-8 w-7 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-10 right-0 bg-white border border-gray-300 shadow-md rounded-md w-44 z-50">
          {/* Close Button */}
          <div className="flex justify-between items-center px-3 py-2 border-b">
            <span className="text-gray-700 font-semibold">Filter</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-black text-lg font-bold"
            >
              ✕
            </button>
          </div>

          {/* Filter Options */}
          <div
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect("")}
          >
            All Status
          </div>
          <div
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect("In Progress")}
          >
            In Progress
          </div>
          <div
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect("Active")}
          >
            Active
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountsFilter;
