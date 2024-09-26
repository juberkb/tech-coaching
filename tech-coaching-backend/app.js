const express = require('express');
const app = express();
const cookieParse = require('cookie-parser');
const path=require('path');
// const db=require

const db=require("./config/mongoose-connection")

// Middleware functions
// const cors = require('cors');
const coursesRouter=require("./routes/courseRouter")
const usersRouter=require("./routes/usersRouter")
const ownersRouter=require("./routes/ownersRouter")

// // Use middleware (Models)
// app.use(cors());
// // For parsing application/json
// app.use(bodyParser.json()); 

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParse());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs")

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
