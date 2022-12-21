import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { COMP_RECORD } from "../../../src/constants/dummydata";

const WinLossBarChart = () => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Win/Loss",
      },
    },
    indexAxis: "y" as const,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    barThickness: 26,
  };

  const labels = [""];
  const data = {
    labels,
    datasets: [
      {
        label: "wins",
        data: [COMP_RECORD.filter((i) => i.result === "W").length],
        backgroundColor: "hsla(120, 60%, 67%, 0.705)",
      },
      {
        label: "loss",
        data: [COMP_RECORD.filter((i) => i.result === "L").length],
        backgroundColor: "hsla(3, 100%, 69%, 0.74)",
      },
    ],
  };

  return <Bar data={data} options={options} />;
};

export default WinLossBarChart;
