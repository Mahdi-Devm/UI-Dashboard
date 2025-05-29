"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ActiveUsersProps {
  totalUsers: number;
  clicks: string;
  sales: string;
  items: number;
}

const ActiveUsers = ({
  totalUsers,
  clicks,
  sales,
  items,
}: ActiveUsersProps) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.5)",
        },
      },
    },
  };

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
  ];

  const data = {
    labels,
    datasets: [
      {
        data: [400, 300, 150, 300, 350, 400, 500, 350, 300, 200],
        backgroundColor: "rgb(255, 255, 255)",
        borderRadius: 4,
      },
    ],
  };

  return (
    <div className="bgshadow rounded-2xl p-6 h-full">
      <div className="mb-6">
        <h3 className="text-white text-lg font-semibold">Active Users</h3>
        <p className="text-green-400 text-sm">(+23) than last week</p>
      </div>

      <div className="h-[180px] mb-6">
        <Bar options={options} data={data} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-400 text-sm">Users</p>
          <p className="text-white font-semibold">
            {totalUsers.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Clicks</p>
          <p className="text-white font-semibold">{clicks}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Sales</p>
          <p className="text-white font-semibold">{sales}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Items</p>
          <p className="text-white font-semibold">{items}</p>
        </div>
      </div>
    </div>
  );
};

export default ActiveUsers;
