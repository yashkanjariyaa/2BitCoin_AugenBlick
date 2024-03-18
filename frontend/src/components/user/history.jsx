import React, { useState, useEffect } from 'react';
import '../../assets/style/ListComponent.css'; // Import CSS file for component styling

const ListComponent = () => {
  const [data, setData] = useState([]);
  const username = localStorage.getItem('username');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Dummy data as an array of objects
      const dummyData = [
        { image: './constants/data2/image1.jpeg', date: '2024-03-18', name: 'Item 1' },
        { image: './constants/data2/image2.jpeg', date: '2024-03-19', name: 'Item 2' },
        { image: './constants/data2/image3.jpeg', date: '2024-03-20', name: 'Item 3' },
        { image: './constants/data2/image4.jpeg', date: '2024-03-20', name: 'Item 4' },
        { image: './constants/data2/image5.jpeg', date: '2024-03-20', name: 'Item 5' },
        { image: './constants/data2/image6.jpeg', date: '2024-03-20', name: 'Item 6' },
      ];
      

      setData(dummyData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div className="list-component">
      <h2>List Component</h2>
      <ul className="item-list">
        {data.map((item, index) => (
          <li key={index} className="list-item">
            <div className="item-image">
              <img src={item.image} alt={item.name} className="image" />
            </div>
            <div className="item-details">
              <p className="item-date">{item.date}</p>
              <p className="item-name">{item.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
