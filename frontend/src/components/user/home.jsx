import React from "react";
import "../../assets/style/home.css"; // Assuming you have a separate CSS file for styling
import ImageUploader from "./imageUpload";
import ListComponent from "./history";
import LineChart from "./plot";
import Leaderboard from "./leaderBoard";
import DataViewer from "./dataViewerCard";
import FamilyPointsCalculator from "./familyPoints";
import WasteClassificationForm from "./imageUpload";

const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <WasteClassificationForm className="component" />
        <ListComponent className="component" />
        <LineChart className="component" />
        <DataViewer className="component" />
        <Leaderboard className="component" />
      </div>
    </div>
  );
};

export default Home;
