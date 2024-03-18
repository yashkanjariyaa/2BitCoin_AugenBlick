import React, { useState } from 'react';

function FamilyPointsCalculator() {
  const [familySize, setFamilySize] = useState('');
  const [points, setPoints] = useState(null);
  const [error, setError] = useState(null);

  const handleFamilySizeChange = (event) => {
    setFamilySize(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);

    // API endpoint to send the family size
    const apiUrl = 'your_api_endpoint_here';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ familySize: parseInt(familySize) }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then((data) => {
        setPoints(data.points);
      })
      .catch((error) => {
        setError('An error occurred, please try again later.');
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Family Points Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Family Size:
          <input
            type="number"
            value={familySize}
            onChange={handleFamilySizeChange}
            required
          />
        </label>
        <button type="submit">Calculate Points</button>
      </form>
      {points !== null && (
        <div>
          <h2>Points Received: {points}</h2>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default FamilyPointsCalculator;
