const mongoose = require("mongoose");

//Schema

const Employee = mongoose.Schema(
    {
    name:{
        type:String,
        required : true
    },
    email:{
        type:String,
        required : true
    },
    address:{
        type:String,
        required : true
    }
});
module.exports = mongoose.model('Persons',Employee);