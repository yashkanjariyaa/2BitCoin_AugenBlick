import React, { useState, useEffect } from 'react';
import dummyData from './constants/leaderBoardData';
const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [timeframe, setTimeframe] = useState('week'); // Default timeframe

  useEffect(() => {
    fetchLeaderboardData();
  }, [timeframe]);

  const fetchLeaderboardData = async () => {
    try {
      const response = await fetch(`API_ENDPOINT/${timeframe}`); // Adjust endpoint according to your API
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching leaderboard data: ', error);
    }
  };

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
  };
  function setDummyData(){
    setUsers(dummyData);
  }
  return (
    <div>
      <h2>Leaderboard</h2>
      <div>
        <button onClick={() => handleTimeframeChange('week')}>Week</button>
        <button onClick={() => handleTimeframeChange('month')}>Month</button>
        <button onClick={() => handleTimeframeChange('year')}>Year</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={setDummyData}>Click me</button>
    </div>
  );
};

export default Leaderboard;
