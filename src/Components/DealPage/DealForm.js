import React, { useState } from 'react';

const API_URL = "https://api.jsonbin.io/v3/b/689c11e3ae596e708fc8c887";
const API_KEY = "$2a$10$G/HlnQAYpisDw2MDqTuJqefIWbRD3NM39enboXGgbNomTtQZiSmYG";

const DealForm = ({ onSubmitSuccess, onClose }) => {
  const [formData, setFormData] = useState({
    dealId: '',
    dealName: '',
    company: '',
    amount: '',
    status: '',
    action: '',
    closeDate: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch existing deals
      const res = await fetch(API_URL, { headers: { "X-Master-Key": API_KEY } });
      const data = await res.json();
      const deals = data.record || [];

      // Add new deal
      const updatedDeals = [...deals, formData];

      // Save to API
      await fetch(API_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": API_KEY
        },
        body: JSON.stringify(updatedDeals)
      });

      onSubmitSuccess();
    } catch (err) {
      console.error("Error adding deal:", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="relative bg-white border border-gray-300 rounded-xl p-4 w-[40rem] mx-auto shadow-lg font-sans">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl font-bold focus:outline-none"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4 text-blue-900">Add New Deal</h2>

        <form onSubmit={handleSubmit}>
          {["dealId", "dealName", "company", "amount", "status", "action", "closeDate"].map((field) => (
            <div className="mb-3" key={field}>
              <label className="block text-gray-700 font-semibold capitalize mb-1">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type={field === "closeDate" ? "date" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="w-full px-2 py-1 border border-gray-300 rounded-md"
              />
            </div>
          ))}

          <div className="flex justify-end mt-5">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 mr-2 border border-gray-400 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-1.5 bg-blue-900 text-white rounded-md font-semibold hover:bg-blue-800"
            >
              Add Deal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DealForm;
