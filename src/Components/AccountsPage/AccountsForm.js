import React, { useState } from "react";

const API_URL = "https://api.jsonbin.io/v3/b/6890a96eae596e708fc14add";
const API_KEY = "$2a$10$G/HlnQAYpisDw2MDqTuJqefIWbRD3NM39enboXGgbNomTtQZiSmYG";

const AccountsForm = ({ onClose, onAccountAdded }) => {
  const [formData, setFormData] = useState({
    accountId: '',
    company: '',
    industryName: '',
    location: '',
    status: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Fetch existing accounts
      const res = await fetch(API_URL, {
        headers: { "X-Master-Key": API_KEY }
      });
      const json = await res.json();
      const oldAccounts = json.record || [];

      // 2. Add new account
      const updatedAccounts = [...oldAccounts, formData];

      // 3. Send updated list back to API
      await fetch(API_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": API_KEY
        },
        body: JSON.stringify(updatedAccounts)
      });

      console.log("✅ Account added successfully");

      // 4. Refresh table and close modal
      onAccountAdded();
    } catch (err) {
      console.error("❌ Error updating accounts:", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white border border-gray-300 rounded-xl p-6 w-[40rem] shadow-lg relative font-sans">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black font-bold hover:text-red-500 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Add New Account</h2>
        <form onSubmit={handleSubmit}>
          {["accountId", "company", "industryName", "location", "status"].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-gray-700 font-semibold capitalize mb-1">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          ))}
          <div className="flex justify-end mt-6">
            <button type="button" onClick={onClose} className="px-4 py-2 mr-3 border rounded-md">
              Cancel
            </button>
            <button type="submit" className="px-6 py-2 bg-blue-900 text-white rounded-md font-semibold">
              Add Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountsForm;
