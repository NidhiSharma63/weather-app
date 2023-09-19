import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import useChart from "../hook/useChart";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
    },
  },
};
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Monthly Sales",
      data: [65, 59, 80, 81, 56],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
    },
  ],
};
const Charts = () => {
  const { chartData } = useChart();
  console.log("dataatatata", data);
  return (
    <div>
      Charts
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Charts;
