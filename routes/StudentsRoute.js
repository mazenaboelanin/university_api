const router = require('express').Router();
const db = require('../config/database');
const { getAllStudents, addStudent, updateStudent, deleteStudent, getAllStudentsAndDepartments, getAllStudentsAndDepartmentsSpecificColumns} = require('../controllers/studentController');
const Student = require('../models/Student');


router.route('/').get(getAllStudents).post(addStudent);
router.route('/:id').put(updateStudent).delete(deleteStudent);

router.get('/studentsAndDepartments', getAllStudentsAndDepartments);
router.get('/studentsAndDepartmentsSpecificColumns', getAllStudentsAndDepartmentsSpecificColumns);


module.exports = router;