const Traveller = require('./../models/traveller.model.js');

//สร้าง function  เพิ่มข้อมูลลงใน traveller_tb
exports.createTraveller = async (req, res) => {
    try {
        const result = await Traveller.create(req.body);
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
        const result = await Traveller.update(req.body, {where: {travellerId: req.params.travellerId,

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


exports.deleteTraveller = async (req, res) => {
    try {
        const result = await Traveller.destroy({where: {travellerId: req.params.travellerId,

        }
    });

        res.status(200).json({
            message: 'Traveller Deleted successfully',
            data: result
        });
    
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
