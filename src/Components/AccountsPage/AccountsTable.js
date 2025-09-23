import React, { useEffect, useState } from "react";
import Tablerow from "../Universal-Components/Tablerow";

const API_URL = "https://api.jsonbin.io/v3/b/6890a96eae596e708fc14add";
const API_KEY = "$2a$10$G/HlnQAYpisDw2MDqTuJqefIWbRD3NM39enboXGgbNomTtQZiSmYG";

const AccountsTable = ({ refreshFlag, searchTerm, statusFilter }) => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const res = await fetch(API_URL, {
          headers: { "X-Master-Key": API_KEY },
        });
        const json = await res.json();
        setAccounts(json.record || []);
      } catch (err) {
        console.error("Error fetching accounts:", err);
      }
    };
    fetchAccounts();
  }, [refreshFlag]);

  // ✅ Apply search + filter
  const filteredAccounts = accounts.filter((acc) => {
    const matchesSearch =
      acc.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      acc.industryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      acc.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "" ||
      acc.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="mt-16 border border-gray-300 border-b-0 h-64 overflow-y-auto">
      <table className="min-w-full text-center font-sans">
        <thead className="bg-cyan-100 sticky top-0 z-10">
          <tr>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black border-l-0">
              Account ID
            </th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">
              Company
            </th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">
              Industry Name
            </th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">
              Location
            </th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black border-r-0">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredAccounts.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-gray-500">
                <Tablerow />
              </td>
            </tr>
          ) : (
            filteredAccounts.map((account, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-cyan-50" : "bg-cyan-100"}
              >
                <td className="px-4 py-2 border border-black border-l-0">
                  {account.accountId}
                </td>
                <td className="px-4 py-2 border border-black">
                  {account.company}
                </td>
                <td className="px-4 py-2 border border-black">
                  {account.industryName}
                </td>
                <td className="px-4 py-2 border border-black">
                  {account.location}
                </td>
                <td className="px-4 py-2 border border-black border-r-0">
                  {account.status}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AccountsTable;
