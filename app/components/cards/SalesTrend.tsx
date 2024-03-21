import React from "react";
import Chart from "../charts/Chart";

const SalesTrend = () => {
  const generateRandomValues = (
    numPoints: number,
    min: number,
    max: number
  ) => {
    const data = [];
    for (let i = 0; i < numPoints; i++) {
      data.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return data;
  };

  const data = {
    labels: [
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
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        backgroundColor: "rgba(52, 202, 165, 0.10)",
        borderRadius: 20,
        hoverBackgroundColor: "rgba(52, 202, 165, 0.50)",
        data: generateRandomValues(12, 100, 50000),
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white text-gray-800 dark:bg-slate-900 dark:text-gray-200 p-4 mr-2 rounded-lg cards dark:border-0">
      <div className="flex justify-between mx-auto items-center mb-4">
        <p className="whitespace-nowrap mr-2 text-lg font-medium dark:text-gray-300">
          Sales Trends
        </p>
        <p className="whitespace-nowrap text-sm lg:text-md font-light text-gray-500 sm:block">
          Sort by:
          <select
            id="countries"
            data-dropdown-toggle="dropdown"
            className="cursor-pointer text-gray-700 dark:text-gray-300 font-medium border border-gray-500 rounded-full text-sm px-4 mx-2 py-2 text-center inline-flex items-center bg-transparent"
          >
            <option defaultValue="US">Weekly</option>
            <option value="CA">Monthly</option>
            <option value="US">Yearly</option>
          </select>
        </p>
      </div>
      <Chart chartData={data} chartOptions={options} />
    </div>
  );
};

export default SalesTrend;
