const express = require("express");
const Router =  express.Router();
const path=require("path");
//  /admin/add-product
Router.get("/add-product",(req,res,next)=>{
  res.sendFile(path.join(__dirname,"../","views","add-product.html"));
    });
  
  //  /admin/product
  Router.post("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
});

module.exports=Router;