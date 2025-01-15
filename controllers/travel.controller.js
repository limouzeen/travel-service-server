//ไฟล์ที่เขียนควบคุมการทำงานต่างๆ กับ table ใน database travel_tb
// เช่น การเพิ่ม (insert/create) การแก้ไข (update)
// การลบ (delete) การค้นหา ตรวจสอบ ดึง ดู (select/read) และอื่นๆ

const Travel = require('./../models/travel.model.js');

//สร้าง function  เพิ่มข้อมูลลงใน traveller_tb
exports.createTravel = async (req, res) => {
    try {
        const result = await Travel.create(req.body);
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