//ไฟล์ที่ทำงานหรือแมปกับ table ใน database travel_tb
const Sequelize = require('sequelize');
const sequelize = require('./../db/db.js');


//สร้าง model เพื่อ Map กับตารางใน db
const Travel = sequelize.define('travel_tb', {
    travelId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: "travelId"
    },
    travelPlace: {
        type: Sequelize.STRING(200),
        allowNull: false,
        field: "travelPlace"
    },
    travelStartDate: {
        type: Sequelize.STRING(30),
        allowNull: false,
        field: "travelStartDate"
    },
    travelEndDate: {
        type: Sequelize.STRING(30),
        allowNull: false,
        field: "travelEndDate"
    },
    travelCostTotal: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        field: "travelCostTotal"
    },
    travellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "travellerId"
    },travelImage: {
        type: Sequelize.STRING(150),
        allowNull: false,
        field: "travelImage"
    }
},
{
    tableName: "travel_tb",
    timestamps: false,
    freezeTableName: true,
});

module.exports = Travel;