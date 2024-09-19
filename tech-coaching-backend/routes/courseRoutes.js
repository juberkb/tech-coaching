const express = require('express');
const { getCourses, addCourse } = require('../controllers/courseController');
const router = express.Router();

// Get all courses
router.get('/', getCourses);

// Add a new course (admin/instructor)
router.post('/', addCourse);

module.exports = router;
