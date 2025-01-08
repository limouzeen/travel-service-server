const express = require('express'); //เรียกใช้งาน express module เพื่อสร้าง webserver
require('dotenv').config();

const app = express(); //สร้าง webserver
const PORT = process.env.PORT || 3000;



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