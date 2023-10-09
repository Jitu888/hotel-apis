const router = require("express").Router();
const {get_hotel_by_cityName,add_cities} = require("../controllers/controller");

(()=>{
   requests();
})();


function requests(){
  router.get("/get_hotels_by_cityName",get_hotel_by_cityName)
  router.get("/add",add_cities)
}

module.exports = router