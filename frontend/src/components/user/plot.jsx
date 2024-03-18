import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";

const LineChart = () => {
  const [data, setData] = useState([]);

  const dummyData = [
    { month: "January", paper: 10, cardboard: 5, plastic: 15, metal: 10, glass: 8, organic: 20, eWaste: 2 },
    { month: "February", paper: 12, cardboard: 6, plastic: 17, metal: 12, glass: 9, organic: 22, eWaste: 3 },
    { month: "March", paper: 14, cardboard: 7, plastic: 19, metal: 14, glass: 10, organic: 24, eWaste: 4 },
    { month: "April", paper: 16, cardboard: 8, plastic: 21, metal: 16, glass: 11, organic: 26, eWaste: 5 },
    { month: "May", paper: 18, cardboard: 9, plastic: 23, metal: 18, glass: 12, organic: 28, eWaste: 6 },
    { month: "June", paper: 20, cardboard: 10, plastic: 25, metal: 20, glass: 13, organic: 30, eWaste: 7 },
    { month: "July", paper: 22, cardboard: 11, plastic: 27, metal: 22, glass: 14, organic: 32, eWaste: 8 },
    { month: "August", paper: 24, cardboard: 12, plastic: 29, metal: 24, glass: 15, organic: 34, eWaste: 9 },
    { month: "September", paper: 26, cardboard: 13, plastic: 31, metal: 26, glass: 16, organic: 36, eWaste: 10 },
    { month: "October", paper: 28, cardboard: 14, plastic: 33, metal: 28, glass: 17, organic: 38, eWaste: 11 },
    { month: "November", paper: 30, cardboard: 15, plastic: 35, metal: 30, glass: 18, organic: 40, eWaste: 12 },
    { month: "December", paper: 32, cardboard: 16, plastic: 37, metal: 32, glass: 19, organic: 42, eWaste: 13 }
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.example.com/data");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  // Extracting months and waste percentages
  const months = data.map((item) => item.month);
  const paperPercentages = data.map((item) => item.paper);
  const cardboardPercentages = data.map((item) => item.cardboard);
  const plasticPercentages = data.map((item) => item.plastic);
  const metalPercentages = data.map((item) => item.metal);
  const glassPercentages = data.map((item) => item.glass);
  const organicPercentages = data.map((item) => item.organic);
  const eWastePercentages = data.map((item) => item.eWaste);

  function setDummyData() {
    setData(dummyData);
  }

  return (
    <div>
      <Plot
        data={[
          {
            x: months,
            y: paperPercentages,
            type: "scatter",
            mode: "lines+markers",
            name: "Paper",
            marker: { color: "blue" },
          },
          {
            x: months,
            y: cardboardPercentages,
            type: "scatter",
            mode: "lines+markers",
            name: "Cardboard",
            marker: { color: "green" },
          },
          {
            x: months,
            y: plasticPercentages,
            type: "scatter",
            mode: "lines+markers",
            name: "Plastic",
            marker: { color: "red" },
          },
          {
            x: months,
            y: metalPercentages,
            type: "scatter",
            mode: "lines+markers",
            name: "Metal",
            marker: { color: "orange" },
          },
          {
            x: months,
            y: glassPercentages,
            type: "scatter",
            mode: "lines+markers",
            name: "Glass",
            marker: { color: "purple" },
          },
          {
            x: months,
            y: organicPercentages,
            type: "scatter",
            mode: "lines+markers",
            name: "Organic Waste",
            marker: { color: "yellow" },
          },
          {
            x: months,
            y: eWastePercentages,
            type: "scatter",
            mode: "lines+markers",
            name: "E-Waste",
            marker: { color: "cyan" },
          }
        ]}
        layout={{
          title: "Percentage of Various Types of Waste Over Months",
          xaxis: { title: "Month" },
          yaxis: { title: "Percentage" },
        }}
      />
      <button onClick={setDummyData}>Click me</button>
    </div>
  );
};

export default LineChart;
