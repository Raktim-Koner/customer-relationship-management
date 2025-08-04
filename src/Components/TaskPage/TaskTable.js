import React, { useEffect, useState } from "react";

const API_URL = "https://api.jsonbin.io/v3/b/689054c6ae596e708fc11988";
const API_KEY = "$2a$10$G/HlnQAYpisDw2MDqTuJqefIWbRD3NM39enboXGgbNomTtQZiSmYG";

const TaskTable = ({ refreshFlag }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(API_URL, {
          headers: { "X-Master-Key": API_KEY }
        });
        const json = await res.json();
        console.log("Fetched tasks:", json);
        setTasks(json.record || []);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };

    fetchTasks();
  }, [refreshFlag]); // refetch when refreshFlag changes

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
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="6" className="py-4 text-gray-500">
                No tasks found.
              </td>
            </tr>
          ) : (
            tasks.map((task, index) => (
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
