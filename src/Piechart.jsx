import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Crowdsale investors: 80%", "Foundation: 20%"],
    datasets: [
      {
        label: "Distribution",
        data: [80, 20], // Percentages for the segments
        backgroundColor: ["#007bff", "#ffa500"], // Colors for each segment
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right", // Moves legend to the right
        labels: {
          usePointStyle: true, // Adds circular markers
          boxWidth: 100,
          color: "black", // Sets the legend label text color to black
          font: {
            size: 14, // Sets the font size for the legend text
          },
          padding: 20, // Adds left margin to the circle label
        },
      },
    },
    cutout: "70%", // Creates the "donut" effect
  };

  return (
    <div className='flex flex-col '>
      <h1 className='text-2xl font-semibold'>Tokenomics</h1>
      <div className='text-lg font-semibold mt-2'>Initial Distribution</div>
      <div className='w-full h-80 mb-0 '>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
