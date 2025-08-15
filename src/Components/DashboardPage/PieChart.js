import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Tooltip, Legend, ArcElement);

const API_URL = "https://api.jsonbin.io/v3/b/689c11e3ae596e708fc8c887";
const API_KEY = "$2a$10$G/HlnQAYpisDw2MDqTuJqefIWbRD3NM39enboXGgbNomTtQZiSmYG";

const PieChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL, {
          method: "GET",
          headers: {
            "X-Master-Key": API_KEY
          }
        });
        const json = await res.json();
        const deals = json.record;

        // Count statuses
        const statusCounts = deals.reduce((acc, deal) => {
          acc[deal.status] = (acc[deal.status] || 0) + 1;
          return acc;
        }, {});

        // Define fixed colors
        const colorMap = {
          "Reject": "rgba(255, 99, 132, 0.6)",   // red
          "New": "rgba(75, 192, 75, 0.6)",       // green
          "Running": "rgba(255, 206, 86, 0.6)"   // yellow
        };

        const borderColorMap = {
          "Reject": "rgba(255, 99, 132, 5)",
          "New": "rgba(75, 192, 75, 5)",
          "Running": "rgba(255, 206, 86, 5)"
        };

        // Prepare chart data
        setChartData({
          labels: Object.keys(statusCounts),
          datasets: [
            {
              label: 'Deals Status',
              data: Object.values(statusCounts),
              backgroundColor: Object.keys(statusCounts).map(status => colorMap[status] || "rgba(200, 200, 200, 0.6)"),
              borderColor: Object.keys(statusCounts).map(status => borderColorMap[status] || "rgba(200, 200, 200, 1)"),
              borderWidth: 1
            }
          ]
        });
      } 
      catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    plugins: {
      legend: {
        position: 'right', // Moves legend to right side
        labels: {
          boxWidth: 15,
          padding: 10
        }
      }
    },
    maintainAspectRatio: false
  };

  return (
    <div className="h-56 w-[32rem] bg-slate-50 ml-10 p-4">
      <h2 className="text-black font-bold ">Deal Status</h2>
      <div className="h-[10.8rem] ">
          {chartData ? (
            <Pie data={chartData} options={options} />
          ) : (
            <p className="text-black">Loading chart...</p>
          )}
      </div>
    </div>
  );
};

export default PieChart;
