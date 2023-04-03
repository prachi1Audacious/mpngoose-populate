const mongoose = require('mongoose')

const staffSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String}
    },
    {
        timestamps:true
    });

    console.log("hello");

    module.exports = mongoose.model('Staff',staffSchema)


   