



import React, { useState } from 'react';

const WasteClassificationForm = () => {
  const [image, setImage] = useState(null);
  const [familySize, setFamilySize] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleFamilySizeChange = (e) => {
    setFamilySize(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('family_size', familySize);

    try {
      const response = await fetch('http://127.0.0.1:5000/classify', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to classify waste');
      }

      const data = await response.json();
      setPrediction(data);
    } catch (error) {
      console.error('Error:', error.message);
      // Handle error if needed
    }
  };

  return (
    <div>
      <h1>Waste Classification</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
        <input
          type="text"
          name="family_size"
          placeholder="Family Size"
          value={familySize}
          onChange={handleFamilySizeChange}
        />
        <button type="submit">Classify</button>
      </form>
      <div id="result">
        {prediction && (
          <div>
            <p>Predicted Category: {prediction.predicted_category}</p>
            <p>Points Earned: {prediction.points}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WasteClassificationForm;

