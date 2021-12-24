const Department = require('../models/Department');
const Student = require('../models/Student');
const { Op } = require('sequelize');


//get all departments 
const getAllDepartments = async (req, res)=>{
    try {
        const departments = await Department.findAll();
        res.json({msg: "Departments Retreived", departments});
    } catch (error) {
        res.json({msg: "Error", error});
    }
    
};

//get specific department 
const getDepartment = async(req, res)=>{
    const departmentName = req.params.departmentName;
    try {
        const department = await Department.findAll({
            where: {
                dept_name : departmentName
            }
        });
        res.json({msg: `Department with name ${departmentName}`, department});
    } catch (error) {
        res.json({msg: "Error", error});
    }

};
//get specfic department using like 
const getDepartmentLike = async(req, res)=>{
    const departmentName = req.params.departmentName;
    try {
        const departments = await Department.findAll({
            where: {
                dept_name : {
                    [Op.like]: `%${departmentName}%`,
                }
            }
        });
        res.json({msg: "Departments ", departments});
    } catch (error) {
        res.json({msg: "Error", error});
    }

};
//get specfic department by building name 
const getDepartmentWithBuilding =  async(req, res)=>{
    const {building} = req.params;

    try {
        const departments = await Department.findAll({
            where: {
                building : building
            }
        });
        res.json({msg: "Departments ", departments});
    } catch (error) {
        res.json({msg: "Error", error});
    }

 
};

// departments budget between 80000.00 and 100000.00
const getDepartmentBudgetBetween8000And100000 = async (req, res)=>{

    try {
        const departments = await Department.findAll({
            where: {
                 budget:{
                    [Op.between]: [80000.00, 100000.00],
                }
                
            },
            order: [
                ['budget', 'ASC']
            ]
        });
        res.json({msg: "Departments ", departments});
    } catch (error) {
        res.json({msg: "Error", error});
    }


};


module.exports = {
    getAllDepartments,
    getDepartment,
    getDepartmentLike,
    getDepartmentWithBuilding,
    getDepartmentBudgetBetween8000And100000
}