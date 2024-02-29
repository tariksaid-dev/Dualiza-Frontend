import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ["Aire acondicionado", "Equipos de bombeo", "Ofimática", "Otros", "Iluminación interior", "Iluminación exterior"],
  datasets: [{
    label: "Consumo Eléctrico",
    backgroundColor: ["#3798d9", "#36bf6f","#9b5fb8","#f7c609","#bec4c6", "#d57f1b"],
    data: [12.98, 1.18, 56.66, 6.49, 19.82, 2.87]
  }]
};

const options = {
  title: {
    display: true,
    text: 'Consumo Eléctrico'
  }
};

const Consumo = () => (
  <div>
    <h2>Consumo Eléctrico</h2>
    <Doughnut data={data} options={options} />
  </div>
);

export default Consumo;