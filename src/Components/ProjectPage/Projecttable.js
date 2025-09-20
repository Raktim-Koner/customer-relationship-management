import React, { useEffect, useState } from "react";
import Tablerow from "../Universal-Components/Tablerow";

const API_URL = "https://api.jsonbin.io/v3/b/688f8e46f7e7a370d1f2ec3c";
const API_KEY = "$2a$10$G/HlnQAYpisDw2MDqTuJqefIWbRD3NM39enboXGgbNomTtQZiSmYG";

const Projecttable = ({ refreshFlag, dateFilter, searchTerm, statusFilter }) => {  
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(API_URL, {
          headers: { "X-Master-Key": API_KEY }
        });
        const json = await res.json();
        setProjects(json.record || []);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };
    fetchProjects();
  }, [refreshFlag]);

  const filterBySearch = (data) => {
    if (!searchTerm) return data;
    return data.filter((p) =>
      p.projectId.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
      p.projectName.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
  };

  const filterByDate = (data) => {
    if (!dateFilter.start && !dateFilter.end) return data;

    const start = dateFilter.start ? new Date(dateFilter.start) : null;
    const end = dateFilter.end ? new Date(dateFilter.end) : null;

    return data.filter((p) => {
      const dueDate = new Date(p.dueDate);
      if (start && dueDate < start) return false;
      if (end && dueDate > end) return false;
      return true;
    });
  };

  // 🔹 New: filter by status
  const filterByStatus = (data) => {
    if (!statusFilter) return data;
    return data.filter((p) =>
      p.status.toLowerCase().trim() === statusFilter.toLowerCase().trim()
    );
  };

  // 🔹 Apply all filters
  const filteredProjects = filterByStatus(filterBySearch(filterByDate(projects)));

  return (
    <div className="mt-16 border border-gray-300 border-b-0 h-64 overflow-y-auto">
      <table className="min-w-full text-center font-sans">
        <thead className="bg-cyan-100 sticky top-0 z-10">
          <tr>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black border-l-0">Deal ID</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Project ID</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Project Name</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Assign To</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Amount</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Status</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black border-r-0">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.length === 0 ? (
            <tr>
              <td colSpan="7" className=" text-gray-500">
                <Tablerow/>
              </td>
            </tr>
          ) : (
            filteredProjects.map((project, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-cyan-50" : "bg-cyan-100"}
              >
                <td className="px-4 py-2 border border-black border-l-0">{project.dealId}</td>
                <td className="px-4 py-2 border border-black">{project.projectId}</td>
                <td className="px-4 py-2 border border-black">{project.projectName}</td>
                <td className="px-4 py-2 border border-black">{project.assignTo}</td>
                <td className="px-4 py-2 border border-black">{project.amount}</td>
                <td className="px-4 py-2 border border-black">{project.status}</td>
                <td className="px-4 py-2 border border-black border-r-0">{project.dueDate}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Projecttable;
