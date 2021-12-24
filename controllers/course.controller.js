const Course = require('../models/Course');
const Department = require('../models/Department');
const { Op } = require('sequelize');


//get all course 
exports.getAllCourses = async (req, res)=>{
    try {
        const courses = await Course.findAll();
        res.json({msg: "courses Retreived", courses});
    } catch (error) {
        res.json({msg: "Error", error});
    }
    
};
