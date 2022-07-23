import ChartBar from "./ChartBar";
import "./Chart.css";
import React from "react";

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maValue = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          maxValue={maValue}
          label={dataPoint.label}
          value={dataPoint.value}
        ></ChartBar>
      ))}
      )
    </div>
  );
};

export default Chart;
