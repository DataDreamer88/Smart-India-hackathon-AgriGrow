import React from "react";
import Chart from "react-apexcharts";

const CustomerReview = () => {
  // First Graph (Analysis of Major Crops)
  const data = {
    series: [
      {
        name: "Soybean",
        data: [4000, 4200, 4400, 4600, 4500, 4700, 4900],  // Soybean price (₹/quintal) over 7 months
      },
      {
        name: "Rice",
        data: [3500, 3400, 3600, 3800, 3900, 3700, 4000],  // Rice price (₹/quintal) over 7 months
      },
      {
        name: "Wheat",
        data: [2200, 2300, 2100, 2500, 2400, 2600, 2800],  // Wheat price (₹/quintal) over 7 months
      },
      {
        name: "Corn",
        data: [1800, 1900, 1850, 2000, 2100, 1950, 2200],  // Corn price (₹/quintal) over 7 months
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "100px",
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff0000", "#ffd700", "#00ff00", "#0000ff"],  // Consistent colors for Soybean (red), Rice (gold), Wheat (green), Corn (blue)
      },
      tooltip: {
        enabled: true,
        marker: {
          fillColors: ["#ff0000", "#ffd700", "#00ff00", "#0000ff"],  // Standardized colors for tooltip markers
        },
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2024-01-01T00:00:00.000Z",
          "2024-02-01T00:00:00.000Z",
          "2024-03-01T00:00:00.000Z",
          "2024-04-01T00:00:00.000Z",
          "2024-05-01T00:00:00.000Z",
          "2024-06-01T00:00:00.000Z",
          "2024-07-01T00:00:00.000Z",
        ],  // Timeline with monthly data
      },
      yaxis: {
        show: true,  // Show the y-axis to indicate commodity prices
        title: {
          text: "Price (in ₹/quintal)",
        },
      },
      toolbar: {
        show: false,
      },
      legend: {
        show: true,  // Show the legend
        position: "top",  // Position legend at the top
        markers: {
          width: 0,  // Hide marker swatches (no colors in the legend)
        },
        labels: {
          useSeriesColors: false,
        },
        fontSize: "14px",  // Adjust font size
        fontWeight: 700,  // Make the legend bold
      },
    },
  };

  // Second Graph (Wheat Prediction Graph with new data)
  const wheatPredictionData = {
    series: [
      {
        name: "Wheat Prediction",
        data: [
          { x: "2024-09-09T00:00:00.000Z", y: 1916.621640 },
          { x: "2024-09-10T00:00:00.000Z", y: 1925.771120 },
          { x: "2024-09-12T00:00:00.000Z", y: 1931.094017 },
          { x: "2024-09-15T00:00:00.000Z", y: 1933.886070 },
          { x: "2024-09-16T00:00:00.000Z", y: 1934.979184 },
          { x: "2024-09-17T00:00:00.000Z", y: 1935.234560 },
          { x: "2025-11-02T00:00:00.000Z", y: 1995.215794 },
          { x: "2025-11-03T00:00:00.000Z", y: 1995.644454 },
          { x: "2025-12-01T00:00:00.000Z", y: 1996.073114 },
          { x: "2025-12-02T00:00:00.000Z", y: 1996.501774 },
          { x: "2025-12-03T00:00:00.000Z", y: 1996.930434 },
        ],  // New Wheat prediction data with Date and Price
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "100px",
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#00ff00"],  // Consistent color for Wheat prediction (green)
      },
      tooltip: {
        enabled: true,
        marker: {
          fillColors: ["#00ff00"],  // Standardized color for tooltip markers
        },
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        title: {
          text: "Date",
        },
      },
      yaxis: {
        show: true,  // Show the y-axis to indicate commodity prices
        title: {
          text: "Price (in ₹/quintal)",
        },
      },
      toolbar: {
        show: false,
      },
      legend: {
        show: false,  // Hide the legend for the second chart
      },
    },
  };

  return (
    <div className="CustomerReview">
      {/* Wheat Prediction Graph */}
      <div className="wheat-prediction-title" style={{ marginBottom: "20px" }}>
        <h2>Wheat Prediction Graph</h2>
      </div>
      <Chart options={wheatPredictionData.options} series={wheatPredictionData.series} type="area" height={350} />

      {/* Analysis of Major Crops */}
      <div className="major-crops-title" style={{ marginTop: "40px" }}>
        <h2>Analysis of Major Crops</h2>
      </div>
      <Chart options={data.options} series={data.series} type="area" height={350} />
    </div>
  );
};

export default CustomerReview;
