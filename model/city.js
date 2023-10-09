const mongoose = require("mongoose")

const model = mongoose.Schema({
    city:{
        type:String
    }
})
model.index({city:1})

const cities = mongoose.model("citites",model)
module.exports = cities