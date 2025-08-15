import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

const API_URL = "https://api.jsonbin.io/v3/b/688f8e46f7e7a370d1f2ec3c";
const API_KEY = "$2a$10$G/HlnQAYpisDw2MDqTuJqefIWbRD3NM39enboXGgbNomTtQZiSmYG";

const LineGraph = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'X-Master-Key': API_KEY
      }
    })
      .then(res => res.json())
      .then(data => {
        const records = data.record || [];

        // Group by year and sum the amounts
        const yearlyData = {};
        records.forEach(item => {
          const year = new Date(item.dueDate).getFullYear();
          const amount = Number(item.amount.replace(/[^0-9.-]+/g, ""));
          yearlyData[year] = (yearlyData[year] || 0) + amount;
        });

        // Sort years and prepare arrays
        const years = Object.keys(yearlyData).sort((a, b) => a - b);
        const amounts = years.map(year => yearlyData[year]);

        setChartData({
          labels: years,
          datasets: [
            {
              label: 'Total Amount by Year',
              data: amounts,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              tension: 0.3,
              fill: true
            }
          ]
        });
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='h-56 w-[40rem] bg-slate-50 ml-10 p-2'>
      <Line
        data={chartData}
        width={600}
        height={400}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'top' },
            title: { 
              display: true, 
              text: 'Scale Overview',
              font: {
                size: 15,
                weight: 'bolder'  // makes it bold
              } 
            }
          },
          scales: {
            y: { beginAtZero: true }
          }
        }}
      />
    </div>
  );
};

export default LineGraph;
