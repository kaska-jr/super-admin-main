"use client"
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,  
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ChartComponentProps {
  chartData: {
    labels: string[];
    datasets: { backgroundColor: string; borderRadius: number; hoverBackgroundColor: string; data: number[] }[];
  };
  chartOptions: {
    maintainAspectRatio: boolean;
    plugins: { legend: { display: boolean } };
    scales: { y: { beginAtZero: boolean } };
  };
}

const Chart: React.FC<ChartComponentProps> = ({ chartData, chartOptions }) => {
  return (
    <div className="overflow-x-auto custom-scrollbar h-[250px] cursor-pointer">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default Chart;
