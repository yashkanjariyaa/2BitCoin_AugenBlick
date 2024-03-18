const express = require('express');
const cors = require('cors');
const authController = require('./controllers/authController');
const connectDatabase = require('./config/db');
const routes = require('./routes/routes');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// Use CORS middleware to allow requests from localhost:5173
app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());
app.use('/api/auth', authController);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/', routes);
connectDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
