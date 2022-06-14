const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const url = process.env.ATLAS_URI;
mongoose.connect(url);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongodb is connected successfully')
})


const teacherRouter = require('./routes/teachers');
const studentRouter = require('./routes/students');


app.use('/teacher', teacherRouter);
app.use('/student', studentRouter);



const port = process.env.PORT || 5000;
app.listen(port,() => {
    console.log(` The server is running on : ${port}`)
})

