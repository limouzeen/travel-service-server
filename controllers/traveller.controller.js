const multer = require('multer');
const Traveller = require('./../models/traveller.model.js');
const path = require('path');
const fs = require('fs');

//สร้าง function  เพิ่มข้อมูลลงใน traveller_tb
// exports.createTraveller = async (req, res) => {
//     try {
//         const result = await Traveller.create(req.body);
//         res.status(201).json({
//             message: 'Traveller created successfully',
//             data: result
//         });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };


exports.createTraveller = async (req, res) => {
    try {
        //ตัวแปรเก็บข้อมูลที่ส่งมากับข้อมูลรูปภาพที่จะเอาไปบันทึกลงตาราง

        let data = {
            ...req.body,
            travellerImage: req.file ? req.file.path.replace("images\\traveller\\", "") : ""
        }

        const result = await Traveller.create(data);
        res.status(201).json({
            message: 'Traveller created successfully',
            data: result
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//function ตรวจสอบการเข้าใช้งานของผู้ใช้กับตาราง traveller_tb
exports.checkloginTraveller = async (req, res) => {
    try {
        const result = await Traveller.findOne({where: {travellerEmail: req.params.travellerEmail, travellerPassword: req.params.travellerPassword}});
        
        if(result){
            res.status(200).json({
                message: 'Traveller login successfully',
                data: result
            });

        }else{
            res.status(404).json({
                message: 'Traveller login failed',
                data: null
            });

        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}

//function แก้ไขข้อมูลตาราง traveller_tb
exports.editTraveller = async (req, res) => {
    try {

        //มีการตรวขสอบก่อนว่ามีไฟล์อัพโหลดมามั้ย
        // case มีไฟล์เก่าอยู่หรือไม่ถ้ามีไฟล์เก่าอยู่ให้ลบไฟล์เก่าออก
        let data = {

            ...req.body,
        }
        if(req.file){
            
            const traveller = await Traveller.findOne({where: {travellerId: req.params.travellerId}});

            if(traveller.travellerImage){
                const oldImage = "images/traveller/" + traveller.travellerImage;
                //ลบไฟล์รูปเก่าทิ้ง
                fs.unlink(oldImage,(err)=>{
                    });
                
        }

            data.travellerImage = req.file.path.replace("images\\traveller\\", "");
        
        }else{
            delete data.travellerImage
        }


        const result = await Traveller.update(data, {where: {travellerId: req.params.travellerId,

        }
    });

        res.status(200).json({
            message: 'Traveller Updated successfully',
            data: result
        });


    
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// exports.deleteTraveller = async (req, res) => {
//     try {
//         const result = await Traveller.destroy({where: {travellerId: req.params.travellerId,

//         }
//     });

//         res.status(200).json({
//             message: 'Traveller Deleted successfully',
//             data: result
//         });
    
        
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }

exports.deleteTraveller = async (req, res) => {
    try {
        // Find the traveller record before deleting
        const traveller = await Traveller.findOne({ where: { travellerId: req.params.travellerId } });

        if (!traveller) {
            return res.status(404).json({ message: "Traveller record not found" });
        }

        // If the traveller record has an image, delete it from the folder
        if (traveller.travellerImage) {
            const imagePath = path.join(__dirname, "..", "images", "traveller", traveller.travellerImage);

            // Check if the file exists before deleting
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath); // Synchronously delete the file
            }
        }

        // Delete the traveller record from the database
        const result = await Traveller.destroy({ where: { travellerId: req.params.travellerId } });

        res.status(200).json({
            message: "Traveller record and associated image deleted successfully",
            data: result
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//ฟังก์ชันเพื่อการอัปโหลดไฟล์
const storage = multer.diskStorage({
    destination:  (req, file, cb)=> {
        cb(null, 'images/traveller');
    },
    filename:  (req, file, cb) =>{
        cb(null, 'traveller_' + Math.floor(Math.random() * 100) + Date.now() +  path.extname(file.originalname));
        //        cb(null, 'traveller_' + Math.floor(Math.random() * Date.now() )+  path.extname(file.originalname));

    }
})


exports.uploadTraveller = multer({
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
}).single('travellerImage');