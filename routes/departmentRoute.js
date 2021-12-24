const router = require('express').Router();
const db = require('../config/database');
const { getAllDepartments, getDepartment, getDepartmentLike, getDepartmentWithBuilding, getDepartmentBudgetBetween8000And100000} = require('../controllers/departmentController');
const department = require('../models/Department');

// get all departments 

router.get('/', getAllDepartments);

//get specfic department
router.get('/:departmentName', getDepartment);

//get specfic department using like 
router.get('/like/:departmentName', getDepartmentLike);

//get specfic department by building name 
router.get('/building/:building', getDepartmentWithBuilding);

// departments budget between 80000.00 and 100000.00
router.get('/department/budget', getDepartmentBudgetBetween8000And100000);


module.exports = router;