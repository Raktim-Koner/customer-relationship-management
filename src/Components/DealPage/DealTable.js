import React, { useEffect, useState } from "react";
import Tablerow from "../Universal-Components/Tablerow";

const API_URL = "https://api.jsonbin.io/v3/b/689c11e3ae596e708fc8c887";
const API_KEY = "$2a$10$G/HlnQAYpisDw2MDqTuJqefIWbRD3NM39enboXGgbNomTtQZiSmYG";

const DealTable = ({ refreshFlag, searchTerm, dateFilter, statusFilter }) => {
  const [deals, setDeals] = useState([]);

  const fetchDeals = async () => {
    try {
      const res = await fetch(API_URL, { headers: { "X-Master-Key": API_KEY } });
      const data = await res.json();
      setDeals(data.record || []);
    } catch (err) {
      console.error("Error fetching deals:", err);
    }
  };

  useEffect(() => {
    fetchDeals();
  }, [refreshFlag]);

  // 🔍 Search filter
  const filterBySearch = (data) => {
    if (!searchTerm) return data;
    return data.filter(
      (d) =>
        d.dealId.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
        d.dealName.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
  };

  // 📅 Date filter
  const filterByDate = (data) => {
    if (!dateFilter.start && !dateFilter.end) return data;

    const start = dateFilter.start ? new Date(dateFilter.start) : null;
    const end = dateFilter.end ? new Date(dateFilter.end) : null;

    return data.filter((d) => {
      const closeDate = new Date(d.closeDate);
      if (start && closeDate < start) return false;
      if (end && closeDate > end) return false;
      return true;
    });
  };

  // 📌 Status filter
  const filterByStatus = (data) => {
    if (!statusFilter) return data;
    return data.filter(
      (d) => d.status.toLowerCase().trim() === statusFilter.toLowerCase().trim()
    );
  };

  // ✅ Apply all filters
  const filteredDeals = filterByStatus(filterBySearch(filterByDate(deals)));

  return (
    <div className="mt-16 border border-gray-300 border-b-0 h-64 overflow-y-auto">
      <table className="min-w-full text-center font-sans">
        <thead className="bg-cyan-100 sticky top-0 z-10">
          <tr>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black border-l-0">Deal ID</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Deal Name</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Company</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Amount</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Status</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">Action</th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black border-r-0">Close Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredDeals.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-gray-500">
                <Tablerow />
              </td>
            </tr>
          ) : (
            filteredDeals.map((deal, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-cyan-50" : "bg-cyan-100"}>
                <td className="px-4 py-2 border border-black border-l-0">{deal.dealId}</td>
                <td className="px-4 py-2 border border-black">{deal.dealName}</td>
                <td className="px-4 py-2 border border-black">{deal.company}</td>
                <td className="px-4 py-2 border border-black">{deal.amount}</td>
                <td className="px-4 py-2 border border-black">{deal.status}</td>
                <td className="px-4 py-2 border border-black">{deal.action}</td>
                <td className="px-4 py-2 border border-black border-r-0">{deal.closeDate}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DealTable;
