import React, { useContext } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { ThemeProviderContext } from "@/context/DarkModeContext";

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

const Consumo = () => {
  const { theme } = useContext(ThemeProviderContext);

  const data = {
    labels: [
      "Aire acondicionado",
      "Equipos de bombeo",
      "Ofimática",
      "Otros",
      "Iluminación interior",
      "Iluminación exterior",
    ],
    datasets: [
      {
        label: "Consumo Eléctrico",
        backgroundColor: [
          "#3798d9",
          "#36bf6f",
          "#9b5fb8",
          "#f7c609",
          "#bec4c6",
          "#d57f1b",
        ],
        data: [12.98, 1.18, 56.66, 6.49, 19.82, 2.87],
        borderColor: theme === "light" ? "black" : "white",
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Consumo Eléctrico",
        color: "#e75129",
      },
    },
    color: theme === "light" ? "black" : "white",
  };
  
  return (
    <div className="relative w-96 md:h-72 lg:h-96 xl:h-[420px] py-10">
      <Pie data={data} options={options} />
    </div>
  );
};

export default Consumo;
