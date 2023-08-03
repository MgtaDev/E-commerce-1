import React from "react";
import { Chart } from "react-google-charts";


const Dashboard = () => {
    const data = [
        ['Mes', 'Julio','Agosto', 'Septiembre'],
        ['Labial',  400, 1000,      400],
        ['Pinta Uñas',  200, 1170,      460],
        ['Rimel',  400, 660,       1120],
        ['Base',  400, 1030,      540]
    ];
    const options = {
      title: "Ventas del mes",
      curveType: 'function',
      legend: { position: 'rigth' }
    };

    return (
    <div>
      <Chart
        chartType="LineChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};

export default Dashboard;
