// const registerUser = (req, res) => {
//   // Handle user registration logic here
//   res.send('User registered successfully');
// };

// const loginUser = (req, res) => {
//   // Handle user login logic here
//   res.send('User logged in successfully');
// };

// const logoutUser = (req, res) => {
//   // Handle user logout logic here
//   res.send('User logged out successfully');
// };

// module.exports = {
//   registerUser,
//   loginUser,
//   logoutUser,
// };


const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Make sure you have a User model
const SECRET_KEY = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Register a new user
const registerUser = async (req, res) => {
  const { fullname, email, password } = req.body;

  // Validate required fields
  if (!fullname || !email || !password) {
    return res.status(400).send('Please provide all required fields');
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).send('User registered successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error registering user');
  }
};

// User login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate required fields
  if (!email || !password) {
    return res.status(400).send('Please provide both email and password');
  }

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('User does not exist');
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send('Invalid credentials');
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' });

    res.cookie('token', token, { httpOnly: true }).send('User logged in successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error logging in user');
  }
};

// User logout
const logoutUser = (req, res) => {
  // Clear the JWT cookie
  res.clearCookie('token').send('User logged out successfully');
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
