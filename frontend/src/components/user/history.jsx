import React, { useState, useEffect } from 'react';

const ListComponent = () => {
  const [data, setData] = useState([]);
  const username = localStorage.getItem('username');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://localhost:3000/userData?username=${username}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div>
      <h2>List Component</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <div>
              <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
            </div>
            <div>
              <p>{item.date}</p>
              <p>{item.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
