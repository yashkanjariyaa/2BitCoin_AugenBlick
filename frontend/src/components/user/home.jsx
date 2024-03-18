import React from "react";
import ImageUploader from "./imageUpload";
import ListComponent from "./history";
import LineChart from "./plot";
import Leaderboard from "./leaderBoard";
import DataViewer from "./dataViewerCard";
import FamilyPointsCalculator from "./familyPOints";
const Home = () => {
    return(
        <div>
            <div>
                <ImageUploader/>
                <ListComponent/>
                <LineChart/>
                <DataViewer/>
                <Leaderboard/>
                <FamilyPointsCalculator/>
            </div>
        </div>
    )
}

export default Home;