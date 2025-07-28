import React, { useState } from 'react';

const ReportForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    slNo: '',
    projectId: '',
    projectName: '',
    
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="relative bg-white border border-gray-300 rounded-xl p-6 w-[40rem] mx-auto mt-20 shadow-lg font-sans">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl font-bold focus:outline-none"
      >
        ×
      </button>
      
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Add New Report</h2>
      <form onSubmit={handleSubmit}>
        {["slNo.", "projectId", "projectName"].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block text-gray-700 font-semibold capitalize mb-1">
              {field.replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              type={field === 'dueDate' ? 'date' : 'text'}
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
            Add Report
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReportForm;