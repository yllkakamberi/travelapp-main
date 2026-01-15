// DB.js
require('dotenv').config();
const { Sequelize } = require('sequelize');
const mysql = require('mysql2/promise');

async function initDatabase() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT || 3306,
        });

        await connection.query(
            `CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`
        );

        await connection.end();
        console.log('✅ Database checked/created');

        const sequelize = new Sequelize(
            process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASSWORD,
            {
                host: process.env.DB_HOST,
                dialect: 'mysql',
                port: process.env.DB_PORT || 3306,
                logging: false,
            }
        );

        await sequelize.authenticate();
        console.log('✅ Sequelize connected to DB successfully');

        return sequelize; 
    } catch (err) {
        console.error('❌ Database connection error:', err.message);
        process.exit(1);
    }
}

module.exports = initDatabase(); 
