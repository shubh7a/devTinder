const express = require('express');
const connectDb=require("./config/database"); 

 const app = express();
 const User =require("./models/user");
// creating a API to user data into database to create user
app.post("/signup", async (req,res)=>{
  
   const user = new User({ 
      firstName:"Shubham",
      lastName:"Singh",
      emaild:"shubh@gmail.com",
    password:"Shubh@123",
    age:23,
    gender :"Male",});

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


 
