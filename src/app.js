const express = require('express');
 const app = express();
app.use("/",(req,res)=>{
    res.send(" welcome ");
 });

 app.use("/shri",(req,res)=>{
    res.send(" welcome to ");
 });
 app.use("/shu",(req,res)=>{
    res.send(" welcome to server! ");
 });
 app.listen(3000 , ()=>{
    console.log("Server is successfully running at 3000...");
 });
