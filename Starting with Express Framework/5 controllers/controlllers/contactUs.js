const path= require("path");
const rootDir= require("../util/path.js");

exports.contactus=(req,res,next)=>{
 res.sendFile(path.join(rootDir,"views","contact.html"));
   
};

exports.successPage=(req,res,next)=>{
 res.sendFile(path.join(rootDir,"views","success.html"));
   }