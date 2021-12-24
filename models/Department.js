const {Sequelize, DataTypes} = require('sequelize');
const db = require('../config/database');
const Student = require('./Student');

const Department = db.define('department', {
    dept_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true
    },
    building: {
        type: DataTypes.STRING(15)
    },
    budget: {
        type: DataTypes.DECIMAL(12,2)
    },
    
}, {
    tableName: 'department'
});

// Association
Department.hasMany(Student,{
    foreignKey: 'dept_name',
    onDelete: 'SET NULL'
});
Student.belongsTo(Department, {foreignKey: 'dept_name'});

module.exports = Department;