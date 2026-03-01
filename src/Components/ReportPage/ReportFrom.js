// const API_URL = "https://api.jsonbin.io/v3/b/695fc4e8ae596e708fcdc7e3";
// const API_KEY = "$2a$10$G/HlnQAYpisDw2MDqTuJqefIWbRD3NM39enboXGgbNomTtQZiSmYG";


import React, { useState } from "react";
import { addReport } from "../../Api";

const ReportForm = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    slNo: "",
    projectId: "",
    projectName: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addReport(formData);
      onSuccess();
      onClose();
    } catch (err) {
      console.error("Error adding report:", err);
    }
  };

  return (
    <div className="relative bg-white border rounded-xl p-6 w-[40rem] mx-auto mt-20">
      <button onClick={onClose} className="absolute top-4 right-4">×</button>

      <h2 className="text-2xl font-bold mb-4">Add New Report</h2>

      <form onSubmit={handleSubmit}>
        {["slNo", "projectId", "projectName"].map((field) => (
          <div key={field} className="mb-4">
            <label className="block font-semibold mb-1">
              {field}
            </label>
            <input
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>
        ))}

        <div className="flex justify-end">
          <button type="button" onClick={onClose} className="mr-3">
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-900 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReportForm;