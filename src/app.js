const express = require('express');
 const app = express();
//logic of DB  call and error handling
app.use("/",(err,req,res,next)=>{
   if(err){
      res.status(500).send("something went wrong");
   }
});
//try catch
// app.get("/getUserData",(req,res)=>{
//    try{
//       throw new Error("nkjfbds");
//       res.send("user data sent");
//    }
//    catch(err){
//       res.status(500).send("some error contact to team");
//    }
// });
app.get("/getUserData",(req,res)=>{
      throw new Error("nkjfbds");
      res.send("user data sent");
   
});

app.use("/",(err,req,res,next)=>{ // this is wildcard mmatch it should always witten to end and if2 para then (req,res) or 3 para then (req,res,next) or 4 para then (err,req,res,next)
   if(err){
      res.status(500).send("something went wrong");
   }
});
const {adminAuth,userAuth}=require("./middlewares/auth.js");

 app.use("/admin",adminAuth);

 app.get("/checkUser",userAuth,(req,res)=>{
   res.send("checking user data");
 });

 app.get("/admin/getAllData",(req,res)=>{
   res.send("All data Sent");
 });

 app.get("/admin/deleteAllData",(req,res)=>{
   res.send("All data deleted");
 });

// order of these route matters alot also ROUTER HANDLERS == MIDLLEWARE
 app.use("/",(req,res,next)=>{
   console.log("fetching user");
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


// REQ.QUERY
 app.get("/hello",(req,res)=>{
   console.log(req.query);
    res.send(" welcome to server ");
 });

//  REQ.PARAMS
app.get("/test/:userId/:name/:password/",(req,res)=>{
   console.log(req.params);
    res.send(" welcome to new server ");
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
