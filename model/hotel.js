const mongoose = require("mongoose")

const model = new mongoose.Schema({
    
hotelName:{
   type:String,
   required:true
},
type:{
    type:String,
   required:true
},
address:{
    type:String,
    required:true
},
city:{
    type:String,
    required:true
},
photos:{
    type:Array
},
rooms:{
  type:Array
},

cheapestPrice:{
    type:String
},
featured:{
    type:Boolean
}

},{
   timestamps:true
})

model.index({city:1})
const hotels = new mongoose.model("hotel",model);
module.exports = hotels;