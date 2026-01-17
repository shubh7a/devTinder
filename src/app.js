const express = require('express');
 const app = express();

// order of these route matters alot also ROUTER HANDLERS == MIDLLEWARE
 app.use("/",(req,res,next)=>{
   console.log("fetching use");
   // res.send(" welcome to server ");
   next();
 });
app.get(
   "/users" , [
      // 3rd router will be return at postman and also shows an errror interminal
      (req,res,next)=>{
          console.log(" handling 1st router handler ");
          next();
          //res.send(" 1st router handler ");
         //  next();
      },
      (req,res,next)=>{
         console.log(" handling 2nd router handler ");
         next();
        // res.send(" 2nd router handler ");
        
      },
      (req,res,next)=>{
         console.log(" handling 3rd router handler ");
         res.send(" 3rd router handler ");
         
      },
   ]
)



//  app.get("/hello",(req,res)=>{
//     res.send(" welcome to server ");
//  });
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
