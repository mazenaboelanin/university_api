const {Sequelize, DataTypes} = require('sequelize');
//const Sequelize = require('sequelize');
const db = require('../config/database');
const Department = require('./Department');

const Student = db.define('Student', {
    id: {
        type: DataTypes.STRING(5),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    dept_name:{
        type: DataTypes.STRING(20),
    },
    tot_cred: {
        type: DataTypes.DECIMAL(3,0)
    },

}, {
    tableName: 'student'
});


module.exports = Student;