const express = require("express");
const Router =  express.Router();

//  /admin/add-product
Router.get("/add-product",(req,res,next)=>{
    res.send(`
    <form action='/admin/product' method='POST'>
      <input type='text' name='title' placeholder='name'>
      <input type='text' name='size' placeholder='size'>
      <button type='submit'>ADD</button>
    </form>
  `)});
  
  //  /admin/product
  Router.post("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
});

module.exports=Router;