const http = require("http");
const express = require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded());
app.use("/add-product",(req,res,next)=>{
    res.send(`
    <form action='/product' method='POST'>
      <input type='text' name='title' placeholder='name'>
      <input type='text' name='size' placeholder='size'>
      <button type='submit'>ADD</button>
    </form>
  `)});
  
  app.post("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
});

app.use("/",(req,res,next)=>{
    res.send("<h1>Home Page<a href='/add-product'>Add product</a></h1>");
});
app.listen(4000,()=>{
    console.log("server invoked at http://localhost:4000");
});