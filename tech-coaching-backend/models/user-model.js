const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: { type: Array, default: [] },
  // Can be 'student' or 'instructor' or 'admin'
  // isadmin: { Boolean },
  order: { type: Array, default: [] },
  // contact: {type: Number, unique: true, required: true },
  picture: {type: String }
  // role: { type: String, default: 'student' }, 
});


module.exports = mongoose.model('Users', UserSchema);
