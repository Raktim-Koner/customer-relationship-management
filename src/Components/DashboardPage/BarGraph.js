import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const API_URL = "https://api.jsonbin.io/v3/b/688f8e46f7e7a370d1f2ec3c";
const API_KEY = "$2a$10$G/HlnQAYpisDw2MDqTuJqefIWbRD3NM39enboXGgbNomTtQZiSmYG";

const BarGraph = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL, {
          headers: {
            "X-Master-Key": API_KEY,
          },
        });
        const json = await res.json();
        const data = json.record; // jsonbin stores in "record"

        // Current year
        const currentYear = new Date().getFullYear();

        // Quarter sums
        let quarters = {
          "J-M": 0,
          "A-J": 0,
          "J-S": 0,
          "O-D": 0,
        };

        data.forEach((item) => {
          const date = new Date(item.dueDate);
          const year = date.getFullYear();
          if (year === currentYear) {
            const month = date.getMonth() + 1; // 1-12
            let amount = parseInt(item.amount.replace(/[^0-9]/g, "")); // remove "$" and ","

            if (month >= 1 && month <= 3) quarters["J-M"] += amount;
            else if (month >= 4 && month <= 6) quarters["A-J"] += amount;
            else if (month >= 7 && month <= 9) quarters["J-S"] += amount;
            else if (month >= 10 && month <= 12) quarters["O-D"] += amount;
          }
        });

        // Prepare chart.js dataset
        setChartData({
          labels: ["J-M", "A-J", "J-S", "O-D"],
          datasets: [
            {
              label: "Amount ($)",
              data: Object.values(quarters),
              backgroundColor: "rgba(15, 120, 221, 1)",
              borderColor: "rgba(15, 120, 221, 1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return (
  <div className="h-56 w-[40rem] bg-slate-50 ml-10 mr-9 flex items-center justify-center">
    {chartData ? (
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Quarterly Project Amounts (2025)" },
          },
        }}
      />
    ) : (
      <p className="text-gray-500 font-medium">Loading chart...</p>
    )}
  </div>
);

};

export default BarGraph;
