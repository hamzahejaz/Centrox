const express = require("express");
const Cent = require("../Modal/cent");

const GetRoutes = {};

GetRoutes.func = async (req, res) => {

    const ptnt = await Cent.find()
  res.json(ptnt)
  };

  GetRoutes.add = async (req, res) => {
   
    console.log("Pateint data is", req.body);
    const estate = new Cent({
        status:req.body.status,
        bedrooms:req.body.bedrooms,
        seller:req.body.seller,
        price:req.body.price,
        condition:req.body.condition,
        offers:req.body.offers,
        closed:req.body.closed,
        stories:req.body.stories,
        amenities:req.body.amenities,
        view:req.body.view,
        
  
    });
    try {
      const saveEstate = await estate.save();
      res.json(saveEstate);
    } catch (error) {
      console.log(error)
      res.json({ message: error });
    }
  };
  module.exports = GetRoutes;