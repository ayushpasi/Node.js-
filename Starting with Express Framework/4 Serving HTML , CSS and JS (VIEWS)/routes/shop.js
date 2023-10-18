const express= require("express");
const Router= express.Router();
const rootDir= require("../util/path.js");
const path= require("path");
// /shop/
Router.get("/",(req,res,next)=>{
     res.sendFile(path.join(rootDir,"views","shop.html"));
    
});
Router.post("/success",(req,res,next)=>{

     res.sendFile(path.join(rootDir,"views","success.html"));
    
});
Router.get("/contactus",(req,res,next)=>{

     res.sendFile(path.join(rootDir,"views","contact.html"));
    
});
module.exports=Router;