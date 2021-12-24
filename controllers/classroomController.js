const Classroom = require('../models/Classroom');

// get all class rooms
const getAllClassRooms = async (req, res) =>{
    try {
        const classrooms = await Classroom.findAll();
        res.json({msg: "Classrooms Retreived", classrooms});
    } catch (error) {
        res.json({msg: "Error", error});
    }
};

// get specific room
const getClassRoom = async (req, res) =>{
    const {roomNumber} = req.params;
    try {
        const classroom = await Classroom.findAll({
            where: {
                room_number:roomNumber
            }
        });
        res.json({msg: `Classroom with roomNumber ${roomNumber}`, classroom});
    } catch (error) {
        console.log(error);
        res.json({msg: "Error", error});
    }

};

// get all class rooms ordered asc
const getAllClassRoomsOrderedByRoomNumberASC = async (req, res) =>{
    try {
        const classrooms = await Classroom.findAll({
            order: [
                ['room_number', 'ASC'],
            ]
        });
        res.json({msg: "classrooms", classrooms});
    } catch (error) {
        console.log(error);
        res.json({msg: "Error", error});
    }

};

// get all class rooms ordered desc
const getAllClassRoomsOrderedByRoomNumberDESC = async(req, res ) => {
    try {
        const classrooms = await Classroom.findAll({
            order: [
                ['room_number', 'DESC'],
            ]
        });
        res.json({msg: "classrooms", classrooms});
    } catch (error) {
        console.log(error);
        res.json({msg: "Error", error});
    }

};

const  getclassRoomWithBuilding = async(req, res ) => {
    const {building} = req.params;
    try {
        const classrooms = await Classroom.findAll({
            where: {
                building: building
            }
        });
        res.json({msg: "classrooms", classrooms});
    } catch (error) {
        console.log(error);
        res.json({msg: "Error", error});
    }



};

module.exports = {
    getAllClassRooms,
    getClassRoom,
    getAllClassRoomsOrderedByRoomNumberASC,
    getAllClassRoomsOrderedByRoomNumberDESC,
    getclassRoomWithBuilding
}