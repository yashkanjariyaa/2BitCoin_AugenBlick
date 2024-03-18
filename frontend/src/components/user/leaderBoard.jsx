import React, { useState, useEffect } from 'react';
import dummyData from './constants/leaderBoardData';
import '../../assets/style/leaderBoard.css'; // Import the CSS file with styles

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [timeframe, setTimeframe] = useState('week'); // Default timeframe

  useEffect(() => {
    fetchLeaderboardData();
  }, [timeframe]);

  const fetchLeaderboardData = async () => {
    try {
      let data;
      if (timeframe === 'week') {
        data = dummyData.week;
      } else if (timeframe === 'month') {
        data = dummyData.month;
      } else if (timeframe === 'year') {
        data = dummyData.year;
      }

      // Add flat numbers to the dummy data
      data.forEach((user, index) => {
        user.rank = index + 1;
      });

      // Set only top 5 users
      setUsers(data.slice(0, 5));
    } catch (error) {
      console.error('Error fetching leaderboard data: ', error);
    }
  };

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
  };

  // Function to set dummy data (for testing)
  function setDummyData() {
    // Reset users to dummy data for the selected timeframe
    fetchLeaderboardData();
  }

  return (
    <div className="leaderboard-container"> {/* Apply container class */}
      <h2>Leaderboard</h2>
      <div className="timeframe-buttons"> {/* Apply class for buttons container */}
        <button onClick={() => handleTimeframeChange('week')}>Week</button>
        <button onClick={() => handleTimeframeChange('month')}>Month</button>
        <button onClick={() => handleTimeframeChange('year')}>Year</button>
      </div>
      <table className="leaderboard-table"> {/* Apply class for table */}
        <thead>
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.rank}</td>
              <td>{user.name}</td>
              <td>{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
