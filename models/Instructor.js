const {Sequelize, DataTypes} = require('sequelize');
const db = require('../config/database');
const Department = require('./Department');

const Instructor = db.define('Instructor', {
    id:{
        type: DataTypes.STRING('5'),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,

    },
    name: {
        type: DataTypes.STRING('20'),
        allowNull: false,
    },
    dept_name: {
        type: DataTypes.STRING('20'),
    },
    salary: {
        type: DataTypes.DECIMAL(8,2),
    },


}, {
    tableName: 'instructor'
});
// Associations
Department.hasMany(Instructor, {
    foreignKey: 'dept_name' ,
     onDelete: 'SET NULL'
    });

Instructor.belongsTo(Department, {foreignKey: 'dept_name'});


module.exports = Instructor;