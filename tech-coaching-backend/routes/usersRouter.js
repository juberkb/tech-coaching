// const express = require('express');
// const router = express.Router();
// const { registerUser, loginUser, logoutUser } = require('../controllers/authController');

// router.post('/register', registerUser);
// router.post('/login', loginUser);
// router.post('/logout', logoutUser);

// module.exports = router;


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
