// UserController.js

const User = require('../models/userData'); // Assuming you have a User model defined

const getUserData = async (req, res) => {
  try {
    const { username } = req.body;
    if (!username) {
      return res.status(400).json({ message: 'Username is required' });
    }

    // Assuming User model has a field called 'username'
    const userData = await User.findOne({ username }); 

    if (!userData) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Assuming userData has a field called 'data' which contains the required data
    const responseData = userData.data; 

    res.json(responseData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getUserData };
