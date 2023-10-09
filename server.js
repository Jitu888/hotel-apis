const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/route");


(()=>{
    body_Parser();
    db_Config();
    route_Confiq();
})();



function db_Config(){
    try{
        const db =  mongoose.connect("mongodb+srv://jitu:1999@cluster0.0lsnx.mongodb.net/hotel?retryWrites=true&w=majority");
        if(db){
            console.log("db connected")
        }
    }
    catch(err){
        console.log(err)
    }
  
}

function route_Confiq(){
  app.use("/",routes)
}

function body_Parser(){
 app.use(cors())
 app.use(express.json())
}

module.exports = app