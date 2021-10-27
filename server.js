require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

const app = express();
const studentRouter = require('./routes/students.routes')
app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect('mongodb://localhost:27017/agami');

mongoose.connection.once('open', () =>{
    console.log("connected to db...")
});

//routing
app.use('/student', studentRouter);
//listning
app.listen(port, () =>{
    console.log(`app is lisning on port ${port}`)
})