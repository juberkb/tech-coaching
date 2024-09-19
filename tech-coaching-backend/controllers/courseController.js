const Course = require('../models/Course');

// Get all courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('instructor', 'name');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Add a new course
exports.addCourse = async (req, res) => {
  const { title, description, price, duration, instructor } = req.body;

  try {
    const course = new Course({ title, description, price, duration, instructor });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
