const { Sequelize, DataTypes} = require('sequelize');

const db = require('../config/database');


const Take = db.define('take', {
    id: {
        type: DataTypes.STRING(5),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    course_id:{
        type:DataTypes.STRING(8)
    },
    sec_id:{
        type:DataTypes.STRING(8)
    },
    semester:{
        type:DataTypes.STRING(6)
    },
    year:{
        type:DataTypes.DECIMAL(4,0)
    },
    grade:{
        type:DataTypes.STRING(2)
    },
});