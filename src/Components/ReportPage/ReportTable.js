import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tablerow from "../Universal-Components/Tablerow";

const API_URL = "https://api.jsonbin.io/v3/b/695fc4e8ae596e708fcdc7e3";
const API_KEY = "$2a$10$G/HlnQAYpisDw2MDqTuJqefIWbRD3NM39enboXGgbNomTtQZiSmYG";

const ReportTable = ({ refreshFlag }) => {
  const [reports, setReports] = useState([]);

  const fetchReports = async () => {
    try {
      const res = await fetch(API_URL, {
        headers: { "X-Master-Key": API_KEY },
      });
      const data = await res.json();

      // JSONBin v3 nesting
      const records = data?.record?.record;
      setReports(Array.isArray(records) ? records : []);
    } catch (err) {
      console.error("Fetch error:", err);
      setReports([]);
    }
  };

  useEffect(() => {
    fetchReports();
  }, [refreshFlag]);

  const handleRemove = async (index) => {
    const updatedReports = reports.filter((_, i) => i !== index);

    await fetch(API_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY,
      },
      body: JSON.stringify({
        record: updatedReports,
      }),
    });

    setReports(updatedReports);
  };

  return (
    <div className="mt-16 border border-gray-300 border-b-0 h-64 overflow-y-auto">
      <table className="min-w-full text-center font-sans">
        <thead className="bg-cyan-100 sticky top-0 z-10">
          <tr>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black border-l-0">
              SL NO
            </th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">
              Project ID
            </th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">
              Project Name
            </th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black">
              View / Download
            </th>
            <th className="px-4 py-3 text-blue-950 font-bold border border-black border-r-0">
              Remove
            </th>
          </tr>
        </thead>

        <tbody>
          {reports.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-gray-500 py-4">
                <Tablerow />
              </td>
            </tr>
          ) : (
            reports.map((report, index) => (
              <tr
                key={report.projectId}
                className={index % 2 === 0 ? "bg-cyan-50" : "bg-cyan-100"}
              >
                <td className="px-4 py-2 border border-black border-l-0">
                  {report.slNo}
                </td>
                <td className="px-4 py-2 border border-black">
                  {report.projectId}
                </td>
                <td className="px-4 py-2 border border-black">
                  {report.projectName}
                </td>
                <td className="px-4 py-2 border border-black">
                  <Link
                    to="/report/analytics"
                    className="text-blue-600 underline"
                  >
                    View
                  </Link>
                </td>
                <td
                  className="px-4 py-2 border border-black border-r-0 text-red-600 cursor-pointer hover:underline"
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
