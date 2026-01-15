const { DataTypes } = require('sequelize');
const sequelize = require('../DB'); 

const Log = sequelize.define(
    'Log',
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        action: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        details: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        tableName: 'logs',
        timestamps: true,
    }
);

module.exports = Log;
