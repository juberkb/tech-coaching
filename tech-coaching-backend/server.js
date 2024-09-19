const express = require('express');
const app = express();

// Middleware functions
const cors = require('cors');
const bodyParser = require('body-parser');

// Use middleware
app.use(cors());
app.use(bodyParser.json()); // For parsing application/json

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
