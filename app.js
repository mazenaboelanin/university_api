const express = require('express');
// database
const db = require('./config/database');

// Routes
const classroomRoute = require('./routes/classroomRoute');
const departmentRoute = require('./routes/departmentRoute');
const StudentsRoute = require('./routes/StudentsRoute');
const InstructorRoute = require('./routes/instructorRoute');
const CourseRoute = require('./routes/courseRoutes');

// test db 
db.authenticate()
.then(()=> console.log('database connected..'))
.catch(err => console.log('Error:', err));

const app = express();

app.use(express.json());

// Routes
app.use('/students', StudentsRoute);
app.use('/classrooms', classroomRoute);
app.use('/departments', departmentRoute);
app.use('/instructors', InstructorRoute);
app.use('/courses', CourseRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT} `));