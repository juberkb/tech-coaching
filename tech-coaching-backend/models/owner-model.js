const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const ownerSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Can be 'student' or 'instructor' or 'admin'
  products: { type: Array, default: [] },
  contact: {type: Number, required: true, unique: true },
  picture: {type: String },
  gstin:{type: String},
  // role: { type: String, default: 'student' }, 
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('Owners', ownerSchema);
