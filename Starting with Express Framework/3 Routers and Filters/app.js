const http = require("http");
const express = require("express");
const bodyParser=require("body-parser");
const app=express();
const adminRouter= require("./routes/admin.js");
const shopRouter=require("./routes/shop.js");
app.use(bodyParser.urlencoded());

//routes
app.use("/admin",adminRouter);
app.use("/shop",shopRouter);
app.use((req,res,next)=>{
       res.status(404).send("<h1>Page Not found");
});
app.listen(4000,()=>{
    console.log("server invoked at http://localhost:4000");
});