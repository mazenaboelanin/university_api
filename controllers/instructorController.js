const Instructor = require('../models/Instructor');
const Department = require('../models/Department');


const getAllInstructors = async(req,res) => {
    try {
        const instructors = await Instructor.findAll();
        res.json({msg: 'All instructors', instructors});
    } catch (error) {
        res.json({msg: 'Error', error});
    }
};

const getInstuctor = async(req,res) => {
    const {id} = req.params;
    try {
        const instructor = await Instructor.findAll({
            where: {
                id
            }
        });
        res.json({msg: 'All instructors', instructor});
    } catch (error) {
        res.json({msg: 'Error', error});
    }
};

// get all instructors and their departments

const getAllInstructorsAndDepartments = async(req,res)=>{

    try {
        const instructors = await Instructor.findAll({include:Department});
        res.json({msg: 'All instructors', instructors});
    } catch (error) {
        res.json({msg: 'Error', error});
    }


};
// get all instructors and their departments specific columns
const getAllInstructorsAndDepartmentsSpecificColumns = async(req,res)=>{
    try {
        const instructors = await Instructor.findAll({include:Department});

        let instructorsArray = []
        instructors.forEach(instructor => {
            let instuctorObject = {id: instructor.id, name: instructor.name, dept_name: instructor.department.dept_name, building:instructor.department.building};
            instructorsArray.push(instuctorObject);
        });
        res.json({msg: 'All instructors', instructors: instructorsArray});
    } catch (error) {
        res.json({msg: 'Error', error});
    }


};


module.exports = {
    getAllInstructors, 
    getInstuctor,
    getAllInstructorsAndDepartments,
    getAllInstructorsAndDepartmentsSpecificColumns
}