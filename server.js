const express = require('express'); //เรียกใช้งาน express module เพื่อสร้าง webserver
const bodyParse = require('body-parser');
const cors = require('cors');
const travellerRoute = require('./routes/traveller.route.js');
const travelRoute = require('./routes/travel.route.js');
require('dotenv').config();

const app = express(); //สร้าง webserver
const PORT = process.env.PORT || 5000;


//ใช้ middle ware ในการส่งและรับข้อมูลจาก client/user
app.use(bodyParse.json()); // จัดการข้อมูลที่เป็น json
app.use(cors()); //จัดการในการเรียกใช้งานข้าม domain
app.use('/traveller', travellerRoute); //เวลาเรียกใช้งานให้เรียก /traveller ก่อน
app.use('/travel', travelRoute);



//เทสการเรียกใช้งาน webserver จาก client/user หรือระบบอื่นๆ
app.get('/', (req, res) => {
    res.json({
        message: 'Hello from amarat ^O^ server!'
    });
});



// สร้างช่องทางในการติดต่อ webserver นี้จาก client/user

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});

