const http = require("http");
const express = require("express");
const bodyParser=require("body-parser");
const app=express();
const adminRouter= require("./routes/admin.js");
const shopRouter=require("./routes/shop.js");
const path = require("path");

app.use(bodyParser.urlencoded({extended:false}));

//static file middleware
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/admin",adminRouter);
app.use(shopRouter);
app.use((req,res,next)=>{
       res.status(404).sendFile(path.join(__dirname,".","views","404.html"));
});
app.listen(4000,()=>{
    console.log("server invoked at http://localhost:4000");
});