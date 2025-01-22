//ไฟล์ที่เขียนควบคุมการทำงานต่างๆ กับ table ใน database travel_tb
// เช่น การเพิ่ม (insert/create) การแก้ไข (update)
// การลบ (delete) การค้นหา ตรวจสอบ ดึง ดู (select/read) และอื่นๆ

const Travel = require('./../models/travel.model.js');
const multer = require('multer');
const path = require('path');

// สร้าง function  เพิ่มข้อมูลลงใน traveller_tb
// exports.createTravel = async (req, res) => {
//     try {
//         const result = await Travel.create(req.body);
//         res.status(201).json({
//             message: 'Travel created successfully',
//             data: result
//         });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };



exports.createTravel = async (req, res) => {
    try {
        //ตัวแปรเก็บข้อมูลที่ส่งมากับข้อมูลรูปภาพที่จะเอาไปบันทึกลงตาราง

        let data = {
            ...req.body,
            travelImage: req.file.path.replace("images\\travel\\", "")
        }

        const result = await Travel.create(data);
        res.status(201).json({
            message: 'Travel created successfully',
            data: result
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



//แก้ไข travel

exports.editTravel = async (req, res) => {
    try {
        const result = await Travel.update(req.body, {where: {travelId: req.params.travelId,

        }
    });
   
        res.status(200).json({
            message: 'Travel Updated successfully',
            data: result
        });

    
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//function delete travel
exports.deleteTravel = async (req, res) => {
    try {
        const result = await Travel.destroy({where: {travelId: req.params.travelId,

        }
    });
   
        res.status(200).json({
            message: 'Travel Deleted successfully',
            data: result
        });

   
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//function ดึงข้อมูลการเดินทางทั้งหมดของนักเดินทางหนึ่งจากตาราง travel_tb
exports.getAllTravel = async (req, res) => {
    try {
        const result = await Travel.findAll({where: {travellerId: req.params.travellerId}});
        if(result){
            res.status(200).json({
                message: 'Travel get data successfully',
                data: result
            });

        }else{
            res.status(404).json({
                message: 'Traveller get data failed',
                data: null
            });

        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//ฟังก์ชันเพื่อการอัปโหลดไฟล์
const storage = multer.diskStorage({
    destination:  (req, file, cb)=> {
        cb(null, 'images/travel');
    },
    filename:  (req, file, cb) =>{
        cb(null, 'travel_' + Math.floor(Math.random() * 100) + Date.now() +  path.extname(file.originalname));
        //        cb(null, 'traveller_' + Math.floor(Math.random() * Date.now() )+  path.extname(file.originalname));

    }
})


exports.uploadTravel = multer({
    storage: storage,
    limits: {
        fileSize: 1000000
    },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/;
        const mimeType = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));

        if(mimeType && extname){
            return cb(null, true);
        }

        cb('Give proper files formate to uploadError: Images Only');
    }
}).single('travelImage');