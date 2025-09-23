import React, { useEffect, useState } from "react";
import Tablerow from "../Universal-Components/Tablerow";

const API_URL = "https://api.jsonbin.io/v3/b/689054c6ae596e708fc11988";
const API_KEY = "$2a$10$G/HlnQAYpisDw2MDqTuJqefIWbRD3NM39enboXGgbNomTtQZiSmYG";

const TaskTable = ({ refreshFlag, searchTerm, dateFilter, statusFilter }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(API_URL, {
          headers: { "X-Master-Key": API_KEY }
        });
        const json = await res.json();
        setTasks(json.record || []);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };

    fetchTasks();
  }, [refreshFlag]);

  // 🔍 Search filter
  const filterBySearch = (data) => {
    if (!searchTerm) return data;
    return data.filter(
      (t) =>
        t.taskId.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
        t.taskName.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
  };

  // 📅 Date filter
  const filterByDate = (data) => {
    if (!dateFilter.start && !dateFilter.end) return data;

    const start = dateFilter.start ? new Date(dateFilter.start) : null;
    const end = dateFilter.end ? new Date(dateFilter.end) : null;

    return data.filter((t) => {
      const dueDate = new Date(t.dueDate);
      if (start && dueDate < start) return false;
      if (end && dueDate > end) return false;
      return true;
    });
  };

  // ✅ Status filter
  const filterByStatus = (data) => {
    if (!statusFilter) return data;
    return data.filter(
      (t) => t.status.toLowerCase().trim() === statusFilter.toLowerCase().trim()
    );
  };

  // Apply all filters
  const filteredTasks = filterByStatus(filterBySearch(filterByDate(tasks)));

  return (
    <div className="mt-16 border border-gray-300 border-b-0 h-64 overflow-y-auto">
      <table className="min-w-full text-center font-sans">
        <thead className="bg-cyan-100 sticky top-0 z-10">
          <tr>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black border-l-0">Task ID</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Task Name</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Assign To</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Priority</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Status</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black border-r-0">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.length === 0 ? (
            <tr>
              <td colSpan="6" className=" text-gray-500">
                <Tablerow />
              </td>
            </tr>
          ) : (
            filteredTasks.map((task, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-cyan-50" : "bg-cyan-100"}
              >
                <td className="px-4 py-2 border border-black border-l-0">{task.taskId}</td>
                <td className="px-4 py-2 border border-black">{task.taskName}</td>
                <td className="px-4 py-2 border border-black">{task.assignTo}</td>
                <td className="px-4 py-2 border border-black">{task.priority}</td>
                <td className="px-4 py-2 border border-black">{task.status}</td>
                <td className="px-4 py-2 border border-black border-r-0">{task.dueDate}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
