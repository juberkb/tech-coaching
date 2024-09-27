const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const expressSession = require('express-session');
const flash = require('connect-flash');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Require routers
const coursesRouter = require('./routes/courseRouter');
const usersRouter = require('./routes/usersRouter');
const ownersRouter = require('./routes/ownersRouter');
const indexRouter = require('./routes/index');

// Connect to MongoDB
const db = require('./config/mongoose-connection');

// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET, // Using secret from .env
  })
);
app.use(flash());

// Middleware to log request details
app.use((req, res, next) => {
   // Pass control to the next middleware or route handler
  console.log('Request received at', Date.now(), 'for', req.method, req.url);
  next();
});

// Static files and views setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
app.use('/', indexRouter);
app.use('/Owners', ownersRouter);
app.use('/Users', usersRouter);
app.use('/Courses', coursesRouter);

// Start server
const PORT = process.env.PORT ||4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
