const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  image:{type: String},
  name: { type: String, required: true },
  description: { type: String, required: true },
  // instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  price: { type: Number, required: true },
  discount:{ type: Number, default:0},
  duration: { type: Number, required: true },  
  createdAt: { type: Date, default: Date.now },
  bgcolor:{type: String},
  pamalcolor:{type: String},
  textcolor:{type: String},
});

module.exports = mongoose.model('Course', CourseSchema);
