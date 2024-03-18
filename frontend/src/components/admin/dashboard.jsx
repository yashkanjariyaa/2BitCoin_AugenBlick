import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import "../../App.css";

const App = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    // Fetch dashboard data
    const fetchData = async () => {
      try {
        const response = await fetch("/dashboard");
        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data");
        }
        const data = await response.json();
        setDashboardData(data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <header>
        <h1 className="welcome-heading">Welcome Admin</h1>
      </header>
      <div className="info-grid">
        <div className="info-item">
          <h2>Number of Users:</h2>
          <p>{Math.floor(Math.random() * 500) + 1}</p>
        </div>
        <div className="info-item">
          <h2>Coupons Available:</h2>
          <p>{Math.floor(Math.random() * 50) + 1}</p>
        </div>
        <div className="info-item">
          <h2>Flat with Most Points</h2>
          <p>{'507'}</p>
        </div>
        <div className="info-item">
          <h2>Most Used Coupon:</h2>
          <p>{'SEE50'}</p>
        </div>
      </div>
      <div className="dashboard">
        <div className="dashboard-item">
          <Plot
            data={[
              {
                type: "bar",
                x: ["Cardboard", "Paper", "Plastic", "Trash"],
                y: [50, 30, 40, 20],
                marker: {
                    color: ["#EF553B", "#00CC96", "#AB63FA", "#FFA15A"],
                  },
              },
              
            ]}
            layout={{ title: "Waste Classification" }}
          />
        </div>
        <div className="dashboard-item">
          <Plot
            data={[
              {
                type: "bar",
                x: ["Metal", "Glass"],
                y: [30, 25],
              },
            ]}
            layout={{ title: "Metal vs Glass" }}
          />
        </div>
        <div className="dashboard-item">
          <Plot
            data={[
              {
                type: "bar",
                x: ["Jan", "Feb", "Mar", "Apr", "May"],
                y: [20, 25, 30, 35, 40],
              },
            ]}
            layout={{ title: "Paper" }}
          />
        </div>
        <div className="dashboard-item">
          <Plot
          className="plot-container"
            data={[
              {
                type: "bar",
                x: ["Week 1", "Week 2", "Week 3", "Week 4"],
                y: [15, 20, 25, 30],
              },
            ]}
            layout={{ title: "Plastic" }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
