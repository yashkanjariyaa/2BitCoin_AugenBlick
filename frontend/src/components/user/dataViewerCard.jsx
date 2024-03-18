import React, { useState, useEffect } from 'react';

const DataViewer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/n');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const responseData = await response.json();
      setData(responseData);
      console.log(responseData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div>
      <h2>Data Viewer</h2>
      <div className="data-container">
        {data.map((item, index) => (
          <div key={index} className="data-item">
            <img src={item.image} alt={`Prediction ${index}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
            <p>Prediction: {item.prediction}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataViewer;
