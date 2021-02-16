const mongoose = require("mongoose");

var Cent = new mongoose.Schema({
  status:String,
  bedrooms:String,
  seller:String,
  price:String,
  condition:String,
  offers:String,
  closed:String,
  stories:String,
  amenities:String,
  view:String,


});

module.exports = mongoose.model("Estate", Cent);
