 const mongoose =require("mongoose");

 const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
    },
    lastName: {
        type: String,
    },
    emaild:{
        type:String,
    },
    password:{
        type:String,
    },
    age:{
        type:Number,
    },
    gender :{
        type:String,
    }
 });

 //mongoose.model( modelname , modelSchema);
 const User= mongoose.model("User",userSchema);

 module.exports=User;