import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { COMP_RECORD } from "../../../src/constants/dummydata";

// Incomplete and broken. TODO
const SubTypeDoughnutChart = () => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Method of Victory",
      },
    },
  };

  const data = {
    labels: ["armbar", "gilly", "points", "etc"],
    datasets: [
      {
        data: [3, 4, 5, 6],
        hoverOffset: 4,
      },
    ],
  };
  return <Doughnut options={options} data={data} />;
};

export default SubTypeDoughnutChart;
