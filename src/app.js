const express = require('express');
const connectDb=require("./config/database"); 

 const app = express();
 const User =require("./models/user");
// creating dynamic middleware to get re from postman to add it to database

app.use(express.json());//it convert json data coming from postman to java scrpit object
app.post("/signup", async (req,res)=>{
  
   const user = new User(req.body);

    try{
   await user.save();
   res.send(" user added to database @");
}
catch(err){
   res.status(400).send("unable to add user");
}
});



connectDb().then(()=>{
console.log(" Database Connection Established");
app.listen(3000 , ()=>{
    console.log("Server is successfully running at 3000...");
 });}).catch((err)=>{
    console.error(" cannot connect !");
});


 
