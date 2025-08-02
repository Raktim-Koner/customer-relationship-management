import React, { useState } from 'react'

const DealForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    dealId: '',
    dealName: '',
    company: '',
    amount: '',
    status: '',
    action: '',
    closeDate: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    console.log(formData)
  }

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

        <h2 className="text-xl font-bold mb-3 text-blue-900 text-center">Add New Deal</h2>

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
  )
}

export default DealForm
