//ไฟล์นี้ใช้ในการจัดการเส้นทางในการเรียกใช้งาน service/api
const travellerCtrl = require('./../controllers/traveller.controller.js');




//เรียกใช้งาน express module เพื่อสร้าง route สําหรับการเรียกใช้งาน service/api
const express = require('express');
const router = express.Router();

//กำหนดเส้นทางในการเรียกใช้งาน service/api

router.post("/", travellerCtrl.createTraveller);

router.get("/:travellerEmail/:travellerPassword", travellerCtrl.checkloginTraveller);

router.put("/:travellerId", travellerCtrl.editTraveller);

router.delete("/:travellerId", travellerCtrl.deleteTraveller);


module.exports = router;
