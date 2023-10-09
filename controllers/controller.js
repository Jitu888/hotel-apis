const { get_all_cities } = require('../utils/helper')
const cities = require("../model/city")
const hotels = require("../model/hotel")

exports.get_hotel_by_cityName = async (req, res) => {
    const regex = new RegExp(req.query.keyword, 'i');
    const citiesList = await cities.find({ city: regex }).skip(0).limit(100);
    res.send(citiesList)
}

exports.add_cities = async (req, res) => {
    const response = get_all_cities()
    const result = await cities.insertMany(response)
    if (result) {
        res.send("success")

    }

}

exports.add_hotel = async (req, res) => {
   const result =  hotels(req.body).save()
   if(result){
    res.send(result)
   }
}

exports.get_hotelList_by_cityName = async (req, res) => {
     const result = hotels.find({city:req.query.city})
     if(result){
        res.send(result)
     }
}

exports.get_specific_hotel_by_id = async (req,res)=>{

}










