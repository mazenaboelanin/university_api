const { Sequelize, DataTypes} = require('sequelize');

const db = require('../config/database');

const Advisor = db.define('advisor', {
    s_id:{
        type: DataTypes.STRING(5),
        allowNull: false,
        primaryKey: true
    },
    i_id:{
        type:DataTypes.STRING(5),
    }
});