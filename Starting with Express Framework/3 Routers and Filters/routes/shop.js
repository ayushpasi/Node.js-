const express= require("express");
const Router= express.Router();

// /shop/
Router.get("/",(req,res,next)=>{
    res.send("<h1>Shop Page<a href='/add-product'>Add product</a></h1>");
});

module.exports=Router;