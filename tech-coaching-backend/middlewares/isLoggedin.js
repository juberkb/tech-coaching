// module.exports = (req, res, next) => {
//     // Dummy middleware to check if the user is logged in
//     // This is just an example, you can replace this with real authentication logic
//     if (req.isAuthenticated && req.isAuthenticated()) {
//       return next();
//     }
//     res.redirect('/');
//   };
  

const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'your_jwt_secret_key';

const isLoggedin = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send('Access Denied. Please log in.');
  }

  try {
    const verified = jwt.verify(token, SECRET_KEY);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};

module.exports = isLoggedin;
