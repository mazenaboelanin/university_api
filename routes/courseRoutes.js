const router = require('express').Router();
const db = require('../config/database');
const { getAllCourses } = require('../controllers/course.controller');



//get all courses
router.get('/', getAllCourses);



module.exports = router;
