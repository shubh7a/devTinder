const express = require('express');
 const app = express();

// order of these route matters alot

 app.get("/hello",(req,res)=>{
    res.send(" welcome to server ");
 });
//  app.get("/ab?c",(req,res)=>{
//     res.send(" ? => jiske aage laga hota h wo expresion/letter optional hota ");
//  });

// app.get("/ab+c",(req,res)=>{
//     res.send(" + => jiske aage laga hota h wo expresion/letter multple time likh skte hota");
//  });

// app.get("/ab*c",(req,res)=>{
//     res.send(" * => jiske aage laga hota h wo expresion/lette kuch bhi likh skte hota");
//  });

// app.get("/a/",(req,res)=>{
//     res.send(" bs 'a ' hona chaihiye " );
//  });

// app.get("/.*shubh$/",(req,res)=>{
//     res.send(" should conatin shubh in adreess ");


 app.post("/hello",(req,res)=>{
    res.send(" welcome to ");
 });
 app.delete("/hello",(req,res)=>{
    res.send(" welcome ");
 });

 app.listen(3000 , ()=>{
    console.log("Server is successfully running at 3000...");
 });
