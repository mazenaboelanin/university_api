const { Sequelize, DataTypes} = require('sequelize');
const db = require('../config/database');
const Department = require('./Department');

const Course = db.define('Course', {
    course_id: {
        type:  DataTypes.STRING(7),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title : {
        type: DataTypes.STRING(50)
    },
    credits: {
        type: DataTypes.DECIMAL(2,0)
    }
}, 
{
    tableName: 'course'
}
);

// Association
Department.hasMany(Course,{
    foreignKey: 'dept_name',
    onDelete: 'SET NULL'
});
Course.belongsTo(Department, {foreignKey: 'dept_name'});

module.exports = Course;