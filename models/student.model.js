const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true
    },
    standard:{
        type:Number,
        required: true,
        trim: true
    },
    rollNo:{
        type:Number,
        required: true,
        trim: true
    }
    

}, {timestamps: true});

module.exports = mongoose.model('Student', studentSchema);