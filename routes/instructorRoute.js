const router = require('express').Router();
const db = require('../config/database');
const { getAllInstructors, getInstuctor, getAllInstructorsAndDepartments,getAllInstructorsAndDepartmentsSpecificColumns } = require('../controllers/instructorController');



// get all instructors
router.get('/', getAllInstructors);
// get specific instructor by id
router.get('/:id', getInstuctor);
// get all instructors and their departments
router.get('/instructorsAndDepartments', getAllInstructorsAndDepartments);
// get all instuctors and their dpeartments specific columns
router.get('/instructorsAndDepartmentsSpecificColumns', getAllInstructorsAndDepartmentsSpecificColumns);


module.exports = router;