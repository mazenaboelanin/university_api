const router = require('express').Router();
const db = require('../config/database');
const { getAllClassRooms, getClassRoom, getAllClassRoomsOrderedByRoomNumberASC, getAllClassRoomsOrderedByRoomNumberDESC, getclassRoomWithBuilding} = require('../controllers/classroomController');
const classroom = require('../models/Classroom');


//get all classrooms
router.get('/', getAllClassRooms);
// get specific classroom
router.get('/room/:roomNumber', getClassRoom);

//get all classrooms order by ASC
router.get('/rooms/ordered/asc', getAllClassRoomsOrderedByRoomNumberASC);

//get all classrooms order by ASC
router.get('/rooms/ordered/desc', getAllClassRoomsOrderedByRoomNumberDESC);


//get specfic classroom by building name 
router.get('/building/:building', getclassRoomWithBuilding);


module.exports = router;
