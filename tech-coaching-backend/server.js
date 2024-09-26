const express = require('express');
const app = express();

// const db=require

// Middleware functions
// const cors = require('cors');
// const bodyParser = require('body-parser');
const coursesRouter=require("./routes/courseRouter")
const usersRouter=require("./routes/usersRouter")
const ownersRouter=require("./routes/ownersRouter")

// // Use middleware (Models)
// app.use(cors());
// // For parsing application/json
// app.use(bodyParser.json()); 
app.use("/Owners", ownersRouter);
app.use("Users", usersRouter);
app.use("/Courses", coursesRouter);

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
