import React from "react";
import ImageUploader from "./imageUpload";
import ListComponent from "./history";
import LineChart from "./plot";
import Leaderboard from "./leaderBoard";
import DataViewer from "./dataViewerCard";
import FamilyPointsCalculator from "./familyPoints";
import WasteClassificationForm from "./imageUpload";
const Home = () => {
  return (
    <div>
      <div>
        <WasteClassificationForm />
        <ListComponent />
        <LineChart />
        <DataViewer />
        <Leaderboard />
      </div>
    </div>
  );
};

export default Home;
