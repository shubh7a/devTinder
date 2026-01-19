const mongoose=require("mongoose");

const connectDb = async ()=>{
    await mongoose.connect("mongodb+srv://ss4526995_db_user:Cuc1WY5QWMFITsNn@cluster0.loahn23.mongodb.net/devTinder");
};

module.exports= connectDb;
