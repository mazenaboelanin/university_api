const Student = require('../models/Student');
const Department = require('../models/Department');
const { Op } = require('sequelize');



// get all students
const getAllStudents = async (req, res)=>{
    try {
        const students = await Student.findAll();
        res.json({msg: "Students Retreived", students});
    } catch (error) {
        res.json({msg: "Error", error});
    }
};

// insert new student
const addStudent = async(req,res)=>{
    const {id,name,dept_name,tot_cred} = req.body;
try {
    const student = await Student.create({id, name, dept_name, tot_cred});
    res.json({msg: "Student Added Succesfully", student});
} catch (error) {
    res.json({msg: "Error", error});
}
};

// update Student name
const updateStudent = async(req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    try {
        const updatedStudent = await Student.update({name},{
            where: {
                id
            }
        });
        // retrieve student by id 
        const studentAfterUpdate = await Student.findAll({
            where: {
                id
            }
        });
        console.log(studentAfterUpdate);
        res.json({msg: "Student Updated Succesfully", updatedStudent, studentAfterUpdate});
    } catch (error) {
        res.json({msg: "Error", error});
    }
};

// delete Student by id
const deleteStudent = async(req,res)=>{
    const {id} = req.body;
    try {
        const deleteStudent = await Student.destroy({
            where:{
                id
            }
        });
        // retrieve student by id 
        const studentAfterDelete = await Student.findAll();
        res.json({msg: "Student Deleted Succesfully", deleteStudent, studentAfterDelete});
    } catch (error) {
        res.json({msg: "Error", error});
    }
};

// get all students that belongs to departments
const getAllStudentsAndDepartments = async (req, res)=>{
    try {
        const students = await Student.findAll({include: Department});
        res.json({msg: "Students Retreived", students: students});
    } catch (error) {
        res.json({msg: "Error", error});
    }
};

// get all students that belongs to departments
const getAllStudentsAndDepartmentsSpecificColumns = async (req, res)=>{
    try {
        const students = await Student.findAll({include: Department});
        let studentArray = []
        students.forEach(student => {
        let studentObject= {id: student.id, name: student.name, dept_name: student.department.dept_name, building:  student.department.building};
        studentArray.push(studentObject)
        });
        console.log(studentArray);
        res.json({msg: "Students Retreived", students: studentArray});
    } catch (error) {
        res.json({msg: "Error", error});
    }
};



module.exports = {
    getAllStudents,
    addStudent,
    updateStudent,
    deleteStudent,
    getAllStudentsAndDepartments,
    getAllStudentsAndDepartmentsSpecificColumns
}