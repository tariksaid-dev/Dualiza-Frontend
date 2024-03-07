import React, { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ThemeProviderContext } from "@/context/DarkModeContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors
);



export default function Facturacion() {

  const { theme } = useContext(ThemeProviderContext);

  const labels = [
    "01/10/2018 - 31/10/2018",
    "01/11/2018 - 30/11/2018",
    "01/12/2018 - 31/12/2018",
    "01/01/2019 - 31/01/2019",
    "01/02/2019 - 28/02/2019",
    "01/03/2019 - 31/03/2019",
    "01/04/2019 - 30/04/2019",
    "01/05/2019 - 31/05/2019",
    "01/06/2019 - 30/06/2019",
    "01/07/2019 - 31/07/2019",
    "01/08/2019 - 31/08/2019",
    "01/09/2019 - 30/09/2019"
  ];
  
  const kWhData = [
    14000,
    13000,
    9000,
    21000,
    15000,
    14500,
    13000,
    12000,
    6000,
    6000,
    7000,
    4000,
  ];
  
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Consumo Anual Energía Eléctrica (kWh)",
        color: "#e75129",
      },
    },
    scales: {
      x: {
        ticks: {
          color: theme === "light" ? "black" : "white"
        }
      },
      y: {
        ticks: {
          color: theme === "light" ? "black" : "white"
        }
      }
    }
  };
  
  const data = {
    labels,
    datasets: [
      {
        label: "(kWh)",
        data: kWhData,
        backgroundColor: '#e75129',
      },
    ],
  };

  return (
    <div className="relative w-full md:h-72 lg:h-96 xl:h-[420px] py-10">
      <Bar options={options} data={data} />
    </div>
  )
}
