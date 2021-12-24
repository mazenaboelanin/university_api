const router = require('express').Router();
const db = require('../config/database');
const { getAllStudents, addStudent, updateStudent, deleteStudent, getAllStudentsAndDepartments, getAllStudentsAndDepartmentsSpecificColumns} = require('../controllers/studentController');
const Student = require('../models/Student');



router.get('/',getAllStudents);
router.post('/addStudent',addStudent);
router.put('/updateStudent/:id',updateStudent);
router.delete('/deleteStudent',deleteStudent);
router.get('/studentsAndDepartments', getAllStudentsAndDepartments);
router.get('/studentsAndDepartmentsSpecificColumns', getAllStudentsAndDepartmentsSpecificColumns);


module.exports = router;