const {Sequelize, DataTypes} = require('sequelize');
const db = require('../config/database');

const Classroom = db.define('classroom', {
    building: {
        type: DataTypes.STRING(15),
        allowNull: false,
        primaryKey: true
    },
    room_number: {
        type: DataTypes.STRING(7),
        allowNull: false,
        primaryKey: true
    },
    capacity: {
        type: DataTypes.DECIMAL(4,0)
    }
}, {
    tableName: 'classroom'
});

module.exports = Classroom;