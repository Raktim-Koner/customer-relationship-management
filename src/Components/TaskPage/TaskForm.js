import React, { useState } from "react";

const API_URL = "https://api.jsonbin.io/v3/b/689054c6ae596e708fc11988";
const API_KEY = "$2a$10$G/HlnQAYpisDw2MDqTuJqefIWbRD3NM39enboXGgbNomTtQZiSmYG";

const TaskForm = ({ onClose, onTaskAdded }) => {
  const [formData, setFormData] = useState({
    taskId: "",
    taskName: "",
    assignTo: "",
    priority: "",
    status: "",
    dueDate: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Fetch old tasks from API
      const res = await fetch(API_URL, {
        headers: { "X-Master-Key": API_KEY }
      });
      const json = await res.json();
      const oldTasks = json.record || [];

      // 2. Add the new task
      const updatedTasks = [...oldTasks, formData];

      // 3. Send updated list back to API
      await fetch(API_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": API_KEY
        },
        body: JSON.stringify(updatedTasks)
      });

      console.log("✅ Task added successfully");

      // 4. Trigger refresh of TaskTable
      onTaskAdded();

      // 5. Close the form
      onClose();
    } catch (err) {
      console.error("❌ Error updating tasks:", err);
    }
  };

  return (
    <div className="relative bg-white border border-gray-300 rounded-xl p-6 w-[40rem] mx-auto mt-10 shadow-lg font-sans">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl font-bold focus:outline-none"
      >
        ×
      </button>

      <h2 className="text-2xl font-bold mb-4 text-blue-900">Add New Task</h2>
      <form onSubmit={handleSubmit}>
        {["taskId", "taskName", "assignTo", "priority", "status", "dueDate"].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block text-gray-700 font-semibold capitalize mb-1">
              {field.replace(/([A-Z])/g, " $1")}
            </label>
            <input
              type={field === "dueDate" ? "date" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        ))}

        <div className="flex justify-end mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 mr-3 border rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-900 text-white rounded-md font-semibold"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
