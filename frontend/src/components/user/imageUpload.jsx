import React, { useState } from 'react';

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        // Call function to send image data to API
        sendImageToAPI(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const sendImageToAPI = async (imageData) => {
    try {
      const response = await fetch('https://api.example.com/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageData, date: new Date() }),
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      console.log('Image uploaded successfully');
      // Handle success response if needed
    } catch (error) {
      console.error('Error uploading image:', error.message);
      // Handle error if needed
    }
  };

  return (
    <div
      style={{ width: '300px', height: '300px', border: '1px solid black' }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {image ? (
        <img src={image} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      ) : (
        <p>Drop an image here</p>
      )}
    </div>
  );
};

export default ImageUploader;
