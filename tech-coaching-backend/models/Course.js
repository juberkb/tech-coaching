const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },  // Duration in hours or weeks
  createdAt: { type: Date, default: Date.now },
});

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
