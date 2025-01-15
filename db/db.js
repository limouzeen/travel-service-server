//ไฟล์ที่ใช้ในการติดต่อกับ Database
const Sequelize  = require('sequelize');
// call .env file
require('dotenv').config();




// create instance with db by using sequelize
const sequelize = new Sequelize(process.env.DB_NAME,
     process.env.DB_USER, 
     process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    
});

//เชื่อมต่อ db

sequelize.sync().then(() => {
    console.log('Database connection has been successfully established');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;