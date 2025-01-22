//ไฟล์นี้ใช้ในการจัดการเส้นทางในการเรียกใช้งาน service/api
//ไฟล์นี้ใช้ในการจัดการเส้นทางในการเรียกใช้งาน service/api
const travelCtrl = require('./../controllers/travel.controller.js');




//เรียกใช้งาน express module เพื่อสร้าง route สําหรับการเรียกใช้งาน service/api
const express = require('express');
const router = express.Router();

//กำหนดเส้นทางในการเรียกใช้งาน service/api

router.post("/", travelCtrl.uploadTravel, travelCtrl.createTravel);

router.get("/:travellerId", travelCtrl.getAllTravel);

router.put("/:travelId", travelCtrl.editTravel);

router.delete("/:travelId", travelCtrl.deleteTravel);


module.exports = router;
