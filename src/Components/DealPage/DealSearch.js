import React from "react";
import Searchicon from "../../Assets/Searchicon.png";

const DealSearch = ({ setSearchTerm }) => {
  return (
    <div className="flex items-center w-[30rem] border border-black rounded-full bg-[#deeded] px-4 py-2 font-sans">
      <span className="text-gray-700 mr-2">
        <img src={Searchicon} alt="Search" className="h-5 w-5" />
      </span>
      <input
        type="text"
        placeholder="Search by Deal ID or Name"
        className="outline-none bg-transparent placeholder-gray-500 w-[26rem]"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default DealSearch;
