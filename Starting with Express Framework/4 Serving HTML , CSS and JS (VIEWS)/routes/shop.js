const express= require("express");
const Router= express.Router();
const path = require("path");

// /shop/
Router.get("/",(req,res,next)=>{
     res.sendFile(path.join(__dirname,"../","views","shop.html"));
    
});

module.exports=Router;