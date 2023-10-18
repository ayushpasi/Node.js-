const express= require("express");
const Router= express.Router();
const rootDir= require("../util/path.js");
const path= require("path");
const contactUsController= require("../controlllers/contactUs.js");
// /shop/
Router.get("/",(req,res,next)=>{
     res.sendFile(path.join(rootDir,"views","shop.html"));
    
});
Router.post("/success",contactUsController.successPage);
Router.get("/contactus",contactUsController.contactus);
module.exports=Router;