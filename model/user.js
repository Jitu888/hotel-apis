const mongoose = require("mongoose");

const model = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String
    }

})

const profile = new mongoose.model("users",model)
module.exports = profile;