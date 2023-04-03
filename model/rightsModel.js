const mongoose = require('mongoose')

const RightSchema = new mongoose.Schema({
    
    staff_id:{
        type:'ObjectId',
        ref:'Staff'
    },
       right:{
        type:String,
        unique:true

       },
    },{
        timestamps:true
    });
    console.log("hello1")
    module.exports = mongoose.model('Right',RightSchema)

