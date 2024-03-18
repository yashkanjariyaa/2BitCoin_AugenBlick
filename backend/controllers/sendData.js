const sendData = async (req, res) => {
    try {
      // Extract data from the request body
      const { predicted_category, points_earned, username } = req.body;
  
      // Create a new document using the Mongoose model
      const newData = new DataModel({
        predicted_category,
        points_earned,
        username
      });
  
      // Save the document to MongoDB
      await newData.save();
  
      // Respond with success message
      res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

module.exports = sendData;